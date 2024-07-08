'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  id: string
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function Layout({ children, id, ...rest }: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      key={id}
      transition={{ duration: 0.3 }}
      className="h-full"
      {...rest}
    >
      {children}
    </motion.div>
  )
}
