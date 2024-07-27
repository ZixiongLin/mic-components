import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), '/app/posts')
interface Post {
  date: any
  slug: string
  title: string
  data: {
    [key: string]: any
  }
  content: string
  excerpt?: string
  orig: string | Buffer
  language: string
  matter: string
  stringify: (lang: string) => string
}
export default function getSortedPostsData (): Post[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    // Combine the data with the id
    const post = {
      ...matterResult,
      date: matterResult.data.date,
      slug: id,
      title: id.replaceAll('-', ' ')
    }
    return post
  })
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug ({ slug }: { slug: string }): Post {
  const posts = getSortedPostsData()
  const postFinded = posts.find((post) => post.slug === slug)
  if (postFinded != null) {
    return {
      ...postFinded
    }
  }
  throw Error('Post not found')
}
