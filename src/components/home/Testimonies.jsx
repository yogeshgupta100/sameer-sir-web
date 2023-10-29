import React from "react";
// import ReactCardCarousel from "react-card-carousel";
import Heading from '../aboutus/Heading'
import Carousal from './Carousal'

const Testimonies = () => {
  return (
    <>
    <div className="heading" style={{marginLeft:"4rem" , marginTop:"10rem"}}>
    <Heading content={"Our Testimonial"} left={"15%"}/>
    </div>
    <Carousal />
    </>
  )
}

export default Testimonies