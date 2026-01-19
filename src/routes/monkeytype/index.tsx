import monkeytypeLoaderFn from "@/features/monkeytype/loader"
import MonkeyTypePage from "@/features/monkeytype/page"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/monkeytype/")({
    component: MonkeyTypePage,
    loader: monkeytypeLoaderFn,
})
