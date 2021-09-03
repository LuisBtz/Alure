import React from 'react';
import styled from 'styled-components';

const Connect = ({data}) => {

    const connect = data.sanityAboutPage.connectTitle.en;
    const connectText = data.sanityAboutPage.connectText.en;
    const mission = data.sanityAboutPage.ourMissionTitle.en;
    const inspireTitle = data.sanityAboutPage.inspireTitle.en;
    const inspireText = data.sanityAboutPage.inspireText.en;
    const impactTitle = data.sanityAboutPage.impactTitle.en;
    const impactText = data.sanityAboutPage.impactText.en;
    return(
        <ConnectContainer>
            <div className='content'>
                <div className='line-r line absolute no-bg'></div>
                <div className='line-l line absolute green-background'></div>
                <div className='grid'>
                    <div className='column solo'>
                        <div className='green-background line-t line'></div>
                    </div>
                    <div className='column solo'>
                        <div className='green-background line-t line'></div>
                    </div>
                    <div className='column solo'>
                        <div className=' line-t line'></div>
                    </div>
                    <div className='column two'>
                        <div className='text'>
                            <h3>{connect}</h3>
                            <p>{connectText}</p>
                        </div>
                    </div>
                    <div className='column green-background'>
                        <div className='line-l line line-l-width-50 green-background' ></div>
                        <div className='line-r line line-r-width-50 green-background' ></div>
                        <h3 className='margin-top-50'>{mission}</h3>
                    </div>
                    <div className='column'>
                        <div className='line-t line top-0 green-background'></div>
                        <div className='text'>
                            <h3>{inspireTitle}</h3>
                            <p>{inspireText}</p>
                        </div>
                        <div className='line-r line green-background' ></div>
                        <div className='line-b line green-background no-bg'></div>
                    </div>
                    <div className='column'>
                        <div className='line-t line top-0 green-background'></div>
                        <div className='text'>
                            <h3>{impactTitle}</h3>
                            <p>{impactText}</p>
                        </div>
                        <div className='line-b line green-background no-bg'></div>
                    </div>
                    <div className='column green-background'>
                        <div className='line-t line top-0'></div>
                        <div className='line-l line line-l-width-50 green-background' ></div>
                        <div className='line-r line line-r-width-50 green-background' ></div>
                        <div className='line-b line no-bg'></div>
                    </div>
                </div>
            </div>
        </ConnectContainer>
    )
}

const ConnectContainer = styled.section`
position: relative;
    color: var(--dark-gray);
    .grid {
        width: var(--width-l);
        margin: 0 auto;   
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        gap: 0 100px;
        position: relative;
        .two {
            grid-column: 1/3;
            .text {
                padding-top: 0 !important;
            }
            h3 {
                margin-top: 50px;
            }
            
        }
        .column {
            height: 50vh;
            .text {
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-between;
                padding-top: 25px;
                padding-bottom: 50px;
            }
            .line-b {
                bottom: 25px;
            }
            .icon {
                margin-top: 25px;
                width: 70px;
            }
            a {
                display: block;
            }
            h2 {
                font-size: 4rem;
                text-transform: uppercase;
            }
            p {
                padding-top: 25px;
            }
        }
        .solo {
            height: auto;
            .line-t {
                top: 25px;
            }
        }
        .solo .line-b {
            bottom: 25px;
        }
    }
`

export default Connect