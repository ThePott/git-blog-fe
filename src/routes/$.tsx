import type { Content } from "@/features/github/githubTypes"
import GithubPathError from "@/features/routeComponents/githubPath/error/GithubPathError"
import GithubPathPage from "@/features/routeComponents/githubPath/page/GithubPathPage"
import GithubPathSkeleton from "@/features/routeComponents/githubPath/skeleton/GithubPathSkeleton"
import { headlessInstance } from "@/shared/config/axiosInstance"
import { createFileRoute } from "@tanstack/react-router"

const githubContentLoaderFn = async (_splat: string | undefined) => {
    if (!_splat) throw new Error("---- 주소가 제공되지 않았습니다")
    const response = await headlessInstance.get(`/github/content/${_splat}`)
    const data = response.data as Content[]
    return data
}

export const Route = createFileRoute("/$")({
    component: GithubPathPage,
    errorComponent: ({ error, reset }) => GithubPathError({ error, reset }),
    pendingComponent: GithubPathSkeleton,
    loader: ({ params: { _splat } }) => githubContentLoaderFn(_splat),
})
