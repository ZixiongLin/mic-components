import { cva } from "class-variance-authority";

export const cvaLink = cva('link',{
    variants:{
        variant:{
            default:["text-primary-600 hover:text-primary-1000 px-4 py-2 text-sm flex items-center gap-2"],
            ghost:["text-neutrals-1000 border border-neutrals-1000 hover:bg-neutrals-800 hover:border-neutrals-800  hover:text-white px-4 py-2 rounded-lg"]

        },
        active:{
            true:["bg-neutrals-800 border-neutrals-800 text-white"]
        }
    },
    defaultVariants:{
        variant:'default'
    }
})