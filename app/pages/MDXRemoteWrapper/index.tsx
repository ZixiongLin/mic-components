"use client";

import { useMDXComponents } from "@/app/utils/mdx-components";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

export default function MDXRemoteWrapper(props: MDXRemoteProps) {
    const components = useMDXComponents();
    return <MDXRemote {...props} components={components}/>;
}