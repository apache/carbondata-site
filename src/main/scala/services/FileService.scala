package services

trait FileService {
  def writeToFile(path: String, data: String): Boolean

  def readFromFile(path: String): String
}
