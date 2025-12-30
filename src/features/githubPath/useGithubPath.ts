import useTreeStore from "@/shared/store/treeStore"
import { useParams } from "@tanstack/react-router"

const useGithubPath = () => {
    // NOTE: subtitle: useValidateGithubPath
    const treeArray = useTreeStore((state) => state.treeArray)
    const isPending = useTreeStore((state) => state.isPending)

    const { githubPath } = useParams({ strict: false })
    if (!githubPath) throw new Error("---- github path not provided")

    const path = githubPath[0] === "/" ? githubPath : `/${githubPath}`
    const isError = !treeArray.includes(path) && !isPending

    if (isError) throw new Error("---- not correct tree")

    return path
}

export default useGithubPath
