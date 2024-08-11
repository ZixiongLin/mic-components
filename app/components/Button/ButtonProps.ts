import { ReactNode } from "react";
import { SIZES } from "./sizes";
import { VARIANT } from "./variant";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: SIZES, 
    variant?: VARIANT, 
    children?: ReactNode,
}
  