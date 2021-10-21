import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { Link } from 'gatsby';





const Hero = ( {data} ) => {

const altImage = data.sanitySettingsPage.blogBackgroundImage.enAlt;
const getDataImage = getImage(data.sanitySettingsPage.blogBackgroundImage.asset);
const text = 'STAY CONNECTED STAY INSPIRED'


    return (
        <HeroContainer>
            <div className='image'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage}
                    alt={altImage}
                />
            </div>
            <div className='content'>
                <div className='line-r line absolute no-bg'></div>
                <div className='line-l line absolute no-bg'></div>
                <div className='grid'>
                    <div className='line mid hide-m'></div>
                    <div className='column two'>
                        <div className='line-r line no-bg hide-m' ></div>
                        <h1>{text}</h1>
                    </div>
                    <div className='column'>
                    </div>
                    {data.allSanityBlog.edges.slice(0, 3).map(({node}) => {
                            return (
                                <div className='column solo blog' key={node._key}>
                                    <div className='overlay'></div>
                                    <div className='line-t line'></div>
                                    <Link to={`/blog/${node.slug.current}`} className='text'>
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

                </div>
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
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
            padding-top: 100px;
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
                font-size: 6vw;
                width: 50%;
                line-height: 0.9;
                @media (max-width: 860px) {
                    font-size: 3rem;
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
                font-size: 2rem;
                text-transform: uppercase;
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