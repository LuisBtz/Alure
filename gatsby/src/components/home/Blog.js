import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from "framer-motion";

const Blog = ({data}) => {

    const altImage = data.sanityHomePage.blogSectionBackground.enAlt;
    const getDataImage = getImage(data.sanityHomePage.blogSectionBackground.asset);
    const title = data.sanityHomePage.titleBlogSection.en;
    const subtitle = data.sanityHomePage.subtitleBlogSection.en;
    const link = data.sanityHomePage.blogSectionLinkText.en;


    return(
        <BlogContainer>
            <div className='image'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage}
                    alt={altImage}
                />
            </div>
            <div className='content'>
                <div className='line-r line absolute' ></div>
                <div className='line-l line absolute' ></div>
                <div className='grid'>
                    <div className='column right'>
                        <div className='line-t line'></div>
                    </div>
                    <div className='column background-white'>
                        <div className='line-t line dark-gray'></div>
                        <div className='text' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                            <motion.div
                                    whileHover={{ 
                                        translateX: 5, 
                                        translateY: 3
                                    }}
                                    >
                                <Link to='/blog'>{link}</Link>
                            </motion.div>
                            <h3>{subtitle}</h3>
                        </div>
                    </div>
                    <div className='column right hide-m'>
                        <div className='line-t line'></div>
                    </div>
                    <div className='column background-white left'>
                        <div className='line-t line dark-gray'></div>
                        <div className='text' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <div className='column column-25'>
                        <div className='line-t line dark-gray'></div>
                    </div>
                    <div className='column right hide-m'>
                        <div className='line-t line'></div>
                        <div className='line-l line' ></div>
                    </div>
                    <div className='column column-50 hide-m'>
                        <div className='line-t line dark-gray'></div>
                    </div>
                    <div className='column column-50 hide-m'>
                        <div className='line-t line '></div>
                    </div>
                    <div className='column column-50 hide-m'>
                        <div className='line-t line '></div>
                        <div className='line-l line' ></div>
                    </div>
                </div>
            </div>
        </BlogContainer>
    )
}

const BlogContainer = styled.section`
    position: relative;
    height: 100vh;
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
        width: var(--width-2);
        margin: 0 auto;   
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        box-sizing: border-box;
        position: relative;
        /* @media (max-width: 1000px) {
            width: calc(100% - 30px);
        } */
        @media (max-width: 860px) {
            display: none;
        }
        .background-white {
            position: relative;
            @media (max-width: 860px) {
                /* background: none; */
            }
            .line {
                left: 50%;
                transform: translateX(-50%);
                width: 80%;
                @media (max-width: 860px) {
                    width: calc(100% - 30px);
                }
            }
            .text {
                width: 80%;
                margin: 50px auto 0;
                padding-bottom: 100px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                @media (max-width: 860px) {
                    width: calc(100% - 30px);
                }
                @media (max-width: 860px) {
                    width: var(--width-4) !important;
                    padding-bottom: 50px;
                }
            }
        }
        .left {
            width: calc(100% - 25px);
            margin-left: 25px;
            /* @media (max-width: 1000px) {
                width: calc(100%);
                margin-left: 0;
            } */
            @media (max-width: 860px) {
                background: none;
                margin-left: 0;
                width: 100%;
            }
            .line {
                background-color: var(--dark-gray);
            }
        }
        .right {
            width: calc(100% - 25px);
            .line-t {
                left: 50%;
                transform: translateX(-50%);
                width: 80%;
                @media (max-width: 860px) {
                    width: calc(100% - 30px);
                }
            }
            .line-l {
                left: -1px;
            }
        }
        .column {
            height: 50vh;
            @media (max-width: 860px) {
                height: auto;
            }
            .line-b {
                bottom: 0;
            }
            a {
                display: block;
                font-size: 14px;
                @media (min-width: 1500px) {
                    font-size: 1vw;
                }
            }
            h3 {
                font-size: 40px;
                @media (max-width: 860px) {
                    font-size: auto;
                    padding-bottom: 50px;
                }
            }
            h2 {
                font-size: 50px;
                line-height: 1;
                font-family: var(--bold);
                font-weight: normal;
                @media (min-width: 1500px) {
                    font-size: 4vw;
                }
            }
            p {
                font-size: 16px;
                line-height: 1;
            }
        }
        .column-25 {
            height: 50px !important;
            background-color: white;
            .line {
                background-color: var(--dark-gray);
                left: 50%;
                transform: translateX(-50%);
                width: 80%;
                @media (max-width: 1000px) {
                    width: calc(100% - 30px);
                }
            }
        }
        .column-50 {
            height: 50px !important;
            background-color: none;
            margin-top: -50px;
            .line-t {
                left: 50%;
                transform: translateX(-50%);
                width: 80%;
                @media (max-width: 860px) {
                    width: calc(100% - 30px);
                }
            }
            .line-l {
                left: -1px;
            }
            .dark-gray {
                background-color: var(--dark-gray);
            }
        }
        .two {
            grid-column: 2/4;
        }
        .solo {
            height: 0 !important;
            .line {
                bottom: 25px;
            }
        }
    }


`

export default Blog