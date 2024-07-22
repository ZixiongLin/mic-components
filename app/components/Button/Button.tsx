import { ReactNode } from "react"
import { cvaButton } from "./cva"
import { SIZES } from "./sizes"
import { VARIANT } from "./variant"

export const Button = ({size,variant, children}:{size?:SIZES,variant?:VARIANT,children:ReactNode}) => {
    return <button className={cvaButton({size,variant}) }
    >
        {children}
    </button>
}