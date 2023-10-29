import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Buttons/Login";
import Signup from "./Buttons/Signup";
import "./Header.css";
import "./home/LandingPage.css";
import Contact from "./Buttons/Contact";
import NavModal from "./NavModal";

const Header = () => {
	const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
	// const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
	const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
	const [isPartnersDropdownOpen, setPartnersDropdownOpen] = useState(false);

  const [navModalActive, setNavModalActive] = useState(false);

	// Function to handle hover on Courses nav item
	const handleCoursesHover = () => {
		setCoursesDropdownOpen(true);
		// setAboutDropdownOpen(false);  Close the About dropdown if open
		setResourcesDropdownOpen(false); // Close the About dropdown if open
		setPartnersDropdownOpen(false); // Close the About dropdown if open
	};

	// Function to handle hover on About nav item
	const handleAboutHover = () => {
		setCoursesDropdownOpen(false);
		// setAboutDropdownOpen(true);  Close the About dropdown if open
		setResourcesDropdownOpen(false); // Close the About dropdown if open
		setPartnersDropdownOpen(false); // Close the Courses dropdown if open
	};

	const handleResourcesHover = () => {
		setCoursesDropdownOpen(false);
		// setAboutDropdownOpen(false);  Close the About dropdown if open
		setResourcesDropdownOpen(true); // Close the About dropdown if open
		setPartnersDropdownOpen(false);
	};

	const handlePartnersHover = () => {
		setCoursesDropdownOpen(false);
		// setAboutDropdownOpen(false);  Close the About dropdown if open
		setResourcesDropdownOpen(false); // Close the About dropdown if open
		setPartnersDropdownOpen(true); // Close the Courses dropdown if open
	};

	// Function to handle mouse leaving the nav items
	const handleNavLeave = () => {
		setCoursesDropdownOpen(false);
		// setAboutDropdownOpen(false);
		setResourcesDropdownOpen(false);
		setPartnersDropdownOpen(false);
	};
	return (
		<>
			<div
				className="navbar navbar-expand-lg" style={{padding:"0" , width:"100%" }}
			>
				<div className="container-fluid py-2" style={{backgroundColor:"#fff" ,margin:"0" , height:"6rem"}}>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
						style={{
							// position: "absolute",
							left: "0",
							display: "flex",
							justifyContent:"start",
						}}
					>
						<ul className="navbar-nav" style={{
							display:"flex",
							justifyContent:"space-evenly",
							alignItems:"center",
							marginLeft:"2rem"
						}}>
							<li
								className="nav-item ms-3 dropdown"
							>
								<NavLink
									to="/aboutus"
									aria-current="page"
									style={{
										textDecoration: "none",
									}}
								>
									<span
										className="nav-link"
										style={{
											cursor: "pointer",
											textUnderlinePosition: "none",
											fontFamily: "Raleway",
											color: " rgba(0, 0, 0, 0.80)",
											fontSize:"1rem",
											fontWeight:"medium",
											fontStyle:"normal",
											textAlign:"center"
										}}
									>
										About
									</span>
								</NavLink>
							</li>
							<li
								className={`nav-item ms-3 ${navModalActive?"active":""}`}
								// onMouseEnter={handleCoursesHover}
								// onMouseLeave={handleNavLeave}
                onClick={() => setNavModalActive(prev => !prev)}
							>
								<span
									className="nav-link"
									style={{
										cursor: "pointer",
										textAlign: "center",
										fontFamily: "raleway",
										color: " rgba(0, 0, 0, 0.80)",
										fontSize:"1rem",
										fontWeight:"medium",
										fontStyle:"normal",
									}}
								>
									Courses
									<img
										src="assets/down-arrow.png"
										alt="arrow"
										style={{
											width: "2rem",
											background: "transparent",
										}}
									></img>
								</span>
								{/* <div
									className={`dropdown-menu ${isCoursesDropdownOpen ? "show" : ""}`}
									aria-labelledby="navbarDropdown"
								>
									<NavLink className="dropdown-item" to="/courses">
										Course 1
									</NavLink>
									<NavLink className="dropdown-item" to="/courses">
										Course 2
									</NavLink>
									<NavLink className="dropdown-item" to="/courses">
										Course 3
									</NavLink>
								</div> */}
							</li>
							<li
								className="nav-item ms-3"
								// onMouseEnter={handleResourcesHover}
								// onMouseLeave={handleNavLeave}
                onClick={() => setNavModalActive(prev => !prev)}
							>
								<span
									className="nav-link"
									style={{ cursor: "pointer", fontFamily: "raleway", color: " rgba(0, 0, 0, 0.80)" , fontSize:"1rem" , fontWeight:"medium",
									fontStyle:"normal",}}
								>
									Resources
									<img
										src="assets/down-arrow.png"
										alt="arrow"
										style={{
											width: "2rem",
											background: "transparent",
										}}
									></img>
								</span>
								{/* <div
									className={`dropdown-menu ${isResourcesDropdownOpen ? "show" : ""}`}
									aria-labelledby="navbarDropdown"
								>
									
									<NavLink className="dropdown-item" to="/resources">
										Resources 1
									</NavLink>
									<NavLink className="dropdown-item" to="/resources">
										Resources 2
									</NavLink>
									<NavLink className="dropdown-item" to="/resources">
										Resources 3
									</NavLink>
								</div> */}
							</li>
							<li
								className="nav-item ms-3"
								// onMouseEnter={handlePartnersHover}
								// onMouseLeave={handleNavLeave}
                onClick={() => setNavModalActive(prev => !prev)}
							>
								<span
									className="nav-link"
									style={{ cursor: "pointer", fontFamily: "raleway", color: " rgba(0, 0, 0, 0.80)", fontSize:"1rem" , fontWeight:"medium",
									fontStyle:"normal",}}
								>
									Career
									<img
										src="assets/down-arrow.png"
										alt="arrow"
										style={{
											width: "2rem",
											background: "transparent",
										}}
									></img>
								</span>
								{/* <div
									className={`dropdown-menu ${isPartnersDropdownOpen ? "show" : ""}`}
									aria-labelledby="navbarDropdown"
								>
									
									<NavLink className="dropdown-item" to="/partners">
										Partner 1
									</NavLink>
									<NavLink className="dropdown-item" to="/partners">
										Partner 2
									</NavLink>
									<NavLink className="dropdown-item" to="/partners">
										Partner 3
									</NavLink>
								</div> */}
							</li>
						</ul>
					<NavLink
						className="nav-link"
						aria-current="page"
						to="/"
						style={{
							fontFamily: "Raleway",
							fontSize: "1.5rem",
							fontStyle:"normal",
							// position: "absolute",
							// left: "50%",
							marginLeft:"16rem",
							fontWeight: "700",
							color:"#000",
						}}
					>
						Logo
					</NavLink>
					</div>
					<Contact />
					<Signup />
					{/* <Login /> */}
				</div>

				{/* Courses dropdown */}
				<NavModal navModalActive={navModalActive} />
			</div>
		</>
	);
};

export default Header;
