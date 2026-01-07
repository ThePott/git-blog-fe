import type { Content } from "@/features/github/githubTypes"
import GithubPathPage from "@/features/routeComponents/githubPath/page/GithubPathPage"
import GithubPathSkeleton from "@/features/routeComponents/githubPath/skeleton/GithubPathSkeleton"
import { headlessInstance } from "@/shared/config/axiosInstance"
import { createFileRoute } from "@tanstack/react-router"

const contentTypeArray = ["dir", "file"] as const
type ContentType = (typeof contentTypeArray)[number]
type GithubContentLoaderFnProps = {
    contentType: ContentType
    _splat: string | undefined
}
const githubContentLoaderFn = async ({ contentType, _splat }: GithubContentLoaderFnProps) => {
    if (!_splat) throw new Error("---- 주소가 제공되지 않았습니다")
    const response = await headlessInstance.get(`/github/content/${contentType}/${_splat}`)
    const data = response.data as Content[]
    return data
}

export const Route = createFileRoute("/$contentType/$")({
    params: {
        parse: (rawParams) => {
            const contentType = rawParams.contentType as ContentType
            if (!contentTypeArray.includes(contentType)) throw new Error("---- wrong content type")
            return { ...rawParams, contentType }
        },
    },
    component: GithubPathPage,
    pendingComponent: GithubPathSkeleton,
    loader: ({ params: { contentType, _splat } }) => githubContentLoaderFn({ contentType, _splat }),
})
