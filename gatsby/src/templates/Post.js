import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import React, { useState } from 'react';
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';


export default function SinglePostPage({ data: { post } }) {


    const [share, showShare] = useState(false);


    const title = post.title
    const author = post.author
    const text = post._rawEditor
    const date = post._createdAt
    const alt = post.blogImage.enAlt
    const getDataImage = getImage(post.blogImage.asset);
  
    const url = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <Layout>
            <Seo title='about' /* description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
            <PostContainer>
                {share ?
                <div className='share-cont'>
                <div className='overlay-s'></div>
                <div className='share'>
                    <button className='x' onClick={() => showShare(!share)}>X</button>
                    <ul>
                        <li><a rel="noreferrer" target='_blank' href={'https://www.facebook.com/sharer/sharer.php?u=' + url} className="small caps">FACEBOOK</a></li>
                        <li><a rel="noreferrer" href={'https://twitter.com/intent/tweet/?text=' + title + '&url=' + url} target="_blank" className="small caps">TWITTER</a></li>
                    </ul>
                </div>
            </div>
            :
            ''
            }
                
                
                <div className='content'>
                    <div className='line-r line absolute no-bg dark-gray'></div>
                    <div className='line-l line absolute no-bg dark-gray'></div>
                    <div className='grid ti'>
                        <div className='column'>
                            <div className='text'>
                                <p>{date}</p>
                                <strong>By {author}</strong>
                            </div>
                        </div>
                        <div className='column two'>
                            <div className='text'>
                                <h1>{title}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid co'>
                        <div className='column left'>
                            <div className='top'>
                                <div className='line-t line dark-gray'></div>
                                <div className='img'>
                                    <GatsbyImage
                                        style={{ height: "100%", width: "100%" }}
                                        image={getDataImage}
                                        alt={alt}
                                    />
                                </div>
                            </div>
                            <div className='bot'>
                                <button  onClick={() => showShare(!share)} >Share this article ↗</button>
                                <div className='line-b line dark-gray'></div>
                            </div>
                        </div>
                        <div className='column two'>
                            <div className='line-t line dark-gray'></div>
                            <div className='content'>
                                <BlockContent
                                    blocks={text}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </PostContainer>
        </Layout>
    )
}

const PostContainer = styled.section`
    position: relative;
    color: var(--green);
    .share-cont {
        .overlay-s {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 3;
        }
        .share {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 350px;
            background-color: var(--green);
            z-index: 4;
            padding: 20px;
            text-align: center;
            .x {
                position: absolute;
                top: 7px;
                right: 0;
                color: white;
                width: 30px;
                height: 30px;
                font-size: 1.2rem;
                cursor: pointer;
            }
        }
    }
    .grid.ti {
        width: var(--width-l);
        margin: 0 auto;   
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        gap: 0 100px;
        padding-bottom: 25px;
        position: relative;
        .two {
            grid-column: 2/4;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            h1 {
                font-size: 6vw;
                line-height: 0.9;
            }
        }
        .column {
            height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            .text {
                position: relative;
                z-index: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
    }
    .grid.co {
        width: var(--width-l);
        margin: 0 auto;   
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        gap: 0 100px;
        padding-bottom: 25px;
        position: relative;
        .two {
            grid-column: 2/4;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            h1 {
                font-size: 6vw;
                line-height: 0.9;
            }
        }
        .left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .bot {
                margin-bottom: 25px;
            }
        }
        .column {
            display: flex;
            flex-direction: column;
            .line-t {
                top: 0;
            }
            .img {
                margin-top: 25px;
            }
            .content {
                padding-top: 25px;
                position: relative;
                z-index: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h2 {
                    margin-top: 25px;
                }
            }
        }
    }
`
  


export const query = graphql`
    query($slug: String!){
        post: sanityBlog(slug: {
		current: {eq: $slug} }){
            title
            author
            _rawEditor
            _createdAt(formatString: "MMMM DD YYYY")
            blogImage {
                enAlt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
            }
        }
    }
`