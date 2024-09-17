import { cva } from 'class-variance-authority'

export const cvaProgress = cva('progress', {
  variants: {
    status: {
      success: ['h-4 rounded-[0.2rem] bg-success-300'],
      warning: ['h-4 rounded-[0.2rem] bg-warning-300'],
      error: ['h-4 rounded-[0.2rem] bg-error-300']
    }
  },
  defaultVariants: {
    status: 'success'
  }
})
