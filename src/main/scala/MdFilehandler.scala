import scala.util.matching.Regex
import org.apache.http.HttpResponse
import org.apache.http.client.methods.HttpPost
import org.apache.http.impl.client.DefaultHttpClient
import org.apache.http.util.EntityUtils
import org.slf4j.LoggerFactory

/**
  * Created by pallavi on 4/4/17.
  */
class MdFilehandler {

  val logger = LoggerFactory.getLogger(classOf[MdFilehandler])

  def ConvertMdExtension(input: String): String = {
    val modifyContentPattern = new Regex("id=\"user-content-")
    val modifyMdPattern = new Regex(".md")
    val modifyImagePattern=new Regex("<img src=\"../docs")
    val contentAfterRemovingUserContent: String = modifyContentPattern replaceAllIn(input, "id=\"")
    val contentAfterReplacingId: String = modifyMdPattern replaceAllIn(contentAfterRemovingUserContent, ".html")
    val contentAfterReplacingImage: String = modifyImagePattern replaceAllIn(contentAfterReplacingId, "<img src=\"https://github.com/apache/incubator-carbondata/blob/master/docs")
    contentAfterReplacingImage
  }

  def getFileContent(data: String): Option[String] = {
    val httpClient = new DefaultHttpClient()
    val httpRequest: HttpPost = new HttpPost("https://api.github.com/markdown/raw");
    httpRequest.setHeader("Content-type", "text/plain")

    import org.apache.http.entity.StringEntity;
    val test = new StringEntity(data)
    httpRequest.setEntity(test)
    val httpResponse: HttpResponse = httpClient.execute(httpRequest)
    val responseBody = EntityUtils.toString(httpResponse.getEntity())
    logger.info(s"status : {${httpResponse.getStatusLine.toString.contains("OK")}}")
    // println("--------->" + responseBody.toString)
    if(httpResponse.getStatusLine.toString.contains("OK"))
      Some(responseBody.toString)
    else {
      logger.error(s"Fetching file fails {${httpResponse.getStatusLine}}")
      None
    }

  }

}
