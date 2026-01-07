import type { Content } from "@/features/github/githubTypes"
import Vstack from "@/shared/components/layouts/Vstak/Vstack"
import RoundBox from "@/shared/components/RoundBox/RoundBox"
import { useLoaderData, useNavigate, useParams } from "@tanstack/react-router"

const GithubDirPage = () => {
    const data = useLoaderData({ from: "/dir/$" })
    const { _splat } = useParams({ from: "/dir/$" })

    const navigate = useNavigate()

    const handleClick = (content: Content) => {
        switch (content.type) {
            case "dir":
                navigate({ to: `/dir/${content.path}` })
                return
            case "file":
                navigate({ to: `/file/${content.path}` })
                return
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

export default GithubDirPage
