import React from 'react'
import styled from 'styled-components';



const Video = ({ data }) => {

    const videoMp4 = data.sanityHomePage.videoHero.mp4File.asset.url;
    const videoWebm = data.sanityHomePage.videoHero.webmFile.asset.url;

    const mainText = data.sanityHomePage.singleTextHero.en;
    const smallText = data.sanityHomePage.heroSmallTextHero.en;
    return(
        <VideoContenedor>
            <video muted loop autoPlay >
                <source src={videoWebm} type="video/webm" />
                <source src={videoMp4} type="video/mp4" />
            </video>
            <div className='texto'>
                <div className='column'>
                    <img src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                    <div className='line-b line' data-sal="slide-up"></div>
                    <div className='line-r line' data-sal="slide-up"></div>
                </div>
                <div className='column'>
                    <p>{smallText}</p>
                    <div className='line-b line' data-sal="slide-up"></div>
                    <div className='line-r line' data-sal="slide-up"></div>
                </div>
                <div className='column'>
                    <div className='line-b line' data-sal="slide-up"></div>
                </div>
                <div className='column lead'>
                    <h1>{mainText}</h1>
                    <div className='line-r line' data-sal="slide-up"></div>
                </div>
                <div className='column'></div>
                <div className='solo'>
                    <div className='line-b line' data-sal="slide-up"></div>
                </div>
                <div className='solo'>
                    <div className='line-b line' data-sal="slide-up"></div>
                </div>
                <div className='solo'>
                    <div className='line-b line' data-sal="slide-up"></div>
                </div>
            </div>
            <div className='line-r line absolute'></div>
            <div className='line-l line absolute'></div>
        </VideoContenedor>
    )
}

const VideoContenedor = styled.section`
video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
}

.texto {
    width: var(--width-l);
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 100px;
    position: relative;
    .lead {
        grid-column: 1/3;
        h1 {
            margin-top: 50px;
            font-size: 4.5vw;
            text-transform: uppercase;
        }
    }
    .solo {
        position: relative;
        .line-b {
            bottom: 25px;
        }
    }
    .column {
        height: 50vh;
        img {
            width: 70px;
            position: absolute;
            bottom: 20px;
        }
        p {
            position: absolute;
            bottom: 20px;
        }
    }
}
`

export default Video;