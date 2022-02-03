import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const Contact = ({data}) => {
    
    const salesSectionNetworkTitle = data.sanityServicesPage.salesSectionNetworkTitle.en;
    const salesSectionNetworkText = data.sanityServicesPage.salesSectionNetworkText.en;
    const salesSectionNetworkImage = data.sanityServicesPage.salesSectionNetworkImage;
    const salesSectionPersonalizedTitle = data.sanityServicesPage.salesSectionPersonalizedTitle.en;
    const salesSectionPersonalizedText = data.sanityServicesPage.salesSectionPersonalizedText.en;
    const linksTextSalesSection = data.sanityServicesPage.linksTextSalesSection.en;
    const salesSectionSalesTitle = data.sanityServicesPage.salesSectionSalesTitle.en;


    const altImage = salesSectionNetworkImage.enAlt;
    const getDataImage = getImage(salesSectionNetworkImage.asset);

    return(
        <ContactContainer id='next'>
            <div className='de'></div>
            <div className='content'>
                <div className='line-r line absolute dark-gray no-bg'></div>
                <div className='line-l line absolute dark-gray no-bg'></div>
                <div className='grid'>
                    <div className='column order-2 m-modifi-one'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                         <div className='text' data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">
                            <h3>{salesSectionNetworkTitle}</h3>
                            <p>{salesSectionNetworkText}</p>
                         </div>
                         <div className='line-r line dark-gray no-bg hide-m' ></div>
                         <div className='line-b line dark-gray no-bg hide-m' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-t line dark-gray no-bg'></div>
                        <div className='line-r line dark-gray no-bg' ></div>
                        <div className='line-b line dark-gray no-bg' ></div>
                    </div>
                    <div className='column sales order-1'>
                        <div className='line-l line line-l-width-50'></div>
                        <div className='line-r line line-r-width-50'></div>
                        <div className='text m-area' data-aos="fade-left" data-aos-delay="900" data-aos-duration="800">
                            <h3>{salesSectionSalesTitle}</h3>
                            <p>See our Sales Representation & Marketing Services↓</p>
                        </div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-r line dark-gray no-bg hide-m' ></div>
                        <div className='line-b line dark-gray no-bg' ></div>
                        <div className='image' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={getDataImage}
                                alt={altImage+"s"}
                            />
                        </div>
                    </div>
                    <div className='column order-3 m-modifi-two'>
                        <div className='line-r line dark-gray no-bg hide-m' ></div>
                        <div className='line-b line dark-gray no-bg hide-m' ></div>
                        <div className='text solo' data-aos="fade-left" data-aos-delay="1100" data-aos-duration="800">
                            <h3>{salesSectionPersonalizedTitle}</h3>
                            <p>{salesSectionPersonalizedText}</p>
                        </div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-b line dark-gray no-bg' ></div>
                        <div className='text'>
                            <p></p>
                            <p data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800">{linksTextSalesSection}</p>
                        </div>
                    </div>
                </div>
            </div>
        </ContactContainer>
    )
}

const ContactContainer = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    color: var(--dark-gray);
    @media (max-width: 860px) {
        overflow: hidden;
        height: 100% !important;
        padding: 48px 0 52px;
        background: #F4F3EF !important;
    }
    .de {
        background-color: white;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 33.33%;
        @media (max-width: 860px) {
            position: static;
            width: 100%;
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
        }
        .line-b {
            bottom: 25px;
        }
        .image {
            width: 100%;
            height: calc(100% - 50px);
        }
        .text {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
            padding-bottom: 50px;
            @media (max-width: 860px) {
                align-items: flex-start;
                &.m-area{
                    h3{
                        &:before{
                            display: none;
                        }
                    }
                }
            }
                @media (min-width: 860px) {
                    &.m-area{
                        p{
                            display: none;
                        }
                    }
                }
                h3{
                    @media (max-width: 860px) {
                        position: relative;
                        margin-top: 0;
                        font-size: 24px !important;
                        font-family: var(--reg);
                        margin-bottom: 37px;
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
                p{
                    @media (max-width: 860px) {
                        font-size: 16px;
                        padding-bottom: 32px;
                    }
                }
            }
        
    }
    .sales{
        @media (max-width: 860px) {
            background-color: var(--green);
            color: white;
        padding: 32px 19px;
            .line {
                background: transparent;
            }
        }
        .text{

            h3 {
                @media (max-width: 860px) {
                    margin-top: 0;
                    font-size: 36px !important;
                    text-transform: uppercase;
                    font-family: var(--bold);
                    margin-bottom: 62px;
                }
            } 
            p{
                font-family: var(--reg);
                font-size: 14px;
            }
        }   
    }

.sales .text {
    @media (max-width: 860px) {
        padding-bottom: 0;
    }
}

    .solo {
        .line-t {
            top: 25px;
        }
        h3 {
            font-size: var(--headline-2);
            margin-top: 0px;
        }
    }
    h3 {
        font-size: var(--headline-2);
        margin-top: 50px;
        
    }
    .two {
            grid-column: 1/3;
            @media (max-width: 860px) {
                grid-column: auto;
            }
            .text {
                padding-top: 0 !important;
            }
        }
    .order-1{
        @media (max-width: 860px) {
            order: 1;

        }
    }
    .order-2{
        @media (max-width: 860px) {
            order: 2;

        }
    }
    .order-3{
        @media (max-width: 860px) {
            order: 3;

        }
    }
    .z-1{
        z-index: 11;
    }
    @media (max-width: 860px) {
        .m-modifi-one{
            padding-top: 32px;
          .text{
              padding: 0;
          }  
        }
        .m-modifi-two{
            padding-top: 32px;
          .text{
              padding: 0;
          }  
        }
        .m-modifi-one,
        .m-modifi-two{
            background: var(--white);
            position: relative;
            padding-left: 19px;
            padding-right: 19px;
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

`

export default Contact;