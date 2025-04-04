import Image from 'next/image'

import heroBg from '../assets/images/hero-bg.jpg'
import logoText from '../assets/icons/logo-text.svg'

export function Hero() {
  return (
    <section className="relative">
      <Image className="max-h-screen w-full object-cover" src={heroBg} alt="" />

      <Image
        src={logoText}
        className="absolute bottom-1/4 left-[10%] w-1/2 2xl:w-auto"
        alt="perception"
      />
    </section>
  )
}
