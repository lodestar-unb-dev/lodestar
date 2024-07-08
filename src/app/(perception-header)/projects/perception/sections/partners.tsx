import Image from 'next/image'

import logo from '../assets/icons/logo-alt.svg'
import unbLogo from '../assets/images/unb.jpg'
import fapLogo from '../assets/images/fap.avif'
import aebLogo from '../assets/images/aeb.avif'
import anatelLogo from '../assets/images/anatel.avif'
import lbaLogo from '../assets/images/lba.png'
import ueaLogo from '../assets/images/uea.png'
import vigoLogo from '../assets/images/vigo.png'
import alenLogo from '../assets/images/alen.png'

export function Partners() {
  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <Image src={logo} alt="perception" className="w-[216px]" />

      <div className="flex max-w-5xl flex-wrap justify-center gap-5 text-unbBlue-400">
        <div className="flex flex-col items-center gap-2">
          <p className="font-medium uppercase">Realization</p>
          <Image
            className="h-20 w-auto mix-blend-multiply"
            src={unbLogo}
            alt="unb"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="font-medium uppercase">Funder</p>
          <Image
            className="h-20 w-auto mix-blend-multiply"
            src={fapLogo}
            alt="fapdf"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="font-medium uppercase">Partner and technical support</p>
          <div className="flex items-center gap-10">
            <Image className="h-20 w-auto" src={aebLogo} alt="aeb" />
            <Image className="h-20 w-auto" src={anatelLogo} alt="anatel" />
            <Image className="h-20 w-auto" src={lbaLogo} alt="LBA" />
            <Image
              className="h-20 w-auto mix-blend-multiply"
              src={ueaLogo}
              alt="UEA"
            />
            <Image className="h-20 w-auto" src={alenLogo} alt="alen" />
            <Image
              className="h-20 w-auto"
              src={vigoLogo}
              alt="UniversidadeVigo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
