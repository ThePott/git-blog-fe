import Markdown from "markdown-to-jsx/react"
import useTestQuery from "../useTestQuery"

const LandingContent = () => {
    const { treeData, markdownData } = useTestQuery()
    return (
        <div>
            <h1>여기는 랜딩 콘텐트</h1>
            <p>{JSON.stringify(treeData)}</p>
            <Markdown>{markdownData}</Markdown>
        </div>
    )
}

export default LandingContent
