import { tv, VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes } from 'react'

const button = tv({
  base: [
    'rounded-lg px-4 py-3 text-sm font-semibold outline-none shadow-sm text-base lg:text-lg transition-all',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 shadow-none dark:hover:bg-white/5',
      primary: 'bg-white text-gray-900 hover:shadow-2xl hover:shadow-white/40',
      outline: 'border-2 border-violet-800 text-gray-200 hover:border-white',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean
}

export function Button({ asChild, variant, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return <Component {...props} className={button({ variant, className })} />
}
