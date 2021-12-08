import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { Link } from 'gatsby';


const Services = ({data}) => {

    const altImage = data.sanityHomePage.servicesSectionBackground.enAlt;
    const getDataImage = getImage(data.sanityHomePage.servicesSectionBackground.asset);
    const title = data.sanityHomePage.servicesTitleSection.en;
    const link = data.sanityHomePage.servicesSectionLinkText.en;

    return (
        <ServicesContainer>
            <div className='image'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage}
                    alt={altImage}
                />
            </div>
            <div className='content'>
                <div className='line-r line absolute'></div>
                <div className='line-l line absolute'></div>
                <div className='grid hide-m'>
                    <div className='column solo'>
                        <div className='line-t line'></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line'></div>
                    </div>
                    <div className='column solo'>
                        <div className='line-t line'></div>
                    </div>

                    <div className='column'>
                        <Link className='padding-top-50' to='/services' data-aos="fade-left" data-aos-delay="600" data-aos-duration="800">{link}</Link>
                        <div className='line-r line' data-sal="slide-up"></div>
                    </div>
                    <div className='column two padding-bottom-50-m' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                        <h3 className='padding-top-50' >{title}</h3>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line' data-sal="slide-up"></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line' data-sal="slide-up"></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-b line' data-sal="slide-up"></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-r line' data-sal="slide-up"></div>
                        <div className='line-b line bottom-25' data-sal="slide-up"></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-r line' data-sal="slide-up"></div>
                        <div className='line-b line bottom-25' data-sal="slide-up"></div>
                    </div>
                    <div className='column'>
                        <div className='line-b line bottom-25' data-sal="slide-up"></div>
                    </div>
                </div> 
            </div>
            <div className="service-mobile">
                <div className="service-mobile__line">
                        <div className='column '></div>
                        <div className="line"></div>
                        <div className='column ' data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                        <Link to='/services'>{link}</Link>
                        </div>
                </div>
                <div className="service-mobile__line">
                        <div className='column '></div>
                        <div className="line"></div>
                        <div className='column '>
                        </div>
                </div>
                <div className="service-mobile__line service-mobile__line--two">
                <div className='column w-100' data-aos="fade-up" data-aos-delay="700" data-aos-duration="800">
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className="b-line"></div>
            </div>
        </ServicesContainer>
    )
}

const ServicesContainer = styled.section`
.service-mobile{
    display: block;
    width: var(--width-l-m);
    margin: 0 auto;
    position: relative;
    padding: 52px 0;
    @media (min-width: 860px) {
        display: none;
    }
    &__line{
        display: flex;
        height: 220px;
        justify-content: space-between;
        align-items:flex-end;
        position: relative;
        overflow: hidden;
        &.h-0{
            height: unset;
        }
        .column{
            width: 47%;
            padding-bottom: 32px;
            a{
                font-size: 14px;
                line-height: 16px;
            }
            h3{
                font-size: 24px;
                line-height: 28px;
            }
            &.w-100{
                width: 100%;
            }
        }
        .line{
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(-50%,-50%);
            background: #fff;
            height: 192px;
            width: 1px;
        }
        &:after,
        &:before{
            position: absolute;
            top: 0;
            content: "";
            width: 47%;
            height: 1px;
            left: 0;
            background: #fff;

        }
        &:after{
            right: 0 !important;
            left: unset;
        }
        &--two{
            align-items: center;
            .column{
                padding: unset;
            }
        }
    }
    .b-line{
        position: relative;
        &:after,
        &:before{
            position: absolute;
            top: 0;
            content: "";
            width: 47%;
            height: 1px;
            left: 0;
            background: #fff;

        }
        &:after{
            right: 0 !important;
            left: unset;
        }
    }
}
    position: relative;
    height: 100vh;
    @media (max-width: 860px) {
        height: 100%;
    }
    .image {
        height: 100vh;
        @media (max-width: 860px) {
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }
    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        @media (max-width: 860px) {
            position: static;
        }
    }

    .grid {
        width: var(--width-l);
        margin: 0 auto;   
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        gap: 0 100px;
        position: relative;
        @media (max-width: 860px) {
            width: var(--width-l-m);
            gap: 0 30px;
        }
        @media (max-width: 860px) {
            grid-template-columns: 1fr;
        }
        .column {
            height: 50vh;
            @media (max-width: 860px) {
                height: auto;
            }
            a {
                display: block;
            }
            h3 {
                font-size: var(--headline-2);
            }
            p {
                font-size: 2.5vw;
                line-height: 1;
            }
        }
        .two {
            grid-column: 2/4;
            @media (max-width: 860px) {
                grid-column: auto;
            }
        }
        .solo {
            height: 0 !important;
            .line {
                bottom: 0;
            }
        }
    }
`

export default Services