'use client'

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
        'text-base font-normal text-unbBlack-25 transition-colors hover:text-unbBlack-5 min-[560px]:text-lg',
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
