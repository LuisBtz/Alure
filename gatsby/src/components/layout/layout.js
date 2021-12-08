import React,{useEffect} from "react"
import { Normalizer } from "../styles/Normalizer"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from '../layout/header'
import Footer from "./footer"
import AOS from "aos";
import 'aos/dist/aos.css';


function Layout({ children, solidHeader, greenFooter }) {

  useEffect(()=>{
    AOS.init({
      once: true
    })
    
  })
  return (
    <>
      <Normalizer />
      <GlobalStyle />
      <Header solidHeader={solidHeader}/>
        <main>{children}</main>
      <Footer greenFooter={greenFooter}/>
    </>
  )
}


export default Layout