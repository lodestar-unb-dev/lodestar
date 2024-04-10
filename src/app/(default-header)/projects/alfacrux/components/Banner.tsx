import { intervalToDuration } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const launchDate = new Date(2022, 3, 1, 13, 24, 0, 0)

export function Banner() {
  const [countdown, setCountdown] = useState(
    intervalToDuration({
      start: new Date(),
      end: launchDate,
    }),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(
        intervalToDuration({
          start: launchDate,
          end: new Date(),
        }),
      )
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section
      role="banner"
      className="bg-[url('https://images.prismic.io/lodestar/c24148af-10bf-4b98-bc87-3a4b937f7070_alfacrux_banner.webp?auto=compress,format&rect=0,0,1280,720&w=2560&h=1440')]"
    >
      <div>
        Did you know that you can actively help our project and consume
        AlfaCrux`s latest data{' '}
        <Link href="/projects/alfacrux/radio">with just one click?</Link>
      </div>

      <div>
        <header>
          <h3>
            Mission Elapsed Time <small>🚀</small>
          </h3>
        </header>

        <section>
          {(countdown.years ?? 0) > 0 && (
            <div>
              <p>{countdown.years}</p>
              <strong>year{countdown.years !== 1 && 's'}</strong>
            </div>
          )}

          {(countdown.years ?? 0) + (countdown.months ?? 0) > 0 && (
            <div>
              <p>{countdown.months}</p>
              <strong>month{countdown.months !== 1 && 's'}</strong>
            </div>
          )}

          {(countdown.years ?? 0) +
            (countdown.months ?? 0) +
            (countdown.days ?? 0) >
            0 && (
            <div>
              <p>{countdown.days}</p>
              <strong>day{countdown.days !== 1 && 's'}</strong>
            </div>
          )}

          {(countdown.years ?? 0) +
            (countdown.months ?? 0) +
            (countdown.days ?? 0) +
            (countdown.hours ?? 0) >
            0 && (
            <div>
              <p>{countdown.hours}</p>
              <strong>hour{countdown.hours !== 1 && 's'}</strong>
            </div>
          )}

          {(countdown.years ?? 0) +
            (countdown.months ?? 0) +
            (countdown.days ?? 0) +
            (countdown.hours ?? 0) +
            (countdown.minutes ?? 0) >
            0 && (
            <div>
              <p>{countdown.minutes}</p>
              <strong>minute{countdown.minutes !== 1 && 's'}</strong>
            </div>
          )}

          {(countdown.years ?? 0) +
            (countdown.months ?? 0) +
            (countdown.days ?? 0) +
            (countdown.hours ?? 0) +
            (countdown.minutes ?? 0) +
            (countdown.seconds ?? 0) >
            0 && (
            <div>
              <p>{countdown.seconds}</p>
              <strong>second{countdown.seconds !== 1 && 's'}</strong>
            </div>
          )}
        </section>
      </div>
      <Image
        src="https://images.prismic.io/lodestar/7afc16e4-a88d-4e22-b8f4-e6e4b28ddb94_alfacrux_logo.webp?auto=compress,format&rect=0,0,1146,951&w=400&h=332"
        width={100}
        height={83}
        alt="AlfaCrux Logo"
      />
    </section>
  )
}
