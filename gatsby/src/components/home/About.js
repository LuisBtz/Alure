import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { Link } from 'gatsby';


const About = ( {data} ) => {

    const altImage = data.sanityHomePage.aboutSectionBackground.enAlt;
    const getDataImage = getImage(data.sanityHomePage.aboutSectionBackground.asset);
    const title1 = data.sanityHomePage.title1AboutSection.en;
    const title2 = data.sanityHomePage.title2AboutSection.en;
    const subtitle1 = data.sanityHomePage.subtitle1AboutSection.en;
    const subtitle2 = data.sanityHomePage.subtitle2AboutSection.en;
    const link = data.sanityHomePage.linkAboutSectionText.en;


    return(
        <AboutContainer id='about'>
            <div className='image'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage}
                    alt={altImage}
                />
            </div>
            <div className='content'>
                <div className='line-r line absolute'></div>
                <div className='line-l line absolute'></div>
                <div className='grid'>
                    <div className='column h10-m'>
                        <div className='line-t line'></div>
                        <Link className='padding-top-50' to='/about'>{link}</Link>
                        <div className='line-r line hide-m' ></div>
                    </div>
                    <div className='column h20-m'>
                        <div className='line-t line'></div>
                        <h2 className='padding-top-50'>{title1}</h2>
                        <div className='line-r line hide-m'></div>
                    </div>
                    <div className='column h25-m'>
                        <div className='line-t line hide-m'></div>
                        <p className='padding-top-50 '>{subtitle1}</p>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line hide-m'></div>
                        <div className='line-r line hide-m' data-sal="slide-up"></div>
                        <div className='line-b line hide-m' data-sal="slide-up"></div>
                    </div>
                    <div className='column solo h20-m'>
                        <div className='line-t line'></div>
                        <h2 className='padding-top-50'>{title2}</h2>
                        <div className='line-r line hide-m'></div>
                        <div className='line-b line hide-m'></div>
                    </div>
                    <div className='column solo h25-m padding-bottom-50-m'>
                        <div className='line-t line hide-m'></div>
                        <p className='padding-top-50'>{subtitle2}</p>
                        <div className='line-b line '></div>
                    </div>
                </div>
            </div>
        </AboutContainer>
        )
}

const AboutContainer = styled.section`
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
            grid-template-columns: 1fr;
            width: var(--width-l-m);
        }
        .column {
            height: 50vh;
            @media (max-width: 860px) {
                height: auto;
            }
            a {
                display: block;
            }
            h2 {
                font-size: 3rem;
                text-transform: uppercase;
            }
            p {
                font-size: 2.5vw;
                line-height: 1;
            }
        }
        .solo .line-b {
            bottom: 25px;
        }
    }
`

export default About;