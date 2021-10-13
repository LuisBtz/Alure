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
        <FooterContainer>
            <div className={greenFooter ? 'contenedor green' : 'contenedor white'}>
                <div className='content'>
                    <div className='line-r line absolute no-bg'></div>
                    <div className='line-l line absolute no-bg'></div>
                    <div className='grid'>
                        <div className='column'>
                            <div className='text'>
                                <p>{description}</p>
                                <div className='copy'>
                                    <BlockContent 
                                        blocks={data.sanitySettingsPage._rawCopyright}
                                    />
                                </div>
                            </div>
                            <div className='line-r line no-bg hide-m' ></div>
                        </div>
                        <div className='column newsletter'>
                            <div className='text'>
                                <NewsletterFooter className='newsletter' />
                                <ul>
                                    <li><a target='_blank' rel="noreferrer" href={data.sanitySettingsPage.email}>Email ↗</a></li>
                                    <li><a target='_blank' rel="noreferrer" href={data.sanitySettingsPage.instagram}>Instagram ↗</a></li>
                                    <li><a target='_blank' rel="noreferrer" href={data.sanitySettingsPage.facebook}>Facebook ↗</a></li>
                                </ul>
                            </div>
                            <div className='line-r line no-bg hide-m' ></div>
                        </div>
                        <div className='column last'>
                            <div className='text'>
                                <ul>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/services'>Services</Link></li>
                                    <li><Link to='/clients'>Clients</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='contact'>Contact</Link></li>
                                </ul>
                                <div className='terms'>
                                    <div className='image'>
                                        <GatsbyImage
                                            style={{ height: "100%", width: "100%" }}
                                            image={getDataImage}
                                            alt={altImage}
                                        />
                                    </div>
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
    .green {
        background-color: var(--green);
        color: white;
    }
    .white {
        background-color: white;
        color: var(--dark-gray);
        a {
            color: var(--dark-gray);
        }
        .line {
            border-color: var(--dark-gray);
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
                    margin-bottom: 50px;
                    margin-top: 50px;
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