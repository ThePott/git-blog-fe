import type { Tree } from "./treeTypes"

export type TreeStoreState = {
    treeArray: Tree[]
    setTreeArray: (treeArray: Tree[]) => void

    isPending: boolean
    setIsPending: (isPending: boolean) => void
}
