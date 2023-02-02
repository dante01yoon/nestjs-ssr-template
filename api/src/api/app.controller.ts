import { Controller, Get, Req, Res } from "@nestjs/common";
import { FastifyReply, FastifyRequest } from "fastify";
import * as fs from "fs";
import { AppService } from "./app.service";
import path = require("path");
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get("/main.js")
  getMainJs(@Res() res:FastifyReply) {
    const stream = fs.readFileSync(path.join(__dirname, '..','node_modules/@dante/ssr/dist/main.js'))
    res.type("text/javascript").send(stream);
  }

  @Get()
  getIndex(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    // @ts-ignore
    console.log("res: ", res.raw.render)
    // @ts-ignore
    return res.raw.render(req.url,res.raw).then(console.log)
  }
}
