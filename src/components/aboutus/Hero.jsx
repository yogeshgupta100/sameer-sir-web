import React from "react";
import Header from "../Header";
import LandingPage from '../home/LandingPage'

const Hero = () => {
  return (
    <>
       <div
        className="full"
        style={{
          background: "transparent",
          marginBottom:"2.22vw",
          minHeight:"80vw",
          position:"relative",
        }}
      >
            <div className="image-hero">
            <LandingPage imageurl={"/assets/about-landing.png"}/>
            </div>
            <div className="about" style={{maxWidth:"100vw" , display:"flex" , justifyContent:"center"}}>
            <div className=" about-first2">
            <div className="container about-content">
              <div className="part1">
                <h3>About us.</h3>
                <p>
                  At Dxolve , we are passionate about empowering
                  creative minds to shape the digital world of tomorrow. We
                  believe in the transformative power of design, and our mission
                  is to provide an exceptional learning experience that nurtures
                  the design talents of individuals like you.
                </p>
                <p>
                  We are a team of dedicated designers, educators, and industry
                  professionals who are committed to nurturing creative talent
                  and fostering innovation
                </p>
              </div>
              <div className="v-line" style={{minWidth:"0.07vw" , minHeight:"100%"}}></div>
              <div className="part2">
                <h3>Our Vision.</h3>
                <p>
                  At Dxolve , we envision a world where design knows
                  no bounds—an interconnected realm where creativity and
                  innovation flourish in every digital corner. Our vision is to
                  be the guiding light for individuals seeking to master UX/UI
                  and visual design, forging a path toward a brighter, more
                  visually captivating future.
                </p>
                <p>
                  our vision is to be at the forefront of shaping the future of
                  UX/UI and visual design education. We envision a world where
                  individuals with a passion for design can unleash their
                  creative potential
                </p>
              </div>
            </div>
          </div>
            </div>
        </div>
        {/* </div>  */}
    </>
  );
};

export default Hero;
