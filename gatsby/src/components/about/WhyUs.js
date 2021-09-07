import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const WhyUs = ({data}) => {

    const altImage = data.sanityAboutPage.whyUsBackgroundImage.enAlt;
    const getDataImage = getImage(data.sanityAboutPage.whyUsBackgroundImage.asset);
    const whyUsTitle = data.sanityAboutPage.whyUsTitle.en;
    const ourPhilosophyTitle = data.sanityAboutPage.ourPhilosophyTitle.en;
    const ourPhilosophyText = data.sanityAboutPage.ourPhilosophyText.en;
    const commitmentTitle = data.sanityAboutPage.commitmentTitle.en;
    const commitmentText = data.sanityAboutPage.commitmentText.en;
    const teamworkTitle = data.sanityAboutPage.teamworkTitle.en;
    const teamworkText = data.sanityAboutPage.teamworkText.en;


    return(
        <WhyUsContainer>
            <div className='image'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage}
                    alt={altImage}
                />
            </div>
            <div className='content'>
                <div className='line-r line absolute dark-gray no-bg'></div>
                <div className='line-l line absolute no-bg'></div>
                <div className='grid'>
                    <div className='column solo'>
                            <div className='line-t line no-bg'></div>
                    </div>
                    <div className='colum solo'>
                        <div className='line-t line dark-gray no-bg'></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line dark-gray no-bg'></div>
                    </div>
                    <div className='column'>
                        <div className='text'>
                            <h3 className='color-white'>{whyUsTitle}</h3>
                        </div>
                    </div>
                    <div className='column two'>
                        <div className='text'>
                            <h3>{ourPhilosophyTitle}</h3>
                            <p>{ourPhilosophyText}</p>
                        </div>
                    </div>
                    <div className='column '>
                        <div className='line-t line no-bg'></div>
                    </div>
                    <div className='column '>
                        <div className='line-t line dark-gray no-bg'></div>
                        <div className='text'>
                            <h3>{commitmentTitle}</h3>
                            <p>{commitmentText}</p>
                        </div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column '>
                        <div className='line-t line dark-gray no-bg'></div>
                        <div className='text'>
                            <h3>{teamworkTitle}</h3>
                            <p>{teamworkText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </WhyUsContainer>
    )
}

const WhyUsContainer = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: white;
    color: var(--dark-gray);
    .image {
        width: 33.33%;
        height: 100%;
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
    }
    .column {
        height: 50vh;
        position: relative;
        .line-t {
            top: 0;
        }

        .text {
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-between;
                padding-bottom: 50px;
            }
    }
    .solo {
        height: auto;
        .line-t {
            top: 25px;
        }
    }
    h3 {
        margin-top: 50px;
    }
    .two {
            grid-column: 2/4;
            .text {
                padding-top: 0 !important;
            }
        }
`

export default WhyUs;