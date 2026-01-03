import Vstack from "@/shared/components/layouts/Vstak/Vstack"
import RoundBox from "@/shared/components/RoundBox/RoundBox"
import { useLoaderData, useParams } from "@tanstack/react-router"

const GithubPathPage = () => {
    const data = useLoaderData({ from: "/$" })
    const { _splat } = useParams({ from: "/$" })
    return (
        <Vstack>
            <p>{_splat}</p>
            {data.map((content) => (
                <RoundBox>
                    <p>name: {content.name}</p>
                    <p>path: {content.path}</p>
                    <p>type: {content.type}</p>
                    <p>github link: {content._links.html}</p>
                </RoundBox>
            ))}
        </Vstack>
    )
}

export default GithubPathPage
