import type { MDXComponents } from 'mdx/types'
import { Button } from '@/app/components/Button'
import { Badge } from '@/app/components/Badge'
import { Pill } from '@/app/components/Pill'

export function useMDXComponents (): MDXComponents {
  return {
    // ...components,
    Button,
    Badge,
    Pill
  }
}
