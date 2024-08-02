import { Link } from "../Link"
import { PaginationProps } from "./PaginationProps"

export const Pagination = ({
    prevHref,
    nextHref,
    children,
    ...props}
    :PaginationProps
) => {
    return <div {...props} className="flex justify-between w-full">
        <Link href={prevHref} variant="ghost">Previous</Link>
        {children}

        <Link href={nextHref} variant="ghost">Next</Link>
    </div>
}