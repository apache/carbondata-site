import java.io.File

import org.slf4j.{Logger, LoggerFactory}
import services.ConfServiceImpl

object CleanUp {
  def main(args: Array[String]): Unit = {

    val logger: Logger = LoggerFactory.getLogger("CleanUp")

    val conf = new ConfServiceImpl

    logger.info("Starting clean up after PDF Generation")
    cleanUp(init(conf.readString("mdFileLocation")))
    logger.info("Successfully completed clean up after PDF Generation")
  }

  private def init(path: String): File = {
    new File(path)
  }

  private def cleanUp(file: File): Boolean = {
    file.listFiles.map(file => file.delete())
    file.delete()
  }
}
