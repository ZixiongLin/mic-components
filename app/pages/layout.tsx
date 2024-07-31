import { ReactNode } from 'react'
import { SideMenu } from '../components/SideMenu/SideMenu'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className='flex'>
      <SideMenu />
      <section>
        {children}
      </section>
    </div>
  )
}

export default Layout
