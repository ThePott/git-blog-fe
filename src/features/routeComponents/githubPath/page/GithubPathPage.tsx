import type { Content } from "@/features/github/githubTypes"
import Vstack from "@/shared/components/layouts/Vstak/Vstack"
import RoundBox from "@/shared/components/RoundBox/RoundBox"
import { useLoaderData, useNavigate, useParams } from "@tanstack/react-router"

const GithubPathPage = () => {
    const navigate = useNavigate()
    const data = useLoaderData({ from: "/$" })
    const { _splat } = useParams({ from: "/$" })

    const handleClick = (content: Content) => {
        switch (content.type) {
            case "dir":
                navigate({ to: content.path })
                break
            case "file":
                // TODO: content dir(file) 다르게 navigate
                // console.log("---- need to handle file")
                break
        }
    }

    return (
        <Vstack>
            <p>{_splat}</p>
            {data.map((content) => (
                <RoundBox onClick={() => handleClick(content)}>
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
