import { useParams } from "@tanstack/react-router"

const GithubPathPage = () => {
    const { _splat } = useParams({ from: "/$" })
    // TODO: 여기에다가 각 글들의 링크를 단다?
    return <div>{_splat}</div>
}

export default GithubPathPage
