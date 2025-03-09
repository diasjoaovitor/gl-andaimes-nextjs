import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/globals.css'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://glandaimes.com.br'
      : 'http://localhost:3000'
  ),
  title: 'GL Andaimes | Aluguel de Equipamentos para Construção em Poções-BA',
  description:
    'Líder em aluguel de andaimes, betoneiras e ferramentas para construção civil em Poções-BA. Equipamentos de qualidade com os melhores preços da região.',
  keywords: [
    'Aluguel de Andaimes',
    'Aluguel de Betoneira',
    'Aluguel de Furadeira',
    'Aluguel de Ferramentas',
    'Equipamentos para Construção',
    'Poções BA',
    'Construção Civil',
    'Aluguel de Equipamentos'
  ],
  authors: [{ name: 'GL Andaimes', url: 'https://glandaimes.com.br' }],
  creator: 'GL Andaimes',
  publisher: 'GL Andaimes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://glandaimes.com.br',
    title: 'GL Andaimes | Aluguel de Equipamentos para Construção',
    description:
      'Líder em aluguel de andaimes, betoneiras e ferramentas para construção civil em Poções-BA. Equipamentos de qualidade com os melhores preços da região.',
    siteName: 'GL Andaimes',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo GL Andaimes'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GL Andaimes | Aluguel de Equipamentos para Construção',
    description:
      'Líder em aluguel de andaimes, betoneiras e ferramentas para construção civil em Poções-BA.',
    images: ['/logo.png']
  },
  icons: {
    icon: '/favicon.ico'
  }
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang="pt-br">
    <body className={`${roboto.className} antialiased`}>{children}</body>
  </html>
)

export default RootLayout
