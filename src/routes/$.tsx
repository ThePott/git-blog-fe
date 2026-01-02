import GithubPathError from "@/features/routeComponents/githubPath/error/GithubPathError"
import GithubPathPage from "@/features/routeComponents/githubPath/page/GithubPathPage"
import GithubPathSkeleton from "@/features/routeComponents/githubPath/skeleton/GithubPathSkeleton"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/$")({
    component: GithubPathPage,
    errorComponent: ({ error, reset }) => GithubPathError({ error, reset }),
    pendingComponent: GithubPathSkeleton,
    // loader: ({ params }) => {},
})
