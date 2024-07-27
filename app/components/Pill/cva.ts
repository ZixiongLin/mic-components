import { cva } from 'class-variance-authority'

export const cvaPill = cva('pill', {
  variants: {
    variant: {
      success: ['flex justify-center bg-success-100 text-success-300  m-2 p-1 rounded-full text-xs font-semibold'],
      removed: ['flex justify-center bg-error-100 text-error-300  m-2 p-1 rounded-full text-xs font-semibold'],
      progress: ['flex justify-center bg-primary-100 text-primary-800  m-2 p-1 rounded-full text-xs font-semibold'],
      trial: ['flex justify-center bg-neutrals-100 text-neutrals-800  m-2 p-1 rounded-full text-xs font-semibold'],
      moved: ['flex justify-center bg-warning-100 text-warning-300  m-2 p-1 rounded-full text-xs font-semibold'],
      beta: ['flex justify-center bg-secondary-100 text-secondary-800  m-2 p-1 rounded-full text-xs font-semibold']
    }
  },
  compoundVariants: [{ variant: 'success' }],
  defaultVariants: {
    variant: 'success'
  }
})
