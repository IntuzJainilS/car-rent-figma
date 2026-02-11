import React from 'react'
import bmw from '@/public/Carlogo/BMW.png'
import lexus from '@/public/Carlogo/lexus-logo.png'
import mercedes from '@/public/Carlogo/Marcedes.png'
import honda from '@/public/Carlogo/Honda.png'
import hundai from '@/public/Carlogo/Hyundai.png'
import nissan from '@/public/Carlogo/Nissan.png'
import toyota from '@/public/Carlogo/Toyota.png'
import kia from '@/public/Carlogo/KIA.png'
import Image from 'next/image'

const Carlogo = () => {
  return (
    <div className='flex gap-2 justify-evenly mt-12'>
      <Image src={bmw} alt='logo' height={80} width={80}/>
      <Image src={lexus} alt='logo' height={80} width={80}/>
      <Image src={mercedes} alt='logo' height={80} width={80}/>
      <Image src={honda} alt='logo' height={80} width={80}/>
      <Image src={hundai} alt='logo' height={80} width={80}/>
      <Image src={nissan} alt='logo' height={80} width={80}/>
      <Image src={toyota} alt='logo' height={80} width={80}/>
      <Image src={kia} alt='logo' height={80} width={80}/>
    </div>
  )
}

export default Carlogo
