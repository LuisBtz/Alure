import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { Link } from 'gatsby';





const Hero = ( {data} ) => {

const altImage = data.sanitySettingsPage.blogBackgroundImage.enAlt;
const getDataImage = getImage(data.sanitySettingsPage.blogBackgroundImage.asset);

const altImageMovil = data.sanitySettingsPage.blogBackgroundImageMovil.enAlt;
const getDataImageMovil = getImage(data.sanitySettingsPage.blogBackgroundImageMovil.asset);

const text = 'STAY CONNECTED STAY INSPIRED'


    return (
        <HeroContainer>
            <div className='image desk'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage}
                    alt={altImage}
                />
            </div>
            <div className='image movil'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImageMovil}
                    alt={altImageMovil}
                />
            </div>
            <div className='content'>
                <div className='line-r line absolute no-bg'></div>
                <div className='line-l line absolute no-bg'></div>
                <div className='grid'>
                    <div className='line mid hide-m'></div>
                    <div className='column two hide-m'>
                        <div className='line-r line no-bg hide-m' ></div>
                        <div data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">
                        <h1>{text}</h1>
                        </div>
                    </div>
                    <div className='column hide-m'>
                    </div>
                    {data.allSanityBlog.edges.slice(0, 3).map(({node},i) => {
                            return (
                                <div className='column solo blog hide-m' key={node._key+i}>
                                    <div className='overlay'></div>
                                    <div className='line-t line'></div>
                                    <Link to={`/blog/${node.slug.current}`} className='text' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                                        <div className='top'>
                                            <p>{node._createdAt}</p>
                                            <h2>{node.title}</h2>
                                        </div>
                                        <div className='bot'>
                                            <p>Read More ↗</p>
                                        </div>
                                    </Link>
                                    <div className='line-r line no-bg hide-m' ></div>
                                    <div className='line-b line no-bg'></div>
                                </div>
                            )
                    })}
                    <div className="mobile-area">
                        <div className="m-s-two">
                            <div className='column' >
                                <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">
                                    <img className='icon' src={data.sanitySettingsPage.icon.asset.url} alt={data.sanitySettingsPage.icon.enAlt} />
                                </div>
                            </div>
                            <div className='column'>
                                <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">
                                    <p>Stay in touch with us ↓</p>
                                </div>
                            </div>
                        </div>
                        <div className="m-s-one">
                            <div className='column two'>
                                <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">

                                <h1>{text}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="m-s-two alone">
                            <div className='column' ></div>
                            <div className='column'>
                            </div>
                        </div>
                        <div className="m-s-three">
                            {data.allSanityBlog.edges.slice(0, 1).map(({node},i) => {
                                return (
                                    <div className='column solo blog' key={node._key+"hb2"+i}>
                                        <Link to={`/blog/${node.slug.current}`} className='text' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                                            <div className='top'>
                                                <p>{node._createdAt}</p>
                                                <h2>{node.title}</h2>
                                            </div>
                                            <div className='bot'>
                                                <p>Read More ↑</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
    .mobile-area{
        @media (min-width: 860px) {
            display: none;
        }
        .m-s-one{
            .column{
                overflow: hidden;
                h1{
                    padding-top: 50px;
                   padding-bottom: 130px;
                }
            }
        }
        .m-s-two{
            display: flex;
            justify-content: space-between;
            position: relative;
            .column{
                overflow: hidden;
                border-bottom: 1px solid #fff;
                width: 47%;
                height: 220px;
                display: flex;
                align-items: end;
                p{
                    padding-bottom: 32px;
                }
            }
            &:before{
                position: absolute;
                content: "";
                height: 200px;
                width: 1px;
                background: #fff !important;
                bottom:7px;
                left: 50%;
                transform: translateX(50%);
            }
        }
        
        .m-s-two.alone{
            display: flex;
            justify-content: space-between;
            position: relative;
            .column{
                overflow: hidden;
                border-bottom: 1px solid #fff;
                width: 47%;
                height: 0;
                display: flex;
                align-items: end;
                p{
                    padding-bottom: 0;
                }
            }
            &:before{
                display: none;
            }
        }

        .m-s-three{
            position: relative;
            .column{
                overflow: hidden;
              .text{
                  padding: 32px 0;
              } 
              .top{
                  padding: 0;
                  p{
                    padding: 0 !important;
                  }
                  h2{
                      font-size: 24px;
                  }
              } 
              .bot{
                  padding-bottom: 0 !important;
                  p{
                    padding-top: 48px;
                    font-size: 14px;
                  }
              }
            }
            &:after,
            &:before{
                position: absolute;
                bottom: 0;
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
    overflow: hidden;
    @media (max-width: 860px) {
        height: 100% !important;
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
    .image.desk {
        display: block;
        @media (max-width: 860px) {
            display: none;
        }
    }
    .image.movil {
        display: none;
        @media (max-width: 860px) {
            display: block;
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
            padding-top: 50px;
            padding-bottom: 60px;
            width: var(--width-l-m);
            gap: 0 30px;
            grid-template-columns: 1fr;
            
        }
        .two {
            grid-column: 1/3;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            @media (max-width: 860px) {
                grid-row: 1;
                grid-column: auto;
            }
            h1 {
                padding-bottom: 25px;
                font-size: var(--headline-1);
                width: 50%;
                line-height: 0.9;
                @media (max-width: 860px) {
                    font-size: 36px;
                    width: 100%;
                }
            }
        }
        .column.blog {
            &:hover {
                .overlay {
                    top: 1px !important;
                }
            }
        }
        .column.blog .line-t {
            top: 25px;
        }
        .column {
            height: 50vh;
            @media (max-width: 860px) {
                height: auto;
            }
            .icon {
                margin-top: 25px;
                width: 70px;
                @media (max-width: 860px) {
                    margin-top: 15px;
                    padding-bottom: 30px;
                }
            }
            a {
                display: block;
            }
            h2 {
                font-family: var(--reg);
                font-size: var(--headline-2);
                line-height: 1;
            }
            p {
                padding-top: 25px;
                @media (max-width: 860px) {
                    /* padding-bottom: 60px; */
                }
            }
            &:last-child {
                .line-r {
                    display: none;
                }
            }
            .text {
                padding-top: 50px;
                position: relative;
                z-index: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                .top {
                    p {
                        margin-bottom: 10px;
                        @media (max-width: 860px) {
                            margin-bottom: 25px;
                            padding-top: 25px;
                            font-size: 16px;
                        }
                    }
                }
                .bot {
                    padding-bottom: 50px;
                }
            }
        }
        .overlay {
            position: absolute;
            top: 100%;
            left: -50px;
            bottom: 0;
            right: -50px;
            background-color: var(--green);
            z-index: 0;
            transition: top 250ms ease-in-out;
        }
        .solo .line-b {
            bottom: 25px;
        }
        .solo .line-t {
            top: 0;
        }
    }
`

export default Hero;