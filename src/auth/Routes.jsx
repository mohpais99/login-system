import { SignIn, SignUp } from "./views";

const authRoutes = [
    {
        path: "/sign-in",
        name: "Sign In",
        component: SignIn,
        layout: "/auth"
    },
    {
        path: "/sign-up",
        name: "Sign Up",
        component: SignUp,
        layout: "/auth"
    }
]

export default authRoutes;