import java.io.File
import java.nio.file.{Files, Paths}

import org.slf4j.{Logger, LoggerFactory}
import services.{ConfServiceImpl, DataServiceImpl, FileServiceImpl}

object WebsiteLauncher {
  def main(args: Array[String]): Unit = {
    val logger: Logger = LoggerFactory.getLogger("FileOperationMain")

    val conf = new ConfServiceImpl

    val mdFileLocation = conf.readString("mdFileLocation")

    deleteRecursively(new File(mdFileLocation))

    val file = init(conf.readString("mdFileLocation"))

    val dirStatus = file.mkdir()

    val fileObject: MDFileConverter = new MDFileConverter(new FileServiceImpl, new ConfServiceImpl, new DataServiceImpl)

    val status: String = fileObject.convertToHtml(dirStatus)
    logger.info(s"File Conversion to html : $status")
  }

  private def init(path: String): File = {
    new File(path)
  }

  def deleteRecursively(file: File): Unit = {
    if (file.isDirectory)
      file.listFiles.foreach(deleteRecursively)
    if (file.exists && !file.delete)
      throw new Exception(s"Unable to delete ${file.getAbsolutePath}")
  }

}
