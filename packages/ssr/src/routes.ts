import About from "./pages/About";
import Home from "./pages/Home";
import { SSRPage } from "./types";


const routes = [
    {
        name: "about",
        path: "/about",
        component: About,
    },
    {
        name: "home",
        path: "/",
        component: Home, 
    }
]

type Route = {
    name: string;
    path: string;
    component: SSRPage
}


export const routesMap = routes.reduce((acc,cur) => {
    console.log("acc, cur", acc, cur)
    acc.set(cur.path, cur);
    return acc;
}, new Map<string,Route>()) 
 