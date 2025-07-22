'use client'

// eslint-disable-next-line no-restricted-imports
import { LinkProps } from 'next/link'
import { usePathname, Link } from '@/i18n/routing'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends LinkProps {
  children: ReactNode
  className?: string | undefined
  locale?: 'en' | 'pt-BR' | 'es' | undefined
  prefetch?: boolean | undefined
}

export function HeaderLink({
  children,
  className,
  href,
  prefetch,
  locale,
  ...rest
}: Props) {
  const pathname = usePathname()
  const isActive = href.toString() === pathname

  return (
    <Link
      className={twMerge(
        'font-normal transition-all',
        className,
        isActive && 'font-bold',
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
