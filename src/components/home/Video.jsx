import React from 'react'

const Video = () => {
    return (
        <div className='w-full h-full'>
            <video className='h-full w-full object-cover ' autoPlay muted loop src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1773594301~exp=1773597901~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=3bcc405b772cbad057f377027222942959732bf643eb53a6f895c791995e5367&r=dXMtZWFzdDE%3D"></video>
        </div>
    )
}

export default Video