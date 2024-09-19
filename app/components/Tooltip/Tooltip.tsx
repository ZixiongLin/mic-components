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
                    'flex absolute px-2 py-1 rounded-md -mt-10 shadow-md bg-white animate-animation-opacity dark:text-neutrals-100 dark:bg-secondary-900 tooltip z-10 object-center flex-col justify-center items-center': 
                    'hidden'}>
            {label}
            <div className="w-0 h-0 border-l-[12px] border-t-[12px] border-r-[12px] border-l-transparent dark:border-t-secondary-900 border-r-transparent absolute mt-auto -bottom-[12px]">
            </div>        
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