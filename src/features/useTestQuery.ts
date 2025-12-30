import { headlessInstance } from "@/shared/config/axiosInstance"
import useGlobalStore from "@/shared/store/globalStore"
import { useQuery } from "@tanstack/react-query"
import { useCallback, useEffect } from "react"

const useTreeQuery = () => {
    const setTreeArray = useGlobalStore((state) => state.setTreeArray)
    const treeRequest = useCallback(async () => {
        const response = await headlessInstance.get("/github/tree")
        return response.data as { mode: string; path: string; sha: string; type: string; url: string }[]
    }, [])

    const { data } = useQuery({
        queryKey: ["tree"],
        queryFn: treeRequest,
    })

    useEffect(() => {
        if (!data) {
            return
        }

        const treeArray = data
            .filter((el) => el.path.includes("src") && el.path !== "src")
            .map((el) => el.path.replace("src", ""))
        setTreeArray(treeArray)
    }, [data])
}

const useMarkdownQuery = () => {
    const markdownRequest = useCallback(async () => {
        const response = await headlessInstance.get("/github/markdown/specific-example")
        return response.data
    }, [])

    const { data } = useQuery({
        queryKey: ["markdown"],
        queryFn: markdownRequest,
    })

    useEffect(() => {
        if (!data) {
            return
        }
    }, [data])

    return { markdownData: data }
}

const useGitHubQuery = () => {
    useTreeQuery()
    const markdownReturns = useMarkdownQuery()

    return { ...markdownReturns }
}

export default useGitHubQuery
