import MDXRemoteWrapper from "@/app/pages/MDXRemoteWrapper";
import {getPostBySlug} from "@/app/lib/posts";
import { serialize } from "next-mdx-remote/serialize";


const Page = async (
    { params }: { params: { slug: string,title:string }}
) => {
    const {
        slug,
    }  = params;
    let {
        content,
    } = getPostBySlug({slug});
    let mdxSource =await serialize(content)

    return <div>
            <MDXRemoteWrapper {...mdxSource}  />
    </div>
}

export default Page;