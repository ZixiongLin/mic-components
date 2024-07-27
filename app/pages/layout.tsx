import { Badge } from "@/app/components/Badge";
import { Link } from "@/app/components/Link";
import { ScrollArea } from "@/app/components/ScrollArea";
import { ReactNode } from "react";

const Layout = ({children}:{children:ReactNode}) => {
    return <div className="flex">
        <ScrollArea className="w-3/12 h-full max-h-screen min-h-screen py-8">
            <div className="flex flex-col">
                <h1 className="text-lg px-4 font-bold">
                    Components
                </h1>
                <Link href="#">
                    Badge <Badge variant="success">new</Badge>
                </Link>
                <Link href="#">
                    Button <Badge variant="success">new</Badge>
                </Link>
                <Link href="#">
                    Check <Badge variant="success">new</Badge>
                </Link>
                <Link href="#">
                    Input <Badge variant="success">new</Badge>
                </Link>
                <Link href="#">
                    Link <Badge variant="success">new</Badge>
                </Link>
                <Link href="#">
                    Pill <Badge variant="success">new</Badge>
                </Link>
                <Link href="#">
                    Progress <Badge variant="success">new</Badge>
                </Link>
                <Link href="#">
                    Separator <Badge variant="success">new</Badge>
                </Link>
                <Link href="#">
                    TextArea <Badge variant="success">new</Badge>
                </Link>
            </div>
        </ScrollArea>
        <section>
            {children}
        </section>
    </div>
}

export default Layout