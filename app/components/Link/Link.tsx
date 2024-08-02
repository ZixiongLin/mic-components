import LinkNext from 'next/link'
import { LinkProps } from './LinkProps'
import { cvaLink } from './cva'

export const Link = ({
  href = 'https://zlinyan.es',
  children,
  variant="default",
  active = false
}: LinkProps): JSX.Element => {
  if(active){
    console.log(cvaLink({variant,active}))
  }
  return (
    <LinkNext href={href} role='link' className={cvaLink({variant,active})}>
      {children}
    </LinkNext>
  )
}
