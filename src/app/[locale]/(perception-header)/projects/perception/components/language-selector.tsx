'use client'

import { useLocale } from 'next-intl'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
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

  const languages: Record<(typeof routing.locales)[number], ReactElement> = {
    // en: <Image src={usFlagIcon} alt="EN" width={20} priority />,
    'pt-BR': <Image src={brFlagIcon} alt="BR" width={20} priority />,
    // es: <Image src={esFlagIcon} alt="ES" width={20} priority />,
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
          className="z-50 rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
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
                  className="relative flex h-[25px] select-none items-center rounded-md px-[5px] leading-none outline-none hover:bg-unbBlue-200 focus:bg-unbBlue-200   data-[disabled]:pointer-events-none"
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
