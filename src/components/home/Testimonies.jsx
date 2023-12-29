import React from "react";
import Heading from "../aboutus/Heading";
import Carousal from "./Carousal";

const Testimonies = () => {
	return (
		<>
			<div className="heading" id="Testimony" style={{ marginLeft: "4.44vw", marginTop: "11.1vw" }}>
				<Heading content={"Our Testimonial"} subContent={"Bridging Aspiration and Achievement of Dxolve and the Evolution of our personalised  Skills Beyond Tutorials and the Personalized Learning Journey in our well knitted courses."} left={"15%"} />
			</div>
			<Carousal />
		</>
	);
};

export default Testimonies;
