import Image from 'next/image'

import logo from '../assets/icons/logo-alt.svg'
import unbLogo from '../assets/images/unb.avif'
import fapLogo from '../assets/images/fap.avif'
import finatecLogo from '../assets/images/finatec.svg'
import aebLogo from '../assets/images/aeb.avif'
import anatelLogo from '../assets/images/anatel.avif'

export function Partners() {
  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <Image src={logo} alt="perception" className="w-[216px]" />

      <div className="flex max-w-5xl flex-wrap items-center justify-center gap-5">
        <Image className="w-40 mix-blend-multiply" src={unbLogo} alt="unb" />
        <Image className="w-40" src={finatecLogo} alt="finatec" />
        <Image className="w-40 mix-blend-multiply" src={fapLogo} alt="fapdf" />
        <Image className="w-40" src={aebLogo} alt="aeb" />
        <Image className="w-20" src={anatelLogo} alt="anatel" />
      </div>
    </section>
  )
}
