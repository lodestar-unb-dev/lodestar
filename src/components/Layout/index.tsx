import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

type Props = {
    children: ReactNode
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export function Layout ({ children }: Props) {
  const routeBackgroundColor = {
    "/": "var(--blue-dark)",
    "/projects": "var(--black-5)",
    "/about": "var(--black-5)",
    "/contact": "var(--blue-dark)",
  }
  const router = useRouter();
  
  return (
      <motion.main
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{ duration: .3 }}
      >
        {children}
      </motion.main>
  )
}