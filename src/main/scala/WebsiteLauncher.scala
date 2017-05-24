import java.io.File

import org.slf4j.{Logger, LoggerFactory}
import services.{ConfServiceImpl, DataServiceImpl, FileServiceImpl}

object WebsiteLauncher {
  def main(args: Array[String]): Unit = {
    val logger: Logger = LoggerFactory.getLogger("FileOperationMain")

    val conf = new ConfServiceImpl

    val file = init(conf.readString("mdFileLocation"))

    val dirStatus = file.mkdir()

    val fileObject: MDFileConverter = new MDFileConverter(new FileServiceImpl, new ConfServiceImpl, new DataServiceImpl)

    val status: String = fileObject.convertToHtml(dirStatus)
    logger.info(s"File Conversion to html : $status")
  }

  private def init(path: String): File = {
    new File(path)
  }

}
