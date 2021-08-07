package services

import java.io.{File, PrintWriter}

import org.slf4j.{Logger, LoggerFactory}

class FileServiceImpl extends FileService {

  val logger: Logger = LoggerFactory.getLogger("FileService")

  /**
    * writes file to the destination provided by path parameter
    *
    * @param path storage location of the file
    * @param data contents of the file
    */
  def writeToFile(path: String, data: String): Boolean = {
    try {
      val writer: PrintWriter = new PrintWriter(new File(path))
      writer.write(data)
      writer.close()
      true
    }
    catch {
      case ex: Exception =>
        logger.error(s"Failed to write the file at path $path, with the following exception $ex")
        false
    }
  }

  def readFromFile(path: String): String = {
    val fileTest: File = new File(path)
    if (fileTest.isFile && fileTest.exists()) {
      scala.io.Source.fromFile(path).mkString
    }
    else {
      logger.error(s"Failed to read file from location $path")
      logger.info("Returning empty content")
      ""
    }
  }

}
