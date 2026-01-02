import useTreeStore from "@/features/github/tree/treeStore"
import type { Tree } from "@/features/github/tree/treeTypes"
import RootLayout from "@/features/routeComponents/root/RootLayout"
import type { RouterContext } from "@/main"
import { headlessInstance } from "@/shared/config/axiosInstance"
import type { EnsureQueryDataOptions, QueryClient } from "@tanstack/react-query"
import { createRootRouteWithContext } from "@tanstack/react-router"

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
const loaderFn = async (queryClient: QueryClient) => {
    const data = await queryClient.ensureQueryData(ensureQueryDataOptions)
    useTreeStore.getState().setTreeArray(data)
}

export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootLayout,
    loader: ({ context: { queryClient } }) => loaderFn(queryClient),
})
