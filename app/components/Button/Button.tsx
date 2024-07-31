import { ReactNode } from 'react'
import { cvaButton } from './cva'
import { ButtonProps } from './ButtonProps'

export const Button: React.FC<ButtonProps> = ({ size, variant, children, role, onClick}) => {
  return (
    <button className={cvaButton({ size, variant })} role={role} onClick={onClick}>
      {children}
    </button>
  )
}
