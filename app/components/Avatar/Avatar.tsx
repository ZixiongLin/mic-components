/* eslint-disable @next/next/no-img-element */
import { AvatarProps } from "./AvatarProps"



export const Avatar = ({src, alt,children,...props}:AvatarProps) => {
    return <img src={src} alt={alt} {...props}
        className="w-16 h-16 rounded-full border-2 border-neutrals-300 border-spacing-1 box-border p-[0.25rem]"
    />
}