import { withHeadInstance } from "@/shared/config/axiosInstance"
import type { MonkeytypeResult } from "@/shared/types/monkeytype"
import { useLoaderData } from "@tanstack/react-router"

type MonekytypeResultRowProps = {
    monkeytypeResult: MonkeytypeResult
}
const MonekytypeResultRow = ({ monkeytypeResult }: MonekytypeResultRowProps) => {
    const { mode, mode2, wpm, acc, timestamp } = monkeytypeResult
    const decimalAcc = acc / 100
    const score = wpm ** decimalAcc
    const text = `${mode} __${mode2} __${new Date(Number(timestamp)).toISOString().slice(0, 10)}: wpm ${Math.floor(wpm)} ^ accuarcy ${Math.floor(acc) / 100} = ${Math.floor(score)}`
    return <p>{text}</p>
}

const MonkeytypePage = () => {
    const data = useLoaderData({ from: "/monkeytype/" })

    // const filteredData = data.filter((row) => row.mode === "words" && row.mode2 === "100")

    return (
        <div>
            <button onClick={() => withHeadInstance.post("/monkeytype/sync")}>sync</button>
            {data.map((row) => (
                <MonekytypeResultRow monkeytypeResult={row} />
            ))}
        </div>
    )
}

export default MonkeytypePage
