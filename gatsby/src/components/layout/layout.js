import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from '../layout/header'
import Footer from "./footer"



function Layout({ children, solidHeader, greenFooter }) {

  
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