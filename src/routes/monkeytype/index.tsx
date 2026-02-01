import monkeytypeLoaderFn from "@/features/monkeytype/loader"
import MonkeytypePage from "@/features/monkeytype/page"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/monkeytype/")({
    component: MonkeytypePage,
    loader: monkeytypeLoaderFn,
})
