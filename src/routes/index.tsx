import LandingContent from "@/features/landing/LandingContent"
import { createFileRoute } from "@tanstack/react-router"

const LandingPage = () => {
    return <LandingContent />
}

export const Route = createFileRoute("/")({
    component: LandingPage,
})
