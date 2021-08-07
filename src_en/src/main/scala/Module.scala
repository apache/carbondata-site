import com.google.inject.AbstractModule
import services.{ConfServiceImpl, FileService, FileServiceImpl, DataServiceImpl, ConfService, DataService}

class Module extends AbstractModule {
  override def configure(): Unit = {
    bind(classOf[FileService]).to(classOf[FileServiceImpl])
    bind(classOf[ConfService]).to(classOf[ConfServiceImpl])
    bind(classOf[DataService]).to(classOf[DataServiceImpl])
  }
}
