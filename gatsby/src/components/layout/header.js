import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Header = ({solidHeader}) => {

    const data = useStaticQuery(graphql`
    query  {
        sanitySettingsPage {
            alure {
                asset {
                    url
                }
                enAlt
            }
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
            agency {
                enAlt
                asset {
                    url
                }
            }
        }
    }
    `)

const [menu, showMenu] = useState(false);

const altImage = data.sanitySettingsPage.iconColor.enAlt;
const getDataImage = getImage(data.sanitySettingsPage.iconColor.asset);


    return(
        <HeaderContainer>
            <div className={solidHeader ? 'contenedor green-back' : 'contenedor transparent'}>
                
                    <div className={menu ? 'menu-mov show' : 'menu-mov'} >
                        <ul>
                            <div className='imgMov'>
                                <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={getDataImage}
                                    alt={altImage}
                                /> 
                            </div>                           
                            <li><Link activeClassName="active" to='/about'>About</Link></li>
                            <li><Link activeClassName="active" to='/services'>Services</Link></li>
                            <li><Link activeClassName="active" to='/clients'>Clients</Link></li>
                            <li><Link activeClassName="active" to='/blog'>Blog</Link></li>
                            <li><Link activeClassName="active" to='/contact'>Contact</Link></li>                    
                        </ul>
                    </div>
                <div className='cont'>
                    <div className='column'>
                        <Link to='/' className='home' data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                            <img src={data.sanitySettingsPage.alure.asset.url} alt={data.sanitySettingsPage.alure.enAlt} />
                        </Link>
                        <div className='line-b line' ></div>
                    </div>
                    <div className='column'>
                        <Link to='/' className='home' data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                            <img src={data.sanitySettingsPage.agency.asset.url} alt={data.sanitySettingsPage.agency.enAlt} />
                        </Link>
                        <div className='line-b line' ></div>
                    </div>
                    <div className='column'>
                        <button className={menu ? 'ham click' : 'ham'} onClick={() => showMenu(!menu)}>
                            <div className='line'></div>
                            <div className='line'></div>
                            <div className='line'></div>
                        </button>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="800"><Link to='/about'>About</Link></li>
                            <li data-aos="fade-up" data-aos-delay="700" data-aos-duration="800"><Link to='/services'>Services</Link></li>
                            <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="800"><Link to='/clients'>Clients</Link></li>
                            <li data-aos="fade-up" data-aos-delay="900" data-aos-duration="800"><Link to='/blog'>Blog</Link></li>
                            <li data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800"><Link to='/contact'>Contact</Link></li>
                        </ul>
                        <div className='line-b line' ></div>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.nav`
    .transparent {
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7740138291644783) 100%);
        .line-r.absolute {
            display: none;
        }
        .line-l.absolute {
            display: none;
        }
    }
    .green-back {
        background-color: var(--green);
        .line-b {
            display: none;
        }
        .line-r.absolute {
            right: -25px;
        }
        .line-l.absolute {
            left: -25px;
        }
    }
    .contenedor {
        width: 100%;
        position: fixed;
        z-index: 9999;
        height: 50px;
        @media (min-width: 1500px) {
            height: 100px;
        }
    .show {
        right: 0 !important;
    }
    .menu-mov {
        position: absolute;
        height: 100vh;
        right: -100%;
        top: 0;
        background-color: var(--white);
        width: 100vw;
        transition: right 350ms ease-in-out;
        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            padding-top: 100px;
            padding-bottom: 100px;
            padding-right: 50px;
            padding-left: 50px;
            .imgMov {
                width: 80px;
                padding-bottom: 25px;
                text-align: right;
                align-self: flex-end;
            }
            li {
                text-align: left;
                a {
                    padding-top: 25px;
                    padding-bottom: 25px;
                    display: block;
                    font-size: 36px;
                    font-family: var(--reg);
                    border-top: solid 1px black;
                    color: black;
                    &:hover {
                        text-decoration: underline;
                    }
                }
                a.active {
                    font-family: var(--custom);
                    font-weight: normal;
                }
                &:last-child {
                    a {
                        border-bottom: solid 1px black;
                    }
                }
            }
        }
    }
    
    .cont {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: var(--width-l);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 100px;
        height: 50px;
        @media (min-width: 1500px) {
            height: 100px;
        }
        @media (max-width: 1000px) {
            width: var(--width-l-m);
            gap: 30px
        }
        @media (max-width: 860px) {
            
            transform: translateX(-50%)
        }
    .column {
        overflow: hidden;
        display: flex;
        .click {
            .line {
                background-color: black !important;
                &:nth-child(2) {
                    opacity: 0;
                }
                &:nth-child(1) {
                    position: relative;
                    top: 10px;
                    transform: rotate(45deg);
                }
                &:nth-child(3) {
                    position: relative;
                    bottom: 10px;
                    transform: rotate(-45deg);
                }
            }
        }
        .ham {
            display: none;
            @media (max-width: 860px) {
                display: block;
                width: 30px;
                height: 30px;
                position: absolute;
                top: 15px;
                right: 0;
                .line {
                    width: 100%;
                    height: 1px;
                    margin-bottom: 9px;
                    background-color: white;
                    transition: all 250ms ease-in-out;
                }
            }
        }
        a.home {
            width: auto;
            align-self: center;
            height: 30px;
            @media (min-width: 1500px) {
                height: auto;
                width: auto;
            }
            img {
                height: 100%;
                @media (min-width: 1500px) {
                    height: 55px;
                    width: auto;
                }
            }
        }
        ul {
            align-self: center;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            @media (max-width: 860px) {
                display: none;
            }
        }
        &:nth-child(2) {
            justify-content: flex-end;
        }
    }
    }
}
`

export default Header;