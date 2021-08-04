import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'

interface IProps extends LinkProps {
    children: ReactNode
}

export function NoScrollLink ({ children, href, passHref }: IProps) {
  return (
    <Link href={href} passHref={passHref} scroll={false}>
        {children}
    </Link>
  )
}