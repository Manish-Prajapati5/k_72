import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center overflow-hidden'>
      <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center' >L'étincelle </div>
      <div className='text-[9vw] uppercase leading-[8vw] flex items-start justify-center' > qui
        <div className='w-[16vw] h-[7vw] rounded-full  overflow-hidden '><Video /></div>
        génère</div>
      <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center' >  la créativité</div>
    </div>
  )
}

export default HomeHeroText