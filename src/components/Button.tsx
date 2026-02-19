import React from 'react'
import { cn } from './utils'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'sm'
}

export default function Button({ variant = 'primary', size = 'md', className, ...props }: Props) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-5 font-medium transition active:translate-y-[1px] disabled:opacity-60 disabled:pointer-events-none',
        size === 'md' ? 'h-11 text-[15px]' : 'h-9 text-[14px] px-4',
        variant === 'primary'
          ? 'bg-brand-600 text-white shadow-soft hover:bg-brand-700'
          : 'bg-transparent text-ink-800 hover:bg-ink-900/5 shadow-insetLine',
        className
      )}
      {...props}
    />
  )
}
