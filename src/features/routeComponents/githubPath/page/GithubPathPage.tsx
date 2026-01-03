import { useLoaderData, useParams } from "@tanstack/react-router"

const GithubPathPage = () => {
    const data = useLoaderData({ from: "/$" })
    const { _splat } = useParams({ from: "/$" })
    return (
        <div>
            <p>{_splat}</p>
            {data.map((content) => (
                <div>
                    <p>name: {content.name}</p>
                    <p>path: {content.path}</p>
                    <p>type: {content.type}</p>
                    <p>github link: {content._links.html}</p>
                </div>
            ))}
        </div>
    )
}

export default GithubPathPage
