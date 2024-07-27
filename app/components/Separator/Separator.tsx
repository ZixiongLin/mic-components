import { cvaSeparator } from './cva'
import { ORIENTATION } from './oritentation'

export const Separator = ({
  orientation = 'horizontal'
}: {
  orientation?: ORIENTATION
}): JSX.Element => {
  return <div role='separator' className={cvaSeparator({ orientation })} />
}
