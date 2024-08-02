import React from 'react'
import { render, screen } from '@testing-library/react'
import { Link } from '@/app/components/Link'
import { describe, it, expect } from 'vitest'
import { cvaLink } from '../cva'

describe('Link component', () => {
  it('renders if link exist', () => {
    render(<Link href='https://www.example.com'>Example Link</Link>)
    const linkElement = screen.getByRole('link', { name: 'Example Link' })
    expect(linkElement).not.toBeNull()
  })

  it('renders a link with the correct href and text', () => {
    render(<Link href='https://www.example.com'>Example Link</Link>)
    const linkElement = screen.getByRole('link', { name: 'Example Link' })
    expect(linkElement.getAttribute('href')).toEqual('https://www.example.com')
  })

  describe("variants", ()=> {
    it("default variant", () => {
      render(<Link href='https://www.example.com'>Example Link</Link>)
      const linkElement = screen.getByRole('link', { name: 'Example Link' })
      expect(linkElement.className).toEqual(cvaLink({variant:"default"}))
    })

    it("when default variant is explicit", () => {
      render(<Link href='https://www.example.com' variant='default'>Example Link</Link>)
      const linkElement = screen.getByRole('link', { name: 'Example Link' })
      expect(linkElement.className).toEqual(cvaLink({variant:"default"}))
    })
    it("ghost variant", () => {
      render(<Link href='https://www.example.com' variant='ghost'>Example Link</Link>)
      const linkElement = screen.getByRole('link', { name: 'Example Link' })
      expect(linkElement.className).toEqual(cvaLink({variant:"ghost"}))
    })


  })

  it("is active", () => {
    render(<Link href='https://www.example.com' active>Example Link</Link>)
    const linkElement = screen.getByRole('link', { name: 'Example Link' })
    expect(linkElement.className).toEqual(cvaLink({active:true}))
  })
})
