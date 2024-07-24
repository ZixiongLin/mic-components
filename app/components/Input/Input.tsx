import { ReactNode } from "react"

export const Input = ({id, children, ...props}:{id:string, children:ReactNode }) =>{
    return <div className="flex flex-col">
        <label htmlFor={id} className="font-bold text-sm">{children}</label>
        <input  className=" px-4 py-2 bg-white border rounded-lg border-neutrals-200" 
            type="text" 
            id={id}
            placeholder="input"
            {...props}
            
        />
    </div>
}