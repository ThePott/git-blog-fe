import type { Content } from "@/features/github/githubTypes"
import { headlessInstance } from "@/shared/config/axiosInstance"

type GithubDirLoaderFnProps = {
    _splat: string | undefined
}

const githubDirLoaderFn = async ({ _splat }: GithubDirLoaderFnProps) => {
    if (!_splat) throw new Error("---- 주소가 제공되지 않았습니다")

    const response = await headlessInstance.get(`/github/content/dir/${_splat}`)
    const data = response.data as Content[]
    return data
}

export default githubDirLoaderFn
