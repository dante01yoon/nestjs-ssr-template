import { Route, Routes } from "react-router-dom"
import { routesMap } from "./routes"

export const App = () => {
    return(
        <html>
            <head></head>
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

