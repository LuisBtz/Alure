import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PublicServices = ({data}) => {

    const altImageMovil = data.sanityServicesPage.publicRelationsSectionImagesMovil.enAlt;
    const getDataImageMovil = getImage(data.sanityServicesPage.publicRelationsSectionImagesMovil.asset);

    const publicRelationsServicesTitle = data.sanityServicesPage.publicRelationsServicesTitle.en;
    const publicRelationsServicesText = data.sanityServicesPage.publicRelationsServicesText.en;
    const linksTextPublicRelationsServices = data.sanityServicesPage.linksTextPublicRelationsServices.en;
    const publicRelationsServicesService1 = data.sanityServicesPage.publicRelationsServicesService1.en;
    const publicRelationsServicesService2 = data.sanityServicesPage.publicRelationsServicesService2.en;
    const publicRelationsServicesService3 = data.sanityServicesPage.publicRelationsServicesService3.en;
    const publicRelationsServicesService4 = data.sanityServicesPage.publicRelationsServicesService4.en;
    const publicRelationsServicesService5 = data.sanityServicesPage.publicRelationsServicesService5.en;
    const publicRelationsServicesService6 = data.sanityServicesPage.publicRelationsServicesService6.en;

    return(
        <PublicServicesContainer>
            <div className='image'>
            </div>
            <div className='content'>
                <div className='line-r line absolute dark-gray no-bg'></div>
                <div className='line-l line absolute dark-gray no-bg'></div>
                <div className='grid'>
                    <div className='column solo hide-m'>
                            <div className='line-t line no-bg dark-gray hide-m'></div>
                    </div>
                    <div className='colum solo hide-m'>
                        <div className='line-t line dark-gray no-bg'></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t line dark-gray no-bg'></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='text' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                            <h4>{publicRelationsServicesText}</h4>
                        </div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column two hide-m'>
                        <div className='text height-100'>
                            <h3 data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">{publicRelationsServicesTitle}</h3>
                            <p data-aos="fade-left" data-aos-delay="800" data-aos-duration="800" className="padding-bottom25">{linksTextPublicRelationsServices}</p>
                        </div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-t line no-bg dark-gray'></div>
                        <div className='line-b line no-bg dark-gray' ></div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column list-l hide-m'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <div className='line-b line dark-gray no-bg' ></div>
                        <div className='text height-25 list'>
                            <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">{publicRelationsServicesService1}</p>
                            <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">{publicRelationsServicesService2}</p>
                            <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">{publicRelationsServicesService3}</p>
                        </div>
                        <div className='line-r line dark-gray no-bg hide-m' ></div>
                    </div>
                    <div className='column list hide-m'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <div className='line-b line dark-gray no-bg' ></div>
                        <div className='text height-25 list'>
                            <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">{publicRelationsServicesService4}</p>
                            <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">{publicRelationsServicesService5}</p>
                            <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">{publicRelationsServicesService6}</p>
                        </div>
                    </div>
                    <div className="mobile-area">
                        <div className="m-s-one">
                            <div className="column" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                                <h3>{publicRelationsServicesTitle}</h3>
                            </div>
                            <div className="bg-image">
                                <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={getDataImageMovil}
                                alt={altImageMovil}
                                />
                            </div>
                        </div>
                        <div className="m-s-two">
                            <div className='column'>
                                <div className='text' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                                    <h4>{publicRelationsServicesText}</h4>
                                    <p>{linksTextPublicRelationsServices}</p>
                                </div>
                            </div>
                        </div>
                        <div className="m-s-three">
                            <div className='column'>
                                <div className='text list'>
                                    <p data-aos="fade-up" data-aos-delay="700" data-aos-duration="800"><span></span>{publicRelationsServicesService1}</p>
                                    <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="800"><span></span>{publicRelationsServicesService2}</p>
                                    <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="800"><span></span>{publicRelationsServicesService3}</p>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='text list'>
                                    <p data-aos="fade-up" data-aos-delay="700" data-aos-duration="800"><span></span>{publicRelationsServicesService4}</p>
                                    <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="800"><span></span>{publicRelationsServicesService5}</p>
                                    <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="800"><span></span>{publicRelationsServicesService6}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicServicesContainer>
    )
}

const PublicServicesContainer = styled.section`
    .mobile-area{
        padding-top: 48px;
        padding-bottom: 52px;
        color: white;
        @media (min-width: 860px) {
            display: none;
        } 
        .m-s-one{
            order: 1;
            padding: 0 19px;
            position: relative;
            padding-top: 28px;
            padding-bottom:110px;
            .column{
                z-index: 99;
                h3{
                    font-size: 13vw !important;
                    text-transform: uppercase;
                    font-family: var(--bold);
                }
            }
            .bg-image{
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
            }
        }
        .m-s-two{
            padding: 32px 0;
            background: #F4F3EF;
            .column{
                overflow: hidden;
                padding: 0 19px;
                h4{
                    margin-top: 0;
                    color: #575D63;
                    font-size: 1rem;
                    margin-bottom: 68px;
                }
                p{
                    color: #575D63;
                    font-size: 1rem;
                    line-height: 16px;
                    text-align: end;

                }
            }
        }
        .m-s-three{
            padding-left:19px;
            padding-right: 19px;
            background: var(--green);
            display: flex;
            justify-content: space-between;
            order: 3;
            position: relative;
            @media (min-width: 480px) {
                align-items: center;
            }
            &:before{
            position: absolute;
            content: "";
            height: 85%;
            width: 1px;
            background: #fff !important;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
            .column{
                width: 47%;
                .list{
                    p{
                        display: flex;
                        flex-direction: row;
                        justify-content: start;
                        align-items: baseline;
                        font-size: 14px;
                        @media (min-width: 480px) {
                            align-items: center;
                            font-size: 16px;
                        }
                        span{
                            margin-right: 10px;
                            min-width: 6px;
                            max-width: 6px;
                            min-height: 6px;
                            max-height: 6px;
                            background: white;
                            border-radius: 500px;
                            @media (max-width: 480px) {
                                margin-bottom: 5px;
                            }
                        }
                    }
                }
            }
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
        background-color: var(--gray);
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
            width: var(--width-4);
            gap: 0 30px;
            grid-template-columns: 1fr;
        }
    }
    .list-l {
        @media (max-width: 860px) {
            margin-top: 40px;
            p:first-child {
                border-top: solid 1px var(--dark-gray);
            }
        }
    }
    .column {
        height: 50vh;
        position: relative;
        @media (max-width: 860px) {
            height: auto;
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
                justify-content: space-between;
                h3, h4 {
                    margin-top: 50px;
                    font-size: var(--headline-2);
                }
                h4 {
                    font-size: 1.2rem;
                    @media (min-width: 1500px) {
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
                height: 33.33%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                &:last-child {
                    border-bottom: none;
                }
                @media (max-width: 860px) {
                    padding-top: 15px;
                    padding-bottom: 15px;
                }
            }
        }
    }
    .solo {
        height: auto;
        .line-t {
            top: 25px;
        }
    }

    .two {
            grid-column: 2/4;
            @media (max-width: 860px) {
                grid-column: auto;
            }
            .text {
            }
        }
`

export default PublicServices;