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
                        <div className='line-t dark-gray line hide-m'></div>
                        <div className='text' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                            <p>Next Up</p>
                            <Link to='/blog'>BLOG</Link>
                        </div>
                        <div className='line-r line dark-gray no-bg hide-m' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-t dark-gray line'></div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-t dark-gray line'></div>
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
        background: white;
    }
    .grid {
        width: var(--width-l);
        margin: 0 auto;   
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        gap: 0 100px;
        position: relative;
        @media (max-width: 860px) {
            grid-template-columns: 1fr;
            width: var(--width-l-m);
        }
        a {
            color: var(--dark-gray);
            font-family: var(--bold);
            text-transform: uppercase;
            font-size: var(--headline-1);
            margin-top: 25px;
            display: block;
            @media (max-width: 860px) {
                font-size: 36px;
                text-transform: uppercase;
                font-family: var(--bold);   
                margin-top: 16px;
            }
        }
        p {
            padding-top: 25px;
            font-size: 14px;
        }
        .column {
            height: auto;
            @media (max-width: 860px) {
                height: auto;
            }
            h2 {
                font-size: 4rem;
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
        }
    }
`

export default Next