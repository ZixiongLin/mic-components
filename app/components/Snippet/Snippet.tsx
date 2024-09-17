"use client"
import { ReactNode, useState } from "react"
import { Button } from "../Button"

const Copy = () => {
    return <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"/>
  </svg>
}

const Check = () => {
    return <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"/>
    </svg>

}

export const Snippet = ({children,...props}:{
    children:string
}) => {
    const [copied,setCopied] = useState(false)
    const copy = () => {
        navigator.clipboard.writeText(children)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        },500)
    }

    return <div className="flex justify-center items-center px-2 rounded-md bg-neutrals-100">
            <pre {...props} >
                <code className="before:content-['$']">
                {children}
                </code>
            </pre>
            <Button role="copy-button" onClick={ () =>{copy()}} size="xs" variant="light">
            {
                copied ? <Check/> : <Copy/>
            }
        </Button></div>
}