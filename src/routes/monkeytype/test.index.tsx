import { withHeadInstance } from "@/shared/config/axiosInstance"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/monkeytype/test/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <button onClick={() => withHeadInstance.get("/monkeytype/results")}>GET /result</button>
        </div>
    )
}
