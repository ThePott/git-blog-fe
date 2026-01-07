import Vstack from "@/shared/components/layouts/Vstak/Vstack"
import { useLoaderData, useParams } from "@tanstack/react-router"

const GithubFilePage = () => {
    const data = useLoaderData({ from: "/file/$" })
    const { _splat } = useParams({ from: "/file/$" })

    return (
        <Vstack>
            <p>{_splat}</p>
            {data}
        </Vstack>
    )
}

export default GithubFilePage
