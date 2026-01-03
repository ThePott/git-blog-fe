import type { Tree } from "./treeTypes"

export type TreeStoreState = {
    treeArray: Tree[]
    setTreeArray: (treeArray: Tree[]) => void
}
