// import { headlessInstance } from "@/shared/config/axiosInstance"
// import useTreeStore from "@/shared/store/treeStore"
// import { useQuery } from "@tanstack/react-query"
// import { useParams } from "@tanstack/react-router"
// import { useEffect } from "react"
//
// type GithubPathStatus = "valid" | "isPending" | "invalid"
//
// const useGithubPathValidate = () => {
//     // NOTE: subtitle: useValidateGithubPath
//     const treeArray = useTreeStore((state) => state.treeArray)
//     const isPending = useTreeStore((state) => state.isPending)
//
//     const { githubPath } = useParams({ strict: false })
//     if (!githubPath) throw new Error("---- github path not provided")
//
//     const path = githubPath[0] === "/" ? githubPath : `/${githubPath}`
//     const status: GithubPathStatus = treeArray.includes(path) ? "valid" : isPending ? "isPending" : "invalid"
//
//     if (status === "invalid") throw new Error("---- not correct tree")
//
//     return { path, status }
// }
//
// // NOTE: 제작중 - 이 패스에 있는 것들을 가져와야 한다
// const useGithubPathQuery = (path: string) => {
//     const { data } = useQuery({
//         queryKey: [path],
//         queryFn: async () => (await headlessInstance.get(path)).data,
//     })
//
//     useEffect(() => {
//         if (!data) return
//         console.log({ data })
//         debugger
//     }, [data])
// }
//
// const useGithubPath = () => {
//     const gpValidateReturns = useGithubPathValidate()
//     useGithubPathQuery(gpValidateReturns.path)
//
//     return { ...gpValidateReturns }
// }
//
// export default useGithubPath
