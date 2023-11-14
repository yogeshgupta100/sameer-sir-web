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
			<div className="navbar navbar-expand-lg" style={{ padding: "0", width: "100%" , boxShadow:"0px 1px 8px 0px rgba(0, 0, 0, 0.25)"}}>
				<div className="container-fluid py-2" style={{ backgroundColor: "#fff", margin: "0", height: "6rem" , display:"flex"}}>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarExternalContent"
						aria-controls="navbarExternalContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
						style={{
							position: "absolute",
							left: "0",
							display: "flex",
							justifyContent: "space-between",
							width:"100%"
						}}
					>
						<ul
							className="navbar-nav"
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginLeft: "2rem",
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
											fontSize: "1rem",
											fontWeight: "medium",
											fontStyle: "normal",
											textAlign: "center",
											marginRight:"0.6rem"
										}}
									>
										About
									</span>
								</NavLink>
							</li>
							<li
								className={`nav-item ms-3 ${navModalActive ? "active" : ""}`}
								// onMouseEnter={handleCoursesHover}
								// onMouseLeave={handleNavLeave}
								onClick={() => setNavModalActive((prev) => !prev)}
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
								onClick={() => setNavModalActive((prev) => !prev)}
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
								onClick={() => setNavModalActive((prev) => !prev)}
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
									fontStyle: "normal",
									fontWeight: "700",
								}}
							>
								<span className="navbar-logo" style={{
            width:"4rem",
            height:"4rem",
            fill: "linear-gradient(93deg, #480CA8 1.27%, #560BAD 21.05%, #A615A1 45.58%, #8A1879 68.37%, #88199B 108.02%)"
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="137" height="37" viewBox="0 0 137 37" fill="none">
  <path d="M0 1.4505H9.42826C13.0718 1.4505 16.0764 2.18439 18.4421 3.65216C20.8251 5.10266 22.6037 7.11437 23.7779 9.68728C24.9521 12.2602 25.5392 15.2044 25.5392 18.5198C25.5392 21.8525 24.9521 24.8053 23.7779 27.3782C22.6037 29.9511 20.8251 31.9715 18.4421 33.4393C16.0764 34.907 13.0718 35.6409 9.42826 35.6409H0V1.4505ZM6.42365 7.22661V29.8648H8.85842C11.086 29.8648 12.9164 29.3813 14.3496 28.4143C15.8001 27.43 16.8794 26.0831 17.5873 24.3736C18.3126 22.6641 18.6752 20.7301 18.6752 18.5716C18.6925 16.3959 18.3471 14.4532 17.6391 12.7437C16.9312 11.0342 15.8433 9.68728 14.3755 8.70301C12.925 7.71874 11.086 7.22661 8.85842 7.22661H6.42365Z" fill="url(#paint0_linear_741_3244)"/>
  <path d="M43.6118 24.2959L52.7033 35.6409H45.3472L39.6229 28.3625L33.9245 35.6409H27.0346L36.1262 24.7621L27.9671 14.3755H35.375L40.0114 20.566L44.8292 14.3755H51.5896L43.6118 24.2959Z" fill="url(#paint1_linear_741_3244)"/>
  <path d="M65.1528 36.2626C62.8907 36.2626 60.8704 35.7791 59.0918 34.8121C57.3305 33.8451 55.949 32.5241 54.9475 30.8491C53.9459 29.1568 53.4452 27.2315 53.4452 25.073C53.4452 22.9145 53.9459 20.9891 54.9475 19.2969C55.949 17.5873 57.3305 16.2404 59.0918 15.2562C60.8704 14.2546 62.8907 13.7539 65.1528 13.7539C67.4322 13.7539 69.4439 14.2546 71.1879 15.2562C72.932 16.2404 74.2961 17.5873 75.2804 19.2969C76.2647 20.9891 76.7568 22.9145 76.7568 25.073C76.7568 27.2315 76.2647 29.1568 75.2804 30.8491C74.2961 32.5241 72.932 33.8451 71.1879 34.8121C69.4439 35.7791 67.4322 36.2626 65.1528 36.2626ZM65.1528 30.7973C66.2407 30.7973 67.1818 30.5555 67.9761 30.072C68.7877 29.5712 69.4093 28.8892 69.841 28.0258C70.29 27.1451 70.5145 26.1522 70.5145 25.0471C70.5145 23.9419 70.29 22.949 69.841 22.0684C69.4093 21.1877 68.7877 20.497 67.9761 19.9962C67.1818 19.4782 66.2407 19.2192 65.1528 19.2192C64.0649 19.2192 63.1152 19.4782 62.3036 19.9962C61.5093 20.497 60.8876 21.1877 60.4387 22.0684C59.9897 22.949 59.7652 23.9419 59.7652 25.0471C59.7652 26.1522 59.9897 27.1451 60.4387 28.0258C60.8876 28.8892 61.5093 29.5712 62.3036 30.072C63.1152 30.5555 64.0649 30.7973 65.1528 30.7973Z" fill="url(#paint2_linear_741_3244)"/>
  <path d="M86.2753 35.6409H79.6704V0H86.2753V35.6409Z" fill="url(#paint3_linear_741_3244)"/>
  <path d="M88.3127 14.3755H95.358L101.186 29.6317L107.014 14.3755H114.033L105.045 35.6409H97.3265L88.3127 14.3755Z" fill="url(#paint4_linear_741_3244)"/>
  <path d="M120.967 26.4717C121.019 27.4387 121.278 28.3021 121.744 29.0618C122.21 29.8216 122.884 30.4174 123.764 30.8491C124.662 31.2808 125.733 31.4966 126.976 31.4966C128.098 31.4966 129.083 31.3585 129.929 31.0822C130.792 30.8059 131.517 30.4692 132.105 30.072C132.709 29.6576 133.158 29.2604 133.451 28.8805L136.171 32.9212C135.688 33.5256 135.04 34.0868 134.229 34.6048C133.434 35.1056 132.415 35.5028 131.172 35.7963C129.946 36.1071 128.409 36.2626 126.562 36.2626C124.23 36.2626 122.184 35.805 120.423 34.8898C118.662 33.9746 117.289 32.6536 116.304 30.9268C115.32 29.2 114.828 27.1451 114.828 24.7621C114.828 22.69 115.268 20.8251 116.149 19.1673C117.03 17.4924 118.308 16.1714 119.983 15.2044C121.675 14.2374 123.704 13.7539 126.069 13.7539C128.297 13.7539 130.222 14.1856 131.846 15.049C133.486 15.8951 134.755 17.1384 135.653 18.7788C136.551 20.4193 137 22.4223 137 24.788C137 24.9262 136.991 25.2111 136.974 25.6428C136.974 26.0572 136.957 26.3335 136.922 26.4717H120.967ZM130.835 22.4051C130.818 21.8525 130.645 21.2568 130.317 20.6179C130.007 19.9789 129.514 19.435 128.841 18.986C128.167 18.5371 127.27 18.3126 126.147 18.3126C125.025 18.3126 124.101 18.5284 123.376 18.9601C122.668 19.3918 122.132 19.9271 121.77 20.566C121.407 21.1877 121.2 21.8007 121.148 22.4051H130.835Z" fill="url(#paint5_linear_741_3244)"/>
  <defs>
    <linearGradient id="paint0_linear_741_3244" x1="-43.3046" y1="4.04715" x2="147.317" y2="42.4952" gradientUnits="userSpaceOnUse">
      <stop offset="0.2234" stopColor="#480CA8"/>
      <stop offset="0.367316" stopColor="#560BAD"/>
      <stop offset="0.545799" stopColor="#A615A1"/>
      <stop offset="0.711532" stopColor="#8A1879"/>
      <stop offset="1" stopColor="#88199B"/>
    </linearGradient>
    <linearGradient id="paint1_linear_741_3244" x1="-43.3046" y1="4.04715" x2="147.317" y2="42.4952" gradientUnits="userSpaceOnUse">
      <stop offset="0.2234" stopColor="#480CA8"/>
      <stop offset="0.367316" stopColor="#560BAD"/>
      <stop offset="0.545799" stopColor="#A615A1"/>
      <stop offset="0.711532" stopColor="#8A1879"/>
      <stop offset="1" stopColor="#88199B"/>
    </linearGradient>
    <linearGradient id="paint2_linear_741_3244" x1="-43.3046" y1="4.04715" x2="147.317" y2="42.4952" gradientUnits="userSpaceOnUse">
      <stop offset="0.2234" stopColor="#480CA8"/>
      <stop offset="0.367316" stopColor="#560BAD"/>
      <stop offset="0.545799" stopColor="#A615A1"/>
      <stop offset="0.711532" stopColor="#8A1879"/>
      <stop offset="1" stopColor="#88199B"/>
    </linearGradient>
    <linearGradient id="paint3_linear_741_3244" x1="-43.3046" y1="4.04715" x2="147.317" y2="42.4952" gradientUnits="userSpaceOnUse">
      <stop offset="0.2234" stopColor="#480CA8"/>
      <stop offset="0.367316" stopColor="#560BAD"/>
      <stop offset="0.545799" stopColor="#A615A1"/>
      <stop offset="0.711532" stopColor="#8A1879"/>
      <stop offset="1" stopColor="#88199B"/>
    </linearGradient>
    <linearGradient id="paint4_linear_741_3244" x1="-43.3046" y1="4.04715" x2="147.317" y2="42.4952" gradientUnits="userSpaceOnUse">
      <stop offset="0.2234" stopColor="#480CA8"/>
      <stop offset="0.367316" stopColor="#560BAD"/>
      <stop offset="0.545799" stopColor="#A615A1"/>
      <stop offset="0.711532" stopColor="#8A1879"/>
      <stop offset="1" stopColor="#88199B"/>
    </linearGradient>
    <linearGradient id="paint5_linear_741_3244" x1="-43.3046" y1="4.04715" x2="147.317" y2="42.4952" gradientUnits="userSpaceOnUse">
      <stop offset="0.2234" stopColor="#480CA8"/>
      <stop offset="0.367316" stopColor="#560BAD"/>
      <stop offset="0.545799" stopColor="#A615A1"/>
      <stop offset="0.711532" stopColor="#8A1879"/>
      <stop offset="1" stopColor="#88199B"/>
    </linearGradient>
  </defs>
</svg>
</span>
							</NavLink>
					<div	
						style={{
							display: "inline-block",
							width: "fit-content",
						}}
					>
						<Contact />
						<SignupBtn />
					</div>
					</div>
					{/* <Login /> */}
				</div>

			{/* Courses dropdown */}
			<NavModal navModalActive={navModalActive} modalState={modalState} setNavModalActive={setNavModalActive} getNavLinks={getNavLinks} />
		</div>
		</>
	);
};

export default Header;
