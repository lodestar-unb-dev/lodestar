import { Hero } from './sections/hero'
import { PerceptionSystem } from './sections/perception-system'
import { CerradoHotspot } from './sections/cerrado-hotspot'
import { More } from './sections/more'
import { Instagram } from './sections/instagram'
import { DataPlatformStructure } from './sections/data-platform-structure'

export default function Perception() {
  return (
    <main>
      <Hero />
      <PerceptionSystem />
      <CerradoHotspot />
      <DataPlatformStructure />
      <More />
      <Instagram />
    </main>
  )
}
