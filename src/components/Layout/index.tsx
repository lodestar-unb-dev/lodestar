import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
    children: ReactNode
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export function Layout ({ children, ...rest }: Props) {
  return (
      <motion.main
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{ duration: 0.3 }}
        {...rest}
      >
        {children}
      </motion.main>
  )
}