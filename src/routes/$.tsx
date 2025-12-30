import { createFileRoute, useParams } from "@tanstack/react-router"

const GitHubPathPage = () => {
    const { _splat } = useParams({ strict: false })
    return <div>{_splat}</div>
}

export const Route = createFileRoute("/$")({
    component: GitHubPathPage,
})
