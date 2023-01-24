import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";

export const render = async (url: string | Partial<Location>, res) => {
    let didError = false;
    const data = await createServerData(url); 
    
    const stream = renderToPipeableStream(
    <StaticRouter location={url}>
        <App/>
    </StaticRouter>,  {
        onShellReady() {
            res.statusCode = didError ? 500 : 200; 
            res.setHeader("Content-type", "text/html");
            stream.pipe(res);
        },
        onError(x) {
            didError = true;
            console.error(x);
        }
    });
    setTimeout(() => stream.abort(), 5_000)   
}


export const createServerData = (url: string | Partial<Location>) => {
    
}