import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const Public = ({data}) => {

    const altImage = data.sanityServicesPage.publicRelationsSectionImages.enAlt;
    const getDataImage = getImage(data.sanityServicesPage.publicRelationsSectionImages.asset);
    const salesServicesTitle = data.sanityServicesPage.publicRelationsSectionTitle.en;
    const salesServicesText = data.sanityServicesPage.publicRelationsSectionTitleText.en;
    const publicRelationsSectionTitleText2 = data.sanityServicesPage.publicRelationsSectionTitleText2.en;
    const linksTextPublicRelationsSection1 = data.sanityServicesPage.linksTextPublicRelationsSection1.en;
    const linksTextPublicRelationsSection2 = data.sanityServicesPage.linksTextPublicRelationsSection2.en;


    return(
        <PublicContainer>
            <div className='image'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage}
                    alt={altImage}
                />
            </div>
            <div className='content'>
                <div className='line-r line absolute no-bg'></div>
                <div className='line-l line absolute dark-gray no-bg white-m'></div>
                <div className='grid'>
                    <div className='column '>
                        <div className='line-t line dark-gray no-bg white-m'></div>
                        <div className='text height-100'>
                            <h3>{salesServicesTitle}</h3>
                            <p className='padding-bottom25'>{linksTextPublicRelationsSection1}</p>
                        </div>
                        <div className='line-r line dark-gray no-bg hide-m' ></div>
                        <div className='line-b line dark-gray no-bg hide-m' ></div>
                    </div>
                    <div className='column'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <div className='line-b line dark-gray no-bg white-m' ></div>
                    </div>
                    <div className='column '>
                        <div className='line-t line no-bg hide-m'></div>
                        <p className='color-white padding-top-50'>{salesServicesText}</p>
                        <div className='line-b line no-bg' ></div>
                    </div>
                    <div className='column two'>
                        <div className='text'>
                            <p>{publicRelationsSectionTitleText2}</p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='text height-100'>
                            <p></p>
                            <p className='color-white padding-bottom-50'>{linksTextPublicRelationsSection2}</p>
                        </div>
                    </div>


                    <div className='column solo'>
                        <div className='line-b line no-bg dark-gray' ></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-b line dark-gray no-bg' ></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-b line  no-bg' ></div>
                    </div>
                </div>
            </div>
        </PublicContainer>
    )
}

const PublicContainer = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: var(--gray);
    color: var(--dark-gray);
    @media (max-width: 860px) {
        height: 100% !important;
    }
    .image {
        width: 33.33%;
        height: 100%;
        position: absolute;
        right: 0;
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
            color: white;
        }
        .line-t {
            top: 25px;
        }

        .text {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h3, h4 {
                    margin-top: 50px;
                }
                h4 {
                    font-size: 1.2rem;
                }
            }
        .list {
            p {
                border-bottom: solid 1px #575D63;
                height: 25%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                &:last-child {
                    border-bottom: none;
                }
            }
        }
    }
    .solo {
        height: auto;
        .line-t {
            top: 25px;
        }
        .line-b {
            bottom: 25px;
        }
    }

    .two {
            grid-column: 1/3;
            @media (max-width: 860px) {
                grid-column: auto;
            }
            .text {
                p {
                    margin-top: 25px;
                }
            }
        }
`

export default Public;