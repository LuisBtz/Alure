import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Next = () => {
    return(
        <NextContainer>
            <div className='content'>
                <div className='line-r line dark-gray absolute'></div>
                <div className='line-l line dark-gray absolute'></div>
                <div className='grid'>
                    <div className='column'>
                        <p>Next Up</p>
                        <Link to='/services'>services</Link>
                        <div className='line-r dark-gray line hide-m' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-r dark-gray line' ></div>
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
        }
        p {
            padding-top: 25px;
        }
        .column {
            height: 165px;
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