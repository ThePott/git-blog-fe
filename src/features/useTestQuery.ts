import { headlessInstance } from "@/shared/config/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import { useCallback, useEffect } from "react"

const useTestTreeQuery = () => {
    const treeRequest = useCallback(async () => {
        const response = await headlessInstance.get("/github/tree")
        return response.data
    }, [])

    const { data } = useQuery({
        queryKey: ["tree"],
        queryFn: treeRequest,
    })

    useEffect(() => {
        if (!data) {
            return
        }
    }, [data])

    return { treeData: data }
}

const useTestMarkdownQuery = () => {
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

const useTestQuery = () => {
    const treeReturns = useTestTreeQuery()
    const markdownReturns = useTestMarkdownQuery()

    return { ...treeReturns, ...markdownReturns }
}

export default useTestQuery
