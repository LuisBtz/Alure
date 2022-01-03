import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Next = () => {
    return(
        <NextContainer>
            <div className='content'>
                <div className='line-r line absolute dark-gray hide-m no-bg'></div>
                <div className='line-l line absolute dark-gray hide-m no-bg'></div>
                <div className='grid'>
                    <div className='column' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                        <p>Next Up</p>
                        <Link to='/about'>about us</Link>
                        <div className='line-r line dark-gray hide-m' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-r line dark-gray' ></div>
                    </div>
                    <div className='column hide-m'>
                    </div>
                </div>
                
            </div>
        </NextContainer>
    )
}

const NextContainer = styled.section`
    position: relative;
    color: var(--green);
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
        /* @media (max-width: 1000px) {
            width: var(--width-l-m);
        } */
        @media (max-width: 860px) {
            grid-template-columns: 1fr;
            width: var(--width-l-m);
            padding: 24px 0 32px;
        }
        a {
            color: var(--dark-gray);
            font-family: var(--bold);
            text-transform: uppercase;
            font-size: 36px;
            margin-top: 25px;
            display: block;
            @media (max-width: 860px) {
                font-size: 36px;
                line-height: 37px;
                margin-top: 16px;
                font-weight: 700;
                color: #575D63;  
                font-family: var(--bold); 
            }
        }
        p {
            line-height: 14px;
            color: #575D63;
            @media (min-width: 860px) {
                padding-top: 25px;
            }
        }
        .column {
            height: auto;
            h2 {
                font-size: var(--headline-1);
                text-transform: uppercase;
                padding-bottom: 25px;
            }
        }
        .solo .line {
            bottom: 25px;
        }
    }
`

export default Next