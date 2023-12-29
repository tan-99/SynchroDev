import React from 'react'
import Navbar from '../components/Navbar'
import FeatureCards from '../components/FeatureCards'
import Blob1 from "../elements/Blob1";

const Home = () => {
  return (
    <div>
        <Navbar />
        <FeatureCards />
        <Blob1 />
        <h1>This is HOME</h1>
    </div>
  )
}

export default Home