import LinkNext from "next/link"
import { ReactNode } from "react"

export const Link = ({
    href = "https://zlinyan.es",
    children,
}:{
    href: string,
    children:ReactNode
}) => {
    return <LinkNext href={href} role="link" className="text-primary-800 hover:text-primary-800 px-8 py-4">
        {children ?? "Enlace"}
    </LinkNext>
}