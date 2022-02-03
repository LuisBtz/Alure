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
                    padding-bottom: 20px;
                    }
        }
        p {
            padding-top: 25px;
            @media (max-width: 860px) {
                font-size: 16px;
            }
        }
        .column {
            height: auto;
            h2 {
                font-size: var(--headline-2);
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