import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const Sales = ({data}) => {

    const altImage = data.sanityServicesPage.salesServicesImages.enAlt;
    const getDataImage = getImage(data.sanityServicesPage.salesServicesImages.asset);

    const altImageMovil = data.sanityServicesPage.salesServicesImagesMovil.enAlt;
    const getDataImageMovil = getImage(data.sanityServicesPage.salesServicesImagesMovil.asset);

    const salesServicesTitle = data.sanityServicesPage.salesServicesTitle.en;
    const salesServicesText = data.sanityServicesPage.salesServicesText.en;
    const salesServicesService1 = data.sanityServicesPage.salesServicesService1.en;
    const salesServicesService2 = data.sanityServicesPage.salesServicesService2.en;
    const salesServicesService3 = data.sanityServicesPage.salesServicesService3.en;
    const salesServicesService4 = data.sanityServicesPage.salesServicesService4.en;
    const salesServicesService5 = data.sanityServicesPage.salesServicesService5.en;
    const salesServicesService6 = data.sanityServicesPage.salesServicesService6.en;
    const salesServicesService7 = data.sanityServicesPage.salesServicesService7.en;
    const salesServicesService8 = data.sanityServicesPage.salesServicesService8.en;
    const link = data.sanityServicesPage.linksTextPublicRelationsSection1.en;


    return(
        <SalesContainer>
            <div className='image'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage}
                    alt={altImage}
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
                            <h4 className='color-white'>{salesServicesText}</h4>
                        </div>
                    </div>
                    <div className='column two hide-m'>
                        <div className='text height-100' data-aos="fade-left" data-aos-delay="900" data-aos-duration="800">
                            <h3>{salesServicesTitle}</h3>
                            <p className="padding-bottom25">{link}</p>
                        </div>
                    </div>
                    <div className='column  hide-m'>
                        <div className='line-t line no-bg hide-m'></div>
                        <div className='line-b line no-bg' ></div>
                    </div>
                    <div className='column list-l hide-m'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <div className='line-b line dark-gray no-bg white-m' ></div>
                        <div className='text height-25 list'>
                            <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">{salesServicesService1}</p>
                            <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">{salesServicesService2}</p>
                            <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">{salesServicesService3}</p>
                            <p data-aos="fade-up" data-aos-delay="1100" data-aos-duration="800">{salesServicesService4}</p>
                        </div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column list hide-m'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <div className='line-b line dark-gray no-bg white-m' ></div>
                        <div className='text height-25 list'>
                            <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">{salesServicesService5}</p>
                            <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">{salesServicesService6}</p>
                            <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">{salesServicesService7}</p>
                            <p data-aos="fade-up" data-aos-delay="1100" data-aos-duration="800">{salesServicesService8}</p>
                        </div>
                    </div>
                    <div className="mobile-area">
                        <div className="m-s-one">
                            <div className="column">
                                <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                                <h3>{salesServicesTitle}</h3>

                                </div>
                            </div>
                            <div className="bg-image">
                                <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={getDataImageMovil}
                                alt={altImageMovil}
                                />
                            </div>
                        </div>
                        <div className='column m-s-two'>
                            <div className='text' data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">
                            <h4 className='color-white'>{salesServicesText}</h4>
                            </div>
                            <p data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">{link}</p>
                        </div>
                        <div className="m-s-three">
                            <div className='column'>
                                <div className='text list'>
                                    <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="800"><span></span>{salesServicesService1}</p>
                                    <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="800"><span></span>{salesServicesService2}</p>
                                    <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800"><span></span>{salesServicesService3}</p>
                                    <p data-aos="fade-up" data-aos-delay="1100" data-aos-duration="800"><span></span>{salesServicesService4}</p>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='text list'>
                                    <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="800"><span></span>{salesServicesService5}</p>
                                    <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="800"><span></span>{salesServicesService6}</p>
                                    <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800"><span></span>{salesServicesService7}</p>
                                    <p data-aos="fade-up" data-aos-delay="1100" data-aos-duration="800"><span></span>{salesServicesService8}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SalesContainer>
    )
}

const SalesContainer = styled.section`
    .mobile-area{
        overflow: hidden;
        padding-top: 48px;
        padding-bottom: 56px;
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
        .m-s-three{
            padding-left:19px;
            padding-right: 19px;
            background: var(--green);
            display: flex;
            justify-content: space-between;
            order: 3;
            position: relative;
            &:before{
                position: absolute;
                content: "";
                height: 85%;
                width: 1px;
                background: #fff !important;
                top:50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            @media (min-width: 480px) {
                align-items: center;
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
                        height: 65px;
                        @media (min-width: 480px) {
                            align-items: center;
                            font-size: 16px;
                        }
                        span{
                            margin-right: 10px;
                            min-width: 3px;
                            max-width: 3px;
                            min-height: 3px;
                            max-height: 3px;
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
        @media (max-width: 860px) {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: none;
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
            .line {
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
        .m-s-two{
            @media (min-width: 860px) {
                display: none;
            }
        }
        @media (max-width: 860px) {
            width: var(--width-4);
            gap: 0 30px;
            grid-template-columns: 1fr;
            .m-s-two{ 
                order: 2;
                padding: 0 19px;
                background: #F4F3EF; 
                padding-top: 34px;
                padding-bottom: 32px;
                .text{
                    padding-bottom: 104px;
                    h4{
                        margin-top: 0;
                        color: #575D63;
                        font-size: 16px;
                    }
                }
                p{
                    font-size: 14px;
                    line-height: 16px;
                    color: #575D63; 
                }
            }
        }
    }
    .list-l {
        @media (max-width: 860px) {
            margin-top: 40px;
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
                h3 {
                    @media (max-width: 860px) {
                        margin-bottom: 50px;
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
                @media (max-width: 860px) {
                    padding-top: 15px;
                    padding-bottom: 15px;
                    border-bottom: solid 1px white;
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
            h3 {
                font-size: var(--headline-2);
            }
            @media (max-width: 860px) {
                grid-column: auto;
            }
            .text {
            }
        }
`

export default Sales;