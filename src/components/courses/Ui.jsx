import React , {useState} from 'react'
import Graphic from './Graphic Design/Graphic'
import Subscribe from '../../components/aboutus/Subscribe'
import Testimonies from '../../components/home/Testimonies'
import Teachers from '../../components/home/Teachers'
import AccordionApi from '../../components/home/AccordionApi'
import AllCollapseExample from '../../components/home/Accordion'
import Whycourse from './Graphic Design/Whycourse'
import Pricing from './Graphic Design/Pricing'
import Curriculum from './Graphic Design/Curriculum'
import Howyoulearn from './Graphic Design/Howyoulearn'
import CoursespageApi from './CoursespageApi'

const Ui = () => {
    const [menuData , setMenuData] = useState(AccordionApi);
    const [courseData , setCourseData] = useState(CoursespageApi);
    const filterItem = (category) =>{
        const updatedList = AccordionApi.filter((currEle) => {
            return currEle.category === category;
        });
        setMenuData(updatedList);
        const updatedList1 = CoursespageApi.filter((currEle)=>{
            return currEle.category === category;
        });
        setCourseData(updatedList1);
    }
  return (
    <>
        <Graphic bannerTitle={"User Experience Revolution: Designing Tomorrow's World"} bannerSubtitle={"Unlocking the Secrets of User-Centered Design: A Comprehensive Journey into UX Excellence"} />
        <Whycourse/>
        <Howyoulearn/>
        <Curriculum/>
        <Teachers/>
        <Pricing/>
        <Testimonies/>
        <AllCollapseExample menuData={menuData}/>
        <Subscribe/>
    </>
  )
}

export default Ui