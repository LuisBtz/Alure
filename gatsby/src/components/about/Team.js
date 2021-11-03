import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
      >Next</button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
      >Previus</button>
    );
  }
  

const Team = () => {

    



    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        fade: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        };


    const data = useStaticQuery(graphql`
    query  {
        sanityAboutPage {
            theTeamTitle {
            en
            }
            theTeamDescription {
            en
            }
            theTeam {
                _key
                membersDescription {
                    en
                }
                membersName
                membersPosition {
                    en
                }
                membersImage {
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
    }
`)

    const title = data.sanityAboutPage.theTeamTitle.en;
    const description = data.sanityAboutPage.theTeamDescription.en;


     


    return(
        <TeamContainer> 
            <div className='line-r line absolute no-bg dark-gray'></div>
            <div className='line-l line absolute no-bg dark-gray'></div>

            <div className='iz'>
                <div className='grid'>
                    <div className='column'>
                        <div className='line-t line dark-gray no-bg'></div>
                        <h3>{title}</h3>
                    </div>
                    <div className='column bottom'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <p>{description}</p>
                        <div className='line-b line no-bg dark-gray'></div>
                    </div>
                </div>
            </div>
            <div className='de'>
            <SliderContainer {...settings}>
            {data.sanityAboutPage.theTeam.map(({ membersName, membersDescription, _key, membersPosition, membersImage}) => {
                    const getDataImage = getImage(membersImage.asset);
                return (
                    <Slide key={_key}>
                        <div className='grid' >
                            <div className='column'>
                                <div className='line-t line dark-gray no-bg'></div>
                                <div className='line-r line dark-gray no-bg' ></div>
                            </div>
                            <div className='column'>
                                <div className='line-t line dark-gray no-bg hide-m'></div>
                                <div className='image'>
                                    <GatsbyImage
                                        style={{ height: "100%", width: "100%" }}
                                        image={getDataImage}
                                        alt={membersImage.enAlt}
                                    />
                                </div>
                            </div>
                            <div className='solo hide-m'>
                                <div className='line-t line dark-gray no-bg'></div>
                            </div>
                            <div className='solo'>
                                <div className='line-t line dark-gray no-bg'></div>
                            </div>
                            <div className='column two'>
                                <h3>{membersName}</h3>
                                <strong>{membersPosition.en}</strong>
                                <p>{membersDescription.en}</p>
                            </div>
                            <div className='solo hide-m'>
                                <div className='line-b line no-bg dark-gray'></div>
                            </div>
                            <div className='solo'>
                                <div className='line-b line no-bg dark-gray'></div>
                            </div>
                        </div>
                    </Slide >
                    )
                })}
            </SliderContainer>

            </div>
        </TeamContainer>
    )
}

const TeamContainer = styled.section`
    height: 100vh;
    position: relative;
    background-color: var(--gray);
    @media (max-width: 860px) {
        height: 100% !important;
    }
    h3 {
        font-size: var(--headline-2);
    }
    .column {
        position: relative;
        height: 50vh;
        @media (max-width: 860px) {
                height: auto;
            }
        h3 {
            margin-top: 50px;
        }
        p {
            margin-bottom: 50px;
        }
    }
    .iz {
        position: absolute;
        left: 0;
        top: 0;
        width: 33.333%;
        height: 100%;
        background-color: white;
        color: var(--dark-gray);
        @media (max-width: 860px) {
            position: static;
            width: 100%;
        }
        .grid {
            width: var(--width-l);
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            @media (max-width: 860px) {
                width: var(--width-l-m);
                gap: 0 30px;
                grid-template-columns: 1fr;

            }
            .bottom {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    @media (max-width: 860px) {
                        padding-top: 20px;
                    }
                    .line-t {
                        top: 0;
                    }
                    .line-b {
                        bottom: 25px;
                    }
                }
                
        }
    }

    .de {
        position: absolute;
        width: 66.666%;
        top: 0;
        right: 0;
        height: 100%;
        @media (max-width: 860px) {
            position: static;
            width: 100%;
        }
        .grid {
            width: var(--width-l);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0 100px;
            @media (max-width: 860px) {
                width: var(--width-l-m);
                gap: 0 30px;
                grid-template-columns: 1fr;

            }
        }
            .two {
                grid-column: 1/3;
                @media (max-width: 860px) {
                grid-column: auto;
            }
            }
        }
`

const SliderContainer = styled(Slider)`
    width: var(--width-2);
    margin: 0 auto;
    button.slick-arrow {
        position: absolute;
        z-index: 2;
        top: 65px;
        color: black;
        width: auto;
        font-size: inherit;
        line-height: inherit;
        &::before {
            display: none;
        }
        @media (max-width: 680px) {
            display: none;
        }
    }
    .slick-prev {
        left: 50px;
    }
    .slick-next {
        right: calc(50% + 50px);
    }
`

const Slide = styled.div`
color: var(--dark-gray);
.image {
    width: 100%;
    height: calc(50vh - 75px);
    margin-top: 50px;
    @media (max-width: 860px) {
        padding-bottom: 25px;
    }
}
.solo {
    position: relative;
    .line-t {
        top: 0 !important;
    }
    .line-b {
        bottom: 25px;
    }
}

.two {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
        margin-top: 25px;
        font-size: var(--headline-2);
    }
    strong {
        position: absolute;
        top: 30px;
        left: calc(50% + 50px);
        font-weight: normal;
        font-size: var(--headline-3);
        @media (max-width: 860px) {
            position: static;
            margin-top: 15px;
            margin-bottom: 15px;
        }
    }
}

`

export default Team;