import { headlessInstance } from "@/shared/config/axiosInstance"

type GithubFileLoaderFnProps = {
    _splat: string | undefined
}

const githubFileLoaderFn = async ({ _splat }: GithubFileLoaderFnProps) => {
    if (!_splat) throw new Error("---- 주소가 제공되지 않았습니다")

    const response = await headlessInstance.get(`/github/content/file/${_splat}`)
    const data = response.data
    return data
}

export default githubFileLoaderFn
