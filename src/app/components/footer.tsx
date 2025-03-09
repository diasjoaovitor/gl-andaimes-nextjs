import Image from 'next/image'
import { contact } from '@/constants'
import { Fade } from 'react-awesome-reveal'

export const Footer = () => {
  return (
    <footer className="container mx-auto px-2 py-8 text-center">
      <Fade direction="up" cascade triggerOnce>
        <p>&copy; GL Andaimes. Todos os direitos reservados.</p>
        <p>
          <a
            href={contact.github.url}
            target="_blank"
            className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-400"
          >
            <Image
              loading="lazy"
              src={contact.github.iconSrc}
              alt={contact.github.alt}
              width={15}
              height={15}
            />
            {contact.github.label}
          </a>
        </p>
      </Fade>
    </footer>
  )
}
