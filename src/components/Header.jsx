import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Buttons/Login";
import SignupBtn from "./Buttons/Signup";
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
		<>
			<div
				className="navbar navbar-expand-lg"
				style={{ padding: "0", maxWidth: "100vw", boxShadow: "0 0.069vw 0.555vw 0 rgba(0, 0, 0, 0.25)" }}
			>
				<div
					className="container-fluid header py-2"
					style={{ backgroundColor: "#fff", margin: "0", minHeight: "6.66vw", display: "flex"}}
				>
					<button style={{border:"none"}}
						className="navbar-toggler"
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
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
						style={{
							position: "absolute",
							left: "0",
							display: "flex",
							justifyContent: "space-between",
							minWidth: "100vw",
						}}
					>
						<ul
							className="navbar-nav"
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginLeft: "2.22vw",
							}}
						>
							<li className="nav-item ms-3 dropdown">
								<NavLink
									to="/about"
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
											fontSize: "1.11vw",
											fontWeight: "medium",
											fontStyle: "normal",
											textAlign: "center",
											marginRight: "0.66vw",
										}}
									>
										About
									</span>
								</NavLink>
							</li>
							<li
								ref={addNavLink}
								className={`nav-item ms-3 ${
									navModalActive && modalState === "courses" ? "active" : ""
								}`}
								onClick={() => {
									setNavModalActive((prev) => modalState !== "courses" || !prev);
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
										fontSize: "1.11vw",
										fontWeight: "medium",
										fontStyle: "normal",
									}}
								>
									Courses
									<img
										src="assets/down-arrow.png"
										alt="arrow"
										style={{
											maxWidth: "2.22vw",
											background: "transparent",
										}}
									></img>
								</span>
							</li>
							<li
								ref={addNavLink}
								className={`nav-item ms-3 ${
									navModalActive && modalState === "resources" ? "active" : ""
								}`}
								onClick={() => {
									setNavModalActive((prev) => modalState !== "resources" || !prev);
									setModalState("resources");
								}}
							>
								<span
									className="nav-link"
									style={{
										cursor: "pointer",
										fontFamily: "raleway",
										color: " rgba(0, 0, 0, 0.80)",
										fontSize: "1.11vw",
										fontWeight: "medium",
										fontStyle: "normal",
									}}
								>
									Resources
									<img
										src="assets/down-arrow.png"
										alt="arrow"
										style={{
											maxWidth: "2.22vw",
											background: "transparent",
										}}
									></img>
								</span>
							</li>
							<li
								ref={addNavLink}
								className={`nav-item ms-3 ${navModalActive && modalState === "career" ? "active" : ""}`}
								onClick={() => {
									setNavModalActive((prev) => modalState !== "career" || !prev);
									setModalState("career");
								}}
							>
								<span
									className="nav-link"
									style={{
										cursor: "pointer",
										fontFamily: "raleway",
										color: " rgba(0, 0, 0, 0.80)",
										fontSize: "1.11vw",
										fontWeight: "medium",
										fontStyle: "normal",
									}}
								>
									Career
									<img
										src="assets/down-arrow.png"
										alt="arrow"
										style={{
											maxWidth: "2.22vw",
											background: "transparent",
										}}
									></img>
								</span>
							</li>
						</ul>
						<NavLink
							className="nav-link"
							aria-current="page"
							to="/"
						>
							<span
								className="navbar-logo"
								style={{
									fontFamily: "Raleway",
									// fontSize: "1.66vw",
									fontStyle: "normal",
									fontWeight: "700",
									marginLeft:"2rem",
								}}
							>
								<img src="/assets/logo.svg" />
							</span>
						</NavLink>
						<div
							style={{
								display: "flex",
								width: "fit-content",
								justifyContent:"space-between",
								gap:"0.7rem",
								marginLeft:"0",
							}}
						>
							<Contact />
							<SignupBtn />
						</div>
					</div>
					{/* <Login /> */}
				</div>

				{/* Courses dropdown */}
				<NavModal
					navModalActive={navModalActive}
					modalState={modalState}
					setNavModalActive={setNavModalActive}
					getNavLinks={getNavLinks}
				/>
			</div>
		</>
	);
};

export default Header;
