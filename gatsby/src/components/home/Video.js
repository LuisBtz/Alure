import React from 'react'
import styled from 'styled-components';



const Video = ({ data }) => {

    const videoMp4 = data.sanityHomePage.videoHero.mp4File.asset.url;
    const videoWebm = data.sanityHomePage.videoHero.webmFile.asset.url;
    return(
        <VideoContenedor>
            <video muted loop autoplay='true'>
                <source src={videoWebm} type="video/webm" />
                <source src={videoMp4} type="video/mp4" />
            </video>
            <div className='texto'>
                <div className='column'>
                    <img src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                </div>
                <div className='column'></div>
                <div className='column'></div>
                <div className='column'></div>
                <div className='column'></div>
            </div>
        </VideoContenedor>
    )
}

const VideoContenedor = styled.section`
video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
`

export default Video;