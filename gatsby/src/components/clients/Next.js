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
                        <div className='line-t dark-gray line'></div>
                        <div className='text'>
                            <p>Next Up</p>
                            <Link to='/blog'>BLOG</Link>
                        </div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column'>
                        <div className='line-t dark-gray line'></div>
                        <div className='line-r line dark-gray no-bg' ></div>
                    </div>
                    <div className='column'>
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
            height: 280px;
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