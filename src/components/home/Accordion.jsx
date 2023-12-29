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
    <div id='faq'>
      <div className="faq-heading"><h4>FAQS</h4>
      </div>
      <section className="p-menu1 container">
  {/* <nav id="navbar" className="navigation" role="navigation">
    <input id="toggle1" type="checkbox" style={{position:"relative" , zIndex:"120" }}/>
    <label style={{border:"none"}}
						className="hamburger1"
            for="toggle1"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarExternalContent"
						aria-controls="navbarExternalContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span>
							<img src="/assets/hamburger.svg" />
						</span>
					</label> */}
          <nav id="navbar" className="navigation" role="navigation">
    <input id="toggleAccordion" type="checkbox" />
    <label className="hamburger1" for="toggleAccordion">
      <div className="top"></div>
      <div className="meat"></div>
      <div className="bottom"></div>
    </label>
  
    <nav className="menu1">
    <button style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Institute")}>Institute</button>
                <button style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Admissions")}>Admissions</button>
                <button style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Course content")}>Course content</button>
                <button style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Instructors")}>Instructors</button>
                <button style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Cards & payments")}>Cards & payments</button>
                <button style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#fff"}} onClick={()=> filterItem("Placements")}>Placements</button>
    </nav>
</nav>
</section>
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
        <Accordion.Body id='answer' style={{color:"#AD60C8" , width:"80%"}}>
          {currEle.Ans}
        </Accordion.Body>
      </Accordion.Item>
      );
    })}
    </Accordion>
    </div>
    </div>
  );
};

export default AllCollapseExample;