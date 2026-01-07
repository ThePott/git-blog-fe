import { useNavigate } from "@tanstack/react-router"

type MakeParentDirProps = {
    currentGithubPath: string
}
const makeParentDir = ({ currentGithubPath }: MakeParentDirProps): string | null => {
    const splittedArray = currentGithubPath.split("/")
    if (splittedArray.length <= 1) return null

    splittedArray.pop()
    const parentDir = splittedArray.join("/")
    return parentDir
}

type GithubToParentButton = {
    currentGithubPath: string
}
const GithubToParentButton = ({ currentGithubPath }: GithubToParentButton) => {
    const navigate = useNavigate()
    const parentDir = makeParentDir({ currentGithubPath })

    if (!parentDir) return null

    const handleGoBack = () => {
        navigate({ to: `/dir/${parentDir}` })
    }

    return <button onClick={handleGoBack}>To Parent</button>
}

export default GithubToParentButton
