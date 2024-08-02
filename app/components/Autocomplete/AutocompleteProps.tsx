export interface AutocompleteProps extends React.HTMLAttributes<HTMLDivElement>{
    id:string,
    label:string,
    listName:string,
    options:string[]
}