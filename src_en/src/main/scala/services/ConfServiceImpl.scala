package services

import com.typesafe.config.ConfigFactory
import org.slf4j.{Logger, LoggerFactory}

import scala.collection.JavaConverters._

class ConfServiceImpl extends ConfService {
  val logger: Logger = LoggerFactory.getLogger(classOf[ConfServiceImpl])

  /**
    * Reads a filename from application.conf file
    *
    * @param key key in conf file having String
    * @return string
    */
  def readString(key: String): String = {
    ConfigFactory.load().getString(key)
  }

  /**
    * Reads list of filename from application.conf file
    *
    * @param key key in conf file having Array of String
    * @return list of string
    */
  def readListOfString(key: String): List[String] = {
    val listOfFiles: List[String] = ConfigFactory.load().getStringList(key).asScala.toList
    logger.info(s"List of files to be processed : $listOfFiles")
    listOfFiles
  }
}
