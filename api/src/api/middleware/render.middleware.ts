import { render } from "@dante/ssr";
import { Injectable, NestMiddleware } from "@nestjs/common";
import { FastifyReply, FastifyRequest } from "fastify";

@Injectable()
export class RenderMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: () => void) {
    // @ts-expect-error
    res.render = render;
    next();
  }
}