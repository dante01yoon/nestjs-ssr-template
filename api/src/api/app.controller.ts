import { } from "@dante/ssr";
import { Controller, Get, Req, Res } from "@nestjs/common";
import { FastifyReply, FastifyRequest } from "fastify";
import * as fs from "fs";
import { AppService } from "./app.service";
import path = require("path");

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/client/:*.js")
  getMainJs(@Res() res:FastifyReply, @Req() req: FastifyRequest) {
    const clientStaticPath = req.url.split("/client").at(-1);
    const chunk = fs.readFileSync(path.join(__dirname, '..',`node_modules/@dante/ssr/dist/${clientStaticPath}`))
    res.type("text/javascript").send(chunk);
  }

  @Get("*")
  getIndex(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    // @ts-ignore
    console.log("res: ", res.raw.render)
    // @ts-ignore
    return res.raw.render(req.url,res.raw).then(console.log)
  }
}
