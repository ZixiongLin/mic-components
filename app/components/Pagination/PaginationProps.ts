export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
    children:JSX.Element[],
    prevHref:string,
    nextHref:string
}