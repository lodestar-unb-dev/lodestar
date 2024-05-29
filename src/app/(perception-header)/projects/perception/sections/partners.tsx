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

      <div className="flex max-w-5xl flex-wrap justify-center gap-5 text-unbBlue-400">
        <div className="flex flex-col items-center gap-2">
          <p className="font-medium uppercase">Realization</p>
          <Image className="w-40 mix-blend-multiply" src={unbLogo} alt="unb" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="font-medium uppercase">Funder</p>
          <Image
            className="w-40 mix-blend-multiply"
            src={fapLogo}
            alt="fapdf"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="font-medium uppercase">Partner and technical support</p>
          <div className="flex items-center gap-10">
            <Image className="w-40" src={aebLogo} alt="aeb" />
            <Image className="w-20" src={anatelLogo} alt="anatel" />
          </div>
        </div>
      </div>
    </section>
  )
}
