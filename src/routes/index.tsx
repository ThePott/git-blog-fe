import LandingContent from "@/features/landing/LandingContent"
import useGitHubQuery from "@/features/useTestQuery"
import { createFileRoute } from "@tanstack/react-router"

const LandingPage = () => {
    useGitHubQuery()
    return <LandingContent />
}

export const Route = createFileRoute("/")({
    component: LandingPage,
})
