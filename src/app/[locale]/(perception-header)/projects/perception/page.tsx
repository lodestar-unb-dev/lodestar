import { Hero } from './sections/hero'
import { PerceptionSystem } from './sections/perception-system'
import { More } from './sections/more'
import { Instagram } from './sections/instagram'
import { DataPlatformStructure } from './sections/data-platform-structure'
import { DigitalTwin } from './sections/digital-twin'

export default function Perception() {
  return (
    <main>
      <Hero />
      <PerceptionSystem />
      <DigitalTwin />
      <DataPlatformStructure />
      <More />
      <Instagram />
    </main>
  )
}
