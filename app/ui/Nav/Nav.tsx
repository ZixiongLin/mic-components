import {Link} from "@/app/components/Link"

export const Navbar = ({...props}) => {
    return <header className="border-b border-white mb-4 shadow-sm shadow-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" {...props}>
            <div className="flex justify-between items-center py-4">
                {/* <Link href="/" className=" text-primary">
                    <p className="text-xxl font-bold text-white">Home</p>
                </Link> */}
                    <Link href="/">
                        Home
                    </Link>
                <div className="">
                    <Link href="/pages/intro">
                        Components
                    </Link>
                </div>
            </div>

        </div>
    </header>
}