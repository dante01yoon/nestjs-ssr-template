import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";
import { routesMap } from "./routes";

export const render = async (url: Partial<Location>, res) => {
    let didError = false;
    const data = await createServerData(url); 
    console.log("data : ", data);
    console.log("url: ", url);
    const stream = renderToPipeableStream(
        <StaticRouter location={url}>
            <App/>
        </StaticRouter>, {
            bootstrapModules: ["main.js"],
            onShellReady() {
                res.statusCode = didError ? 500 : 200; 
                res.setHeader("Content-type", "text/html");
                stream.pipe(res);
            },
            onError(x) {
                didError = true;
                console.error(x);
            }
        }
    );
    setTimeout(() => stream.abort(), 5_000)
}


export const createServerData = (url: Partial<Location>) => {
    const route = routesMap.get(url.pathname)
    
    if(route && typeof route.component.getPageProps !== "undefined") {
        // TODO define ReqContext to param;
        return route.component.getPageProps({});
    }
}