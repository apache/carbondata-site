package services

trait DataService {
  def dataOnPostRequest(fileUrl: String): Option[String]

  def dataOnGetRequest(fileUrl: String): String
}
