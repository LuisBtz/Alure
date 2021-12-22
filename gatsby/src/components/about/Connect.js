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
                <div className='line-r line absolute no-bg dark-gray-m'></div>
                <div className='line-l line absolute dark-gray no-bg'></div>
                <div className='grid'>
                    <div className='column solo hide-m'>
                        <div className='green-background line-t line no-bg'></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='green-background line-t line no-bg'></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className=' line-t line no-bg'></div>
                    </div>
                    <div className='column two m-bg m-p o-v-h'>
                        <div className='text text-two' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                            <h3>{connect}</h3>
                            <p>{connectText}</p>
                        </div>
                    </div>
                    <div className='column green-background m-p'>
                    <div className='line-l line line-l-width-50 green-background hide-m' ></div>
                    <div className='line-r line line-r-width-50 green-background hide-m' ></div>
                        <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">

                        <h3 className='margin-top-50 padding-bottom-100-m'>{mission}</h3>
                        </div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-t line top-0 green-background no-bg hide-m'></div>
                        <div className='text' data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800">
                            <h3>{inspireTitle}</h3>
                            <p>{inspireText}</p>
                        </div>
                        <div className='line-r line green-background no-bg hide-m' ></div>
                        <div className='line-b line green-background no-bg hide-m'></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-t line top-0 green-background no-bg'></div>
                        <div className='text' data-aos="fade-up" data-aos-delay="1400" data-aos-duration="800">
                            <h3>{impactTitle}</h3>
                            <p>{impactText}</p>
                        </div>
                        <div className='line-b line green-background no-bg'></div>
                    </div>
                    <div className='column green-background hide-m'>
                        <div className='line-t line top-0 no-bg'></div>
                        <div className='line-l line line-l-width-50 green-background' ></div>
                        <div className='line-r line line-r-width-50 green-background' ></div>
                        <div className='line-b line no-bg'></div>
                    </div>
                    <div className="moble-content">
                    <div className='column'>
                        <div className='line-t line top-0 green-background no-bg hide-m'></div>
                        <div className='text' data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">
                            <h3>{inspireTitle}</h3>
                            <p>{inspireText}</p>
                        </div>
                        <div className='line-r line green-background no-bg hide-m' ></div>
                        <div className='line-b line green-background no-bg hide-m'></div>
                    </div>
                    <div className="line-m"></div>
                    <div className='column'>
                        <div className='line-t line top-0 green-background no-bg'></div>
                        <div className='text' data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">
                            <h3>{impactTitle}</h3>
                            <p>{impactText}</p>
                        </div>
                        <div className='line-b line green-background no-bg'></div>
                    </div>
                    </div>
                </div>
            </div>
        </ConnectContainer>
    )
}

const ConnectContainer = styled.section`
.moble-content{
    background: white;
    padding: 0 19px;
    order: 4;
    position: relative;
    @media (min-width: 860px) {
        display: none;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    .column{
        overflow: hidden;
        height: 300px !important;
        @media (min-width: 375px) {
            height: 224px !important;
        }
        width: 47%;
        border-top: 1px solid #575D63;
        border-bottom: 1px solid #575D63;
        .text{
            h3{
                text-transform: capitalize;
                        font-family: var(--reg);
                        margin-bottom: 8px;
                        position: relative;
                        &:before{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 1px;
                            background: #575D63;
                            content:"";
                        }
                        
                        
            }
        }
    }
    .line-m{
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(-50%,-50%);
            background: #575D63;
            height: 192px;
            width: 1px;
        }

}
        @media (max-width: 860px) {
            padding: 52px 0;
            z-index: 1;
            background: #F4F3EF;
        }
position: relative;
    color: var(--dark-gray);
    .grid {
        width: var(--width-l);
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        gap: 0 100px;
        position: relative;
        top: -1px;
        margin: 0 auto;   
        width: var(--width-l);
        @media (max-width: 860px) {
            gap: 0;
            grid-template-columns: 1fr;
            width: var(--width-4);
        }
        h3 {
                font-size: var(--headline-2);
                    @media (max-width: 860px) {
                    font-size: 24px;
                    text-transform: uppercase;
                    font-family: var(--bold);
                    }
            }
        .two {
            grid-column: 1/3;
            @media (max-width: 860px) {
                grid-column: auto;
                order: 2;
            }
            .text {
                padding-top: 0 !important;
            }
            h3 {
                margin-top: 50px;
            }
            
        }
        .column {
            height: 50vh;
            @media (max-width: 860px) {
                height: auto;
            }
            .text {
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-between;
                padding-top: 25px;
                padding-bottom: 50px;
                @media (max-width: 860px) {
                    align-items: flex-start;
                }
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
                font-size: var(--headline-2);
                text-transform: uppercase;
            }
            p {
                padding-top: 25px;
            }
            .green-background{
                @media (max-width: 860px) {
                    border: 0;
                    z-index: 111;
                } 
            }
            .text-two{
                @media (max-width: 860px) {
                    padding-bottom: 32px;
                }
                h3{
                    @media (max-width: 860px) {
                        text-transform: capitalize;
                        font-family: var(--reg);
                        position: relative;
                        &:before{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 1px;
                            background: #575D63;
                            content:"";
                        }
                    } 
                }
                p{
                    @media (max-width: 860px) {
                        padding-top: 40px;
                        font-size: 16px;
                    }
                }
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
        .padding-bottom-100-m{
            @media (max-width: 860px) {
                padding-bottom: 130px;
                font-size: 36px;
            }  
        }
    }
    .m-p{
        @media (max-width: 860px) {
           padding: 0 19px;
        }
    }
    .m-bg{
        @media (max-width: 860px) {
            background: #fff;
        }
    }
    .o-v-h{
        overflow: hidden;
    }
`

export default Connect