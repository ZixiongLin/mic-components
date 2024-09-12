import { Children,  type ReactNode } from "react"

export const TableHead = <T,>({render, each, ...props}: {
    render: (item:T,index:number) => ReactNode,
    each:T[]
}) => {
    return <thead
        {...props}
        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
        <tr>
        {
            Children.toArray(each.map((item,index) => render(item,index)))
        }
        </tr>
    </thead>
}