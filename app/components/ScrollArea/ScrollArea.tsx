import { ReactNode } from 'react'

export const ScrollArea = ({ children, className, ...props }: { children: ReactNode, className: string }): JSX.Element => {
  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local, local, scroll, scroll',
        backgroundSize: '100% 78px, 100% 78px, 100% 26px, 100% 26px',
        overflow: 'auto ',
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}
