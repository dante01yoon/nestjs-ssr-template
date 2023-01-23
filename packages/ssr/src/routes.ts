import { FC } from "react";
export const PagePathsWithComponents = import.meta.glob("./pages/*.tsx", {eager: true});

type Route = {
    name: string;
    path: string;
    component: FC
}

const routes: Route[] = PagePathsWithComponents.map((path: string) => {
    const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1];
    return {
        name,
        path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
        component: PagePathsWithComponents[path].default,
    }
});

export const routesMap = routes.reduce((acc,cur) => {
    acc.set(cur.path, cur);
    return acc;
}, new Map<string,Route>()) 