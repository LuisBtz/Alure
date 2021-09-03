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
        <AboutContainer>
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
                    <div className='column'>
                        <div className='line-t line'></div>
                        <Link className='padding-top-50' to='/about'>{link}</Link>
                        <div className='line-r line' data-sal="slide-up"></div>
                    </div>
                    <div className='column'>
                        <div className='line-t line'></div>
                        <h2 className='padding-top-50'>{title1}</h2>
                        <div className='line-r line' data-sal="slide-up"></div>
                    </div>
                    <div className='column'>
                        <div className='line-t line'></div>
                        <p className='padding-top-50'>{subtitle1}</p>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line'></div>
                        <div className='line-r line' data-sal="slide-up"></div>
                        <div className='line-b line' data-sal="slide-up"></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line'></div>
                        <h2 className='padding-top-50'>{title2}</h2>
                        <div className='line-r line' data-sal="slide-up"></div>
                        <div className='line-b line' data-sal="slide-up"></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line'></div>
                        <p className='padding-top-50'>{subtitle2}</p>
                        <div className='line-b line' data-sal="slide-up"></div>
                    </div>
                </div>
            </div>
        </AboutContainer>
        )
}

const AboutContainer = styled.section`
    position: relative;
    height: 100vh;
    .image {
        height: 100vh;
    }
    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .grid {
        width: var(--width-l);
        margin: 0 auto;   
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        gap: 0 100px;
        position: relative;
        .column {
            height: 50vh;

            a {
                display: block;
            }
            h2 {
                font-size: 4rem;
                text-transform: uppercase;
            }
            p {
                font-size: 2.5rem;
                line-height: 1;
            }
        }
        .solo .line-b {
            bottom: 25px;
        }
    }
`

export default About;