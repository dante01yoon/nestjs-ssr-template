import { Injectable, NestMiddleware } from "@nestjs/common";
import { FastifyReply, FastifyRequest } from "fastify";

@Injectable()
export class RenderMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: () => void) {
    console.log('render middleware')
    // @ts-expect-error
    res.render = () => {}; 
    next();
  }
}