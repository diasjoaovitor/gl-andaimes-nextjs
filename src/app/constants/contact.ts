export type TContact = Record<
  'whatsApp' | 'instagram' | 'email' | 'location' | 'github',
  {
    label: string
    url: string
    iconSrc: string
    alt: string
  }
>

export const contact: TContact = {
  whatsApp: {
    label: '(77) 9 8150-8316',
    url: 'https://api.whatsapp.com/send?phone=5577981508316',
    iconSrc: '/whatsapp.svg',
    alt: 'Ícone do WhatsApp'
  },
  instagram: {
    label: '@phconstru',
    url: 'https://www.instagram.com/phconstru',
    iconSrc: '/instagram.svg',
    alt: 'Ícone do Instagram'
  },
  email: {
    label: 'gustavo.lima05@hotmail.com',
    url: 'mailto:gustavo.lima05@hotmail.com',
    iconSrc: '/envelope.svg',
    alt: 'Ícone de um envelope'
  },
  location: {
    label: 'Rua Isabel Bourgum, 83, Tigre, Poções-BA',
    url: 'https://maps.app.goo.gl/tCcw62XsWvq8SYCW8',
    iconSrc: '/geo-alt.svg',
    alt: 'Ícone de localização'
  },
  github: {
    label: 'Desenvolvido por João Vitor',
    url: 'https://github.com/diasjoaovitor',
    iconSrc: '/github.svg',
    alt: 'Ícone do GitHub'
  }
}
