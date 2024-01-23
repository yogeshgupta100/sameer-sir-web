import React,{useState , useEffect} from 'react'
import Hero from './Hero'
import Section1 from './section1'
import Section2 from './section2'
import Brands from '../home/Brands'
import Subscribe from './Subscribe'
import Header from '../Header'
import Teachers from '../home/Teachers'

const Aboutus = () => {
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/employees?populate=*`);
      const data = await res.json();
      setEmpData(data.data);
    })();
  }, []);
  return (
    <div id='about'>
        <Header/>
        <Hero/>
        <Section1 text={"Dedicated to Elevating Learning Experiences"} subContent={"Through innovative technology, we empower educators and inspire students to thrive in a dynamic educational landscape. Join us on the journey to redefine education for a brighter future."} imageUrl1={"/assets/mam.png"} imageUrl2={"/assets/sir.png"} director={true}/>
        <Teachers empData={empData} content={"Our team"} subContent={"Unveiling the Heartbeat of Dxolve: Our Dedicated Team of Educators, Designers, and Innovators. Together, We Redefine the Landscape of Learning."} btnVisible={false}/>
        <Brands color="linear-gradient(115deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)" textCol="white"/>
        <Section2 text={"The Vision Behind Dxolve"} subContent={"Empowering Excellence, Inspiring Innovation, and Transforming Futures."} imageUrl1={"/assets/about-resource1.png"} imageUrl2={"/assets/about-resource2.png"} director={true}/>
        <div style={{
          maxWidth:"100vw",
          display:"flex",
          justifyContent:"center",
          marginTop:"3.33vw"
        }}>
        <a href='/' style={{textDecoration:"none"}}>
        <button className='purple-btn' id='btn' style={{
        textDecoration:"none",
        border:"none",
        fontWeight:"500",
        padding:"1.221vw",
        marginTop:"1.998vw",
        fontSize:"clamp(0.6rem , 2vw , 1rem)",
        whiteSpace:"nowrap"
      }}>Explore Courses</button>
        </a>
        </div>
        <Subscribe/>
    </div>
  )
}

export default Aboutus