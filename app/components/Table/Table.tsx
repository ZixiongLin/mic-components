import { TableProps } from "./Props"

export const Table = ({
    children,
    ...props
}:TableProps) => {
    return <table {...props} className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        {children}
    </table>
}