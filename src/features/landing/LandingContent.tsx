import useGlobalStore from "@/shared/store/globalStore"
import { useNavigate } from "@tanstack/react-router"

const LandingContent = () => {
    const treeArray = useGlobalStore((state) => state.treeArray)
    const navigate = useNavigate()

    return (
        <div>
            <h1>여기는 랜딩 콘텐트</h1>
            {treeArray.map((tree) => (
                <div className="border border-white p-3">
                    <button onClick={() => navigate({ to: tree })}>{tree}</button>
                </div>
            ))}
        </div>
    )
}

export default LandingContent
