import React from 'react'
import Blob1 from "../elements/Blob1";
import TextImage1 from "../elements/TextImage1";
import TextImage2 from "../elements/TextImage2";

const Home = () => {
  return (
      <>
          <div>
              {/*<h1>This is HOME</h1>*/}

          </div>
          <TextImage1/>
          <Blob1/>
          <section className="spacer"></section>
          <TextImage2/>
          <Blob1/>
          <section className="spacer"></section>
      </>
  )
}

export default Home