import useTreeStore from "@/features/github/tree/treeStore"
import { useEffect } from "react"

const GithubPathError = ({ error, reset }: { error: Error; reset: () => void }) => {
    const treeArray = useTreeStore((state) => state.treeArray)
    useEffect(() => {
        reset()
    }, [treeArray])

    return (
        <div>
            <p>cause: {String(error.cause)}</p>
            <p>messsage: {String(error.message)}</p>
            <p>name: {String(error.name)}</p>
        </div>
    )
}

export default GithubPathError
