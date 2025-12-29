import { createRoot } from "react-dom/client"
import "./index.css"
import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "./shared/config/queryClient"
import LandingPage from "./pages/landing/LandingPage"

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <LandingPage />
    </QueryClientProvider>,
)
