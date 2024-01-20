import React, { useState , useEffect } from 'react'
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
import Heading from '../aboutus/Heading'

const Home = () => {
  const [menuData , setMenuData] = useState(AccordionApi);
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/employees?populate=*`);
      const data = await res.json();
      setEmpData(data.data);
    })();
  }, []);
  
  const filterItem = ({category}) =>{
    const updatedList = AccordionApi.filter((currEle) => {
        return currEle.category === category;
    });
};
  return (
    <div id='home'>
      <Header />
      <LandingPage imageurl={"/assets/home-landing-img.png"} title={"Immerse yourself into the world of Design, Technology and Innovation."} subTitle={"Join us and up-skill yourself to compete with the current industry trends and the booming job markets."} buttonText={"Explore now"} Link={"#courses"}/>
      <Section1/>
      <Courses/>
        <Brands color="linear-gradient(115deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)" textCol="#fff"/>
        <Teachers empData={empData} content={"Mentors empowering your journey"} subContent={"Get groomed by elite professionals and academic gurus of the industry to accelerate your professional journey."} btnVisible={true}/>
        <University color="linear-gradient(115deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)" textCol="#fff"/>
        <div className='container' style={{paddingTop:"13vw"}}><Heading content="Unlock a world of knowledge with our resource library" subContent={"Explore our resource hub—a treasure trove of knowledge, tools, and inspiration. From personal growth to professional development, find what you need to thrive. Dive in and empower your journey today."} left="20.5%"/></div>
        <Resource imageUrl1={"/assets/resources-img1.jpeg"} imageUrl2={"/assets/resources-img2.jpeg"} link={'/resource'}/>
        <First/>
        <Testimonies/>
        <AllCollapseExample menuData={menuData}/>
        <Subscribe/>
    </div>
  )
}

export default Home