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

  describe("size", () => {
    it('have rows', () => {
      render(<Textarea id='textarea' data-testid='textarea' rows={20}>Label</Textarea>)
      expect(screen.getByTestId('textarea').getAttribute('rows')).toEqual('20')
    })

    it('have cols', () => {
      render(<Textarea id='textarea' data-testid='textarea' cols={20}>Label</Textarea>)
      expect(screen.getByTestId('textarea').getAttribute('cols')).toEqual('20')
    })
    it('have rows and cols', () => {
      render(<Textarea id='textarea' data-testid='textarea' rows={20} cols={20}>Label</Textarea>)
      expect(screen.getByTestId('textarea').getAttribute('rows')).toEqual('20')
      expect(screen.getByTestId('textarea').getAttribute('cols')).toEqual('20')
    })
  })

})
