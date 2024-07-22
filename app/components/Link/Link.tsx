import LinkNext from "next/link"
import { ReactNode } from "react"

export const Link = ({
    href = "https://zlinyan.es",
    children,
}:{
    href: string,
    children:ReactNode
}) => {
    return <LinkNext href={href} role="link" className="text-primary-400 hover:text-primary-800 active:underline active:underline-offset-4 px-8 py-4">
        {children ?? "Enlace"}
    </LinkNext>
}