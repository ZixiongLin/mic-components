import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SideMenu } from '../index'

describe('side menu', () => {
  it('render component', () => {
    render(<SideMenu data-testid='side-menu' />)
    expect(screen.getByTestId('side-menu')).not.toBeNull()
  })
})
