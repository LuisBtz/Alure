import React from 'react';
import styled from 'styled-components';

const PublicServices = ({data}) => {

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
                    <div className='column solo'>
                            <div className='line-t line no-bg dark-gray'></div>
                    </div>
                    <div className='colum solo'>
                        <div className='line-t line dark-gray no-bg'></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line dark-gray no-bg'></div>
                    </div>
                    <div className='column'>
                        <div className='text'>
                            <h4>{publicRelationsServicesText}</h4>
                        </div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column two'>
                        <div className='text height-100'>
                            <h3>{publicRelationsServicesTitle}</h3>
                            <p className="padding-bottom25">{linksTextPublicRelationsServices}</p>
                        </div>
                    </div>
                    <div className='column '>
                        <div className='line-t line no-bg dark-gray'></div>
                        <div className='line-b line no-bg dark-gray' ></div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column '>
                        <div className='line-t line dark-gray no-bg'></div>
                        <div className='line-b line dark-gray no-bg' ></div>
                        <div className='text height-25 list'>
                            <p>{publicRelationsServicesService1}</p>
                            <p>{publicRelationsServicesService2}</p>
                            <p>{publicRelationsServicesService3}</p>
                        </div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column '>
                        <div className='line-t line dark-gray no-bg'></div>
                        <div className='line-b line dark-gray no-bg' ></div>
                        <div className='text height-25 list'>
                            <p>{publicRelationsServicesService4}</p>
                            <p>{publicRelationsServicesService5}</p>
                            <p>{publicRelationsServicesService6}</p>
                        </div>
                    </div>
                </div>
            </div>
        </PublicServicesContainer>
    )
}

const PublicServicesContainer = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: white;
    color: var(--dark-gray);
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
            .text {
            }
        }
`

export default PublicServices;