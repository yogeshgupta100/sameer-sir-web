import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CoursesModal() {
	const [courses, setCourses] = useState([]);

	const options = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	  };

	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/courses?populate=*`);
			const data = await res.json();
			setCourses(data.data.slice(0, 3));
		})();
	}, []);
	return (
		<div
			style={{
				alignItems: "start",
				borderRadius: "0.99vw",
				display:"flex",
				height:"70vh",
				margin:"2.44vw 2.77vw 2.44vw 5.77vw",
			}}
		>
			<div
				className="course-container"
				id="courses"
			style={{width: "100vw",
				display: "grid",
				gridTemplateColumns: "1fr 1fr 1fr",
				justifyItems: "center",
				flexWrap: "wrap",
				gap: "1.11vw",
				height:"100%"
				}}>
				{courses.map((course) => {
					return (
						<div className="card" style={{width:"100%"}}>
							<div style={{aspectRatio: "1/1" , width:"100%"}}><img src={course?.attributes?.thumbnail?.data?.attributes?.url} className="card-img-top" alt="course1" style={{
								width: "100%",
								height:"100%"
							}} /></div>
							<div
								className="card-body"
								style={{
									width:"100%",
									height:"90%"
								}}
							>
								<div style={{aspectRatio:"6/2.5"}}>
								<div className="course-subtitle "
									style={{
										color: "#878787",
										fontFamily: "Open Sans",
										fontSize: "clamp(0.5rem , 1vw , 0.8rem)",
										fontStyle: "normal",
										fontWeight: "700",
										lineHeight:"125%",
										whiteSpace:"nowrap",
										marginBottom:"0.2rem"
									}}
								>
									{course.attributes.category}
								</div>
								<div
									className="card-title"
									style={{
										color: "#B46BD1",
										// fontFamily: "Open Sans",
										fontSize: "clamp(1rem , 1.5vw , 1.3rem)",
										fontStyle: "normal",
										fontWeight: "700",
										lineHeight: "121.5%",
										height:"clamp(3.2rem , 1.3vw , 4rem)",
										overflow:"hidden",
										width:"95%",
										marginBottom:"3rem"
									}}
								>
									{course.attributes.name}
								</div>
								</div>
								<div
									className="content-course "
									style={{
										width:"100%",
										display:"flex",
										fontSize: "clamp(0.5rem , 1.2vw , 0.9rem)",
										lineHeight: "130%",
										justifyContent:"space-between",
										marginBottom:"2vw"
									}}
								>
									<div className="content " style={{textAlign:"start"}}>
										<div
											style={{
												color: "rgba(117, 117, 117, 0.90)",
												fontFamily: "Open Sans",
												fontStyle: "normal",
												fontWeight: "700",
												marginBottom:"0.88vw",
												whiteSpace:"nowrap",
												fontSize:"clamp(0.5rem , 1.2vw , 0.8rem)"
											}}
										>
											Starting Date
										</div>
										<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.2vw , 0.8rem)" , color: "#B46BD1" , fontWeight:"500" , whiteSpace:"nowrap"}}>{(new Date(course.attributes.batches[0].startDate)).toLocaleDateString("en-US",options).replace(/,/g, '')}</span>
									</div>
									<div className="v-line" style={{minWidth:"0.0525rem" , backgroundColor:"#CDCDCD" , height:"100%" , margin:"0" , alignSelf:"center"}}></div>
									<div className="content" style={{textAlign:"center" , whiteSpace:"nowrap"}}>
										<div
											style={{
												color: "rgba(117, 117, 117, 0.90)",
												fontFamily: "Open Sans",
												fontStyle: "normal",
												fontWeight: "700",
												marginBottom:"0.88vw",
												fontSize:"clamp(0.5rem , 1.2vw , 0.8rem)"
											}}
										>
											Cohort size
										</div>
										<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.2vw , 0.8rem)", color: "#B46BD1" , fontWeight:"500"}}>{course.attributes.batches[0].endDate}</span>
									</div>
									<div className="v-line" style={{minWidth:"0.0525rem" , backgroundColor:"#CDCDCD" , height:"100%" , margin:"0", alignSelf:"center"}}></div>
									<div className="content" style={{textAlign:"center" , whiteSpace:"nowrap"}}>
										<div
											style={{
												color: "rgba(117, 117, 117, 0.90)",
												fontFamily: "Open Sans",
												fontStyle: "normal",
												fontWeight: "700",
												marginBottom:"0.88vw",
												fontSize:"clamp(0.5rem , 1.2vw , 0.8rem)"
											}}
										>
											Duration
										</div>
										<span className="course-data" style={{fontSize: "clamp(0.5rem , 1.2vw , 0.8rem)" , color: "#B46BD1" , fontWeight:"500"}}>{course.attributes.batches[0].duration}</span>
									</div>
								</div>
								<div className='containe'>
								<Link
									to={`/courses/${course.id}`}
									className="purple-btn course-btn"
									style={{
										textDecoration: "none",
										fontSize: "clamp(0.5rem , 1.5vw , 1rem)",
									}}
								>
									Learn more
								</Link>
								</div>
							</div>
						</div>
				);
				})}
				
			</div>
			<div
				className="second-card"
				style={{
					display: "flex",
					backgroundColor: "transparent",
					width: "60%",
					aspectRatio: "1/1.3",
					alignItems: "start",
					fontWeight: "bold",
					fontSize: "1.332vw",
					height:"100%",
					justifyContent:"center"
				}}
			>
				<div 
				className="inner-card"
				style={{
					// margin: "0 0 0 2rem",
					borderLeft:"1.7px solid #C4C4C4",
					width:"80%",
					color:"#9844C5",
					display:"flex", 
					alignItems:"center",
					flexDirection:"column",
					height:"100%",
					padding:"1rem 0 0 2rem"
				}}
			>
				<div style={{ fontWeight: "600", marginBottom: "0.555vw" ,  fontSize:"clamp(1rem , 1.4vw , 1.5rem)" , lineHeight:"150%" , margin:"0 1rem" }}>Sharpen your skills with Dxolve, where expertise converges with innovation, sparking brilliance in every skill-building journey.</div>
					<ul style={{height:"55%",fontSize:"clamp(1rem , 1.4vw , 1.5rem)" , fontWeight:"400" , width:"90%" , display:"flex" , flexDirection:"column" , margin:"1rem 0" , justifyContent:"space-around" }}>
						<li>Empower Your Learning Journey</li>
						<li>Interactive Learning Environment</li>
						<li>Unlock Learning Potential</li>
						<li>Personalised Learning Paths</li>
					</ul>
				
			</div>
			</div>
		</div>
	);
}
