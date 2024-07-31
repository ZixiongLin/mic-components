import { render, screen } from '@testing-library/react'
// import { Button } from '@/app/components/Button';
import { describe, it, expect } from 'vitest'

import { Button } from '@/app/components/Button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByText('Click me')
    // expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDefined()
  })

  it('renders with different sizes', () => {
    render(<Button size='xs'>Small</Button>)
    render(<Button size='md'>Medium</Button>)
    render(<Button size='lg'>Large</Button>)

    expect(screen.getByText('Small').classList).toContain('text-sm')
    expect(screen.getByText('Medium').classList).toContain('text-base')
    expect(screen.getByText('Large').classList).toContain('text-lg')
  })

  it('renders with different variants', () => {
    render(<Button variant='solid'>SOLID</Button>)
    render(<Button variant='bordered'>BORDERED</Button>)
    render(<Button variant='light'>LIGHT</Button>)

    expect(screen.getByText('SOLID').classList).toContain('bg-primary-900')
    expect(screen.getByText('BORDERED').classList).toContain('border')
    expect(screen.getByText('LIGHT').classList).toContain('hover:bg-primary-900')
  })
})
