import { useState } from "react";
import { NavLink } from "react-router-dom";
import SignupBtn from "./Buttons/Signup";
import "./Header.css";
import "./home/LandingPage.css";
import Contact from "./Buttons/Contact";
import NavModal from "./NavModal";
import useMultiRefs from "../utility/useMultiRefs";
import {useUser} from "../contexts/UserProvider";

const Header = () => {
	const [user , setUser] = useUser();
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
					className="header"
					style={{ backgroundColor: "#fff", margin: "auto", minHeight: "6.66vw", display: "flex" , width:"93%"}}
				>
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
					</label>
  
    <nav className="menu1" style={{zIndex:"10" , position:"absolute" , top:"6.5vw" , maxWidth:"100%" , marginLeft:"-1.5rem" , marginTop:"0" , background:"#fff"}}>
    <a href="/about" style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#B46BD1"}} onClick={()=> document.getElementById("toggleAccordion").checked = false}>About us</a>
                <a href="/courses/1" style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#B46BD1"}} onClick={()=> document.getElementById("toggleAccordion").checked = false}>Courses</a>
                <a href="/resource" style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#B46BD1"}} onClick={()=> document.getElementById("toggleAccordion").checked = false}>Resources</a>
                <a href="/" style={{textDecoration:"none" , border:"none" , background:"transparent" , color:"#B46BD1" , marginBottom:"0"}} onClick={()=> document.getElementById("toggleAccordion").checked = false}>Career</a>
    </nav>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
						style={{
							// position: "absolute",
							display: "flex",
							justifyContent: "space-between",
							// width: "93%",
							// margin:"0 2rem",
						}}
					>
						<ul
							className="navbar-nav"
							style={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<li className="nav-item me-3 dropdown">
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
											fontSize: "clamp(0.8rem , 1.1vw , 1.25rem)",
											fontWeight: "medium",
											fontStyle: "normal",
											textAlign: "center",
										}}
									>
										About
										<span
										src=""
										alt="arrow"
										style={{
											maxWidth: "2.22vw",
											background: "transparent",
										}}
									></span>
									</span>
								</NavLink>
							</li>
							<li
								ref={addNavLink}
								className={`nav-item ${
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
										fontSize: "clamp(0.8rem , 1.1vw , 1.25rem)",
										fontWeight: "medium",
										fontStyle: "normal",
									}}
								>
									Courses
									<img
										src="/assets/down-arrow.png"
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
								className={`nav-item ${
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
										fontSize: "clamp(0.8rem , 1.1vw , 1.25rem)",
										fontWeight: "medium",
										fontStyle: "normal",
									}}
								>
									Resources
									<img
										src="/assets/down-arrow.png"
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
								className={`nav-item ${navModalActive && modalState === "career" ? "active" : ""}`}
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
										fontSize: "clamp(0.8rem , 1.1vw , 1.25rem)",
										fontWeight: "medium",
										fontStyle: "normal",
									}}
								>
									Career
									<img
										src="/assets/down-arrow.png"
										alt="arrow"
										style={{
											maxWidth: "2.22vw",
											background: "transparent",
										}}
									></img>
								</span>
							</li>
						</ul>
						<a
							className="nav-link"
							aria-current="page"
							href="/"
						>
							<div
								className="navbar-logo"
								style={{
									fontFamily: "Raleway",
									fontStyle: "normal",
									fontWeight: "700",
									maxHeight:"80%",
									aspectRatio:"11/3.5",
									objectFit:"cover",
									// marginRight:"1rem",
									width:"100%",
									paddingRight:"3rem"
								}}
							>
								<img src="/assets/logo_dxolve.svg" style={{
									width:"100%" , 
								height:"100%"
								}}/>
							</div>
						</a>
						<div
							style={{
								display: "flex",
								width: "fit-content",
								justifyContent:"space-around",
								gap:"0.5rem",
								// marginRight:"1rem",
							}}
						>
							<Contact />
							{user && user? (
								<NavLink to={"/panel"}>
									<div style={{width:"clamp(50px , 1vw , 60px)" , aspectRatio:"1/1" , backgroundImage:`url(${"/assets/emp1.jpg"})`, backgroundPosition:"center" , backgroundSize:"cover" , backgroundRepeat:"no-repeat" , borderRadius:"50%"}}></div>
								</NavLink>
							) : (
							<SignupBtn />)}
						</div>
					</div>
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
