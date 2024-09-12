import Link from "next/link"

export const Navbar = () => {
    return <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
                <Link href="/" className=" text-primary">
                    <p className="text-xxl font-bold">Home</p>
                </Link>
                <div className="">
                    <Link href="/page/intro">
                        Components
                    </Link>
                </div>
            </div>

        </div>
    </header>
}