import { FloatButtonProps } from "./FloatButtonProps"

export const FloatButton = ({
    children,
    ...props
}:FloatButtonProps) => {
    return <button {...props}
        className="bg-secondary-900 bottom-2 left-full p-4 rounded-full sticky"
    >
        {children}
    </button>
}