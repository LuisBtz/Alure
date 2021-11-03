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
                    <div className='column two'>
                        <h3>{text}</h3>
                        <div className='line-r line hide-m' ></div>
                    </div>
                    <div className='column hide-m'>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line hide-m'></div>
                        <p>{link}</p>
                        <div className='line-r line hide-m' ></div>
                        <div className='line-b line no-bg'></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line hide-m'></div>
                        <img className='icon' src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
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
        @media (max-width: 860px) {
            padding-top: 100px;
            width: var(--width-l-m);
            gap: 0 30px;
            grid-template-columns: 1fr;

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