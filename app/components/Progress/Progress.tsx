import { cvaProgress } from "./cva"
import { StatusProgress } from "./Status"

export const Progress = ({max=100,min=0,value=50,status, ...props}:{
    max?:number,
    min?:number,
    value?:number
    status:StatusProgress
}) => {
    const width = (value / (max - min)) * 100
    return <div className="w-full h-4 rounded border border-neutrals-400 bg-white m-4" {...props}>
        <div 
            role="status-bar"
            className={cvaProgress({status})}
            style={{
                width: `${width}%`
            }}
        ></div>
    </div>
}