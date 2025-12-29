import { create } from "zustand"
import type { GlobalStoreState } from "./globalStoreState"

const useGlobalStore = create<GlobalStoreState>()((set) => ({
    treeArray: [],
    setTreeArray: (treeArray) => set({ treeArray }),
}))

export default useGlobalStore
