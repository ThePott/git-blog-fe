import rootLoaderFn from "@/features/routeComponents/root/loader/rootLoader"
import RootLayout from "@/features/routeComponents/root/RootLayout"
import type { RouterContext } from "@/main"
import { createRootRouteWithContext } from "@tanstack/react-router"

export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootLayout,
    loader: ({ context: { queryClient } }) => rootLoaderFn(queryClient),
})
