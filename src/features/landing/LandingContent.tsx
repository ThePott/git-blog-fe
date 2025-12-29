import Markdown from "markdown-to-jsx/react"
import useGitHubQuery from "../useTestQuery"
import useGlobalStore from "@/shared/store/globalStore"

const LandingContent = () => {
    const treeArray = useGlobalStore((state) => state.treeArray)
    const { markdownData } = useGitHubQuery()

    return (
        <div>
            <h1>여기는 랜딩 콘텐트</h1>
            {treeArray.map((tree) => (
                <div className="border border-white p-3">
                    <button>{tree}</button>
                </div>
            ))}
            <Markdown>{markdownData}</Markdown>
        </div>
    )
}

export default LandingContent
