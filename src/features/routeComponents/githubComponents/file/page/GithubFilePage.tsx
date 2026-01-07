import GithubToParentButton from "@/shared/components/GoBackButton/GoBackButton"
import Vstack from "@/shared/components/layouts/Vstak/Vstack"
import { useLoaderData, useParams } from "@tanstack/react-router"
import Markdown from "markdown-to-jsx"

const GithubFilePage = () => {
    const data = useLoaderData({ from: "/file/$" })
    const { _splat } = useParams({ from: "/file/$" })

    if (!_splat) throw new Error("---- file path not provided")

    return (
        <Vstack>
            <GithubToParentButton currentGithubPath={_splat} />
            <p>{_splat}</p>
            <Markdown>{data}</Markdown>
        </Vstack>
    )
}

export default GithubFilePage
