'use client'

import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '../ui/button'
import { slides } from './slides'

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay({ delay: 3000 })])

  const handleButtonClick = (direction: 'prev' | 'next') => {
    if (!emblaApi) return
    if (direction === 'prev') {
      if (!emblaApi.canScrollPrev()) {
        emblaApi.scrollTo(emblaApi.slideNodes().length - 1)
        return
      }
      emblaApi.scrollPrev()
    } else {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0)
        return
      }
      emblaApi.scrollNext()
    }
    const autoplay = emblaApi.plugins()?.autoplay
    if (!autoplay) return

    autoplay.stop()

    setTimeout(() => {
      autoplay.play()
    }, 5000)
  }

  return (
    <div className="mt-4 flex items-center justify-between gap-4">
      <Button onClick={() => handleButtonClick('prev')}>
        <ArrowLeft />
      </Button>
      <div ref={emblaRef} className="overflow-x-hidden">
        <div className="flex gap-4">
          {slides.map(({ alt, label, src, url }, index) => (
            <a
              key={index}
              className="flex-0-0-100 bg-gradient-to-tr from-zinc-900 to-zinc-700 p-4 text-white sm:flex-0-0-50 lg:flex-0-0-25"
              href={url}
              target="_blank"
            >
              <figure className="flex h-full flex-col items-center justify-between gap-2">
                <Image
                  src={src}
                  alt={alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full max-w-xs"
                />
                <figcaption>{label}</figcaption>
              </figure>
            </a>
          ))}
        </div>
      </div>
      <Button onClick={() => handleButtonClick('next')}>
        <ArrowRight />
      </Button>
    </div>
  )
}
