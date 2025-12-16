import { headlessInstance } from "@/shared/config/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"

const testRequest = async () => {
    const response = await headlessInstance.get("/github")
    return response.data
}

const useTestQuery = () => {
    const { data } = useQuery({
        queryKey: ["test"],
        queryFn: testRequest,
    })

    useEffect(() => {
        if (!data) {
            return
        }
    }, [data])

    return data
}

export default useTestQuery
