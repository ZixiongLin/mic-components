import { cva, type VariantProps } from "class-variance-authority";

export const cvaBadge = cva("badget",{
    variants: {
        variant:{
            success: ["bg-success-100 text-succes-300 border border-succes-300 m-2 py-2 px-4 rounded-full font-medium	uppercase"],
            removed: ["bg-error-100 text-error-300 border border-error-300 m-2 py-2 px-4 rounded-full font-medium	uppercase"],
            progress:["bg-primary-100 text-primary-300 border border-primary-300 m-2 py-2 px-4 rounded-full font-medium	uppercase"],
            moved:["bg-warning-100 text-warning-300 border border-warning-300 m-2 py-2 px-4 rounded-full font-medium	uppercase"],
            beta:["bg-secondary-100 text-secondary-300 border border-secondary-300 m-2 py-2 px-4 rounded-full font-medium	uppercase"],
            trial:["bg-neutrals-100 text-neutrals-300 border border-neutrals-300 m-2 py-2 px-4 rounded-full font-medium	uppercase"],
        }
      },
      compoundVariants: [{variant: "success" }],
      defaultVariants: {
        variant:"success"
      },
})