import React from 'react'
import Blob1 from "../elements/Blob1";
import Blob2 from "../elements/Blob2";
import TextImage1 from "../elements/TextImage1";
import TextImage2 from "../elements/TextImage2";
import $ from 'jquery';
import Spacer from "./Spacer";
import Domains from "../elements/Domains";



const Home = () => {
  return (
      <>

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
      </>
  )
}

export default Home