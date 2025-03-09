import Image from 'next/image'
import { contact } from '@/constants'
import { Button } from './ui/button'
import { Fade } from 'react-awesome-reveal'

export const Hero = () => {
  return (
    <main className="container mx-auto mb-8 items-center justify-between gap-8 px-2 md:flex">
      <Fade direction="right" triggerOnce>
        <div>
          <h2 className="mb-8 text-5xl font-bold leading-tight">
            Aluguel de Andaimes e Ferramentas para Construção
            <span className="text-yellow-400">.</span>
          </h2>
          <p className="text-2xl text-gray-200">
            A solução completa para suas obras. Alugue andaimes, furadeiras,
            marteletes e muito mais!
          </p>
          <Button
            asChild
            className="my-8 bg-yellow-400 p-6 text-2xl text-black hover:bg-yellow-500"
          >
            <a href={contact.whatsApp.url} target="_blank">
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      </Fade>
      <Fade direction="up" triggerOnce className="w-full p-0 lg:max-w-sm">
        <Image
          src="/illustration.svg"
          alt="Ilustração de um homem num andaime pintando uma parede"
          width={0}
          height={0}
          className="mx-auto w-full max-w-xs"
          loading="lazy"
        />
      </Fade>
    </main>
  )
}
