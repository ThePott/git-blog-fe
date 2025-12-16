import Markdown from "markdown-to-jsx/react"
import useTestQuery from "../useTestQuery"

const LandingContent = () => {
    const data = useTestQuery()

    return (
        <div>
            <h1>여기는 랜딩 콘텐트</h1>
            <Markdown>{data}</Markdown>
        </div>
    )
}

export default LandingContent
