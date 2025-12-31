import useGithubPath from "./_useGithubPath"
import GithubPathSkeleton from "./skeleton/GithubPathSkeleton"

const GithubPathPage = () => {
    const { path, status } = useGithubPath()

    if (status === "isPending") return <GithubPathSkeleton />

    return <div>{path}</div>
}

export default GithubPathPage
