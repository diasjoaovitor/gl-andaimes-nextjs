import Image from 'next/image'
import { contact } from '@/constants'
import { Fade } from 'react-awesome-reveal'

const keys = Object.keys(contact).filter(
  (key) => key !== 'github'
) as (keyof typeof contact)[]

export const Contact = () => {
  return (
    <section>
      <Fade direction="right" cascade triggerOnce>
        <div className="container mx-auto px-2 py-8">
          <h2 className="title">Contato</h2>
          <address className="flex flex-col gap-4 not-italic">
            <Fade direction="up" cascade triggerOnce>
              {keys.map((key, index) => {
                const { label, url, iconSrc, alt } = contact[key]
                return (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    className="flex items-center gap-2 duration-500 hover:bg-zinc-800"
                  >
                    <Image src={iconSrc} alt={alt} width={25} height={25} />
                    <span>{label}</span>
                  </a>
                )
              })}
            </Fade>
          </address>
        </div>
      </Fade>
    </section>
  )
}
