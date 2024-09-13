import { ReactNode } from 'react'
import { SideMenu } from '../components/SideMenu/SideMenu'
import { Navbar } from '../components/Nav/Nav'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Navbar></Navbar>
      <div className='flex w-full'>
        <div className='w-1/5'>
          <SideMenu />
        </div>
        <section className='w-4/5 h-full px-4'>
          {children}
        </section>
      </div>
    </>

  )
}

export default Layout
