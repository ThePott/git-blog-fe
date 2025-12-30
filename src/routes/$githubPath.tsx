import useGithubPath from "@/features/githubPath/useGithubPath"
import useTreeStore from "@/shared/store/treeStore"
import { createFileRoute } from "@tanstack/react-router"
import { useEffect } from "react"

const GitHubPathPage = () => {
    const path = useGithubPath()

    return <div>{path}</div>
}

const GitHubPathError = ({ error, reset }: { error: Error; reset: () => void }) => {
    const treeArray = useTreeStore((state) => state.treeArray)
    useEffect(() => {
        reset()
    }, [treeArray])
    return (
        <div>
            <p>cause: {String(error.cause)}</p>
            <p>messsage: {String(error.message)}</p>
            <p>name: {String(error.name)}</p>
        </div>
    )
}

export const Route = createFileRoute("/$githubPath")({
    component: GitHubPathPage,
    errorComponent: ({ error, reset }) => GitHubPathError({ error, reset }),
})
