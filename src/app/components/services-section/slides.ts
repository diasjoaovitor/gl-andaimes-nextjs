import { contact } from '@/constants'

type TSlide = {
  label: string
  url: string
  src: string
  alt: string
}

const formatUrl = (text: string) => {
  const words = text.split(' ')
  const formatted = `${contact.whatsApp.url}&text=${words.join('%20')}`
  return formatted
}

export const slides: TSlide[] = [
  {
    label: 'Andaime',
    src: '/andaime.png',
    url: formatUrl('Tenho interesse em alugar andaime'),
    alt: 'Andaime'
  },
  {
    label: 'Betoneira',
    src: '/betoneira.png',
    url: formatUrl('Tenho interesse em alugar betoneira'),
    alt: 'Betoneira'
  },
  {
    label: 'Compactador de solo',
    src: '/compactador-de-solo.png',
    url: formatUrl('Tenho interesse em alugar compactador de solo'),
    alt: 'Compactador de solo'
  },
  {
    label: 'Esmerilhadeira',
    src: '/esmerilhadeira.png',
    url: formatUrl('Tenho interesse em alugar esmirilhadeira'),
    alt: 'Esmerilhadeira'
  },
  {
    label: 'Furadeira',
    src: '/furadeira.png',
    url: formatUrl('Tenho interesse em alugar furadeira'),
    alt: 'Furadeira'
  },
  {
    label: 'Martelete',
    src: '/martelete.png',
    url: formatUrl('Tenho interesse em alugar martelete'),
    alt: 'Martelete'
  },
  {
    label: 'Serra Mármore',
    src: '/serra-marmore.png',
    url: formatUrl('Tenho interesse em alugar serra mármore'),
    alt: 'Serra Mármore'
  },
  {
    label: 'Serra Tico Tico',
    src: '/serra-tico-tico.png',
    url: formatUrl('Tenho interesse em alugar serra tico tico'),
    alt: 'Serra Tico Tico'
  }
]
