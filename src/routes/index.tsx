import LandingError from "@/features/routeComponents/landing/error/LandingError"
import LandingPage from "@/features/routeComponents/landing/page/LandingPage"
import LandingSkeleton from "@/features/routeComponents/landing/skeleton/LandingSkeleton"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
    component: LandingPage,
    errorComponent: LandingError,
    pendingComponent: LandingSkeleton,
})
