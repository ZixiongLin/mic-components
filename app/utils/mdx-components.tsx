import type { MDXComponents } from 'mdx/types'
import { Button } from '@/app/components/Button'
 
export function useMDXComponents(): MDXComponents {
  return {
    // ...components,
    Button: Button
  }
}