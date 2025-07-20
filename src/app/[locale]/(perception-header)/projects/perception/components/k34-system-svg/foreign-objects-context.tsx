'use client'
import { FullForeignObjects } from './full-foreign-objects'
import { FullForeignObjects2 } from './full-foreign-objects-2'
import { FullForeignObjects3 } from './full-foreign-objects-3'
import { FullForeignObjects4 } from './full-foreign-objects-4'

export function ForeignObjectContext() {
  return (
    <>
      <FullForeignObjects />
      <FullForeignObjects2 />
      <FullForeignObjects3 />
      <FullForeignObjects4 />
    </>
  )
}
