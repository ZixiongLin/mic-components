import { cva, type VariantProps } from "class-variance-authority";

export const cvaButton = cva("button",{
    variants: {
        size: {
          xs: ["text-sm", "py-1", "px-2"," rounded-md m-2"],
          md: ["text-base", "py-2", "px-4"," rounded-md m-2"],
          lg: ["text-lg", "py-4", "px-8"," rounded-md m-2"]
        },
        variant:{
            solid: ["bg-primary-900 text-white"],
            bordered: ["text-primary-900 border border-primary-900"],
            light: ["text-primary-900 hover:bg-primary-900 hover:bg-opacity-10"],
            flat: ["text-primary-900 bg-primary-900 bg-opacity-10 hover:bg-opacity-40"],
            ghost:["text-primary-900 border border-primary-900 hover:bg-primary-900 hover:text-white"]
        }
      },
      compoundVariants: [{ size: "md", variant: "solid" }],
      defaultVariants: {
        size: "xs",
        variant: "solid"
      },
})