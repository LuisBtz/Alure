import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const WhyUs = ({data}) => {

    const altImage = data.sanityAboutPage.whyUsBackgroundImage.enAlt;
    const getDataImage = getImage(data.sanityAboutPage.whyUsBackgroundImage.asset);

    const altImageMovil = data.sanityAboutPage.whyUsBackgroundImageMovil.enAlt;
    const getDataImageMovil = getImage(data.sanityAboutPage.whyUsBackgroundImageMovil.asset);

    const whyUsTitle = data.sanityAboutPage.whyUsTitle.en;
    const ourPhilosophyTitle = data.sanityAboutPage.ourPhilosophyTitle.en;
    const ourPhilosophyText = data.sanityAboutPage.ourPhilosophyText.en;
    const commitmentTitle = data.sanityAboutPage.commitmentTitle.en;
    const commitmentText = data.sanityAboutPage.commitmentText.en;
    const teamworkTitle = data.sanityAboutPage.teamworkTitle.en;
    const teamworkText = data.sanityAboutPage.teamworkText.en;


    return(
        <WhyUsContainer>
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
                <div className='line-r line absolute dark-gray no-bg white-m'></div>
                <div className='line-l line absolute no-bg'></div>
                <div className='grid'>
                    <div className='column solo hide-m'>
                            <div className='line-t line no-bg'></div>
                    </div>
                    <div className='colum solo hide-m'>
                        <div className='line-t line dark-gray no-bg'></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line dark-gray no-bg'></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='text' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                            <h3 className='color-white'>{whyUsTitle}</h3>
                        </div>
                        <div className='line-b line no-bg hide-d' ></div>
                    </div>
                    <div className='column two hide-m'>
                        <div className='text' data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">
                            <h3>{ourPhilosophyTitle}</h3>
                            <p>{ourPhilosophyText}</p>
                        </div>
                    </div>
                    <div className='column  hide-m'>
                        <div className='line-t line no-bg hide-m'></div>
                        <div className='line-b line no-bg' ></div>
                    </div>
                    <div className='column  hide-m'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <div className='line-b line dark-gray no-bg hide-m' ></div>
                        <div className='text' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                            <h3>{commitmentTitle}</h3>
                            <p>{commitmentText}</p>
                        </div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column  hide-m'>
                        <div className='line-t line dark-gray no-bg white-m'></div>
                        <div className='line-b line dark-gray no-bg white-m' ></div>
                        <div className='text' data-aos="fade-up" data-aos-delay="1100" data-aos-duration="800">
                            <h3>{teamworkTitle}</h3>
                            <p>{teamworkText}</p>
                        </div>
                    </div>
                    <div className="moblie-area">
                        <div className="moblie-area__column">
                            <div className='column'>
                                <div className='text' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                                    <h3 className='color-white'>{whyUsTitle}</h3>
                                </div>
                            </div>
                            <div className='column'>
                            </div>
                        </div>
                        <div className="moblie-area__column--two">
                            <div className='column two'>
                                <div className='text' data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">
                                    <h3>{ourPhilosophyTitle}</h3>
                                    <p>{ourPhilosophyText}</p>
                                </div>
                            </div>
                        </div>
                        <div className="moblie-area__column moblie-area__column--tree">
                            <div className='column'>
                            <div className='text' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                            <h3>{commitmentTitle}</h3>
                            <p>{commitmentText}</p>
                            </div>
                            </div>
                            <div className="line-m"></div>
                            <div className='column'>
                            <div className='text' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                            <h3>{teamworkTitle}</h3>
                            <p>{teamworkText}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WhyUsContainer>
    )
}

const WhyUsContainer = styled.section`
.moblie-area{
    padding: 52px 0;
    @media (min-width: 860px) {
        display: none;
    }
    &__column{
        overflow: hidden;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .column{
            height: 220px;
            width: 47%;
            border-top: 1px solid #FFFFFF;
            border-bottom: 1px solid #FFFFFF;
            .text{
                h3{
                    font-size: 36px;
                    text-transform: uppercase;
                    font-family: var(--bold);
                   
                }
            }
        }
        &--two{
            .column{
                .text{
                    padding-bottom: 32px;
                    h3{ 
                        font-size: 24px;
                        font-family: var(--reg);
                        position: relative;
                        margin-bottom:75px;
                        margin-top: 32px;
                        text-decoration: underline;
                    }
                }
            }
        }
        &--tree{
            position: relative;
            .column{
                @media (max-width: 375px) {
                    height: 300px !important;
                }
            }
            .text{
                justify-content: unset !important;
                h3{
                    margin-top: 24px;
                    margin-bottom: 15px;
                    text-transform: capitalize !important;
                    font-family: var(--reg) !important;
                    font-size: 24px !important;
                    position: relative;
                    text-decoration: underline;
                }
            }
        }
    }
    .line-m{
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(-50%,-50%);
            background: #ffffff;
            height: calc(100% - 50px);
            width: 1px;
        }
}
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: white;
    color: var(--dark-gray);
    @media (max-width: 860px) {
        height: 100% !important;
    }
    .image {
        width: 33.33%;
        height: 100%;
        @media (max-width: 860px) {
            height: 100%;
            width: 100%;
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
            color: white;
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
    }
    .column {
        height: 50vh;
        position: relative;
        @media (max-width: 860px) {
                height: auto;
                p {
                font-size: 16px;
            }
            }
        .line-t {
            top: 0;
        }
        .line-b {
            bottom: 25px;
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
        font-size: var(--headline-2);
        margin-top: 25px;
    }
    .two {
            grid-column: 2/4;
            @media (max-width: 860px) {
                grid-column: auto;
            }
            .text {
                padding-top: 0 !important;
                h3 {
                    margin-top: 50px;
                }
            }
        }

@media (min-width: 680px) {
    h3.color-white {
        margin-top: 50px;
    }
    .two .text {
        padding-bottom: 25px;
    }
    p {
                font-size: 24px;
                line-height: 1;
            }
}

`

export default WhyUs;