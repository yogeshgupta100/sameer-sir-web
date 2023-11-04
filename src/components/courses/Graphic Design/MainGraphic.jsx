import React , {useState} from 'react'
import Graphic from './Graphic'
import Subscribe from '../../aboutus/Subscribe'
import Testimonies from '../../home/Testimonies'
import Teachers from '../../home/Teachers'
import AccordionApi from '../../home/AccordionApi'
import AllCollapseExample from '../../home/Accordion'
import Whycourse from './Whycourse'
import Pricing from './Pricing'
import Curriculum from './Curriculum'
import Howyoulearn from './Howyoulearn'
import CoursespageApi from '../CoursespageApi'

const MainGraphic = () => {
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
        <Graphic currEle={courseData}/>
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

export default MainGraphic