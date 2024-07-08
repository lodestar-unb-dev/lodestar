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
    href.toString() === '/projects/perception'
      ? pathname === '/projects/perception'
      : pathname.includes(href.toString())

  return (
    <Link
      className={twMerge(
        'text-lg text-unbBlack-25 transition-colors hover:text-unbBlack-5',
        isActive && 'font-bold text-unbBlack-5',
        className,
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}
