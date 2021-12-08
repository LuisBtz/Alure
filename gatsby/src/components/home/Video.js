import React from 'react'
import styled from 'styled-components';
import Newsletter from './Newsletter';



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
                <div className="hero-mobile">
                    <div className="hero-mobile__column">
                        <div className='column' >
                            <div className="icon" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                                <img src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                            </div>
                        </div>
                        <div className='column'>
                            <div className="smalltext" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800"><a href='#about'>{smallText}</a></div>
                        </div>
                    </div>
                    <div className="hero-mobile__column hero-mobile__column--two">
                        <div className='column'> </div>
                        <div className='column'></div>
                    </div>
                    <div className="hero-mobile__texts">
                        <div className='column' data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800">
                            <h1>{mainText}</h1>
                        </div>
                    </div>
                </div>
                <div className='column hide-m'>
                    <div className="icon" data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">
                        <img  src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                    </div>
                    <div className='line-b line hide-m' ></div>
                    <div className='line-r line hide-m' ></div>
                </div>
                <div className='column hide-m'>
                        <div className="btn" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="800">
                             <a href='#about'>{smallText}</a>
                        </div>
                    <div className='line-b line bottom-25-m' ></div>
                    <div className='line-r line hide-m' ></div>
                </div>
                <div className='column hide-m'>
                    <div className='line-b line' ></div>
                </div>
                <div className='column lead hide-m'>
                        <div data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800">
                            <h1>{mainText}</h1>
                        </div>
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
            <Newsletter />
        </VideoContenedor>
    )
}

const VideoContenedor = styled.section`
position: relative;
    .hero-mobile{
        @media (min-width: 860px) {
            display: none;

        }
            display: flex;
            flex-direction: column;
        
        &__column{
            position: relative;
            display: flex;
            height: 220px;
            justify-content: space-between;
            align-items: flex-end;
            .column{
                overflow: hidden;
                width: 47%;
                border-bottom: 1px solid #fff;
                a{
                    font-size: 14px;
                    line-height: 16px;
                }
                img{
                    margin-bottom: 32px;
                }
                .smalltext{
                    margin-bottom: 45px;
                }
            }
            &:before{
                position: absolute;
                content: "";
                height: 200px;
                width: 1px;
                background: #fff !important;
                /* 

                border: thin solid #fff; */
                /* border-color: #fff;
                border-width: 1px;
                border-style: solid; */
                bottom:7px;
                left: 50%;
                transform: translateX(50%);
            }
            &--two{
                &:before{
                    display: none;
                }
            }
        }
        &__texts{
            position: relative;
            .column{
                h1{
                    padding: 13px 0;
                    font-size: 13vw !important;
                        text-transform: uppercase;
                }
            }
            &:after,
            &:before{
                position: absolute;
                bottom: 0;
                content: "";
                width: 47%;
                height: 1px;
                left: 0;
                background: #fff;

            }
            &:after{
                right: 0 !important;
                left: unset;
            }
        }
    }

    video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 860px) {
        height: 100%;
    }
}

.texto {
    width: var(--width-l);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 100px;
    position: relative;
    @media (min-width: 860px) {
        height: 100vh;
    }
    @media (max-width: 860px) {
        width: var(--width-l-m);
        grid-template-columns: 1fr;
        padding: 52px 0;
        grid-auto-flow: dense;
        min-height: -webkit-fill-available;
    }
    .lead {
        @media (min-width: 860px) {
            grid-column: 1/3;

        }
        h1 {
            
            font-size: var(--headline-1);
            text-transform: uppercase;
            line-height: 0.9;
            @media (max-width: 860px) {
                font-size: 13vw;
            }
            @media (max-width: 375px) {
                font-size: 36px;
                line-height: 42px;
            }
            @media (min-width: 860px) {
                margin-top: 50px;
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
        @media (min-width: 860px ) {
            height: 50vh;
        }
        .icon{
            img {
                width: 70px;
            }
            @media (min-width: 860px ) {
                position: absolute;
                bottom: 20px;
            }
        }
        .btn{
            overflow: hidden;
            @media (min-width: 860px ) {
                position: absolute;
                bottom: 20px;
            
        }
        }
    }
}

`

export default Video;