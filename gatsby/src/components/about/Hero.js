import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';





const Hero = ( {data} ) => {

const altImage = data.sanityAboutPage.heroImage.enAlt;
const getDataImage = getImage(data.sanityAboutPage.heroImage.asset);
const text = data.sanityAboutPage.principalTextHero.en;
const link = data.sanityAboutPage.linksTextHero.en;


    return (
        <HeroContainer>
            <div className='image'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage}
                    alt={altImage}
                />
            </div>
            <div className='content'>
                <div className='line-r line absolute no-bg'></div>
                <div className='line-l line absolute no-bg'></div>
                <div className='grid'>
                    <div className="hero-mobile">
                        <div className="hero-mobile__column">
                            <div className='column solo'>
                                <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                                     <img className='icon' src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                                </div>
                            </div>
                            <div className='column solo smalltext'>
                                <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">
                                <p>{link}</p>
                                </div>
                            </div>
                        </div>
                        <div className="hero-mobile__column">
                            <div className='column solo'></div>
                            <div className='column solo'></div>
                        </div>
                        <div className="hero-mobile__column--texts">
                            <div className='column two' data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">
                                <h3>{text}</h3>
                                </div>
                        </div>
                    </div>
                    <div className='column two hide-m'>
                        <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                        <h3>{text}</h3>
                        </div>
                        <div className='line-r line hide-m' ></div>
                    </div>
                    <div className='column hide-m'>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line hide-m'></div>
                        <p data-aos="fade-left" data-aos-delay="1000" data-aos-duration="800">{link}</p>
                        <div className='line-r line hide-m' ></div>
                        <div className='line-b line no-bg'></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line hide-m'></div>
                        <img data-aos="fade-left" data-aos-delay="1200" data-aos-duration="800" className='icon' src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                        <div className='line-r line hide-m' ></div>
                        <div className='line-b line no-bg'></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line'></div>
                        <div className='line-b line no-bg'></div>
                    </div>
                </div>
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
    .hero-mobile{
        display: none;
        @media (max-width: 860px) {
            padding: 52px 0;
            display: block;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &__column{
            position: relative;
            overflow: hidden;
            display: flex;
            height: 220px;
            justify-content: space-between;
            align-items: flex-end;
            .column{
                border-bottom: 1px solid #fff;
                width: 47%;
                a{
                    font-size: 14px;
                    line-height: 16px;
                }
                img{
                    margin-bottom: 32px;
                   
                }
                &.smalltext{
                    p{
                        margin-bottom: 45px;
                        font-size: 14px;
                    }
                }
                &.two{
                    border: 0;
                }
            }
            &:before{
                position: absolute;
                content: "";
                height: 200px;
                width: 1px;
                background: #fff !important;
                bottom:7px;
                left: 50%;
                transform: translateX(50%);
            }
            &--texts{
                position: relative;
                display: flex;
                height: 220px;
                justify-content: space-between;
                align-items: center;
                .two{
                    width: 100%;
                    h3{
                        padding: 30px 0;
                        @media (max-width: 575px) {
                            font-size: var(--headline-1) !important;
                        }
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
    }

    position: relative;
    height: 100vh;
    @media (max-width: 860px) {
        height: 100% !important;
    }
    .image {
        height: 100vh;
        @media (max-width: 860px) {
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
        
    }
    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        @media (max-width: 860px) {
            position: static;
        }
    }

    .grid {
        margin: 0 auto;   
        @media (min-width: 860px) {
            width: var(--width-l);
            display: grid ;
            grid-template-columns: repeat(3, 1fr);
            gap: 0 100px;
            position: relative;
        }
        @media (max-width: 860px) {
            width: var(--width-l-m);
        }
        .two {
            grid-column: 1/3;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            @media (max-width: 860px) {
                grid-column: auto;
            }
            h3 {
                padding-bottom: 25px;
                font-size: var(--headline-2);
            }
        }
        .column {
            @media (min-width: 860px) {
                height: 50vh;
            }
            .icon {
                width: 70px;
                @media (min-width: 860px) {
                    margin-top: 25px;
                }
                @media (min-width: 1500px) {
                    width: 5vw;
                }
            }
            a {
                display: block;
            }
            h2 {
                font-size: 4rem;
                text-transform: uppercase;
            }
            p {
                padding-top: 25px;
            }
        }
        .solo .line-b {
            bottom: 25px;
        }
        .solo .line-t {
            top: 0;
        }
    }
`

export default Hero;