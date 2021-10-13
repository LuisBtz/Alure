import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { Link } from 'gatsby';


const Services = ({data}) => {

    const altImage = data.sanityHomePage.servicesSectionBackground.enAlt;
    const getDataImage = getImage(data.sanityHomePage.servicesSectionBackground.asset);
    const title = data.sanityHomePage.servicesTitleSection.en;
    const link = data.sanityHomePage.servicesSectionLinkText.en;

    return (
        <ServicesContainer>
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
                    <div className='column solo'>
                        <div className='line-t line'></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line'></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line'></div>
                    </div>

                    <div className='column'>
                        <Link className='padding-top-50' to='/services'>{link}</Link>
                        <div className='line-r line' data-sal="slide-up"></div>
                    </div>
                    <div className='column two padding-bottom-50-m'>
                        <h3 className='padding-top-50' >{title}</h3>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line' data-sal="slide-up"></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line' data-sal="slide-up"></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line' data-sal="slide-up"></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-r line' data-sal="slide-up"></div>
                        <div className='line-b line bottom-25' data-sal="slide-up"></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-r line' data-sal="slide-up"></div>
                        <div className='line-b line bottom-25' data-sal="slide-up"></div>
                    </div>
                    <div className='column'>
                        <div className='line-b line bottom-25' data-sal="slide-up"></div>
                    </div>
                </div>

            </div>
        </ServicesContainer>
    )
}

const ServicesContainer = styled.section`
position: relative;
    height: 100vh;
    @media (max-width: 860px) {
        height: 100%;
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
            h3 {
                font-size: 2.5rem;
            }
            p {
                font-size: 2.5rem;
                line-height: 1;
            }
        }
        .two {
            grid-column: 2/4;
            @media (max-width: 860px) {
                grid-column: auto;
            }
        }
        .solo {
            height: 0 !important;
            .line {
                bottom: 0;
            }
        }
    }
`

export default Services