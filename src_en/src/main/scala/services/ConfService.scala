package services

trait ConfService {

  def readString(key: String): String

  def readListOfString(key: String): List[String]

}
