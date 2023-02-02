import { Route, Routes } from "react-router-dom"
import { routesMap } from "./routes"

export const App = () => {
    console.log("rotuesMap: ", routesMap)
    return(
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>my App</title>
            </head>
            <body>
                <Routes>
                    {
                        Array.from(routesMap.values()).map(({name, path, component: Element}) => {
                            return <Route key={name} path={path} element={<Element/>}/>
                        })
                    }
                </Routes>
            </body>
        </html>
        
    )
}

