import { render } from "@dante/ssr/dist/server";
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    render("/")
    return this.appService.getHello();
  }
}
