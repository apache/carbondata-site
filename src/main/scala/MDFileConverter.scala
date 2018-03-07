import com.google.inject.Inject
import org.slf4j.{Logger, LoggerFactory}
import services.{ConfService, DataService, FileService}

import scala.util.matching.Regex

class MDFileConverter @Inject()(fileService: FileService, confService: ConfService, dataService: DataService) {
  val logger: Logger = LoggerFactory.getLogger(classOf[MDFileConverter])
  val url: String = confService.readString("apiUrl")
  val dataMapFileUrl: String = confService.readString("dataMapFilesUrl")
  val inputFileExtension: String = ".md"
  val outputFileExtension: String = ".html"
  val headerContent: String = fileService.readFromFile(confService.readString("headerPath"))
  val footerContent: String = fileService.readFromFile(confService.readString("footerPath"))
  val location: String = confService.readString("outputFileLocation")
  val fileReadObject: MdFileHandler = new MdFileHandler(confService, fileService)
  val failMessage: String = "failure"
  val imageFileList: List[String] = confService.readListOfString("imagesFilesList")

  /**
    * reads list of files , converts file extension to output file extension and writes file to
    * the location
    *
    * @return status of each file i.e. success or failure
    */
  def convertToHtml(dirStatus: Boolean): String = {
    val listOfFiles: List[String] = confService.readListOfString("fileList")
    val listOfDataMapFiles: List[String] = confService.readListOfString("dataMapFileList")
    val statusList: List[String] = listOfFiles.map { file =>
      convertToHtmlFromPath(url, location + file + outputFileExtension, dirStatus, file)
    }

    val dataFileStatusList: List[String] = listOfDataMapFiles.map { file =>
      convertToHtmlFromPath(dataMapFileUrl, location + file + outputFileExtension, dirStatus, file)
    }

    fileReadObject.convertReadMeExtensions()
    logger.info("Restored back the ReadMe.md file extension in Installation Guide")

    if ((statusList::dataFileStatusList).contains("Failure")) {
      "[ERROR]: Some Files Failed To Convert"
    }
    else {
      "[SUCCESS]: All files converted successfully."
    }
  }

  /**
    * saves the fetched MD Files for generation of PDF
    *
    * @param status
    * @param fileURLContent
    * @param file
    * @return
    */
  private def saveMdFilesForPDF(status: Boolean, fileURLContent: String, file: String): Boolean = {
    if (status) {
      logger.info(s"[SUCCESS] :Saving Markdown : $file for PDF Generation")
      fileService.writeToFile(confService.readString("mdFileLocation") + file + inputFileExtension, fileURLContent)
    } else {
      logger.error(s"[ERROR] : Failed to save Markdown :$file for PDF Generation")
      false
    }
  }
  /**
    * changes git link of image to local image for generation of pdf
    *
    * @param content
    * @return
    */
  private def changeImageLink(content: String): String = {
    val modifyImagePattern: Regex = """(../docs/images/)([a-zA-Z0-9-/._]+)(\?raw=true)""".r
    val contentAfterModifyImageLink: String = modifyImagePattern replaceAllIn(content, "../../src/site/images/"+"$2"+"")
    contentAfterModifyImageLink
  }

  private def convertToHtmlFromPath(urlPath: String,
                                    outputPath: String,
                                    dirStatus: Boolean,
                                    fileName: String): String = {
    val fileURLContent: String = dataService
      .dataOnGetRequest(urlPath + fileName + inputFileExtension)
    val getFileData: Option[String] = dataService.dataOnPostRequest(fileURLContent)
    getFileData match {
      case Some(data: String) => val fileData = fileReadObject.convertMdExtensions(data)
        logger.info(s"Begin writing [ $fileName outputFileExtension ] at $location")
        val statusHtmlFile = fileService
          .writeToFile(outputPath, headerContent + fileData + footerContent)
        saveMdFilesForPDF(dirStatus, fileURLContent, fileName)
        if (imageFileList.contains(fileName)) {
          saveMdFilesForPDF(dirStatus, changeImageLink(fileURLContent), fileName)
        }
        else {
          saveMdFilesForPDF(dirStatus, fileURLContent, fileName)
        }
        if (statusHtmlFile) {
          logger.info(s"Successfully written [ $fileName $outputFileExtension ] at $location")
          "Success"
        }
        else {
          failMessage
        }
      case None => logger.error(s"$fileName Conversion failed !")
        failMessage
    }
  }

}
