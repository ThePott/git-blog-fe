import rootLoaderFn from "@/features/routeComponents/rootComponents/loader/rootLoader"
import RootLayout from "@/features/routeComponents/rootComponents/RootLayout"
import type { RouterContext } from "@/main"
import { createRootRouteWithContext } from "@tanstack/react-router"

export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootLayout,
    loader: ({ context: { queryClient } }) => rootLoaderFn(queryClient),
})
