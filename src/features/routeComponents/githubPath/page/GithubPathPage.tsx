import { useParams } from "@tanstack/react-router"

const GithubPathPage = () => {
    const { _splat } = useParams({ from: "/$" })
    return <div>{_splat}</div>
}

export default GithubPathPage
