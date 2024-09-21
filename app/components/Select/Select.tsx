import { SelectProps } from "./Props";
import { SelectOption } from "./SelectOption";

export const Select = ({
    name,
    id,
    children,
    label,
    ...props
}:SelectProps) =>{
    return <select name={name} id={id} {...props}
        className="px-2 py-1 border rounded-md border-neutrals-500 dark:text-neutrals-1000 cursor-pointer"
    >
        {label && <SelectOption value={""} disabled aria-readonly>{label}</SelectOption>}
        {children}
    </select>
} 