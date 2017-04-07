import java.io.{File, PrintWriter}

import com.typesafe.config.ConfigFactory
import org.apache.http.HttpResponse
import org.apache.http.client.methods.HttpPost
import org.apache.http.impl.client.DefaultHttpClient
import org.apache.http.util.EntityUtils
import org.slf4j.LoggerFactory

import scala.util.matching.Regex

/**
  * Created by pallavi on 4/4/17.
  */
class MdFilehandler {

  val logger = LoggerFactory.getLogger(classOf[MdFilehandler])

  /**
    * converts .md extension to .html extension
    * changes location of image from local to git repository
    *
    * @param input
    * @return contents of file
    */
  def ConvertMdExtension(input: String): String = {
    val modifyContentPattern = new Regex("id=\"user-content-")
    val modifyMdPattern = new Regex(".md")
    val modifyImagePattern = new Regex("<img src=\"../docs")
    val modifyHttpsFileLink ="""(<a href=\"https)://([a-zA-Z0-9-/.]+)(\")""".r
    val modifyHttpFileLink ="""(<a href=\"http)://([a-zA-Z0-9-/.]+)(\")""".r
    val contentAfterRemovingUserContent: String = modifyContentPattern replaceAllIn(input, "id=\"")
    val contentAfterReplacingId: String = modifyMdPattern replaceAllIn(contentAfterRemovingUserContent, ".html")
    val contentAfterReplacingImage: String = modifyImagePattern replaceAllIn(contentAfterReplacingId, "<img src=\"https://github.com/apache/incubator-carbondata/blob/master/docs")
    val contentAfterReplacingHttpsFileLink: String = modifyHttpsFileLink replaceAllIn(contentAfterReplacingImage, "$1://$2$3 target=_blank")
    val contentAfterReplacingFileLink: String = modifyHttpFileLink replaceAllIn(contentAfterReplacingHttpsFileLink, "$1://$2$3 target=_blank")
    contentAfterReplacingFileLink
  }

  def ConvertReadMeExtension(): String = {
    val location = ConfigFactory.load().getString("outputFileLocation")
    val outputFileExtension = ".html"
    val modifyMdPattern = new Regex("(README)(.html)")
    val fileURLContent = scala.io.Source.fromFile("src/main/webapp/installation-guide.html").mkString
    val writer = new PrintWriter(new File(location + "installation-guide" + outputFileExtension))
    val fileContent = modifyMdPattern replaceAllIn(fileURLContent, "$1.md")
    writer.write(fileContent)
    writer.close()
    fileContent
  }

  /**
    * gets content of the file through rest call
    *
    * @param data file Url
    * @return contents of the file in responseBody if found else None is returned
    */
  def getFileContent(data: String): Option[String] = {
    val httpClient = new DefaultHttpClient()
    val httpRequest: HttpPost = new HttpPost(ConfigFactory.load().getString("mdLink"));
    httpRequest.setHeader("Content-type", "text/plain")

    import org.apache.http.entity.StringEntity;
    val test = new StringEntity(data)
    httpRequest.setEntity(test)
    val httpResponse: HttpResponse = httpClient.execute(httpRequest)
    val responseBody = EntityUtils.toString(httpResponse.getEntity())
    logger.info(s"status : {${httpResponse.getStatusLine.toString.contains("OK")}}")
    if (httpResponse.getStatusLine.toString.contains("OK"))
      Some(responseBody.toString)
    else {
      logger.error(s"Fetching file fails {${httpResponse.getStatusLine}}")
      None
    }

  }

}

