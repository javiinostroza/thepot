'use client'
import { inter } from '../fonts'
import Button from '../_components/button'
import Input from '../_components/input'
import TimeSelector from '../_components/timeSelector'

export default function Settings() {
    return (
        <div className='vertical-flex'>
            <div className={ inter.className }>
                <div className='group'>
                    <p className='medium-text'>Nombre de los equipos</p>
                    <Input type='text' placeholder='EQUIPO 1' />
                    <Input type='text' placeholder='EQUIPO 2' />
                </div>
                <div className='group'>
                    <p className='medium-text'>Seleccione temporizador</p>
                    <form>
                        <TimeSelector id="first">30 seg</TimeSelector>
                        <TimeSelector id="second">60 seg</TimeSelector>
                        <TimeSelector id="third">90 seg</TimeSelector>
                    </form>
                </div>
            </div>
            <div className='group'>
                <Button classes='main-btn blue-btn'>Ingresar Palabras</Button>
                <Button classes='main-btn red-btn'>Llenar olla automáticamente</Button>
            </div>
        </div>
    )
}