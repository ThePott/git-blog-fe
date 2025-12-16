import axios from "axios"
import { VITE_BASE_URL } from "./env"

const baseURL = VITE_BASE_URL

const headlessInstance = axios.create({ baseURL })

const withHeadInstance = axios.create({ baseURL })

// withHeadInstance.interceptors.request.use((config) => {
//     const accessToken = useGlobalStore.getState().accessToken
//     if (!accessToken) {
//         return config
//     }
//
//     config.headers.Authorization = `Bearer ${accessToken}`
//     return config
// })

export { headlessInstance, withHeadInstance }
