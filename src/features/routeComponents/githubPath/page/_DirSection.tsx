import type { Content } from "@/features/github/githubTypes"
import RoundBox from "@/shared/components/RoundBox/RoundBox"
import { useNavigate } from "@tanstack/react-router"

type DirSectionProps = {
    contentArray: Content[]
}
const DirSection = ({ contentArray }: DirSectionProps) => {
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
        <div>
            {contentArray.map((content) => (
                <RoundBox onClick={() => handleClick(content)}>
                    <p>name: {content.name}</p>
                    <p>path: {content.path}</p>
                    <p>type: {content.type}</p>
                    <p>github link: {content._links.html}</p>
                </RoundBox>
            ))}
        </div>
    )
}

export default DirSection
