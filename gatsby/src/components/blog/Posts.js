import React from 'react' 
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const Posts = ({data}) => {
    return(
        <PostsContainer>
            <div className='line-r line absolute no-bg dark-gray'></div>
            <div className='line-l line absolute no-bg dark-gray'></div>

            <div className='grid'>
                {data.allSanityBlog.edges.slice(3).map(({node}) => {
                    const altImage = node.blogImage.enAlt;
                    const getDataImage = getImage(node.blogImage.asset);
                    
                        return (
                            <div className='column solo' key={node._key}>
                                <div className='top'>
                                    <div className='line-t line dark-gray no-bg'></div>
                                    <div className='img'>
                                        <GatsbyImage
                                            style={{ height: "100%", width: "100%" }}
                                            image={getDataImage}
                                            alt={altImage}
                                        />
                                        <div className='line'></div>
                                    </div>
                                    <Link to={`/blog/${node.slug.current}`} className='text'>
                                        <div className='top'>
                                            <p>{node._createdAt}</p>
                                            <h2>{node.title}</h2>
                                        </div>
                                    </Link>
                                </div>
                                <Link className='bot' to={`/blog/${node.slug.current}`} >
                                    <p>Read More ↗</p>
                                    <div className='line-r line no-bg dark-gray no-bg' ></div>
                                    <div className='line-b line no-bg dark-gray no-bg'></div>
                                </Link>
                            </div>
                        )
                })}
            </div>
        </PostsContainer>
    )
}

const PostsContainer = styled.section`
    position: relative;
    color: var(--dark-gray);
    background-color: white;
    .grid {
        width: var(--width-l);
        margin: 0 auto;   
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        gap: 0 100px;
        position: relative;
        .two {
            grid-column: 1/3;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            h1 {
                padding-bottom: 25px;
                font-size: 6vw;
                width: 50%;
                line-height: 0.9;
            }
        }
        .column.blog .line-t {
            top: 25px;
        }
        .column {
            padding-bottom: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            a {
                color: var(--dark-gray);
            }
            .img {
                padding-top: 50px;
                .line {
                    width: 100%;
                    height: 1px;
                    margin-top: 25px;
                    background-color: var(--dark-gray);
                }
            }
            .icon {
                margin-top: 25px;
                width: 70px;
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
            .text {
                padding-top: 25px;
                position: relative;
                z-index: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                color: var(--dark-gray);
                padding-bottom: 100px;
                .top {
                    p {
                        margin-bottom: 10px;
                    }
                }
                .bot {
                    padding-bottom: 50px;
                }
            }
        }
        .solo .line-b {
            bottom: 25px;
        }
    }
`

export default Posts