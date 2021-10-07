import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';


export default function SinglePostPage({ data: { post } }) {


    const title = post.title
    const author = post.author
    const text = post._rawEditor
    const date = post._createdAt
    const alt = post.blogImage.enAlt
    const getDataImage = getImage(post.blogImage.asset);
  
    return (
        <Layout>
            <Seo title='about' /* description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
            <PostContainer>
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
                        <div className='column'>
                            <div className='line-t line dark-gray'></div>
                            <div className='img'>
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={getDataImage}
                                alt={alt}
                            />
                            </div>
                            <div className='line-b line dark-gray'></div>
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
            height: 300px;
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