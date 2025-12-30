export interface TreeStoreState {
    treeArray: string[]
    setTreeArray: (treeArray: string[]) => void

    isPending: boolean
    setIsPending: (isPending: boolean) => void
}
