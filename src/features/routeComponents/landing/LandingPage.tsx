import useGithubQuery from "@/features/github/useGithubQuery"
import LandingContent from "./content/LandingContent"

const LandingPage = () => {
    useGithubQuery()
    return <LandingContent />
}

export default LandingPage
