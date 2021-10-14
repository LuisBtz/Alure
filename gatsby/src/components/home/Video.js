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
                    <div className='line-b line hide-m' ></div>
                    <div className='line-r line hide-m' ></div>
                </div>
                <div className='column'>
                    <a href='#about'>{smallText}</a>
                    <div className='line-b line bottom-25-m' ></div>
                    <div className='line-r line hide-m' ></div>
                </div>
                <div className='column hide-m'>
                    <div className='line-b line' ></div>
                </div>
                <div className='column lead'>
                    <h1>{mainText}</h1>
                    <div className='line-b line hide-d' ></div>
                    <div className='line-r line hide-m' ></div>
                </div>
                <div className='column hide-m'></div>
                <div className='solo hide-m'>
                    <div className='line-b line' ></div>
                </div>
                <div className='solo hide-m'>
                    <div className='line-b line' ></div>
                </div>
                <div className='solo hide-m'>
                    <div className='line-b line' ></div>
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
    @media (max-width: 860px) {
        height: 100vh;
        min-height: -webkit-fill-available;
    }
}

.texto {
    width: var(--width-l);
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 100px;
    position: relative;
    /* @media (max-width: 1000px) {
        width: var(--width-l-m);
        gap: 0 30px;
    } */
    @media (max-width: 860px) {
        grid-template-columns: 1fr;
        padding-top: 50px;
        grid-auto-flow: dense;
        height: 100vh;
        min-height: -webkit-fill-available;
    }
    .lead {
        grid-column: 1/3;
        @media (max-width: 860px) {
            grid-column: auto;
            grid-row: 1;
        }
        h1 {
            margin-top: 50px;
            font-size: 4.5vw;
            text-transform: uppercase;
            @media (max-width: 860px) {
                font-size: 13vw;
            }
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
        @media (max-width: 860px) {
            height: auto;
        }
        img {
            width: 70px;
            position: absolute;
            bottom: 20px;
        }
        a {
            position: absolute;
            bottom: 20px;
            @media (max-width: 860px ) {
                position: static;
            }
        }
    }
}
`

export default Video;