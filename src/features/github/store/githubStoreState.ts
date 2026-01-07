import type { Tree } from "../githubTypes"

export type TreeStoreState = {
    treeArray: Tree[]
    setTreeArray: (treeArray: Tree[]) => void
}
