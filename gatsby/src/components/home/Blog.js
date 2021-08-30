import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { Link } from 'gatsby';

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
                        <div className='text'>
                            <Link to='/blog'>{link}</Link>
                            <h3>{subtitle}</h3>
                        </div>
                    </div>
                    <div className='column right'>
                        <div className='line-t line'></div>
                    </div>
                    <div className='column background-white left'>
                        <div className='line-t line'></div>
                        <div className='text'>
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <div className='column column-25'>
                        <div className='line-t line dark-gray'></div>
                    </div>
                    <div className='column right'>
                        <div className='line-t line'></div>
                        <div className='line-l line' ></div>
                    </div>
                    <div className='column column-50'>
                        <div className='line-t line dark-gray'></div>
                    </div>
                    <div className='column column-50'>
                        <div className='line-t line '></div>
                    </div>
                    <div className='column column-50'>
                        <div className='line-t line '></div>
                        <div className='line-l line' data-sal="slide-up"></div>
                    </div>
                </div>
            </div>
        </BlogContainer>
    )
}

const BlogContainer = styled.section`
    position: relative;
    height: 100vh;
    .image {
        height: 100vh;
    }
    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .grid {
        width: var(--width-2);
        margin: 0 auto;   
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        box-sizing: border-box;
        position: relative;
        .background-white {
            position: relative;
            .line {
                left: 50%;
                transform: translateX(-50%);
                width: 80%;
            }
            .text {
                width: 80%;
                margin: 50px auto 0;
                padding-bottom: 100px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
            }
        }
        .left {
            width: calc(100% - 25px);
            margin-left: 25px;
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
            }
            .line-l {
                left: -1px;
            }
        }
        .column {
            .line-b {
                bottom: 0;
            }
            height: 50vh;
            a {
                display: block;
            }
            h3 {
                font-size: 2.5rem;
            }
            h2 {
                font-size: 4rem;
            }
            p {
                font-size: 2.5rem;
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