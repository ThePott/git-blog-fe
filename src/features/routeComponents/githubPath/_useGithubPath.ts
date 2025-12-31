import { headlessInstance } from "@/shared/config/axiosInstance"
import useTreeStore from "@/shared/store/treeStore"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { useEffect } from "react"

type GithubPathStatus = "valid" | "isPending" | "invalid"

const useGPValidate = () => {
    // NOTE: subtitle: useValidateGithubPath
    const treeArray = useTreeStore((state) => state.treeArray)
    const isPending = useTreeStore((state) => state.isPending)

    const { githubPath } = useParams({ strict: false })
    if (!githubPath) throw new Error("---- github path not provided")

    const path = githubPath[0] === "/" ? githubPath : `/${githubPath}`
    const status: GithubPathStatus = treeArray.includes(path) ? "valid" : isPending ? "isPending" : "invalid"

    if (status === "invalid") throw new Error("---- not correct tree")

    return { path, status }
}

const useGPQuery = (path: string) => {
    const { data } = useQuery({
        queryKey: [path],
        queryFn: async () => (await headlessInstance.get(path)).data,
    })

    useEffect(() => {
        if (!data) return
        console.log({ data })
    }, [data])
}

const useGithubPath = () => {
    const gpValidateReturns = useGPValidate()
    useGPQuery(gpValidateReturns.path)

    return { ...gpValidateReturns }
}

export default useGithubPath
