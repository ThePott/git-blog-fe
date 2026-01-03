import { create } from "zustand"
import type { TreeStoreState } from "./treeStoreState"

const useTreeStore = create<TreeStoreState>()((set) => ({
    treeArray: [],
    setTreeArray: (treeArray) => set({ treeArray }),
}))

export default useTreeStore
