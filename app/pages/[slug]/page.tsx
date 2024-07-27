import MDXRemoteWrapper from "@/app/pages/MDXRemoteWrapper";
import getSortedPostsData, {getPostBySlug} from "@/app/lib/posts";
import { serialize } from "next-mdx-remote/serialize";
import { useMDXComponents } from "@/app/utils/mdx-components";
import { MDXProvider } from '@mdx-js/react'


const Page = async (
    { params }: { params: { slug: string,title:string }}
) => {
    const {
        slug,
    }  = params;
    let {
        content,
        title
    } = getPostBySlug({slug});
    let mdxSource =await serialize(content)
    const components = useMDXComponents();

    return <div>
            <MDXRemoteWrapper {...mdxSource}  />
    </div>
}

export default Page;