import { useEffect, useState } from 'react'
import Graphic from './Graphic'
import Subscribe from '../aboutus/Subscribe'
import Testimonies from '../home/Testimonies'
import Teachers from '../home/Teachers'
import AccordionApi from '../home/AccordionApi'
import AllCollapseExample from '../home/Accordion'
import Whycourse from './Whycourse'
import Pricing from './Pricing'
import Curriculum from './Curriculum'
import Howyoulearn from './Howyoulearn'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import EnrollingProcess from './EnrollingProcess'
import Header from '../Header'

const Course = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();

    const [courseData , setCourseData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/courses/${courseId}?populate=*`)
                const data = await res.json();

                if (data.data === null) {
                    navigate("/");
                } else {
                    setCourseData(data.data);
                }
            } catch (err) {
                navigate("/");
            }
        })();
    }, [])

    const [menuData , setMenuData] = useState(AccordionApi);
    const filterItem = (category) =>{
        const updatedList = AccordionApi.filter((currEle) => {
            return currEle.category === category;
        });
        setMenuData(updatedList);
    }
  return (
    <>
        <Header/>
        <Graphic data={courseData} />
        <Whycourse data={courseData} />
        <Howyoulearn data={courseData} />
        <Curriculum data={courseData} />
        <Teachers data={courseData} />
        {/* <Pricing data={courseData} /> */}
        <EnrollingProcess/>
        <Testimonies data={courseData} />
        <AllCollapseExample menuData={menuData} data={courseData} />
        <Subscribe data={courseData} />
    </>
  )
}

export default Course