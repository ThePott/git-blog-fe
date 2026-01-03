import clsx from "clsx"
import type { DivProps } from "../../defaultTypes"

const Vstack = (props: DivProps) => {
    const { className, ...rest } = props
    return <div {...rest} className={clsx("flex flex-col gap-3", className)} />
}

export default Vstack
