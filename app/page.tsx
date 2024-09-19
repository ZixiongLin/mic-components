import Link from 'next/link'
import { Navbar } from './ui/Nav/Nav'
import { Avatar } from '@/app/components/Avatar'
import { H1, H2, LeadP, P } from './components/Typography'

export default function Home (): JSX.Element {


  return (
    <>
      <section className="bg-gradient-to-r from-secondary-900 to-secondary-600 text-black pb-20 ">
        <Navbar></Navbar>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="w-full ">
            <H1>Welcome to MiC-componets</H1>
            <div className='flex'>
              <div className="w-11/12">
                <LeadP>Another catalog components</LeadP>
                <LeadP>Only for learn testing and improve my skills.</LeadP>
              </div>
              <div className="w-1/12 flex justify-center items-center">
                <Avatar src='https://zlinyan.es/_astro/me.C7wE-_Fh_1HxhPl.webp' />
              </div>
            </div>

            <div className="flex space-x-4">
              <Link 
                href='/pages/intro'
                className='border px-4 py-2 rounded border-white text-white'>
                Components
              </Link>
            </div>
          </div>
        </div>
      </section>
        <section className="bg-muted py-16 dark:bg-secondary-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <H2>
              <span className='bg-gradient-to-r from-primary-300 to-success-300 bg-clip-text text-transparent pr-2'>
                [WIP]
              </span>
               more Components and variants
            </H2>

          </div>
        </section>
        <footer className="bg-primary text-primary-foreground py-8 dark:bg-secondary-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2024 Zixiong Lin Yang. All rights reserved.</p>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
    </>

  )
}
