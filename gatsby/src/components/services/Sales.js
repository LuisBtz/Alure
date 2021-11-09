import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const Sales = ({data}) => {

    const altImage = data.sanityServicesPage.salesServicesImages.enAlt;
    const getDataImage = getImage(data.sanityServicesPage.salesServicesImages.asset);
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
                            <h4 className='color-white'>{salesServicesText}</h4>
                        </div>
                    </div>
                    <div className='column two'>
                        <div className='text height-100'>
                            <h3>{salesServicesTitle}</h3>
                            <p className="padding-bottom25">{link}</p>
                        </div>
                    </div>
                    <div className='column '>
                        <div className='line-t line no-bg hide-m'></div>
                        <div className='line-b line no-bg' ></div>
                    </div>
                    <div className='column list-l'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <div className='line-b line dark-gray no-bg white-m' ></div>
                        <div className='text height-25 list'>
                            <p>{salesServicesService1}</p>
                            <p>{salesServicesService2}</p>
                            <p>{salesServicesService3}</p>
                            <p>{salesServicesService4}</p>
                        </div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column list'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <div className='line-b line dark-gray no-bg white-m' ></div>
                        <div className='text height-25 list'>
                            <p>{salesServicesService5}</p>
                            <p>{salesServicesService6}</p>
                            <p>{salesServicesService7}</p>
                            <p>{salesServicesService8}</p>
                        </div>
                    </div>
                </div>
            </div>
        </SalesContainer>
    )
}

const SalesContainer = styled.section`
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
    .list-l {
        @media (max-width: 860px) {
            margin-top: 40px;
        }
    }
    .list {
        @media (max-width: 860px) {
            margin-top: -10px;
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