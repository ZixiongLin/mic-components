import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Textarea } from '../Textarea'

describe('textarea', () => {
  it('render', () => {
    render(<Textarea id='textarea' data-testid='textarea'>Label</Textarea>)
    expect(screen.getByTestId('textarea')).not.toBeNull()
  })

  it('have label', () => {
    render(<Textarea id='textarea' data-testid='textarea'>Label</Textarea>)
    expect(screen.getAllByLabelText('Label')).not.toBeNull()
  })
})
