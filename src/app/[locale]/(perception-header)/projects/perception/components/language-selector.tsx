'use client'

import { useLocale } from 'next-intl'
import { DropdownMenu } from 'radix-ui'
import { Link, routing, usePathname, useRouter } from '@/i18n/routing'
import Image from 'next/image'

import brFlagIcon from '@/assets/icons/br.svg'
import esFlagIcon from '@/assets/icons/es.svg'
import usFlagIcon from '@/assets/icons/us.svg'
import { ReactElement } from 'react'

export function LanguageSelector() {
  const locale = useLocale() as (typeof routing.locales)[number]
  const pathname = usePathname()
  const router = useRouter()

  const languages: Record<(typeof routing.locales)[number], ReactElement<any>> = {
    en: <Image src={usFlagIcon} alt="EN" width={20} priority />,
    'pt-BR': <Image src={brFlagIcon} alt="BR" width={20} priority />,
    es: <Image src={esFlagIcon} alt="ES" width={20} priority />,
  }

  function handleNavigation(value: string) {
    const key = value as (typeof routing.locales)[number]

    router.push(pathname, { locale: key })
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>{languages[locale]}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade z-50 rounded-md bg-white p-1.25 shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] will-change-[opacity,transform]"
          sideOffset={5}
        >
          <DropdownMenu.RadioGroup
            value={locale}
            onValueChange={handleNavigation}
          >
            {Object.keys(languages).map((value) => {
              const key = value as (typeof routing.locales)[number]

              return (
                <DropdownMenu.RadioItem
                  key={key}
                  value={key}
                  className="hover:bg-unbBlue-200 focus:bg-unbBlue-200 relative flex h-6.25 items-center rounded-md px-1.25 leading-none outline-none select-none data-disabled:pointer-events-none"
                >
                  <Link href={pathname} locale={key}>
                    {languages[key]}
                  </Link>
                </DropdownMenu.RadioItem>
              )
            })}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
