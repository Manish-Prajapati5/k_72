import React from 'react'
import video from '../../../public/69496b2d.mp4'

const Video = () => {
    return (
        <div className='w-full h-full'>
            <video className='h-full w-full object-cover ' autoPlay muted loop src={video}></video>
        </div>
    )
}

export default Video