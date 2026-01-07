import useTreeStore from "@/features/github/store/githubStore"
import RoundBox from "@/shared/components/RoundBox/RoundBox"
import { useNavigate } from "@tanstack/react-router"

const LandingContent = () => {
    const treeArray = useTreeStore((state) => state.treeArray)
    const navigate = useNavigate()

    return (
        <div>
            <h1>여기는 랜딩 콘텐트</h1>
            {treeArray.map((tree) => (
                <RoundBox key={tree.sha} className="border border-white p-3">
                    <button onClick={() => navigate({ to: `/dir/${tree.path}` })}>{tree.path}</button>
                </RoundBox>
            ))}
        </div>
    )
}

export default LandingContent
