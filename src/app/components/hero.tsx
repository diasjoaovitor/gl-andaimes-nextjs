import Image from 'next/image'
import { contact } from '@/constants'
import { Button } from './ui/button'

export const Hero = () => {
  return (
    <section className="container mx-auto md:flex md:justify-between md:gap-8">
      <div className="md:w-1/2 lg:w-2/3">
        <h2 className="text-5xl mb-8 font-bold leading-tight">
          Aluguel de Andaimes e Ferramentas para Construção
          <span className="text-yellow-400">.</span>
        </h2>
        <p className="text-2xl text-gray-200">
          A solução completa para suas obras. Alugue andaimes, furadeiras,
          marteletes e muito mais!
        </p>
        <Button
          asChild
          className="bg-yellow-400 text-2xl text-black p-6 hover:bg-yellow-500 my-8"
        >
          <a href={contact.whatsApp.url} target="_blank">
            Solicitar Orçamento
          </a>
        </Button>
      </div>
      <Image
        src="/illustration.svg"
        alt="Ilustração de um homem num andaime pintando uma parede"
        width={800}
        height={800}
        className="flex-1 w-full"
      />
    </section>
  )
}
