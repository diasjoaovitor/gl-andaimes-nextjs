import { Fade } from 'react-awesome-reveal'

export const Header = () => {
  return (
    <header className="text-center">
      <Fade direction="down" triggerOnce>
        <h1 className="mx-2 my-8 text-2xl">GL Andaimes</h1>
      </Fade>
    </header>
  )
}
