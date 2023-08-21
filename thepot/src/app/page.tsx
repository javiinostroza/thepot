'use client'

import Button from './_components/button'
import Input from './_components/input'
import TimeSelector from './_components/timeSelector'
import StageCard from './_components/stageCard'
import WordCard from './_components/wordCard'
import { inter, lzetta } from './fonts'
import Start from './_pages/start'
import Settings from './_pages/settings'
import RandomPot from './randomPot'
import { useEffect } from 'react'
import RandomWords from './_pages/randomWords'

export default function Home() {
  // useEffect(() => {
  //   let words = RandomPot(14);
  //   console.log(words)
  //   console.log("---------")
  //   let words1 = RandomPot(100);
  //   console.log(words1)
  //   console.log("---------")
  //   let words2 = RandomPot(40);
  //   console.log(words2)
  //   console.log("---------")
  // })


  // const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   console.log("HOLA")
  // };
  return (
    // <Start></Start>
    // <Settings></Settings>
    <RandomWords></RandomWords>
  )

  // return (
  //   <div>
  //     <StageCard>DESCRIPCIONES</StageCard>
  //     <WordCard>Palabras</WordCard>
  //     <div className={inter.className}>
  //       <p className='big-text'>Tiempo del cronómetro</p>
  //       <Input placeholder='30' type='number' />
  //       <div className='inline-segment'>
  //         <div className='inline'>
  //           <Input placeholder='Ingrese una palabra...' type='text' />
  //         </div>
  //         <div className='inline'>
  //           <Button classes='add' onClick={handleButton}>+</Button>
  //         </div>
  //       </div>
        
  //       <form>
  //         <TimeSelector id="quince">30 seg</TimeSelector>
  //         <TimeSelector id="treinta">60 seg</TimeSelector>
  //         <TimeSelector id="cuart">90 seg</TimeSelector>
  //       </form>

  //     </div>
  //     <div className={lzetta.className}>
  //       <p className='big-text'>Primera Ronda</p>
  //       <p className='big-text bold'>Equipo 1</p>
  //       <Button classes="main-btn red-btn" onClick={handleButton}>Jugar</Button>
  //       <Button classes="main-btn yellow-btn" onClick={handleButton}>Instrucciones</Button>
  //       <Button classes="main-btn blue-btn" onClick={handleButton}>Ingresar Palabras</Button>
  //     </div>
  //   </div>
    
  // )
}
