import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface Props {
  index: number
  name: string
  organization: string
  image: {
    url: string
    width: number
    height: number
  }
  role: string
  researchArea: string
  lattesUrl: string
}

export function TeamMemberCard({
  index,
  name,
  role,
  researchArea,
  image,
  organization,
  lattesUrl,
}: Props) {
  const colorNumber = ((index + 1) % 3) as 0 | 1 | 2
  const colors = {
    0: 'black',
    1: 'blue',
    2: 'green',
  } as const
  const highlightColor = colors[colorNumber]

  return (
    <a
      className="flex w-64 flex-col justify-self-center rounded-xl bg-unbBlack-5 transition-all hover:opacity-80 min-[560px]:w-80"
      href={lattesUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <section className="ml-3 mt-3 min-[560px]:ml-7 min-[560px]:mt-7">
        <h3 className="mb-3 text-xl min-[560px]:text-3xl">{name}</h3>
        <span
          className={twMerge(
            'inline-block rounded-xl p-2 text-sm text-unbBlack-5 min-[560px]:p-3',
            highlightColor === 'black' && 'bg-unbBlack-100',
            highlightColor === 'blue' && 'bg-unbBlue-400',
            highlightColor === 'green' && 'bg-unbGreen-400',
          )}
        >
          {organization}
        </span>
      </section>

      <Image
        className="mx-auto mt-3 h-48 w-48 object-cover object-top min-[560px]:-mt-8 min-[560px]:ml-auto min-[560px]:mr-0 min-[560px]:h-60 min-[560px]:w-60"
        src={image.url}
        width={image.width}
        height={image.height}
        alt={`${name} photo`}
      />

      <div
        className={twMerge(
          'h-full rounded-bl-xl rounded-br-xl p-3 text-unbBlack-5 min-[560px]:p-4',
          highlightColor === 'black' && 'bg-unbBlack-100',
          highlightColor === 'blue' && 'bg-unbBlue-400',
          highlightColor === 'green' && 'bg-unbGreen-400',
        )}
      >
        <strong>{role}</strong>
        <br />
        <strong>Research Area: </strong>
        <span>{researchArea}</span>
      </div>
    </a>
  )
}
