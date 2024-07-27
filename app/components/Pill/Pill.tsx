import { cvaPill } from "./cva"
import { VARIANT } from "./variant"

export const Pill = ({variant, value}:{variant?:VARIANT,value:number}) => {
    return <strong className={cvaPill({variant}) }>
        {value < 100 ? value: '+99'}
    </strong>
}