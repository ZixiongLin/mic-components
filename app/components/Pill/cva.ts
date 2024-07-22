import { cva, type VariantProps } from "class-variance-authority";

export const cvaPill = cva("pill",{
    variants: {
        variant:{
            success: ["bg-success-100 text-succes-300 border border-succes-300 m-2 p-1 rounded-full text-xs	uppercase"],
            removed: ["bg-error-100 text-error-300 border border-error-300 m-2 p-1 rounded-full text-xs	uppercase"],
            progress:["bg-primary-100 text-primary-300 border border-primary-300 m-2 p-1 rounded-full text-xs	uppercase"],
            moved:["bg-warning-100 text-warning-300 border border-warning-300 m-2 p-1 rounded-full text-xs	uppercase"],
            beta:["bg-secondary-100 text-secondary-300 border border-secondary-300 m-2 p-1 rounded-full text-xs	uppercase"],
            trial:["bg-neutrals-100 text-neutrals-300 border border-neutrals-300 m-2 p-1 rounded-full text-xs	uppercase"],
        }
      },
      compoundVariants: [{variant: "success" }],
      defaultVariants: {
        variant:"success"
      },
})