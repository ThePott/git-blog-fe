import useGithubQuery from "@/features/github/useGithubQuery"
import { Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const RootLayout = () => {
    useGithubQuery()
    return (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    )
}

export default RootLayout
