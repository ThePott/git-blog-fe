import { useParams } from "@tanstack/react-router"

const GithubPathPage = () => {
    const params = useParams({ from: "/$githubPath" })
    const githubPath = params.githubPath
    return <div>{githubPath}</div>
}

export default GithubPathPage
