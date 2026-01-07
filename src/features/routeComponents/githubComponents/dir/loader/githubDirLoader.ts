import type { Content } from "@/features/github/githubTypes"
import { headlessInstance } from "@/shared/config/axiosInstance"

type GithubDirLoaderFnProps = {
    _splat: string | undefined
}

const githubDirLoaderFn = async ({ _splat }: GithubDirLoaderFnProps) => {
    const response = await headlessInstance.get(`/github/content/dir/${_splat ?? ""}`)
    const data = response.data as Content[]
    return data
}

export default githubDirLoaderFn
