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
                <div className='grid m-bg'>
                    <div className='column'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <h3 data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">{title}</h3>
                    </div>
                    <div className='column bottom'>
                        <div className='line-t line dark-gray no-bg hide-m'></div>
                        <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">{description}</p>
                        <div className='line-b line no-bg dark-gray hide-m'></div>
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
                            <div className='column hide-m'>
                                <div className='line-t line dark-gray no-bg'></div>
                                <div className='line-r line dark-gray no-bg' ></div>
                            </div>
                            <div className='column hide-m'>
                                <div className='line-t line dark-gray no-bg hide-m'></div>
                                <div className='image'>
                                    <GatsbyImage
                                        style={{ height: "100%", width: "100%" }}
                                        image={getDataImage}
                                        alt={membersImage.enAlt+"t1"}
                                    />
                                </div>
                            </div>
                            <div className='solo hide-m'>
                                <div className='line-t line dark-gray no-bg'></div>
                            </div>
                            <div className='solo hide-m'>
                                <div className='line-t line dark-gray no-bg'></div>
                            </div>
                            <div className='column two hide-m o-v-h' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                                <h3>{membersName}</h3>
                                <strong>{membersPosition.en}</strong>
                                <p>{membersDescription.en}</p>
                            </div>
                            <div className='solo hide-m'>
                                <div className='line-b line no-bg dark-gray'></div>
                            </div>
                            <div className='solo hide-m'>
                                <div className='line-b line no-bg dark-gray'></div>
                            </div>
                            <div className="mobile-area">
                                <div className="mobile-area__column">
                                    <div className='column img-group'>
                                        <div className='image' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={getDataImage}
                                                alt={membersImage.enAlt+"t2"}
                                            />
                                        </div>
                                        
                                    </div>
                                    <div className='column two'>
                                        <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="800">
                                        <h3>{membersName}</h3>
                                        <strong>{membersPosition.en}</strong>

                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-area__column--two">
                                    <div className='column two' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                                        <p>{membersDescription.en}</p>
                                    </div>
                                    <div className='two-line'> </div>
                                </div>
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
.mobile-area{
    padding: 16px 0 54px;
    @media (min-width: 860px) {
        display: none;
    }
    &__column{
        display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row-reverse;
    overflow: hidden;
        .column{
            width: 50%;
            h3{
                text-decoration: underline;
                font-size: 20px;
                font-family: var(--reg);
                margin:0 ;
                @media (min-width: 375px) {
                    font-size: 24px;
                }
            }
            strong{
                font-family: var(--reg);
                font-size: 14px;
                margin-top: 16px;
                margin-bottom: 0;
                @media (min-width: 375px) {
                    font-size: 16px;
                }
            }
            .image{
                margin:0 ;
                padding: 0;
                img{
                    object-fit: cover;
                    height: 160px;
                    @media (min-width: 375px) {
                        height: 200px;
                    }
                    @media (min-width: 575px) {
                        height: 300px;
                    }
                }
            }
            &.img-group{
                height: 160px;
                @media (min-width: 375px) {
                    height: 200px;
                }
                @media (min-width: 575px) {
                    height: 300px;
                }
            }
        }
        &--two{
            margin-top: 16px;
           .column{
               p{
                   font-size: 16px;
               }
           } 
           .two-line{
               margin-top: 14px;
               position: relative;
               &:after,
            &:before{
                position: absolute;
                bottom: 0;
                content: "";
                width: 47%;
                height: 1px;
                left: 0;
                background: #575D63;

            }
            &:after{
                right: 0 !important;
                left: unset;
            }
           }
        }
    }
}
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
            @media (max-width: 860px) {
                margin: 0;
                font-size: 36px;
                text-transform: uppercase;
                font-family: var(--bold);
                margin-bottom: 62px;
            }
        }
        p {
            margin-bottom: 50px;
            @media (max-width: 860px) {
                padding: 0;
                margin: 0;
            }
        }
    }
    .iz {
        position: absolute;
        left: 0;
        top: 0;
        width: 33.333%;
        height: 100%;
        color: var(--dark-gray);
        @media (min-width: 860px) {
            background-color: white;
        }
        @media (max-width: 860px) {
            padding-top: 48px;
            z-index: 1;
            color: white;
            position: relative;
            width: 100%;
            background: #F4F3EF;
        }
        .grid {
            width: var(--width-l);
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            @media (max-width: 860px) {
                width: var(--width-4);
                gap: 0 30px;
                grid-template-columns: 1fr;
                padding: 32px 19px;

            }
            .bottom {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    overflow: hidden;
                   
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
            background: #F4F3EF;
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
        .m-bg{
        @media (max-width: 860px) {
            background: #04262D;
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
        @media (min-width: 1500px) {
            font-size: 1.3vw !important;
        }
        @media (min-width: 1640px) {
            font-size: 1vw !important;
        }
        &::before {
            display: none;
        }
        @media (max-width: 860px) {
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
.o-v-h{
    overflow: hidden;
}
`

export default Team;