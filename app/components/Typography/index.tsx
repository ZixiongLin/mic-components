export const H1 = ({ children }: { children: React.ReactNode }) => {
    return <h1 className="text-5xl lg:text-6xl font-extrabold dark:text-neutrals-100">{children}</h1>
}
export const H2 = ({ children }: { children: React.ReactNode }) => {
    return <h2 className="text-4xl font-semibold text-neutrals-900 dark:text-neutrals-100">{children}</h2>
}
export const H3 = ({ children }: { children: React.ReactNode }) => {
    return <h3 className="text-3xl font-bold dark:text-neutrals-100">{children}</h3>
}
export const H4 = ({ children }: { children: React.ReactNode }) => {
    return <h4 className="text-2xl font-bold dark:text-neutrals-100">{children}</h4>
}
export const H5 = ({ children }: { children: React.ReactNode }) => {
    return <h5 className="text-xl font-bold dark:text-neutrals-100">{children}</h5>
}
export const H6 = ({ children }: { children: React.ReactNode }) => {
    return <h6 className="text-lg font-bold dark:text-neutrals-100">{children}</h6>
}

export const P = ({ children }: { children: React.ReactNode }) => {
    return <p className="text-neutrals-900 dark:text-neutrals-100">{children}</p>
}

export const LeadP = ({ children }: { children: React.ReactNode }) => {
    return <p className="mb-3 text-lg text-neutrals-900 md:text-xl dark:text-neutrals-100">{children}</p>
}

export const Blockquote = ({ children }: { children: React.ReactNode }) => {
    return <blockquote className=" p-4 my-4 border-l-8 border-neutrals-400 bg-neutrals-100 dark:border-neutrals-500 italic text-neutrals-900 dark:text-neutrals-900">
        <p className="flex ml-4">
        “ {children} ”
        </p>
    </blockquote>
}