import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from "framer-motion";


const About = ( {data} ) => {

    const altImage = data.sanityHomePage.aboutSectionBackground.enAlt;
    const getDataImage = getImage(data.sanityHomePage.aboutSectionBackground.asset);

    const altImageMovil = data.sanityHomePage.aboutSectionBackgroundMovil.enAlt;
    const getDataImageMovil = getImage(data.sanityHomePage.aboutSectionBackgroundMovil.asset);

    const title1 = data.sanityHomePage.title1AboutSection.en;
    const title2 = data.sanityHomePage.title2AboutSection.en;
    const subtitle1 = data.sanityHomePage.subtitle1AboutSection.en;
    const subtitle2 = data.sanityHomePage.subtitle2AboutSection.en;
    const link = data.sanityHomePage.linkAboutSectionText.en;


    return(
        <AboutContainer id='about'>
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
                <div className='line-r line absolute'></div>
                <div className='line-l line absolute'></div>
                <div className='grid'>
                    <div className='column h10-m'>
                        <div className='line-t line'></div>
                        <motion.div
                                whileHover={{ 
                                    translateX: 5, 
                                    translateY: 3
                                }}
                                >
                            <Link className='padding-top-50' to='/about' data-aos="fade-left" data-aos-delay="600" data-aos-duration="800">{link}</Link>
                        </motion.div>
                        <div className='line-r line hide-m' ></div>
                    </div>
                    <div className='column h20-m'>
                        <div className='line-t line'></div>
                        <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                            <h2 className='padding-top-50'>{title1}</h2>
                        </div>
                        <div className='line-r line hide-m'></div>
                    </div>
                    <div className='column h25-m'>
                        <div className='line-t line hide-m'></div>
                        <p className='padding-top-50 subtitle-desk' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">{subtitle1}</p>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line hide-m'></div>
                        <div className='line-r line hide-m' data-sal="slide-up"></div>
                        <div className='line-b line hide-m' data-sal="slide-up"></div>
                    </div>
                    <div className='column solo h20-m'>
                        <div className='line-t line'></div>
                        <h2 className='padding-top-50' data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800">{title2}</h2>
                        <div className='line-r line hide-m'></div>
                        <div className='line-b line hide-m'></div>
                    </div>
                    <div className='column solo h25-m padding-bottom-50-m'>
                        <div className='line-t line hide-m'></div>
                        <p className='padding-top-50 subtitle-desk' data-aos="fade-up" data-aos-delay="1400" data-aos-duration="800" >{subtitle2}</p>
                        <div className='line-b line '></div>
                    </div>
                </div>
                <div className="about-mobile">
                    <div className="about-mobile__line">
                        <div className='column '>
                        </div>
                        <div className="line"></div>
                        <div className='column ' data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                            <Link className='padding-top-50' to='/about'>{link}</Link>
                        </div>
                    </div>
                    <div className="about-mobile__line about-mobile__line--two">
                        <div className='column ' data-aos="fade-up" data-aos-delay="700" data-aos-duration="800">
                            <h2>{title1}</h2>
                        </div>
                        <div className="line"></div>
                        <div className='column ' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                            <p className='subtitle-desk'>{subtitle1}</p>
                        </div>
                    </div>
                    <div className="about-mobile__line about-mobile__line--two">
                        <div className='column solo ' data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">
                            <h2 className='title-two'>{title2}</h2>
                        </div>
                        <div className="line"></div>
                        <div className='column solo' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                        <p className='subtitle-desk'>{subtitle2}</p>
                    </div>
                    </div>
                    <div className="b-line"></div>
                </div>
            </div>
        </AboutContainer>
        )
}

const AboutContainer = styled.section`
.about-mobile{
    display: block;
    width: var(--width-l-m);
    margin: 0 auto;
    position: relative;
    padding: 52px 0;
    @media (min-width: 860px) {
        display: none;
    }
    &__line{
        display: flex;
        height: 220px;
        overflow: hidden;
        justify-content: space-between;
        align-items: flex-end;
        position: relative;
        &.h-0{
            height: unset;
        }
        .column{
            width: 47%;
            padding-bottom: 32px;
            h2{
                font-family: var(--bold);
                font-size: 36px;
                line-height: 37px;
            }
            .title-two{
                font-size: 36px;
                line-height: 42px;
                text-transform: uppercase;
            }
            a{
                font-size: 14px;
                line-height: 16px;
            }
        }
        .line{
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(-50%,-50%);
            background: #fff;
            height: 192px;
            width: 1px;
        }
        &:after,
        &:before{
            position: absolute;
            top: 0;
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
        &--two{
            align-items: flex-start;
            .column{
                padding-top: 32px;
                padding-bottom: 0;
                p{
                    font-size: 16px;
                    line-height: 21px;
                    @media (min-width: 480px) {
                        padding-right: 20px;
                    }
                }
            }
        }
    }
    .b-line{
        position: relative;
        &:after,
        &:before{
            position: absolute;
            top: 0;
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
        /* @media (max-width: 1000px) {
            width: var(--width-l-m);
            gap: 0 30px;
        } */
        @media (max-width: 860px) {
            display: none;
        }
        .column {
            height: 50vh;
            @media (max-width: 860px) {
                height: auto;
            }
            a {
                display: block;
                font-size: 14px;
            }
            h2 {
                font-size: var(--headline-1);
                text-transform: uppercase;
            }
            p {
                line-height: 1;
            }
        }
        .solo .line-b {
            bottom: 25px;
        }
    }
`

export default About;