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
            <div className='image hide-m'>
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
                    <div className='column  hide-m'>
                        <div className='line-t line dark-gray no-bg white-m'></div>
                        <div className='text height-100' data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">
                            <h3>{salesServicesTitle}</h3>
                            <p className='padding-bottom25'>{linksTextPublicRelationsSection1}</p>
                        </div>
                        <div className='line-r line dark-gray no-bg hide-m' ></div>
                        <div className='line-b line dark-gray no-bg hide-m' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <div className='line-b line dark-gray no-bg white-m' ></div>
                    </div>
                    <div className='column hide-m '>
                        <div className='line-t line no-bg hide-m'></div>
                        <p data-aos="fade-left" data-aos-delay="900" data-aos-duration="800" className='color-white padding-top-50'>{salesServicesText}</p>
                        <div className='line-b line no-bg' ></div>
                    </div>
                    <div className='column two hide-m'>
                        <div className='text'>
                            <p data-aos="fade-left" data-aos-delay="1000" data-aos-duration="800">{publicRelationsSectionTitleText2}</p>
                        </div>
                    </div>
                    <div className='column hide-m'>
                        <div className='text height-100'>
                            <p></p>
                            <p data-aos="fade-left" data-aos-delay="1100" data-aos-duration="800" className='color-white padding-bottom-50'>{linksTextPublicRelationsSection2}</p>
                        </div>
                    </div>


                    <div className='column solo hide-m'>
                        <div className='line-b line no-bg dark-gray' ></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line dark-gray no-bg' ></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line  no-bg' ></div>
                    </div>
                    <div className="mobile-area">
                        <div className="m-s-one">
                            <div className='column'>
                                <div className='text height-100' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                                <h3>{salesServicesTitle}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="m-section m-s-two">
                            <div className='column'>
                                <div className='text' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                                    <h4>Community Creation</h4>
                                    <p className='color-white padding-top-50'>{publicRelationsSectionTitleText2}</p>
                                </div>
                                <div className="line"></div>
                            </div> 
                        </div>
                        <div className="m-section m-s-three">
                            <div className='column'>
                                <div className='text' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                                    <h4>Hight Impact PR</h4>
                                    <p>{salesServicesText}</p>
                                </div>
                                <div className="line"></div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </PublicContainer>
    )
}

const PublicContainer = styled.section`
    .mobile-area{
        padding-top: 48px;
        padding-bottom: 52px;
        background: #F4F3EF;
        @media (min-width: 860px) {
            display: none;
        } 
        .m-s-one{
            background-color: var(--green);
            padding: 0 19px;
            .column{
                padding: 32px 0 148px;
                .text{
                    h3{
                        margin:0 ;
                        font-size: 13vw !important;
                        text-transform: uppercase;
                        font-family: var(--bold);
                    }
                }
            }
        }
        .m-section{
            padding: 0 19px;
            padding-top: 32px;
            background: white;
            .column{
                position: relative;
                
                .text{
                    h4{
                        margin-top: 0;
                        font-size: 8vw !important;
                        font-family: var(--reg);
                        margin-bottom: 37px; 
                        color: #575D63;
                    }
                    p{
                        margin:0;
                        font-size: 1rem;
                        color: #575D63;
                        padding-bottom: 32px;
                    }
                }
                &:after,
                &:before{
                position: absolute;
                bottom: 0;
                content: "";
                width: 47%;
                height: 1px;
                left: 0;
                background: #575D63;

                }
                &:after{
                right: 0 !important;
                left: unset;
                }
            }
        }
        .m-s-two,
        .m-s-three{
            overflow: hidden;
            .column{
               .text{
                   h4{
                       position: relative;
                       &:before{
                        position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 2px;
                            content: "";
                            background: #575D63;
                       }
                   }
               } 
            }
        }
    }
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: var(--gray);
    color: var(--dark-gray);
    @media (max-width: 860px) {
        height: 100% !important;
        background-color: #F4F3EF !important;
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
        .line {
            @media (max-width: 860px) {
                border-color: #575D63;
            }
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
            width: var(--width-4);
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
                @media (max-width: 860px) {
                    align-items: flex-start;
                }
                h3, h4 {
                    margin-top: 50px;
                    font-size: var(--headline-2);
                }
                h4 {
                    font-size: 1.2rem;
                    @media (min-width: 1440px) {
                            font-size: 1.3vw;
                    }
                    @media (min-width: 1640px) {
                            font-size: 1vw;
                    }
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