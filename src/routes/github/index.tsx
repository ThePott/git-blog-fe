import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/github/")({
    beforeLoad: () => {
        throw redirect({ to: "/github/dir/$", params: { _splat: "" } })
    },
})
