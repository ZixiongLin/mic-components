import { ReactNode } from "react";
import { SideMenu } from "../components/SIdeMenu/SideMenu";

const Layout = ({children}:{children:ReactNode}) => {
    return <div className="flex">
        <SideMenu />
        <section>
            {children}
        </section>
    </div>
}

export default Layout