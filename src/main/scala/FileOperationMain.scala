import org.slf4j.LoggerFactory

class FileOperationMain

object FileOperationMain {
  def main(args: Array[String]) {
    val logger = LoggerFactory.getLogger(classOf[FileOperationMain])
    val fileObject=new FileModification
    val status =fileObject.convertToHtml()
    logger.info(s"File Conversion to html : $status")
  }
}

