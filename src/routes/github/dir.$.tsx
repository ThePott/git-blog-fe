import githubDirLoaderFn from "@/features/routeComponents/githubComponents/dir/loader/githubDirLoader"
import GithubDirPage from "@/features/routeComponents/githubComponents/dir/page/GithubDirPage"
import GithubDirSkeleton from "@/features/routeComponents/githubComponents/dir/skeleton/GithubDirSkeleton"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/github/dir/$")({
    component: GithubDirPage,
    pendingComponent: GithubDirSkeleton,
    loader: async ({ params: { _splat } }) => await githubDirLoaderFn({ _splat }),
})
