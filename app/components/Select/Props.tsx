export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name:string,
    id:string,
    label?:string,
    children?:JSX.Element[]
}

export interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    value:string,
    children:JSX.Element | string
}