import React , {useState} from 'react'
import Heading from '../aboutus/Heading'
import EmpCard from '../aboutus/card'
import Card from '../aboutus/cardApi'

const Teachers = () => {
    const [empData , setEmpData] = useState(Card);
    const filterItem = (position) =>{
        const updatedList = Card.filter((currEle) => {
            return currEle.id === position;
        });
        setEmpData(updatedList);
    };
  return (
    <>
    <div className='container' style={{
        marginTop:"10rem",
    }}>
      <Heading content={"Explore our well knitted courses"} left={"20.5%"}></Heading>
      <button className='purple-btn' style={{
        textDecoration:"none",
        border:"none",
        width:"6rem",
        fontSize:"0.79rem",
        position:"relative",
        left:"20.5%",
        top:"-2rem",
        display:"flex",
        padding:"0",
        alignItems:"center",
        height:"2.4rem",
        borderRadius:"0.4rem"
      }}><p style={{display:"flex" , textDecoration:"none" , marginLeft:"0" , marginTop:"1rem" , fontWeight:"500"}}>View all</p> 
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 7.5L17 7.5M17 7.5L11 13.5M17 7.5L11 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>
    </div>
    <section className='main-card--container container' style={{
        marginBottom:"10rem"
    }}>
    {empData.map((currEle) => {
      return(
          <div className='teacher' style={{
            overflowY:"hidden"
          }}>
            <EmpCard currEle={currEle}/>
            {/* <div className="teacher-hover"></div> */}
          </div>
        );
    })
}
    </section>
    </>
  )
}

export default Teachers