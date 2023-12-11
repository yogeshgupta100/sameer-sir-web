import React from "react";
// import ReactCardCarousel from "react-card-carousel";
import Heading from '../aboutus/Heading'
import Carousal from './Carousal'

const Testimonies = () => {
  return (
    <>
    <div className="heading" id="Testimony" style={{marginLeft:"4.44vw" , marginTop:"11.1vw"}}>
    <Heading content={"Our Testimonial"} left={"15%"}/>
    </div>
    <Carousal />
    </>
  )
}

export default Testimonies