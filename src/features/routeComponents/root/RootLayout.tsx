import { Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const RootLayout = () => {
    return (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    )
}

export default RootLayout
