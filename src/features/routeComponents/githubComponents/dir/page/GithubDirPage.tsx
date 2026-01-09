import type { Content } from "@/features/github/githubTypes"
import GithubToParentButton from "@/shared/components/GithubToParentButton/GithubToParentButton"
import Vstack from "@/shared/components/layouts/Vstak/Vstack"
import RoundBox from "@/shared/components/RoundBox/RoundBox"
import { useLoaderData, useNavigate, useParams } from "@tanstack/react-router"

const GithubDirPage = () => {
    const data = useLoaderData({ from: "/github/dir/$" })
    const { _splat } = useParams({ from: "/github/dir/$" })
    const navigate = useNavigate()

    const handleClick = (content: Content) => {
        switch (content.type) {
            case "dir":
                navigate({ to: `/github/dir/${content.path}` })
                return
            case "file":
                navigate({ to: `/github/file/${content.path}` })
                return
        }
    }

    return (
        <Vstack>
            <GithubToParentButton currentGithubPath={_splat} />
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
