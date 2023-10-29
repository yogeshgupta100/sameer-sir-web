import Accordion from 'react-bootstrap/Accordion';
import AccordionApi from './AccordionApi';
import { useState } from 'react';

function AllCollapseExample() {
  const [menuData , setMenuData] = useState(AccordionApi);
    const filterItem = (category) =>{
        const updatedList = AccordionApi.filter((currEle) => {
            return currEle.category === category;
        });
        setMenuData(updatedList);
    };
  return (
    <>
      <div className="faq-heading"><h4>FAQS</h4></div>
        <nav className="faq-nav">
                <button className="btn-group__item" style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Institute")}>Institute</button>
                <button className="btn-group__item" style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Admissions")}>Admissions</button>
                <button className="btn-group__item" style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Course content")}>Course content</button>
                <button className="btn-group__item" style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Instructors")}>Instructors</button>
                <button className="btn-group__item" style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Cards & payments")}>Cards & payments</button>
                <button className="btn-group__item" style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Placements")}>Placements</button>
        </nav>
        <div className="accordion">
          <Accordion className='accordion-content'>
    {menuData.map((currEle)=>{
      return(
      <Accordion.Item eventKey={currEle.id} className='item'>
        <Accordion.Header className='ques' style={{textDecoration:"none"}}><p>{currEle.Ques}</p></Accordion.Header>
        <Accordion.Body style={{color:"#AD60C8" , width:"80%"}}>
          {currEle.Ans}
        </Accordion.Body>
      </Accordion.Item>
      );
    })}
    </Accordion>
    </div>
    </>
  );
};

export default AllCollapseExample;