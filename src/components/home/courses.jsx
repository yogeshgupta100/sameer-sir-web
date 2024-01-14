import React from "react";
import Heading from "../aboutus/Heading";
import Courses_container from "./Courses_container";

const Courses = () => {

	return (
		<>
			<div className="row" style={{margin:"10.38vw 0 4.81vw 3.55vw"}}>
				<div className="col-12">
					<Heading content={"Explore our well knitted courses"} subContent={"A collaborative approach with industry experts and academic geniuses has led us to our curriculum that will ensure your readiness/potential for the booming-job market."} left={"27.5%"} />
				</div>
			</div>
		<div className="course_section container" style={{width:"100vw" ,
		 minHeight:"60vh",
		 }}>
            
			<Courses_container/>
			</div>
			</>
	);
};

export default Courses;
