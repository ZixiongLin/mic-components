import LinkNext from 'next/link'
import { LinkProps } from './LinkProps'
import { cvaLink } from './cva'

export const Link = ({
  href = '#',
  children,
  variant="default",
  active = false,
  ...props
}: LinkProps): JSX.Element => {
  return (
    <LinkNext href={href} role='link' className={cvaLink({variant,active})} {...props}>
      {children}
    </LinkNext>
  )
}
