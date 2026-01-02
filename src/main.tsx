import ReactDOM from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import queryClient from "./shared/config/queryClient"
import "./index.css"
import DefaultError from "./shared/components/error/DefaultError"
import DefaultNotFound from "./shared/components/error/DefaultNotFound"

const router = createRouter({
    routeTree,
    defaultPendingMs: 0,
    context: { queryClient },
    defaultErrorComponent: ({ error, reset }) => DefaultError({ error, reset }),
    defaultNotFoundComponent: DefaultNotFound,
})

export type RouterContext = {
    queryClient: QueryClient
}

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>,
    )
}
