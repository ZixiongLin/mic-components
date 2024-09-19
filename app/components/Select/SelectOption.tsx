import { SelectOptionProps } from "./Props";

export const SelectOption =({
    value,
    children,
    ...props
}:SelectOptionProps) => {
    return <option value={value}
        className="cursor-pointer dark:text-neutrals-1000"
        {...props}
    >
        {children}
    </option>
}