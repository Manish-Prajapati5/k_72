import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomebottomText from '../components/home/HomebottomText'

const Home = () => {
    return (
        <div className=' overflow-hidden'>
            <div className='h-screen w-screen fixed'>
                <Video />
            </div>
            <div className='h-screen w-screen  relative flex flex-col justify-between'>
                <HomeHeroText />
                <HomebottomText />
            </div>
        </div>


    )
}

export default Home