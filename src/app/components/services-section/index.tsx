import { Check, LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Carousel } from './carousel'
import { Fade } from 'react-awesome-reveal'

const listItems: {
  label: string
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
}[] = [
  'Aluguel de Andaimes',
  'Aluguel de Betoneiras',
  'Aluguel de Ferramentas Elétricas (furadeiras, marteletes, etc.)'
].map((value) => ({ label: value, Icon: Check }))

export const Services = () => {
  return (
    <section className="bg-gradient-to-tl from-gray-300 to-white text-black">
      <div className="container mx-auto px-2 py-8">
        <Fade direction="top-left" cascade triggerOnce>
          <h2 className="title">Nossos Serviços</h2>
          <ul className="flex flex-col gap-2">
            {listItems.map(({ label, Icon }, index) => (
              <li
                key={index}
                className="flex items-center gap-1 p-1 text-lg duration-500 hover:bg-gray-200"
              >
                <Icon />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </Fade>
        <Fade direction="up" triggerOnce>
          <Carousel />
        </Fade>
      </div>
    </section>
  )
}
