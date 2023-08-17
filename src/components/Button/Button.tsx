
import { cls } from '@/utils/cls-styles'
import Link from 'next/link'
import React, { forwardRef } from 'react'

export type TButton =
  | 'primary'
  | 'linear'
  | 'blue'
  | 'green'
  | 'red'
  | 'black'
  | 'gray'
  | 'gray-strong'
  | 'selector'

const classes = {
  base: `
    !outline-none block transition ease-in-out duration-300 
    disabled:opacity-50 disabled:cursor-not-allowed rounded-md`,
  size: `
    px-3.5 py-1 lg:px-4 lg:py-1.5 text-sm 
  `,
  variant: {
    primary: 'bg-orange hover:bg-orange-110 text-white',
    blue: 'bg-skyblue-90 hover:bg-blue text-white',
    green: 'bg-green hover:bg-green-120 text-black',
    red: 'bg-red hover:bg-red-120 text-black',
    linear: 'border border-black',
    black: 'bg-black hover:bg-black-90 text-white',
    gray: 'bg-gray-150 hover:bg-black-40',
    'gray-strong': 'bg-black-80 hover:bg-black-90 text-white',
    selector: 'bg-white border border-gray-150 pr-6 pl-2 rounded-md'
  }
}

interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: TButton
  url?: string
  isLoading?: boolean
}

const ButtonLoader = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className=" text-gray-150"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
)

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      children,
      type = 'button',
      variant = 'primary',
      disabled = false,
      className,
      url = '',
      isLoading,
      ...props
    },
    ref
  ) => {
    if (url) {
      return (
        <Link
          href={url}
          passHref
          className={cls(`
            text-center
            ${classes.base}
            ${classes.size}
            ${classes.variant[variant]}
            ${className ?? ''}
          `)}
          {...props}
        >
          {children}
        </Link>
      )
    } else if (isLoading) {
      return (
        <button
          ref={ref}
          disabled={disabled}
          type={type}
          className={cls(`
          ${classes.base}
          ${classes.size}
          ${classes.variant[variant]}
          ${className ?? ''}
      `)}
          {...props}
        >
          <ButtonLoader />
        </button>
      )
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={cls(`
          ${classes.base}
          ${classes.size}
          ${classes.variant[variant]}
          ${className ?? ''}
      `)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
