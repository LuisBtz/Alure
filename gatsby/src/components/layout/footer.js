import React from 'react'
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import NewsletterFooter from './NewsletterFooter';

const Footer = ({greenFooter}) => {


    const data = useStaticQuery(graphql`
    query  {
        sanitySettingsPage {
            descriptionSite {
                en
            }
            _rawCopyright
            email
            instagram
            facebook
            iconColor {
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
    `)

const description = data.sanitySettingsPage.descriptionSite.en;
const altImage = data.sanitySettingsPage.iconColor.enAlt;
const getDataImage = getImage(data.sanitySettingsPage.iconColor.asset);


    return(
        <FooterContainer >
            <div className={greenFooter ? 'contenedor green' : 'contenedor green-white'}>
                <div className='content'>
                    <div className='line-r line absolute no-bg'></div>
                    <div className='line-l line absolute'></div>
                    <div className='grid'>
                        <div className='column column-m'>
                            <div className='text'>
                                <div className='desk'>
                                    <p>{description}</p>
                                </div>
                                <div className='copy'>
                                    <BlockContent 
                                        blocks={data.sanitySettingsPage._rawCopyright}
                                    />
                                </div>
                            </div>
                            <div className='line-r line no-bg hide-m' ></div>
                        </div>
                        <div className='column newsletter pb-mobile'>
                            <div className='text'>
                                <NewsletterFooter className='newsletter' />
                                <div className="social-mobile-wrapper">
                                    <div className="text">
                                        <p>Contact</p>
                                    </div>
                                    <ul>
                                        <li><a target='_blank' rel="noreferrer" href={data.sanitySettingsPage.instagram}>Instagram ↑</a></li>
                                        <li><a target='_blank' rel="noreferrer" href={data.sanitySettingsPage.email}>Email ↑</a></li>
                                        <li><a target='_blank' rel="noreferrer" href={data.sanitySettingsPage.facebook}>Facebook ↑</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='line-r line no-bg hide-m' ></div>
                        </div>
                        <div className='column last'>
                            <div className='text'>
                                <div className="mobile-wrapper">
                                    <div className="text">
                                        <p>Information</p>
                                    </div>
                                    <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/services'>Services</Link></li>
                                    <li><Link to='/clients'>Clients</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='contact'>Contact</Link></li>
                                </ul>
                                </div>
                                <div className='terms'>
                                    <div className='image'>
                                        <GatsbyImage
                                            style={{ height: "100%", width: "100%" }}
                                            image={getDataImage}
                                            alt={altImage}
                                        />
                                    </div>
                                    <p>Alure Agency, All Rights Reserved © 2021</p>
                                    <div className='links'>
                                        <Link to='/terms' >Terms & Conditions /</Link>
                                        <Link to='/privacy'>Privacy Policy</Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
overflow: hidden;
    .desk {
        @media (max-width: 680px) {
            display: none;
        }
    }
    .green {
        background-color: var(--green);
        color: white;
    }
    .green-white {
        background-color: white;
        color: var(--dark-gray);
        a {
            color: var(--dark-gray);
        }
        .line {
            color: var(--dark-gray);
            background-color: var(--dark-gray);
            border-color: var(--dark-gray);
            background-color: transparent;
        }
        @media (max-width: 860px) {
            background-color: var(--green);
            color: white; 
            a {
            color: var(--white);
        }
        }
    }
.contenedor {
    position: relative;
    .grid {
        width: var(--width-l);
        margin: 0 auto;   
        display: grid ;
        grid-template-columns: repeat(3, 1fr);
        gap: 0 100px;
        position: relative;
        height: 250px;
        @media (max-width: 960px) {
            width: var(--width-l-m);
            grid-template-columns: 1fr;
            height: auto;
            text-align: center;
            .newsletter .text ul {
                margin-top: 50px;
            }
        }
        .column {
            padding-top: 25px;
            padding-bottom: 25px;
            .social-mobile-wrapper{
                display: block;
                .text{
                    @media (min-width: 860px) {
                        display: none;
                    }
                }
            }
            .mobile-wrapper{
                display: block;
                .text{
                    @media (min-width: 860px) {
                        display: none;
                    }
                }
            }
            @media (max-width: 860px) {
                a, p {
                    font-size: 14px;
                }
            &.pb-mobile{
                padding-bottom: 0;
            }
            &.column-m{
                .text{
                    padding: 0 15px;
                }
                        position: relative;
                        p{
                            font-size: 14px;
                            font-family: var(--bold);
                        }
                        &:after{
                            content: "";
                            position: absolute;
                            bottom: 0;
                            width: 48%;
                            background: #fff;
                            height: 1px;
                            left: 0;
                        }
                        &:before{
                            content: "";
                            position: absolute;
                            bottom: 0;
                            width: 48%;
                            background: #fff;
                            height: 1px;
                            right: 0;
                        }
                    
                }  
                .social-mobile-wrapper{
                    display: flex;
                    margin-top: 16px;
                    align-items: flex-start;
                    .text{
                    width: 50%;
                    text-align: left;
                    p{
                    font-size: 14px;
                    line-height: 19px;
                    color: rgba(255,255,255,0.4);
                    letter-spacing: 1px;
                    text-align: left;
                   }
                    }
                    ul{
                        margin-top: 0;
                        width: 50%;
                        flex-direction: column;
                        padding-left: 7px;
                        li{
                            text-align: left;
                            padding-bottom:13px;
                        }
                    }
                }
            .mobile-wrapper{
                position:relative;
               display: flex;
                    &:after{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    width: 48%;
                    background: #fff;
                    height: 1px;
                    left: 0;
                    }
                    &:before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    width: 48%;
                    background: #fff;
                    height: 1px;
                    right: 0;
                    }
               .text{
                   width: 50%;
                   p{
                    font-size: 16px;
                    line-height: 19px;
                    color: rgba(255,255,255,0.4);
                    letter-spacing: 1px;
                    text-align: left;
                   }
               }
               ul{
                   width: 50%;
                   flex-wrap: wrap;
                   padding-left: 7px;
                   li{
                    flex-basis: 45%;
                    text-align: left;
                    padding-bottom: 18px;
                    a{
                        font-size: 16px;
                        line-height: 19px;
                    }
                   }
               }
            }
            }
        }
        .last {
            ul {
                align-self: center;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        }
        .text {
            height: 100%;
            width: auto;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            ul {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                @media (max-width: 960px) {
                    align-self: center;
                    width: 300px;
                }
            }
        }
        .terms {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            @media (max-width: 1180px) {
                flex-direction: column;
                align-content: flex-end;
            }
            p{
                padding-bottom: 10px;
                @media (min-width: 860px) {
                    display: none;
                }
            }
            .image {
                align-self: flex-end;
                margin-bottom: 20px;
                width: 60px;
            }
            @media (max-width: 960px) {
                flex-direction: column;
                align-content: center;
                justify-content: center !important;
                .image {
                    align-self: center;
                    margin-bottom: 35px;
                    margin-top: 35px;
                }
            }
            .links {
                align-self: flex-end;
                display: flex;
                word-wrap: break-word;
                @media (max-width: 1000px) {
                    flex-direction: column;
                    text-align: right;
                }
                @media (max-width: 960px) {
                    flex-direction: row;
                    text-align: center;
                    align-self: center;
                }
            }
        }
    }
}
`

export default Footer;