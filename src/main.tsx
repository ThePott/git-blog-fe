import { createRoot } from "react-dom/client"
import "./index.css"
import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "./shared/config/queryClient"
const LandingPage = lazy(() => import("./pages/landing/LandingPage"))

const routeArray = [
    {
        path: "/",
        element: <LandingPage />,
        fallback: <p>여기에 스켈레톤을 넣어야 합니다</p>,
    },
]

const suspendedRouteArray = routeArray.map((route) => ({
    path: route.path,
    element: <Suspense fallback={route.fallback}>{route.element}</Suspense>,
}))

const router = createBrowserRouter(suspendedRouteArray)

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>,
)
