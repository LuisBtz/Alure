import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

const Header = () => {

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
            <div className='column'>
                <Link to='/' className='home'>
                    <img src={data.sanitySettingsPage.alure.asset.url} alt={data.sanitySettingsPage.alure.enAlt} />
                </Link>
                <div className='line-b line' data-sal="slide-up"></div>
            </div>
            <div className='column'>
                <Link to='/' className='home'>
                    <img src={data.sanitySettingsPage.agency.asset.url} alt={data.sanitySettingsPage.agency.enAlt} />
                </Link>
                <div className='line-b line' data-sal="slide-up"></div>
            </div>
            <div className='column'>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/clients'>Clients</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                </ul>
                <div className='line-b line' data-sal="slide-up" data-sal-delay="3000"></div>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.nav`
    width: var(--width-l);
    position: fixed;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 100px;
    padding-left: 50px;
    padding-right: 50px;
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
`

export default Header;