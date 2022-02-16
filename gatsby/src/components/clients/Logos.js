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
                    <div className='column solo m-s-one'>
                        <p data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">Selected clients, brands & partners</p>
                        <div className='line-r line dark-gray no-bg hide-m' ></div>
                        <div className='line-b line no-bg dark-gray hide-m' ></div>
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
                            <div className='column-img' key={_key} data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
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
        overflow: hidden;
        position: relative;
        width: 100%;
        color: var(--dark-gray);
        @media (max-width: 860px) {
            height: 100% !important;
            background: #F4F3EF;
            color: var(--dark-gray);
            padding-bottom: 52px;
            overflow: hidden;
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
                height: auto;
                .m-s-one{
                    padding: 0 19px;
                    background: var(--green);
                    p{
                        padding: 0;
                        text-align: start;
                        font-size: 36px;
                        text-transform: uppercase;
                        font-family: var(--bold);
                        color: white;
                        margin:48px 0 38px;
                    }
                }
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
            }
            p {
                margin-bottom: 25px;
            }
        }
        .logos {
            overflow: hidden;
            display: grid;
            grid-template-columns: repeat(3, auto);
            grid-auto-flow: dense;
            grid-gap: 50px;
            width: var(--width-l);
            margin: 0 auto;  
            justify-content: space-around;
            padding-top: 50px;
            padding-bottom: 50px;
            @media (max-width: 860px) {
                grid-template-columns: repeat(2, auto);
                align-items: center;
                justify-content: center;
                grid-column-gap: 100px;
                width: 100%;
                height: auto;
                position: relative;
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
            .column-img {
                width: 150px;
                align-self: center;
                justify-self: center;
                @media (max-width: 860px) {
                    width: 120px;
                }
            }
        }
`

export default Logos;