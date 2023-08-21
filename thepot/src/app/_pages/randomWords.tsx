'use client'
import Image from 'next/image'
import Button from '../_components/button'
import Input from '../_components/input'
import { inter } from '../fonts'


export default function RandomWords() {
    return (
        <div className='vertical-flex'>
            <Image
                src="/thepot.png"
                width={203}
                height={167}
                alt="LA OLLA"
                className='img'
            />
            <div className={inter.className}>
                <p className='big-text'>Cantidad de Palabras</p>
            </div>
            <Input 
                type='number' 
                placeholder='10'
                min={10} 
                max={50} 
                onKeyDown={
                    (e) => {e.preventDefault();}
                }
            />
            <Button classes='main-btn yellow-btn'>Comenzar Partida</Button>
        </div>
    )
   
}