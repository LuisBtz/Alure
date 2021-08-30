import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Next = () => {
    return(
        <NextContainer>
            <div className='content'>
                <div className='line-r line absolute'></div>
                <div className='line-l line absolute'></div>
                <div className='grid'>
                    <div className='column'>
                        <p>Next Up</p>
                        <Link to='/about'>about us</Link>
                        <div className='line-r line' ></div>
                    </div>
                    <div className='column'>
                        <div className='line-r line' ></div>
                    </div>
                    <div className='column'>
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
            height: 165px;
            h2 {
                font-size: 4rem;
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