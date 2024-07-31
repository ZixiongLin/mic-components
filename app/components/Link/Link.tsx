import LinkNext from 'next/link'
import { ReactNode } from 'react'

export const Link = ({
  href = 'https://zlinyan.es',
  children
}: {
  href: string
  children: ReactNode
}): JSX.Element => {
  return (
    <LinkNext href={href} role='link' className='text-primary-600 hover:text-primary-1000 px-8 py-4 text-sm'>
      {children}
    </LinkNext>
  )
}
