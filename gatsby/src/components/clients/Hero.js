import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { motion } from "framer-motion";


const Hero = ( {data} ) => {

const altImage = data.sanityClientsPage.heroImage.enAlt;
const getDataImage = getImage(data.sanityClientsPage.heroImage.asset);

const altImageMovil = data.sanityClientsPage.heroImageMovil.enAlt;
const getDataImageMovil = getImage(data.sanityClientsPage.heroImageMovil.asset);

const text = data.sanityClientsPage.principalTextHero.en;
const link = data.sanityClientsPage.linksTextHero.en;


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
                        <div className='line-r line no-bg' ></div>
                    </div>
                    <div className='column two hide-m' data-aos="fade-left" data-aos-delay="1000" data-aos-duration="800">
                        <h3>{text}</h3>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line'></div>
                        <img data-aos="fade-left" data-aos-delay="1100" data-aos-duration="800" className='icon' src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                        <div className='line-r line no-bg hide-m' ></div>
                        <div className='line-b line no-bg '></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line hide-m'></div>
                        <motion.div
                                    whileHover={{ 
                                        translateX: 5, 
                                        translateY: 3
                                    }}
                                    >
                                <a href="#next" data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">{link}</a>
                            </motion.div>
                        <div className='line-r line hide-m' ></div>
                        <div className='line-b line no-bg '></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line'></div>
                        <div className='line-b line no-bg'></div>
                    </div>
                <div className='mobile-area'>
                    <div className="m-s-one">
                        <div className='column solo'>
                            <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                            <img className='icon' src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                            </div>
                        </div>
                        <div className='column solo'>
                            <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">

                            <p>{link}</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-s-one">
                        <div className='column'></div>
                        <div className='column'></div>
                    </div>
                    <div className="m-s-three">
                        <div className='column'>
                             <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">

                             <h3>{text}</h3>
                             </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
    .mobile-area{
        @media (min-width: 860px) {
            display: none;
        } 
        .m-s-one{
            position: relative;
            display: flex;
            justify-content: space-between;
           .column{
               overflow: hidden;
            width: 47%;
            height: 220px;
            display: flex;
            align-items: end;
            border-bottom: 1px solid #fff;

            .icon{
                padding: 0;
                margin: 0;
                padding-bottom:24px ;
            }
            p{
                padding: 0;
                padding-bottom:32px ;
                font-size: 14px;
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
        }
        .m-s-three{
            position: relative;
            overflow: hidden;
            .column{
                h3{
                    font-size: 24px;
                    padding: 56px 0;
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
            padding-top: 60px;
            padding-bottom: 60px;
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
            h3 {
                font-size: var(--headline-2);
                padding-bottom: 25px;
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
                    margin-top: 15px;
                    padding-bottom: 30px;
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
            a {
                padding-top: 25px;
                @media (max-width: 860px) {
                    padding-bottom: 60px;
                }
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