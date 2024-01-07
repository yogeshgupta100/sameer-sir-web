import React from "react";
import { NavLink } from "react-router-dom";

const StudentCourses = ({ course }) => {
	return (
		<div className="card my-3 px-0" style={{ border: "1px solid #B46BD1" }}>
			<img
				src={course?.thumbnail?.url}
				className="card-img-top"
				alt="course1"
			/>
			<div className="card-body container">
				<div>
					<span
						className="course-subtitle"
						style={{
							textAlign: "start",
							color: "#878787",
							fontFamily: "Open Sans",
							fontSize: "clamp(0.7rem , 2vw , 1.4rem)",
							fontStyle: "normal",
							fontWeight: "700",
							// marginBottom: "0.22vw",
							lineHeight: "1",
						}}
					>
						{course.category}
					</span>
					<h5
						className="card-title"
						style={{
							color: "#B46BD1",
							fontFamily: "Open Sans",
							fontSize: "clamp(0.8rem , 2vw , 1.5rem)",
							fontStyle: "normal",
							fontWeight: "700",
							lineHeight: "140.5%",
							marginBottom: "2.22vw",
							height: "5rem",
							overflow: "hidden",
						}}
					>
						{course.name}
					</h5>
				</div>
				<div
					className="content-course"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr",
						fontSize: "clamp(0.5rem , 1.5vw , 1rem)",
						lineHeight: "1",
						gap: "0.3rem",
					}}
				>
					<div className="content" style={{ textAlign: "start" }}>
						<div
							style={{
								color: "rgba(117, 117, 117, 0.90)",
								fontFamily: "Open Sans",
								// fontSize: "1.11vw",
								fontStyle: "normal",
								fontWeight: "700",
								marginBottom: "0.88vw",
							}}
						>
							Starting Date
						</div>
						<span className="course-data" style={{ fontSize: "clamp(0.5rem , 1.5vw , 1rem)" }}>
							{course.batches[0].startDate}
						</span>
					</div>
					<div className="content" style={{ textAlign: "center" }}>
						<div
							style={{
								color: "rgba(117, 117, 117, 0.90)",
								fontFamily: "Open Sans",
								fontStyle: "normal",
								fontWeight: "700",
								marginBottom: "0.88vw",
							}}
						>
							End Date
						</div>
						<span className="course-data" style={{ fontSize: "clamp(0.5rem , 1.5vw , 1rem)" }}>
							{course.batches[0].endDate}
						</span>
					</div>
					<div className="content" style={{ textAlign: "center" }}>
						<div
							style={{
								color: "rgba(117, 117, 117, 0.90)",
								fontFamily: "Open Sans",
								fontStyle: "normal",
								fontWeight: "700",
								marginBottom: "0.88vw",
							}}
						>
							Duration
						</div>
						<span className="course-data" style={{ fontSize: "clamp(0.5rem , 1.5vw , 1rem)" }}>
							{course.batches[0].duration}
						</span>
					</div>
				</div>
				<NavLink
					to={`/courses/${course.id}`}
					className="purple-btn course-btn"
					style={{
						textDecoration: "none",
						fontSize: "clamp(0.5rem , 1.5vw , 1rem)",
					}}
				>
					Learn more
				</NavLink>
			</div>
		</div>
	);
};

export default StudentCourses;
