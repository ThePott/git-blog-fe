import { useNavigate } from "@tanstack/react-router"

type MakeParentDirProps = {
    currentGithubPath: string | undefined
}
const makeParentDir = ({ currentGithubPath }: MakeParentDirProps): string => {
    if (!currentGithubPath) return ""
    const splittedArray = currentGithubPath.split("/")
    if (splittedArray.length <= 1) return ""

    splittedArray.pop()
    const parentDir = splittedArray.join("/")
    return parentDir
}

type GithubToParentButton = {
    currentGithubPath: string | undefined
}
const GithubToParentButton = ({ currentGithubPath }: GithubToParentButton) => {
    const navigate = useNavigate()
    const parentDir = makeParentDir({ currentGithubPath })

    const handleGoBack = () => {
        navigate({ to: `/github/dir/${parentDir}` })
    }

    return <button onClick={handleGoBack}>To Parent</button>
}

export default GithubToParentButton
