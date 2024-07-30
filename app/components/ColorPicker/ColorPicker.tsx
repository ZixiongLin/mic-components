import { ColorPickerProps } from "./CcolorPickerProps"

export const ColorPicker = ({children,id,...props}:ColorPickerProps) => {
    return <div className="flex gap-4">
        <input type="color" {...props} id={id}/>
        <label htmlFor={id} className="cursor-pointer">{children}</label>
    </div>
}