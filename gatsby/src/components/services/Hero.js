import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';





const Hero = ( {data} ) => {

const altImage = data.sanityServicesPage.heroImage.enAlt;
const getDataImage = getImage(data.sanityServicesPage.heroImage.asset);
const text = data.sanityServicesPage.principalTextHero.en;
const link = data.sanityServicesPage.linksTextHero.en;


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
                        <div className='line-r line' ></div>
                    </div>

                    <div className='column '>
                        <div className='text'>
                            <p>{link}</p>
                            <div className='line-r line' ></div>
                        </div>
                    </div>

                    <div className='column '>
                        <div className='line-r line' ></div>
                    </div>

                    <div className='column solo'>
                        <div className='line-t line' ></div>
                    </div>

                    <div className='column solo'>
                        <div className='line-t line' ></div>
                    </div>

                    <div className='column solo'>
                        <div className='line-t line' ></div>
                    </div>


                    <div className='column'>
                        <img className='icon' src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                        <div className='line-r line' ></div>
                        <div className='line-b line no-bg'></div>
                    </div>
                    <div className='column two'>
                        <h3>{text}</h3>
                    </div>
                    <div className='column solo'>
                        <div className='line-b line' ></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-b line' ></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-b line' ></div>
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
                padding-bottom: 50px;
            }
        }
        .column {
            height: 50vh;
            .icon {
                margin-top: 25px;
                width: 70px;
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
`

export default Hero;