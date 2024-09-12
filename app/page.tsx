import Link from 'next/link'
import { Navbar } from './components/Nav/Nav'
import { Avatar } from '@/app/components/Avatar'

export default function Home (): JSX.Element {


  return (
    <>
      <Navbar></Navbar>
      <section className="bg-gradient-to-r from-primary to-primary-foreground text-black py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              <h1 className="text-4xl font-bold mb-4">Welcome to MiC-componets</h1>
              <div className='flex'>
                <div className="w-11/12">
                  <p className="text-xl mb-8">Another catalog components</p>
                  <p className="text-xl mb-8">Only for learn testing and improve UI Skills</p>
                </div>
                <div className="w-1/12 flex justify-center items-center">
                  <Avatar src='https://zlinyan.es/_astro/me.C7wE-_Fh_1HxhPl.webp' />
                </div>
              </div>

              <div className="flex space-x-4">
                <button className='border px-4 py-2 rounded'>
                  Components
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className='bg-gradient-to-r from-primary-300 to-success-300 bg-clip-text text-transparent pr-2'>
                [WIP]
              </span>
               more Components and variants
            </h2>
          </div>
        </section>
        <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 Your Company. All rights reserved.</p>
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
