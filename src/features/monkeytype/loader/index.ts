import { withHeadInstance } from "@/shared/config/axiosInstance"
import type { MonkeytypeResult } from "@/shared/types/monkeytype"

const monkeytypeLoaderFn = async () => {
    const response = await withHeadInstance.get("/monkeytype/results?mode=words&mode2=100")
    const data = response.data as MonkeytypeResult[]
    return data
}

export default monkeytypeLoaderFn
