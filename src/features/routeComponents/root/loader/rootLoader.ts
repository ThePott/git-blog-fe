import useTreeStore from "@/features/github/tree/treeStore"
import type { Tree } from "@/features/github/tree/treeTypes"
import { headlessInstance } from "@/shared/config/axiosInstance"
import type { EnsureQueryDataOptions, QueryClient } from "@tanstack/react-query"

// NOTE: only fetch
const getTree = async () => {
    const response = await headlessInstance.get("/github/tree")
    return response.data as Tree[]
}

const ensureQueryDataOptions: EnsureQueryDataOptions<Tree[]> = {
    queryKey: ["tree"],
    queryFn: getTree,
}

// NOTE: only side effects
const rootLoaderFn = async (queryClient: QueryClient) => {
    const data = await queryClient.ensureQueryData(ensureQueryDataOptions)
    useTreeStore.getState().setTreeArray(data)
}

export default rootLoaderFn
