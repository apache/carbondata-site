import org.slf4j.{Logger, LoggerFactory}
import services.{ConfServiceImpl, FileServiceImpl, DataServiceImpl}

object WebsiteLauncher  {
  def main(args: Array[String]):Unit= {
    val logger: Logger = LoggerFactory.getLogger("FileOperationMain")

    val fileObject: MDFileConverter = new MDFileConverter(new FileServiceImpl,new ConfServiceImpl,new DataServiceImpl)

    val status: String = fileObject.convertToHtml()
    logger.info(s"File Conversion to html : $status")
  }
}
