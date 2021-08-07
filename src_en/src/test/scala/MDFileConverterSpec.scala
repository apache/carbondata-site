
import org.mockito.Mockito.when
import org.scalatest.FlatSpec
import org.scalatest.mockito.MockitoSugar
import org.slf4j.{Logger, LoggerFactory}
import services.{FileServiceImpl, ConfService, DataService}

class MDFileConverterSpec extends FlatSpec with MockitoSugar {
  val logger: Logger = LoggerFactory.getLogger("FileModificationSpec")
  val fileServiceMock: FileServiceImpl = mock[FileServiceImpl]
  val dataServiceMock: DataService = mock[DataService]
  val data = "some data"
  val convertedData = "some converted data"
  val confServiceMock: ConfService = mock[ConfService]
  when(confServiceMock.readString("apiUrl")).thenReturn("fake-url/")
  when(confServiceMock.readString("outputFileLocation")).thenReturn("fake-location/")
  when(confServiceMock.readString("headerPath")).thenReturn("headerUrl")
  when(confServiceMock.readString("footerPath")).thenReturn("footerUrl")
  when(fileServiceMock.readFromFile("headerUrl")).thenReturn("header-content")
  when(fileServiceMock.readFromFile("footerUrl")).thenReturn("footer-content")
  val mdFileHandlerMock: MdFileHandler = mock[MdFileHandler]
  when(confServiceMock.readListOfString("fileList")).thenReturn(List("fake-file"))
  when(dataServiceMock.dataOnGetRequest("fake-url/fake-file.md")).thenReturn(data)
  when(dataServiceMock.dataOnPostRequest(data)).thenReturn(Some(convertedData))
  when(mdFileHandlerMock.convertMdExtensions(convertedData)).thenReturn("data after md conversion")
  when(fileServiceMock.writeToFile("fake-location/fake-file.html", "header-content" + convertedData + "footer-content")).thenReturn(true)
  when(fileServiceMock.writeToFile("fake-mdlocation/fake-file.md", data)).thenReturn(true)
  when(confServiceMock.readListOfString("fileListToRetain")).thenReturn(List("checking-readme-extension"))
  when(fileServiceMock.readFromFile("src/main/webapp/checking-readme-extension.html"))thenReturn("<a href=\"README.html\"></a>")
  when(fileServiceMock.writeToFile("fake-location/checking-readme-extension.html","<a href=\"README.md\"></a>")).thenReturn(true)
  val fileModification = new MDFileConverter(fileServiceMock, confServiceMock, dataServiceMock)

  it should "return successful convert list of files to html files" in {
    assert(fileModification.convertToHtml(true) === "[SUCCESS]: All files converted successfully.")
  }
}
