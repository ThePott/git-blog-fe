import Vstack from "@/shared/components/layouts/Vstak/Vstack"
import { useLoaderData, useParams } from "@tanstack/react-router"
import DirSection from "./_DirSection"
import FileSection from "./_FileSection"

const GithubPathPage = () => {
    const data = useLoaderData({ from: "/$contentType/$" })
    const { contentType, _splat } = useParams({ from: "/$contentType/$" })

    return (
        <Vstack>
            <p>{_splat}</p>
            {contentType === "dir" && <DirSection contentArray={data} />}
            {contentType === "file" && <FileSection markdown={data} />}
        </Vstack>
    )
}

export default GithubPathPage
