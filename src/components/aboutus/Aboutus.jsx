import React,{useState} from 'react'
import Hero from './Hero'
import Section1 from './section1'
import Brands from '../home/Brands'
import Card from './cardApi'
import Subscribe from './Subscribe'
import Header from '../Header'
import Teachers from '../home/Teachers'

const Aboutus = () => {
  return (
    <div id='about'>
        <Header/>
        <Hero/>
        <Section1 text={"What Sets Us Apart"}/>
        <Teachers/>
        <Brands color="linear-gradient(115deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)" textCol="white"/>
        <Section1 text={"Our Commitment"}/>
        <div style={{
          width:"100vw",
          display:"flex",
          justifyContent:"center",
          marginTop:"3rem"
        }}>
        <button className='purple-btn' id='btn' style={{
        textDecoration:"none",
        border:"none",
        width:"10rem",
        fontWeight:"500",
        padding:"1.1rem",
        marginTop:"1.8rem",
      }}>Explore Courses</button>
        </div>
        <Subscribe/>
    </div>
  )
}

export default Aboutus