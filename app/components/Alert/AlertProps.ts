import { VARIANT } from "./variants";

export interface AlertProps extends React.AllHTMLAttributes<HTMLDivElement>{
    title:string,
    subtitle:string,
    variant?:VARIANT
}