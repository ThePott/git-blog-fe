import LandingPage from "@/features/routeComponents/landing/LandingPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
    component: LandingPage,
})
