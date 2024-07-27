// Suggested code may be subject to a license. Learn more: ~LicenseLog:1974364495.
import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { Link } from '@/app/components/Link'
import { describe, it, expect, afterEach } from 'vitest'

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
})
