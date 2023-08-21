'use client'
import Image from 'next/image'
import Button from '../_components/button'


export default function Start() {
    return (
        <div className='vertical-flex'>
            <Image
                src="/thepot.png"
                width={203}
                height={167}
                alt="LA OLLA"
                className='img'
            />
            <Button classes='main-btn red-btn'>JUGAR</Button>
            <Button classes='main-btn yellow-btn'>INSTRUCCIONES</Button>

        </div>
    )
}