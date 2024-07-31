import { cva } from "class-variance-authority";

export const cvaAlert = cva('alert',{
    variants:{
        variant:{
            default:["border-neutrals-700 border px-4 py-2 rounded-lg"],
            error:["border-transparent border px-4 py-2 rounded-lg text-white bg-error-200"],
            success:["border-transparent border px-4 py-2 rounded-lg text-white bg-success-300"]
        }
    },
    defaultVariants:{
        variant:'default'
    }
})