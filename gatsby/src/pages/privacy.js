import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';


export const data = graphql`
  query {
      sanityPrivacyPage {
      title
      _updatedAt(formatString: "MMMM DD YYYY")
      _rawEditor
      image {
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


// markup
const Privacy = ({data}) => {

  const date = data.sanityPrivacyPage._updatedAt
  const title = data.sanityPrivacyPage.title
  const text = data.sanityPrivacyPage._rawEditor
  const alt = data.sanityPrivacyPage.image.enAlt
  const getDataImage = getImage(data.sanityPrivacyPage.image.asset);



  const solidHeader = true

  return (
    <Layout solidHeader={solidHeader}>
      <Seo title='Privacy and Policy' /* description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
            <PostContainer>                
                <div className='content'>
                    <div className='line-r line absolute no-bg dark-gray'></div>
                    <div className='line-l line absolute no-bg dark-gray'></div>
                    <div className='grid ti'>
                        <div className='column'>
                            <div className='text'>
                                <p>{date}</p>
                                <strong>By Alure Agency</strong>
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
                                <button>Share this article ↗</button>
                                <div className='line-b line dark-gray hide-m'></div>
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
        @media (max-width: 860px) {
            width: var(--width-l-m);
            grid-template-columns: 1fr;
        }
        .two {
            grid-column: 2/4;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            @media (max-width: 860px) {
                grid-column: auto;
                height: auto !important;
                margin-top: 25px;
                h1 {
                    font-size: 3rem !important;
                }
            }
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
            @media (max-width: 860px) {
                height: 100px;
            }
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
        @media (max-width: 860px) {
            grid-template-columns: 1fr;
            width: var(--width-l-m);
        }
        .two {
            grid-column: 2/4;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            @media (max-width: 860px) {
                grid-column: auto;
                height: auto !important;
            }
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
                margin-top: 25px;
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
                @media (max-width: 860px) {
                    height: 250px;
                }
            }
            .content {
                padding-top: 25px;
                padding-bottom: 50px;
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
    .content.re{
        background-color: white;
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
                height: 100%;
            }
            .two {
                grid-column: 2/4;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                h3 {
                    padding-bottom: 50px;
                }
            }
            .column {
                height: 50vh;
                .icon {
                    margin-top: 25px;
                    width: 70px;
                }
                .text {
                    padding-top: 50px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-bottom: 25px;
                    .up {
                        p {
                            margin-bottom: 5px;
                        }
                    }
                }
                a {
                    display: block;
                }
                h2 {
                    font-size: 3rem;
                    line-height: 0.9;
                    font-family: var(--reg);
                }
            }
            .solo {
                height: auto;
            }
            .solo .line-b {
                bottom: 25px;
            }
            .solo .line-t {
                top: 0;
            }
        }
    }
`
export default Privacy
