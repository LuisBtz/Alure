import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';





const Hero = ( {data} ) => {

const altImage = data.sanitySettingsPage.blogBackgroundImage.enAlt;
const getDataImage = getImage(data.sanitySettingsPage.blogBackgroundImage.asset);
const text = 'STAY CONNECTEd STAY INSPIRED'


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
                    <div className='column'>
                        <div className='line-r line no-bg' ></div>
                    </div>
                    <div className='column two'>
                        <h3>{text}</h3>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line'></div>
                        <div className='line-r line no-bg' ></div>
                        <div className='line-b line no-bg'></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line'></div>
                        <div className='line-r line' ></div>
                        <div className='line-b line no-bg'></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line'></div>
                        <div className='line-b line no-bg'></div>
                    </div>
                </div>
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
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
        .two {
            grid-column: 2/4;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            h3 {
                padding-bottom: 25px;
            }
        }
        .column {
            height: 50vh;
            .icon {
                margin-top: 25px;
                width: 70px;
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