'use client'

// eslint-disable-next-line no-restricted-imports
import { LinkProps } from 'next/link'
import { usePathname, Link } from '@/i18n/routing'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends LinkProps {
  children: ReactNode
  className?: string | undefined
  // locale?: 'en' | 'pt-BR' | 'es' | undefined
  locale?: 'pt-BR' | undefined
  prefetch?: boolean | undefined
}

export function HeaderLink({
  children,
  className,
  href,
  locale,
  prefetch,
  ...rest
}: Props) {
  const pathname = usePathname()
  const isActive =
    href.toString() === '/'
      ? pathname === '/'
      : pathname.includes(href.toString())

  return (
    <Link
      className={twMerge(
        'text-lg text-unbBlack-25 transition-colors hover:text-unbBlack-5',
        isActive && 'font-bold text-unbBlack-5',
        className,
      )}
      href={href}
      locale={locale}
      prefetch={prefetch}
      {...rest}
    >
      {children}
    </Link>
  )
}
