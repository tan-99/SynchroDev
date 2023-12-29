import React from 'react'
import Blob1 from "../components/Blob1";
import Blob2 from "../components/Blob2";
import TextImage1 from "../components/TextImage1";
import TextImage2 from "../components/TextImage2";
// import $ from 'jquery';
import Spacer from "./Spacer";
import Domains from "../components/Domains";
import Footer from "./Footer";
import Navbar from '../components/Navbar'
import FeatureCards from '../components/FeatureCards'


const Home = () => {
  return (
      <>
          <Navbar />
          <FeatureCards />
          <div style={{overflow:'hidden'}}>
              <TextImage1/>
              <Blob1/>
          </div>
          <Spacer/>
          <div style={{position: 'relative'}}>
              <TextImage2/>
              <Blob2/>
          </div>
          <Spacer/>
          <Domains/>
          {/*<Spacer/>*/}
          <Footer/>
      </>


  )
}

export default Home