import { Children, ReactNode } from "react"

export const TableBody =<T,>({
    row,
    each,
    ...props
}:{
    row: <T>(item:T,index?:number) => ReactNode,
    each:T[]
}) => {
    return <tbody className="dark:text-neutrals-1000" {...props}>
        {
            Children.toArray(each.map((item,index) => row(item,index)))
        }
    </tbody>
}