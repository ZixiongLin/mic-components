import { ReactNode } from "react"

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
    href: string
    children: ReactNode,
    variant?: "default" | "ghost",
    active?:boolean
}