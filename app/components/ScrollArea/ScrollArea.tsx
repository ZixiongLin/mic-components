import { ReactNode } from 'react'

export const ScrollArea = ({ children, className, ...props }: { children: ReactNode, className: string }): JSX.Element => {
  return (
    <div
      style={{
        background: `
                linear-gradient(#e3e3e3 33%, rgba(255,255,255, 0)),
                linear-gradient(rgba(255,255,255, 0), #e3e3e3 66%) 0 100%,
                radial-gradient(farthest-side at 50% 0, rgba(199,199,199, 0.5), rgba(0,0,0,0)),
                radial-gradient(farthest-side at 50% 100%, rgba(199,199,199, 0.5), rgba(0,0,0,0)) 0 100%`,
        backgroundColor: '#e3e3e3',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local, local, scroll, scroll',
        backgroundSize: '100% 78px, 100% 78px, 100% 26px, 100% 26px',
        overflow: 'auto  '
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}
