import java.io.{File, PrintWriter}
import collection.JavaConverters._

import com.typesafe.config.ConfigFactory
import org.slf4j.LoggerFactory

class FileModification {
  val logger = LoggerFactory.getLogger(classOf[FileModification])
  val url = "https://raw.githubusercontent.com/apache/incubator-carbondata/master/docs/"
  val inputFileExtension = ".md"
  val outputFileExtension = ".html"

  import scala.io.Source

  val headerContent: String = Source.fromFile("src/main/scala/html/header.html").mkString
  val footerContent: String =Source.fromFile("src/main/scala/html/footer.html").mkString

  val location = "src/main/webapp/"
  val fileReadObject = new MdFilehandler

  /**
    * reads list of files , converts file extension to output file extension and writes file to the locaion
    * @return status of each file i.e. success or failure
    */
  def convertToHtml(): String = {
    val listOfFiles = readListOfFiles()
    val statusList = listOfFiles.map { file =>
      val fileURLContent = scala.io.Source.fromURL(url + file + inputFileExtension).mkString
      val getFileData = fileReadObject.getFileContent(fileURLContent)
      getFileData match {
        case Some(data: String) => val fileData = fileReadObject.ConvertMdExtension(data)
          logger.info("Begin writing [" + file + "." + outputFileExtension + "] at " + location)
          writeToFile(location + file + outputFileExtension, fileData)
          logger.info("Successfully written [" + file + "." + outputFileExtension + "] at " + location)
          "Success"
        case None => logger.error(s"$file Conversion failed ")
          "Failure"
      }
    }

    if (statusList.contains("Failure"))
      "Some Files Failed To Convert"
    else
      "All files successfully Converted"
  }

  /**
    * Reads list of files from application.conf file
    * @return list of string
    */
  private def readListOfFiles(): List[String] = {
    val listOfFiles = ConfigFactory.load().getStringList("fileList").asScala.toList
    logger.info(s"List of files : $listOfFiles")
    listOfFiles
  }

  /**
    * writes file to the destination provided by path parameter
    * @param path storage location of the file
    * @param data contents of the file
    */
  private def writeToFile(path: String, data: String): Unit = {
    val writer = new PrintWriter(new File(path))
    writer.write(headerContent + data + footerContent)
    writer.close()
  }
}

