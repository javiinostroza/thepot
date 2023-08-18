import Button from './_components/button'
import { inter, lzetta } from '../../fonts'

export default function Home() {
  return (
    <div>
      <div className={inter.className}>
        <p className='big-text'>Tiempo del cronómetro</p>
      </div>
      <div className={lzetta.className}>
        <p className='big-text'>Primera Ronda</p>
        <p className='big-text bold'>Equipo 1</p>
        <Button classes="main-btn red-btn">Jugar</Button>
        <Button classes="main-btn yellow-btn">Instrucciones</Button>
        <Button classes="main-btn blue-btn">Ingresar Palabras</Button>
      </div>
    </div>
  )
}
