import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RenderMiddleware } from "./middleware";

@Module({
  imports: [
    
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RenderMiddleware)
      .forRoutes({method: RequestMethod.GET, path: "*"})
  }
}