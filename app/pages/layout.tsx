import { ReactNode } from 'react'
import { SideMenu } from '../ui/SideMenu'
import { Navbar } from '../ui/Nav'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
      <div className='bg-white dark:bg-secondary-900'>
        <Navbar></Navbar>
        <div className="flex w-full">
          <div className='w-1/5'>
            <SideMenu />
          </div>
          <section className='w-4/5 h-full px-4'>
            {children}
          </section>
        </div>

      </div>
  )
}

export default Layout
