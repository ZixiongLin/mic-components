import { AlertProps } from "./AlertProps"
import { cvaAlert } from "./cva"

export const Alert = ({variant='default', title, subtitle, ...props}:AlertProps) =>{
    return <div {...props} className={cvaAlert({variant})}>
        <h1 className="font-bold text-md">{title}</h1>
        <p className="text-sm ">{subtitle}</p>
    </div>
} 