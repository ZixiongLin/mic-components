'use client'
import { useState } from "react"
import { ToolTipProps } from "./Props"

export const Tooltip =({
    children,
    id,
    label,
    ...props
}:ToolTipProps) => {
    const [isHover,setIsHover] = useState(false)
    return <div
        className="relative flex flex-col items-center overflow-visible"
    >
        <div role="tooltip" id={id} {...props} 
            className={
                isHover ? 
                    'inline absolute px-2 py-1 rounded-md -mt-8 shadow-md bg-white animate-animation-opacity': 
                    'hidden'}>
            {label}
        </div>
        <div 
            onMouseEnter={ () => setIsHover(true)}
            onMouseOver={ () => setIsHover(true)}
            onMouseLeave={ () => setIsHover(false)}
        >
            {children}
        </div>
    </div>

}