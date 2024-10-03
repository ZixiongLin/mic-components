import { cva } from "class-variance-authority";

export const cvaLink = cva('link',{
    variants:{
        variant:{
            default:["font-bold text-primary-600 dark:text-secondary-1000 hover:text-primary-1000 px-4 py-2 text-sm flex items-center gap-2 dark:hover:text-neutrals-100"],
            ghost:["text-neutrals-1000 dark:text-neutrals-100 border border-neutrals-1000 dark:border-neutrals-100 hover:bg-neutrals-800 hover:border-neutrals-800  hover:text-white px-4 py-2 rounded-lg dark:"]

        },
        active:{
            true:["bg-neutrals-800 border-neutrals-800 text-white"]
        }
    },
    defaultVariants:{
        variant:'default'
    }
})