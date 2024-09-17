import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from '../index'

describe('Navbar', () => {
  it('render component', () => {
    render(<Navbar data-testid='navbar' />)
    expect(screen.getByTestId('navbar')).not.toBeNull()
  })
})
