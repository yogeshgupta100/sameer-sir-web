import React,{useState , useEffect} from 'react'
import Hero from './Hero'
import Section1 from './section1'
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
        <Section1 text={"Our working at Dxolve"}/>
        <Teachers empData={empData}/>
        <Brands color="linear-gradient(115deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)" textCol="white"/>
        <Section1 text={"Our Commitment"}/>
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