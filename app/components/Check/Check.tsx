import { ReactNode } from 'react'

export const Check = ({ children, id, ...props }: { children: ReactNode, id: string }): JSX.Element => {
  return (
    <>
      <input
        type='checkbox'
        className='w-4 h-4 rounded-md focus:ring-primary-900 focus:ring-1 focus:ring-offset-2 m-2'
        id={id}
        {...props}
      />
      <label htmlFor={id}>{children}</label>
    </>
  )
}
