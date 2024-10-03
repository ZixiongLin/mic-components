import { ReactNode } from 'react'

export const Textarea = ({
  id,
  children,
  rows = 4,
  cols = 25,
  ...props
}: {
  id: string
  children: ReactNode
  rows?: number
  cols?: number
}): JSX.Element => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className='cursor-pointer font-bold text-sm'>{children}</label>
      <textarea
        name={id} id={id} rows={rows}
        cols={cols}
        className='px-4 py-2 border rounded-lg border-neutrals-200 min-h-20 dark:text-neutrals-1000'
        {...props}
      />
    </div>
  )
}
