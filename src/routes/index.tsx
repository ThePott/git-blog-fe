import LandingPage from "@/features/routeComponents/landingComponents/page/LandingPage"
import LandingSkeleton from "@/features/routeComponents/landingComponents/skeleton/LandingSkeleton"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
    component: LandingPage,
    pendingComponent: LandingSkeleton,
})
