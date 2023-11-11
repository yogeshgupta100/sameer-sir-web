import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Buttons/Login";
import Signup from "./Buttons/Signup";
import "./Header.css";
import "./home/LandingPage.css";
import Contact from "./Buttons/Contact";
import NavModal from "./NavModal";
import useMultiRefs from "../utility/useMultiRefs";

const Header = () => {
	const [navModalActive, setNavModalActive] = useState(false);
	const [modalState, setModalState] = useState("courses");

	const [getNavLinks, addNavLink] = useMultiRefs(null);

	return (
		<div className="navbar navbar-expand-lg" style={{ padding: "0", width: "100%" }}>
			<div className="container-fluid py-2" style={{ backgroundColor: "#fff", margin: "0", height: "6rem" }}>
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
						justifyContent: "start",
					}}
				>
					<ul
						className="navbar-nav"
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							alignItems: "center",
							marginLeft: "2rem",
						}}
					>
						<li className="nav-item ms-3 dropdown">
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
										fontSize: "1rem",
										fontWeight: "medium",
										fontStyle: "normal",
										textAlign: "center",
									}}
								>
									About
								</span>
							</NavLink>
						</li>
						<li
							ref={addNavLink}
							className={`nav-item ms-3 ${navModalActive && modalState === "courses" ? "active" : ""}`}
							onClick={() => {
								setNavModalActive((prev) => !prev || modalState !== "courses");
								setModalState("courses");
							}}
						>
							<span
								className="nav-link"
								style={{
									cursor: "pointer",
									textAlign: "center",
									fontFamily: "raleway",
									color: " rgba(0, 0, 0, 0.80)",
									fontSize: "1rem",
									fontWeight: "medium",
									fontStyle: "normal",
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
						</li>
						<li
							ref={addNavLink}
							className={`nav-item ms-3  ${navModalActive && modalState === "resources" ? "active" : ""}`}
							onClick={() => {
								setNavModalActive((prev) => !prev || modalState !== "resources");
								setModalState("resources");
							}}
						>
							<span
								className="nav-link"
								style={{
									cursor: "pointer",
									fontFamily: "raleway",
									color: " rgba(0, 0, 0, 0.80)",
									fontSize: "1rem",
									fontWeight: "medium",
									fontStyle: "normal",
								}}
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
						</li>
						<li
							ref={addNavLink}
							className={`nav-item ms-3  ${navModalActive && modalState === "career" ? "active" : ""}`}
							onClick={() => {
								setNavModalActive((prev) => !prev || modalState !== "career");
								setModalState("career");
							}}
						>
							<span
								className="nav-link"
								style={{
									cursor: "pointer",
									fontFamily: "raleway",
									color: " rgba(0, 0, 0, 0.80)",
									fontSize: "1rem",
									fontWeight: "medium",
									fontStyle: "normal",
								}}
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
						</li>
					</ul>
				</div>
				<NavLink
					className="nav-link"
					aria-current="page"
					to="/"
					style={{
						fontFamily: "Raleway",
						fontSize: "1.5rem",
						fontStyle: "normal",
						// position: "absolute",
						// left: "50%",
						// marginLeft: "16rem",
						fontWeight: "700",
					}}
				>
					Logo
				</NavLink>
				<div
					style={{
						display: "inline-block",
						width: "fit-content",
					}}
				>
					<Contact />
					<Signup />
				</div>
				{/* <Login /> */}
			</div>

			{/* Courses dropdown */}
			<NavModal navModalActive={navModalActive} modalState={modalState} setNavModalActive={setNavModalActive} getNavLinks={getNavLinks} />
		</div>
	);
};

export default Header;
