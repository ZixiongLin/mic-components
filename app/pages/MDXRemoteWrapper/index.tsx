"use client";

import { useMDXComponents } from "@/app/utils/mdx-components";
import { MDXProvider } from "@mdx-js/react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

export default function MDXRemoteWrapper(props: MDXRemoteProps) {
    const components = useMDXComponents();

    return <MDXProvider components={components}>
            <MDXRemote {...props} />
    </MDXProvider>


}