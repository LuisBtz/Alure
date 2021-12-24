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
                {data.allSanityBlog.edges.slice(3).map(({node},i) => {
                    const altImage = node.blogImage.enAlt;
                    const getDataImage = getImage(node.blogImage.asset);
                    
                        return (
                            <div className='column solo hide-m' key={node._key+"bb"+i}>
                                <div className='top'>
                                    <div className='line-t line dark-gray no-bg'></div>
                                    <div className='img'>
                                        <Link to={`/blog/${node.slug.current}`}>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={getDataImage}
                                                alt={altImage}
                                            />
                                        </Link>
                                        <div className='line'></div>
                                    </div>
                                    <Link to={`/blog/${node.slug.current}`} className='text' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                                        <div className='top'>
                                            <p>{node._createdAt}</p>
                                            <h2>{node.title}</h2>
                                        </div>
                                    </Link>
                                </div>
                                <Link className='bot' to={`/blog/${node.slug.current}`} >
                                    <p>Read More ↑</p>
                                    <div className='line-r line no-bg dark-gray no-bg' ></div>
                                    <div className='line-b line no-bg dark-gray no-bg'></div>
                                </Link>
                            </div>
                        )
                })}
                <div className="mobile-area">
                {data.allSanityBlog.edges.slice(0, 3).map(({node},i) => {
                    const altImage = node.blogImage.enAlt;
                    const getDataImage = getImage(node.blogImage.asset);
                    
                        return (
                            <Link to={`/blog/${node.slug.current}`} key={node._key+i} >
                            <div className='column solo p-0'>
                            <div className="overlay"></div>
                            <div className='img p-0'>
                            <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={getDataImage}
                            alt={altImage}
                            />
                            </div>
                            <div className='text-wrapper' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
                            <div className='top'>
                            <p>{node._createdAt}</p>
                            <h2>{node.title}</h2>
                            </div>
                            <p>Read More ↑</p>
                            </div>
                            </div>
                            </Link>
                        )
                })}
                </div>
            </div>
        </PostsContainer>
    )
}

const PostsContainer = styled.section`
    position: relative;
    color: var(--dark-gray);
    background: #F4F3EF;
    @media (min-width: 860px) {
        background-color: white;
    }
    .mobile-area{
        padding: 48px 0 52px ;
        @media (min-width: 860px) {
            display: none;
        }
        .column{
            position: relative;
            .img{
                height: 224px;
                    @media (min-width:575px) {
                    height: 328px;
                }
                im{
                    object-fit: cover;
                }
            }
            .text-wrapper{
                z-index: 111;
                padding: 0 19px;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                p{
                    font-size: 14px;
                    @media (min-width: 480px) {
                        font-size: 18px;
                    }
                }
                .top{
                    h2{
                        font-size: 24px;
                        padding-top: 24px;
                        padding-bottom: 32px;
                        @media (min-width: 480px) {
                            font-size: 28px;
                        }
                    }
                }
            }
            .overlay{
                position: absolute;
                top: 100%;
                left: 0;
                bottom: 0;
                right: 0;
                width: 100%;
                background-color: var(--green);
                z-index: 2;
                transition: top 250ms ease-in-out;
            }
            &:hover{
               .overlay{
                top: 0 !important;
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
                z-index: 999;

            }
            &:after{
                right: 0 !important;
                left: unset;
            }
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
                width: var(--width-4);
                grid-template-columns: 1fr;
            }
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
                a {
                    @media (max-width: 860px) {
                        height: 250px;
                    }
                }
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
                font-size: var(--headline-2);
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
                @media (max-width: 860px) {
                    padding-bottom: 25px;
                }
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
    .p-0{
        padding: 0 !important;
    }
`

export default Posts