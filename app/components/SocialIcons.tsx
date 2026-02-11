import React from 'react'
import linkedIn from '@/public/social icons/Group 18.svg'
import twitter from '@/public/social icons/Group 15.svg'
import facebook from '@/public/social icons/Group 16.svg'
import instagram from '@/public/social icons/Group 17.svg'
import Image from 'next/image'

const SocialIcons = () => {
  return (
    <div className=' flex w-46 h-12.5 p-2.5 mt-12 gap-2.5'>
      <Image src={linkedIn} alt='' height={30} width={30}/>
      <Image src={twitter} alt='' height={30} width={30}/>
      <Image src={facebook} alt='' height={30} width={30}/>
      <Image src={instagram} alt='' height={30} width={30}/>
    </div>
  )
}

export default SocialIcons
