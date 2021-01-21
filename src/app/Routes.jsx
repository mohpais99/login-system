import { Feature, Home } from "./views";

const appRoutes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        layout: "app"
    },
    {
        path: "/features",
        name: "Features",
        component: Feature,
        layout: "app"
    }
]

export default appRoutes