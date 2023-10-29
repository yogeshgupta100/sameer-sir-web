import React,{useState} from 'react'
import Hero from './Hero'
import Section1 from './section1'
import Brands from '../home/Brands'
import Card from './cardApi'
import Empcard from './card'
import Subscribe from './Subscribe'
import Aboutfooter from './Aboutfooter'
import Teammates from './Teammates'

const Aboutus = () => {
  const [empData , setEmpData] = useState(Card);
    const filterItem = (position) =>{
        const updatedList = Card.filter((currEle) => {
            return currEle.position === position;
        });
        setEmpData(updatedList);
    };
  return (
    <>
        <Hero/>
        <Section1 text={"What Sets Us Apart"}/>
        <Teammates empData={empData}/>
        <Brands color="linear-gradient(115deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)" textCol="white"/>
        <Section1 text={"Our Commitment"}/>
        <Subscribe/>
        <Aboutfooter/>
    </>
  )
}

export default Aboutus