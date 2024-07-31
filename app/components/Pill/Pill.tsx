import { cvaPill } from './cva'
import { VARIANT } from './variant'

export const Pill = ({ variant, value }: { variant?: VARIANT, value: number }): JSX.Element => {
  return (
    <div className={cvaPill({ variant })}>
      {value < 100 ? value : '+99'}
    </div>
  )
}
