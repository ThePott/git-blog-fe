import githubFileLoaderFn from "@/features/routeComponents/githubComponents/file/loader/githubFileLoader"
import GithubFilePage from "@/features/routeComponents/githubComponents/file/page/GithubFilePage"
import GithubFileSkeleton from "@/features/routeComponents/githubComponents/file/skeleton/GithubFileSkeleton"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/file/$")({
    component: GithubFilePage,
    pendingComponent: GithubFileSkeleton,
    loader: async ({ params: { _splat } }) => await githubFileLoaderFn({ _splat }),
})
