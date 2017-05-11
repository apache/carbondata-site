import com.google.inject.Inject
import org.slf4j.{Logger, LoggerFactory}
import services.{ConfService, DataService, FileService}

class MDFileConverter @Inject()(fileService: FileService, confService: ConfService, dataService: DataService) {
  val logger: Logger = LoggerFactory.getLogger(classOf[MDFileConverter])
  val url: String = confService.readString("apiUrl")
  val inputFileExtension: String = ".md"
  val outputFileExtension: String = ".html"
  val headerContent: String = fileService.readFromFile(confService.readString("headerPath"))
  val footerContent: String = fileService.readFromFile(confService.readString("footerPath"))
  val location: String = confService.readString("outputFileLocation")
  val fileReadObject: MdFileHandler = new MdFileHandler(confService, fileService)
  val failMessage: String = "failure"

  /**
    * reads list of files , converts file extension to output file extension and writes file to the location
    *
    * @return status of each file i.e. success or failure
    */
  def convertToHtml(): String = {
    val listOfFiles: List[String] = confService.readListOfString("fileList")
    val statusList: List[String] = listOfFiles.map { file =>
      val fileURLContent: String = dataService.dataOnGetRequest(url + file + inputFileExtension)
      val getFileData: Option[String] = dataService.dataOnPostRequest(fileURLContent)
      getFileData match {
        case Some(data: String) => val fileData = fileReadObject.convertMdExtensions(data)
          logger.info(s"Begin writing [ $file outputFileExtension ] at $location")
          val statusHtmlFile = fileService.writeToFile(location + file + outputFileExtension, headerContent + fileData + footerContent)
          if (statusHtmlFile) {
            logger.info(s"Successfully written [ $file $outputFileExtension ] at $location")
            "Success"
          }
          else {
            failMessage
          }
        case None => logger.error(s"$file Conversion failed !")
          failMessage
      }
    }

    fileReadObject.convertReadMeExtensions()
    logger.info("Restored back the ReadMe.md file extension in Installation Guide")

    if (statusList.contains("Failure")) {
      "[ERROR]: Some Files Failed To Convert"
    }
    else {
      "[SUCCESS]: All files converted successfully."
    }
  }
}

