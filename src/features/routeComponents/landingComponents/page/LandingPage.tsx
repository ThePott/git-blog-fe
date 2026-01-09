import RoundBox from "@/shared/components/RoundBox/RoundBox"
import { useNavigate } from "@tanstack/react-router"

const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>여기는 랜딩 콘텐트</h1>

            <RoundBox className="border border-white p-3" onClick={() => navigate({ to: "/github" })}>
                github
            </RoundBox>
            <RoundBox className="border border-white p-3" onClick={() => navigate({ to: "/monkeytype" })}>
                monkeytype
            </RoundBox>
        </div>
    )
}

export default LandingPage
