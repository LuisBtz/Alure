import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { motion } from "framer-motion";


const Hero = ( {data} ) => {

const altImage = data.sanityServicesPage.heroImage.enAlt;
const getDataImage = getImage(data.sanityServicesPage.heroImage.asset);

const altImageMovil = data.sanityServicesPage.heroImageMovil.enAlt;
const getDataImageMovil = getImage(data.sanityServicesPage.heroImageMovil.asset);

const text = data.sanityServicesPage.principalTextHero.en;
const link = data.sanityServicesPage.linksTextHero.en;


    return (
        <HeroContainer>
            <div className='image desk'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage}
                    alt={altImage}
                />
            </div>
            <div className='image movil'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImageMovil}
                    alt={altImageMovil}
                />
            </div>
            <div className='content'>
                <div className='line-r line absolute no-bg'></div>
                <div className='line-l line absolute no-bg'></div>
                <div className='grid'>
                    <div className='column hide-m'>
                        <div className='line-r line' ></div>
                    </div>
                    <div className='column  hide-m'>
                        <div className='text'>
                        <motion.div
                                    whileHover={{ 
                                        translateX: 5, 
                                        translateY: 3
                                    }}
                                    >
                                <a href="#next" data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">{link}</a>
                            </motion.div>
                            <div className='line-r line hide-m' ></div>
                        </div>
                    </div>
                    <div className='column  hide-m'>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line' ></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line' ></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line' ></div>
                    </div>
                    <div className='column hide-m'>
                        <img data-aos="fade-left" data-aos-delay="1000" data-aos-duration="800" className='icon' src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                        <div className='line-r line' ></div>
                        <div className='line-b line no-bg hide-m'></div>
                    </div>
                    <div className='column two hide-m o-v-h'>
                        <div data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800">
                        <h1>{text}</h1>

                        </div>
                        <div className='line-b line hide-d' ></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line' ></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line' ></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line' ></div>
                    </div>
                    <div className='hero-mobile'>
                        <div className="hero-mobile__column">
                            <div className='column column-icon o-v-h'>
                                <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">

                                <img className='icon' src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                                </div>
                            </div>
                            <div className='column o-v-h'>
                                <div className='text' data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">
                                    <p>{link}</p>
                                </div>
                            </div>
                        </div>
                        <div className="hero-mobile__column hero-mobile__column--two">
                            <div className='column'></div>
                            <div className='column'></div>
                        </div>
                        <div className="hero-mobile__column--three o-v-h" >
                            <div className='column two' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800"><h1>{text}</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
    .hero-mobile{
        padding: 60px 0;
        @media (min-width: 860px) {
            display: none;
        }
        &__column{
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            position: relative;
            .column{
                height: 220px !important;
                width: 47%;
                border-bottom: 1px solid #fff;
                .text{
                    padding-bottom: 32px !important;
                    p{
                        padding: 0;
                        font-size: 14px;
                    }
                }
                &.column-icon{
                    display: flex;
                    align-items: flex-end;
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
            &--three{
                position: relative;
                .column{
                    h1{
                        font-size: 36px !important;
                        text-transform: uppercase;
                        padding: 10px 0 16px !important;
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
    .image.desk {
        display: block;
        @media (max-width: 860px) {
            display: none;
        }
    }
    .image.movil {
        display: none;
        @media (max-width: 860px) {
            display: block;
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
        width: var(--width-l);
        margin: 0 auto;   
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        gap: 0 100px;
        position: relative;
        @media (max-width: 860px) {
            width: var(--width-l-m);
            gap: 0 30px;
            grid-template-columns: 1fr;
            
        }
        .two {
            grid-column: 2/4;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            @media (max-width: 860px) {
                grid-row: 1;
                grid-column: auto;
            }
            h1 {
                font-size: var(--headline-1);
                padding-bottom: 50px;
                text-transform: uppercase;
            }
        }
        .column {
            height: 50vh;
            @media (max-width: 860px) {
                height: auto;
            }
            .icon {
                margin-top: 25px;
                width: 70px;
                @media (max-width: 860px) {
                    padding-bottom: 20px;
                }
                @media (min-width: 1500px) {
                    width: 5vw;
                }
            }
            .text {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding-bottom: 25px;
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
        .solo {
            height: auto;
        }
        .solo .line-b {
            bottom: 25px;
        }
        .solo .line-t {
            top: 0;
        }
    }
    .o-v-h{
        overflow: hidden;
    }
`

export default Hero;