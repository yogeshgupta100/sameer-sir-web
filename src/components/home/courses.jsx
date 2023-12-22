import React from "react";
import Heading from "../aboutus/Heading";
import Courses_container from "./Courses_container";

const Courses = () => {

	return (
		<div className="course_section" style={{width:"100vw" , minHeight:"60vh"}}>
			<div className="row" style={{margin:"5.55vw 0 3.33vw 5.55vw"}}>
				<div className="col-12 container">
					<Heading content={"Explore our well knitted courses"} left={"32.5%"} />
				</div>
			</div>
            
			<Courses_container/>
			</div>
	);
};

export default Courses;
