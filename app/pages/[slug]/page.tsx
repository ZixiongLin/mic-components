import MDXRemoteWrapper from '@/app/pages/MDXRemoteWrapper'
import { getPostBySlug } from '@/app/lib/posts'
import { serialize } from 'next-mdx-remote/serialize'

const Page = async (
  { params }: { params: { slug: string, title: string } }
): Promise<JSX.Element> => {
  const {
    slug
  } = params
  const {
    content
  } = getPostBySlug({ slug })
  const mdxSource = await serialize(content)

  return (
    <div>
      <MDXRemoteWrapper {...mdxSource} />
    </div>
  )
}

export default Page
