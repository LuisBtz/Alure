import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Logos = ({data}) => {
    return(
    <LogosContainer>

        <div className='content'>
                <div className='line-r line absolute dark-gray no-bg'></div>
                <div className='line-l line absolute dark-gray no-bg'></div>
                <div className='grid'>
                    <div className='column solo'>
                        <p>Selected clients, brands & partners</p>
                        <div className='line-r line dark-gray no-bg hide-m' ></div>
                        <div className='line-b line no-bg dark-gray' ></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-r line dark-gray no-bg' ></div>
                        <div className='line-b line no-bg dark-gray' ></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line no-bg dark-gray' ></div>
                    </div>
                </div>
                <div className='logos'>
                {data.sanityClientsPage.clients.map(({ link, logo, _key}) => {
                    const getDataImage = getImage(logo.asset);
                        return (
                            <div className='column-img' key={_key}>
                                <a href={link} target='_blank' rel="noreferrer">
                                    <GatsbyImage
                                        image={getDataImage}
                                        alt={logo.enAlt}
                                    />
                                </a>
                            </div>
                            )
                        })}
                </div>
        </div>
    </LogosContainer>

    )
}

const LogosContainer = styled.section`
        background-color: var(--gray);
        position: relative;
        width: 100%;
        color: var(--dark-gray);
        @media (max-width: 860px) {
            height: 100% !important;
            color: var(--dark-gray);
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
                height: auto;
            }
        }
        .column.solo {
            height: 150px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: end;
            @media (max-width: 860px) {
                height: auto !important;
                padding-top: 25px;
                text-align: center;
            }
            p {
                margin-bottom: 25px;
            }
        }
        .logos {
            display: grid;
            grid-template-columns: repeat(7, auto);
            grid-auto-flow: dense;
            grid-gap: 50px;
            width: var(--width-l);
            margin: 0 auto;  
            justify-content: center;
            padding-top: 50px;
            padding-bottom: 50px;
            @media (max-width: 860px) {
                gap: 50px 0;
                grid-template-columns: 1fr;
                height: auto;
            }
            .column-img:nth-child(1) {
                grid-row: 1;
                grid-column: 1;
                @media (max-width: 860px) {
                    grid-row: auto;
                    grid-column: auto;
                }
            }
            .column-img:nth-child(2) {
                grid-row: 1;
                grid-column: 4;
                @media (max-width: 860px) {
                    grid-row: auto;
                    grid-column: auto;
                }
            }
            .column-img:nth-child(3) {
                grid-row: 1;
                grid-column: 7;
                @media (max-width: 860px) {
                    grid-row: auto;
                    grid-column: auto;
                }
            }
            .column-img:nth-child(4) {
                grid-row: 2;
                grid-column: 2;
                @media (max-width: 860px) {
                    grid-row: auto;
                    grid-column: auto;
                }
            }
            .column-img:nth-child(5) {
                grid-row: 2;
                grid-column: 4;
                @media (max-width: 860px) {
                    grid-row: auto;
                    grid-column: auto;
                }
            }
            .column-img:nth-child(6) {
                grid-row: 2;
                grid-column: 6;
                @media (max-width: 860px) {
                    grid-row: auto;
                    grid-column: auto;
                }
            }
            .column-img:nth-child(7) {
                grid-row: 3;
                grid-column: 1;
                @media (max-width: 860px) {
                    grid-row: auto;
                    grid-column: auto;
                }
            }
            .column-img:nth-child(8) {
                grid-row: 3;
                grid-column: 4;
                @media (max-width: 860px) {
                    grid-row: auto;
                    grid-column: auto;
                }
            }
            .column-img:nth-child(9) {
                grid-row: 3;
                grid-column: 7;
                @media (max-width: 860px) {
                    grid-row: auto;
                    grid-column: auto;
                }
            }
            .column-img {
                width: 150px;
                align-self: center;
                justify-self: center;
            }
        }
`

export default Logos;