'use client'

import * as Collapsible from '@radix-ui/react-collapsible'

import { ArrowDown, Instagram, Mail, Send } from 'lucide-react'
import Image from 'next/image'

import sectionBg from '../assets/images/section-bg.jpg'

export function Second() {
  return (
    <section className="bg-[#1A3E76]">
      <Image
        className="max-h-screen w-full object-cover"
        src={sectionBg}
        alt=""
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 pt-10 text-justify">
        <h2 className="text-left text-3xl font-bold text-[#68C4EF]">
          BEHIND THE NAME: THE MEANING OF PERCEPTION
        </h2>

        <div className="flex items-end justify-between gap-10 pb-6 pr-10 lg:pr-24">
          <Collapsible.Root className="flex flex-col space-y-5 text-unbBlack-0">
            <div className="space-y-5">
              <p>The name PERCEPTION...</p>
            </div>
            {/* <Collapsible.Content className="space-y-5">
              <p className="hidden"></p>
            </Collapsible.Content> */}

            <Collapsible.Trigger className="group flex gap-1 self-end p-4 text-xl uppercase text-unbBlack-0">
              <span>Saiba mais</span>
              <ArrowDown className="group-data-[state=open]:rotate-180" />
            </Collapsible.Trigger>
          </Collapsible.Root>

          <div className="absolute bottom-0 right-1 flex translate-y-[1.825rem] flex-col gap-1 lg:translate-y-[3.25rem] lg:gap-4">
            <a
              className="block rounded-full bg-[#EE761B] p-2 lg:p-5"
              href="https://www.google.com/maps?ll=-15.765864,-47.872008&z=17&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=15811106266737998069"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="lg:size-10" />
            </a>

            <a
              className="block rounded-full bg-[#EE761B] p-2 lg:p-5"
              href="mailto:lodestar@aerospace.unb.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="lg:size-10" />
            </a>

            <a
              className="block rounded-full bg-[#EE761B] p-2 lg:p-5"
              href="https://www.instagram.com/lodestar_unb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="lg:size-10" />
            </a>
          </div>
        </div>
      </div>

      <div className="h-5 w-full bg-[#EE761B]" />
    </section>
  )
}
