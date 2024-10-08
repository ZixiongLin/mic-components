import { ReactNode } from 'react'
import { cvaBadge } from './cva'
import { VARIANT } from './variant'

export const Badge = ({ variant, children }: { variant?: VARIANT, children: ReactNode }): JSX.Element => {
  return (
    <strong className={cvaBadge({ variant })}>
      {children}
    </strong>
  )
}
