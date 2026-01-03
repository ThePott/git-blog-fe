import type { DivProps } from "../defaultTypes"
import clsx from "clsx"

const RoundBox = (props: DivProps) => {
    const { className, ...rest } = props
    return <div {...rest} className={clsx("border border-white p-3", className)} />
}

export default RoundBox
