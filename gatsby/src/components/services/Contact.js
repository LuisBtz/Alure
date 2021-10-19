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
        <ContactContainer>
            <div className='de'></div>
            <div className='content'>
                <div className='line-r line absolute dark-gray no-bg'></div>
                <div className='line-l line absolute dark-gray no-bg'></div>
                <div className='grid'>
                    <div className='column'>
                        <div className='line-t line dark-gray no-bg'></div>
                         <div className='text'>
                            <h3>{salesSectionNetworkTitle}</h3>
                            <p>{salesSectionNetworkText}</p>
                         </div>
                         <div className='line-r line dark-gray no-bg hide-m' ></div>
                         <div className='line-b line dark-gray no-bg' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-t line dark-gray no-bg'></div>
                        <div className='line-r line dark-gray no-bg' ></div>
                        <div className='line-b line dark-gray no-bg' ></div>
                    </div>
                    <div className='column sales'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <div className='line-b line dark-gray no-bg hide-m' ></div>
                        <div className='text'>
                            <h3>{salesSectionSalesTitle}</h3>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='line-r line dark-gray no-bg hide-m' ></div>
                        <div className='line-b line dark-gray no-bg' ></div>
                        <div className='image'>
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={getDataImage}
                                alt={altImage}
                            />
                        </div>
                    </div>
                    <div className='column'>
                        <div className='line-r line dark-gray no-bg' ></div>
                        <div className='line-b line dark-gray no-bg' ></div>
                        <div className='text solo'>
                            <h3>{salesSectionPersonalizedTitle}</h3>
                            <p>{salesSectionPersonalizedText}</p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='line-b line dark-gray no-bg' ></div>
                        <div className='text'>
                            <p></p>
                            <p>{linksTextSalesSection}</p>
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
        height: 100% !important;
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
            }
        
    }
    .sales .text h3 {
            @media (max-width: 860px) {
            margin-top: 0;
        }
    }

.sales .text {
    @media (max-width: 860px) {
        padding-bottom: 25px;
    }
}

    .solo {
        .line-t {
            top: 25px;
        }
        h3 {
            margin-top: 0px;
        }
    }
    h3 {
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

`

export default Contact;