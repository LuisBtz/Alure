import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

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
            agency {
                enAlt
                asset {
                    url
                }
            }
        }
    }
    `)


    return(
        <HeaderContainer>
            <div className={solidHeader ? 'contenedor green-back' : 'contenedor transparent'}>
                <div className='cont'>
                    <div className='column'>
                        <Link to='/' className='home'>
                            <img src={data.sanitySettingsPage.alure.asset.url} alt={data.sanitySettingsPage.alure.enAlt} />
                        </Link>
                        <div className='line-b line' ></div>
                    </div>
                    <div className='column'>
                        <Link to='/' className='home'>
                            <img src={data.sanitySettingsPage.agency.asset.url} alt={data.sanitySettingsPage.agency.enAlt} />
                        </Link>
                        <div className='line-b line' ></div>
                    </div>
                    <div className='column'>
                        <ul>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/clients'>Clients</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='contact'>Contact</Link></li>
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
        z-index: 3;
        height: 50px;
    
    .cont {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: var(--width-l);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 100px;
        height: 50px;
    .column {
        display: flex;
        a.home {
            width: auto;
            align-self: center;
            height: 30px;
            img {
                height: 100%;
            }
        }
        ul {
            align-self: center;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        &:nth-child(2) {
            justify-content: flex-end;
        }
    }
    }
}
`

export default Header;