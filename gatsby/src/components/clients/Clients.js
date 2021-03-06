import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick} onKeyDown={onClick}>
            <img
                alt='arrow'
                src='../arrowRig.png'
            />
        </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick} onKeyDown={onClick}>
            <img
                alt='arrow'
                src='../arrowLeft.png'
            />
        </button>
    );
  }


const Clients = () => {


    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: 30,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        fade: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
        };

        const data = useStaticQuery(graphql`
        query  {
            sanityClientsPage {
            #Testimonials
            testimonialsSectionTitle {
                en
                }
                testimonialsSectionText {
                en
                }
            testimonials {
                testimonialText {
                    en
                }
                testimonialImage {
                    asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
                    )
                    }
                    enAlt
                }
                name
                testimonialPosition {
                    en
                }
            }
            }
        }`)  
        
        const title = data.sanityClientsPage.testimonialsSectionTitle.en;
        const text = data.sanityClientsPage.testimonialsSectionText.en;
    

    return(
        <ClientsContainer>
            <div className='content'>
                <div className='line-r line absolute dark-gray no-bg'></div>
                <div className='line-l line absolute dark-gray no-bg'></div>
                <div className='grid'>
                    <div className='column solo hide-m'>
                        <div className='line-t dark-gray line'></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t dark-gray line'></div>
                    </div>
                    <div className='column solo hide-m'>
                        <div className='line-t dark-gray line'></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='text height-100' data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">
                            <p></p>
                            <h3 className='padding-bottom25'>{title}</h3>
                        </div>
                        <div className='line-r b-50 line dark-gray no-bg' ></div>
                        <div className='line-b line no-bg dark-gray' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-r b-50 line dark-gray no-bg' ></div>
                        <div className='line-b line no-bg dark-gray' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-b line no-bg dark-gray' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='text height-100' data-aos="fade-left" data-aos-delay="800" data-aos-duration="800">
                            <p className='padding-top25'>{text}</p>
                        </div>
                        <div className='line-r t-50 line dark-gray no-bg hide-m' ></div>
                        <div className='line-b bottom-25 line no-bg dark-gray hide-m' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-r t-50 line dark-gray no-bg' ></div>
                        <div className='line-b bottom-25 line no-bg dark-gray' ></div>
                    </div>
                    <div className='column hide-m'>
                        <div className='line-b bottom-25 line no-bg dark-gray' ></div>
                    </div>
                    <div className="mobile-area">
                        <div className='column' >
                            <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                            <h3 className='padding-bottom25'>{title}</h3>
                            <p className='padding-top25'>{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contenedor'>
                    <SliderContainer {...settings}>
                        {data.sanityClientsPage.testimonials.map(({ testimonialText, name, _key, testimonialPosition, testimonialImage}) => {
                            const getDataImage = getImage(testimonialImage.asset);
                            return (
                            <Slide className='item' key={_key+"c"} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                                <div className='line'></div>
                                <div className='grid m-white'>
                                    <div className='columnn'>
                                        <div className='text'>
                                            <span>???</span>
                                            <p>{testimonialText.en}</p>
                                        </div>
                                    </div>
                                    <div className='columnn'>
                                        <div className='imagee'>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={getDataImage}
                                                alt={testimonialImage.enAlt}
                                            />
                                        </div>
                                        <h3>{name}</h3>
                                        <p>{testimonialPosition.en}</p>
                                    </div>
                                </div>
                            </Slide>
                            )
                        })}
                    </SliderContainer>
                </div>
            </div>

        </ClientsContainer>
    )
}

const ClientsContainer = styled.section`
    .mobile-area{
        margin-top: 48px;
        background: var(--green);
        @media (min-width: 860px) {
            display: none;
        }
        .column{
            padding: 32px 19px;
            overflow: hidden;
            h3{
                font-size: 36px;
                text-transform: uppercase;
                font-family: var(--bold);
                color: white;
                margin-bottom: 60px;
            }
            p{
                color: white;
                font-size: 16px;
            }
        }
    }
    overflow: hidden;
    background-color: white;
    position: relative;
    height: 100vh;
    width: 100%;
    color: var(--dark-gray);
    padding-bottom: 50px;
    @media (max-width: 860px) {
        background-color: #F4F3EF;
        height: 100% !important;
        color: var(--dark-gray);
    }
    .image {
        width: 33.33%;
        height: 100%;
        position: absolute;
        right: 0;
    }
    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        @media (max-width: 860px) {
            position: static;
            color: var(--dark-gray);
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
            gap: 0 30px;
            grid-template-columns: 1fr;
            height: auto;
        }
    }
    .column {
        height: 50vh;
        position: relative;
        @media (max-width: 860px) {
            height: auto;
        }
        .line-t {
            top: 25px;
        }

        .text {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h3, h4 {
                    font-size: var(--headline-2);
                    margin-top: 50px;
                }
                h4 {
                    font-size: 1.2rem;
                }
            }
        .list {
            p {
                border-bottom: solid 1px #575D63;
                height: 25%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                &:last-child {
                    border-bottom: none;
                }
            }
        }
    }
    .solo {
        height: auto;
        .line-t {
            top: 25px;
        }
        .line-b {
            bottom: 25px;
        }
    }
    .contenedor {
        position: absolute;
        width: calc(66.66% - 50px);
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 0;
        box-sizing: border-box;
        @media (max-width: 860px) {
            transform: none;
            width: 100%;
            position: static;
        }
    }
`

const SliderContainer = styled(Slider)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    position: relative;
    @media (max-width: 860px) {
            margin-top: 25px;
            padding-bottom: 50px;
        }
    button.slick-arrow {
        width: 35px;
        height: 35px;
        z-index: 1;
        position: absolute;
    }
    .slick-prev:before {
        display: none;
    }
    .slick-next:before {
        display: none;
    }
    .slick-prev {
        left: -20px;
        @media (max-width: 860px) {
            top: 100% !important;
            left: 25px;
        }
        
    }
    .slick-next {
        right: calc(50% - 43px);
        @media (max-width: 860px) {
            top: 100% !important;
            right: 25px;
        }
    }
`

const Slide = styled.div`
width: calc(100% - 50px) !important;
height: 100%;
background-color: var(--gray);
position: relative;
border-radius: 10px;
margin-left: 50px;
@media (max-width: 860px) {
    width: 100%;
    margin-left: 25px;
    margin-right: auto;
}
.line {
    position: absolute;
    top: 50%;
    width: 85%;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: thin solid;
    border-color: var(--dark-gray);
   
}
.text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        margin-bottom: 25px;
        font-size: 16px;
        @media (min-width: 1500px) {
                font-size: 1vw;
        }
    }
    span {
        font-family: var(--bold);
        font-size: 5rem;
        line-height: 0;
        margin-top: 40px;
        @media (max-width: 860px) {
            color: #000;
            font-size: 64px;
        }
    }
}
.grid {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    @media (max-width: 860px) {
        border-radius: 10px;
    }
    .columnn {
        height: 210px   ;
        h3 {
            font-size: var(--headline-3);
            @media (max-width: 860px) {
                font-size: 16px;
                color: #000;
                margin-bottom: 5px;
            }
        }
        p {
            @media (max-width: 860px) {
                font-size: 14px;
            }
        }
        .text{
            @media (max-width: 860px) {
                border-bottom: 1px solid #575D63;
            }
        }
        .imagee {
            margin-top: 25px;
            margin-bottom: 15px;
            width: 70px;
            height: 70px;
        }
    }
}
.m-white{
    @media (max-width: 860px) {
        background: white;
    }   
}

` 


export default Clients