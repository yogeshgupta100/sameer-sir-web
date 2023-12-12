import React, { useState } from 'react'
import LandingPage from './LandingPage'
import Section1 from './Section1'
import Brands from './Brands'
import Courses from './courses'
import Teachers from './Teachers'
import AllCollapseExample from './Accordion'
import Resource from './Resource'
import Testimonies from './Testimonies'
import Subscribe from '../aboutus/Subscribe'
import First from './First'
import AccordionApi from './AccordionApi';
import Header from '../Header'
import University from './University'

const Home = () => {
  const [menuData , setMenuData] = useState(AccordionApi);
  const filterItem = ({category}) =>{
    const updatedList = AccordionApi.filter((currEle) => {
        return currEle.category === category;
    });
};
  return (
    <div id='home'>
      <Header />
      <LandingPage/>
      <Section1/>
      <Courses/>
        <Brands color="linear-gradient(115deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)" textCol="#fff"/>
        <Teachers/>
        <University color="linear-gradient(115deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)" textCol="#fff"/>
        <Resource/>
        <First/>
        <Testimonies/>
        <AllCollapseExample menuData={menuData}/>
        <Subscribe/>
    </div>
  )
}

export default Home