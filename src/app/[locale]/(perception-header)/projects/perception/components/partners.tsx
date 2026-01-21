// OrbitLayout.tsx
import Image, { StaticImageData } from 'next/image'
import React from 'react'

export interface OrbitLayoutProps {
  centerImage: string
  orbitImages: {
    src: StaticImageData
    width: number
    height?: number
    url: string
  }[]
  containerSize?: number // largura/altura do container em px
  orbitRadius?: number // raio da “órbita” em px
  centerSize?: number // tamanho da imagem central em px
  orbitSize?: number // tamanho de cada imagem orbital em px
}

export function OrbitLayout({
  centerImage,
  orbitImages,
  containerSize = 400,
  orbitRadius = 150,
  centerSize = 80,
  orbitSize = 60,
}: OrbitLayoutProps) {
  // ângulos iguais para cada uma das orbitais
  const angles = React.useMemo(
    () => orbitImages.map((_, i) => (i * 360) / orbitImages.length),
    [orbitImages],
  )

  const half = containerSize / 2

  return (
    <div
      className="relative -mb-130 origin-top scale-[35%] transform sm:-mb-100 sm:scale-50 md:-mb-62.5 md:scale-[70%] lg:mb-0 lg:scale-100"
      style={{ width: containerSize, height: containerSize }}
    >
      {/* SVG de fundo: círculo + linhas */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${containerSize} ${containerSize}`}
      >
        {/* círculo ao redor da imagem central */}
        <circle
          cx={half}
          cy={half}
          r={0.75 * centerSize}
          className="stroke-perceptionOrange-300"
          strokeWidth={2}
          fill="none"
        />

        {/* linhas conectando a central às orbitais */}
        {angles.map((angle, idx) => {
          const rad = (angle * Math.PI) / 180
          // ponto inicial: na circunferência do círculo central
          const startX = half + 0.75 * centerSize * Math.cos(rad)
          const startY = half + 0.75 * centerSize * Math.sin(rad)

          // ponto final: posição orbital
          const endX = half + orbitRadius * Math.cos(rad)
          const endY = half + orbitRadius * Math.sin(rad)
          return (
            <line
              key={idx}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              className="stroke-unbBlack-50"
              strokeWidth={2}
            />
          )
        })}
      </svg>

      {/* imagem central */}
      <Image
        src={centerImage}
        alt="Central"
        className="bg-unbBlack-0 absolute rounded-xl"
        style={{
          width: centerSize,
          height: centerSize,
          top: `calc(50% - ${centerSize / 2}px)`,
          left: `calc(50% - ${centerSize / 2}px)`,
        }}
      />

      {/* imagens orbitais */}
      {orbitImages.map(({ src, width, height, url }, idx) => {
        const angle = angles[idx]
        const rad = (angle * Math.PI) / 180
        const xPos = half + orbitRadius * Math.cos(rad) - width / 2
        const yPos =
          half + orbitRadius * Math.sin(rad) - (height ?? orbitSize) / 2

        return (
          <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
            <Image
              src={src}
              alt={`Orbit ${idx}`}
              className="bg-unbBlack-0 absolute"
              style={{
                width,
                height: height ?? 'auto',
                objectFit: 'contain',
                top: yPos,
                left: xPos,
              }}
            />
          </a>
        )
      })}
    </div>
  )
}
