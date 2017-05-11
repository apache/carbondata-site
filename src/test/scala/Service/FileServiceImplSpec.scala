package Service

import java.io.File

import org.scalatest.{FlatSpec, FunSuite}
import services.FileServiceImpl

class FileServiceImplSpec extends FlatSpec {

  val fileServiceObject = new FileServiceImpl
  val fileContent = "some testing on writing a file"
  val fileLocation = "src/test/scala/Service/tempread.txt"
  it should "throw error to write a file on non existing location" in {
    assert(fileServiceObject.writeToFile("", "") === false)
  }
  it should "write a file on temp location " in {
    assert(fileServiceObject.writeToFile("src/test/scala/Service/temp.txt", fileContent) === true)
    new File("src/test/scala/Service/temp.txt").delete()
  }

  it should "throw error to read a file on non existing location" in {
    assert(fileServiceObject.readFromFile("/fake-Location") === "")
  }

  it should "read data from a file correctly" in {
    fileServiceObject.writeToFile(fileLocation, fileContent)
    assert(fileServiceObject.readFromFile(fileLocation) === fileContent)
    new File(fileLocation).delete()
  }
}
