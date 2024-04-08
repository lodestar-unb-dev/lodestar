'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends LinkProps {
  children: ReactNode
  className?: string | undefined
}

export function HeaderLink({ children, className, href, ...rest }: Props) {
  const pathname = usePathname()
  const isActive =
    href.toString() === '/'
      ? pathname === '/'
      : pathname.includes(href.toString())

  return (
    <Link
      className={twMerge(
        'text-unbBlack-25 hover:text-unbBlack-5 text-lg transition-colors',
        isActive && 'text-unbBlack-5 font-bold',
        className,
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}
