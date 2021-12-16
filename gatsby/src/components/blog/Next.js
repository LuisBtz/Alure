import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Next = () => {
    return(
        <NextContainer>
            <div className='content'>
                <div className='line-r line absolute no-bg dark-gray'></div>
                <div className='line-l line absolute no-bg dark-gray'></div>
                <div className='grid'>
                    <div className='column'>
                        <div className='text hide-m' data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">
                            <p>Next Up</p>
                            <Link to='/blog'>BLOG</Link>
                        </div>

                            <Link data-aos="fade-up" data-aos-delay="800" data-aos-duration="800" className="m-link" to='/blog'>Load more articles ↓</Link>

                        <div className='line-r line dark-gray no-bg hide-m' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column hide-m'>
                    </div>
                </div>
                
            </div>
        </NextContainer>
    )
}

const NextContainer = styled.section`
    color: var(--green);
    position: relative;
    @media (max-width: 860px) {
        background:white;
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
                grid-template-columns: 1fr;
            }
        a {
            color: var(--dark-gray);
            font-family: var(--bold);
            text-transform: uppercase;
            font-size: 4rem;
            margin-top: 25px;
            display: block;
        }
        p {
            padding-top: 25px;
        }
        .column {
            height: auto;
            h2 {
                font-size: var(--headline-1);
                text-transform: uppercase;
                padding-bottom: 25px;
            }
            .line-t {
                top: 0;
            }
            .text {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding-bottom: 25px;
            }
            @media (max-width: 860px) {
                height: auto;
                padding: 0 19px;
                padding-top: 56px;
                padding-bottom: 32px;
                @media (min-width: 480px) {
                    padding-top: 85px;
                    padding-bottom: 56px;
                }
                .m-link{
                    margin: 0;
                    font-size: 24px;
                    text-transform: capitalize;
                    font-family: var(--reg);
                    color: #575D63;
                    @media (min-width: 480px) {
                        font-size: 28px;
                    }
                }
            }
            @media (min-width: 860px) {
                .m-link{
                    display: none;
                }
            }
        }
    }
`

export default Next