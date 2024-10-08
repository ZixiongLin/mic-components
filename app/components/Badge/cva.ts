import { cva } from 'class-variance-authority'

export const cvaBadge = cva('badget', {
  variants: {
    variant: {
      success: ['bg-success-100 text-success-300 border  py-1 px-3 rounded-full text-xs uppercase'],
      removed: ['bg-error-100 text-error-300 border  py-1 px-4 rounded-full text-xs uppercase'],
      progress: ['bg-primary-100 text-primary-800 border  py-1 px-4 rounded-full text-xs uppercase'],
      trial: ['bg-neutrals-100 text-neutrals-800 border border-neutrals-300  py-1 px-4 rounded-full text-xs uppercase'],
      moved: ['bg-warning-100 text-warning-300 border  py-1 px-4 rounded-full text-xs uppercase'],
      beta: ['bg-secondary-100 text-secondary-800 border py-1 px-4 rounded-full text-xs uppercase']
    }
  },
  compoundVariants: [{ variant: 'success' }],
  defaultVariants: {
    variant: 'success'
  }
})
