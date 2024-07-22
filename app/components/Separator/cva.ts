import { cva } from "class-variance-authority";

export const cvaSeparator = cva("separator",{
    variants:{
        orientation:{
            vertical:['border-l-2 w-2 border-secondary-500 mx-4 rounded'],
            horizontal:['border-t-2 w-full border-secondary-500 my-4 rounded']
        }
    },
    compoundVariants: [{orientation: "horizontal" }],
    defaultVariants:{
        orientation:'horizontal'
    
    }
})