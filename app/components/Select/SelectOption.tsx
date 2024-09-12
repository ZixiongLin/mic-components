import { SelectOptionProps } from "./Props";

export const SelectOption =({
    value,
    children,
    ...props
}:SelectOptionProps) => {
    return <option value={value}
        className="cursor-pointer"
        {...props}
    >
        {children}
    </option>
}