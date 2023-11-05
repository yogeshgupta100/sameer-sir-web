import React, { useState } from 'react'
import LandingPage from './LandingPage'
import Section1 from './Section1'
import Brands from './Brands'
import Footer from '../Footer'
import Courses from './courses'
import CourseData from './CourseData'
import Card from '../aboutus/cardApi'
import Teachers from './Teachers'
import AllCollapseExample from './Accordion'
import Resource from './Resource'
import Testimonies from './Testimonies'
import Subscribe from '../aboutus/Subscribe'
import First from './First'
import AccordionApi from './AccordionApi';
import Header from '../Header'

const Home = () => {
  const [cardData , setCardData] = useState(CourseData);
  const [empData , setEmpData] = useState(Card);
  const [menuData , setMenuData] = useState(AccordionApi);
  const filterItem = ({category , position}) =>{
    const updatedList1 = AccordionApi.filter((currEle) => {
        return currEle.category === category;
    });
    setMenuData(updatedList1);
    const updateList = Card.filter((currEle) => {
        return currEle.position === position;
    });
    setEmpData(updateList);
    const updatedList = CourseData.filter((currEle) => {
        return currEle.position === position;
    });
    setCardData(updatedList);
};
  return (
    <div>
      <Header />
      <LandingPage/>
      <Section1/>
      <Courses cardData={cardData}/>
        <Brands color="linear-gradient(115deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)" textCol="#fff"/>
        <Teachers/>
        <Brands color="linear-gradient(115deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)" textCol="#fff"/>
        <Resource/>
        <First/>
        <Testimonies/>
        <AllCollapseExample menuData={menuData}/>
        <Subscribe/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home