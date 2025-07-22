'use client'

import React, { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './carousel-dot-buttons'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './carousel-arrow-buttons'
import useEmblaCarousel from 'embla-carousel-react'
import { InstagramEmbed } from 'react-social-media-embed'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

export function Carousel(props: PropType) {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
    }
  }, [])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((post) => (
            <div className="embla__slide" key={post}>
              <div className="embla__slide__number">
                {isClient ? <InstagramEmbed url={post} /> : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
