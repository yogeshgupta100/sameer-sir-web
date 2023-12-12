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
					className="container-fluid py-2"
					style={{ backgroundColor: "#fff", margin: "0", minHeight: "6.66vw", display: "flex" }}
				>
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
							minWidth: "100%",
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
								// onMouseEnter={handleCoursesHover}
								// onMouseLeave={handleNavLeave}
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
								ref={addNavLink}
								className={`nav-item ms-3 ${
									navModalActive && modalState === "resources" ? "active" : ""
								}`}
								// onMouseEnter={handleResourcesHover}
								// onMouseLeave={handleNavLeave}
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
								ref={addNavLink}
								className={`nav-item ms-3 ${navModalActive && modalState === "career" ? "active" : ""}`}
								// onMouseEnter={handlePartnersHover}
								// onMouseLeave={handleNavLeave}
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
								fontSize: "1.66vw",
								fontStyle: "normal",
								fontWeight: "700",
							}}
						>
							<span
								className="navbar-logo"
								style={{
									maxWidth: "4.44vw",
									minHeight: "4.44vw",	
									fill: "linear-gradient(93deg, #480CA8 1.27%, #560BAD 21.05%, #A615A1 45.58%, #8A1879 68.37%, #88199B 108.02%)",
								}}
							>
								{/* <svg
									xmlns="http://www.w3.org/2000/svg"
									width="137"
									height="37"
									viewBox="0 0 137 37"
									fill="none"
								>
									<path
										d="M0 1.4505H9.42826C13.0718 1.4505 16.0764 2.18439 18.4421 3.65216C20.8251 5.10266 22.6037 7.11437 23.7779 9.68728C24.9521 12.2602 25.5392 15.2044 25.5392 18.5198C25.5392 21.8525 24.9521 24.8053 23.7779 27.3782C22.6037 29.9511 20.8251 31.9715 18.4421 33.4393C16.0764 34.907 13.0718 35.6409 9.42826 35.6409H0V1.4505ZM6.42365 7.22661V29.8648H8.85842C11.086 29.8648 12.9164 29.3813 14.3496 28.4143C15.8001 27.43 16.8794 26.0831 17.5873 24.3736C18.3126 22.6641 18.6752 20.7301 18.6752 18.5716C18.6925 16.3959 18.3471 14.4532 17.6391 12.7437C16.9312 11.0342 15.8433 9.68728 14.3755 8.70301C12.925 7.71874 11.086 7.22661 8.85842 7.22661H6.42365Z"
										fill="url(#paint0_linear_741_3244)"
									/>
									<path
										d="M43.6118 24.2959L52.7033 35.6409H45.3472L39.6229 28.3625L33.9245 35.6409H27.0346L36.1262 24.7621L27.9671 14.3755H35.375L40.0114 20.566L44.8292 14.3755H51.5896L43.6118 24.2959Z"
										fill="url(#paint1_linear_741_3244)"
									/>
									<path
										d="M65.1528 36.2626C62.8907 36.2626 60.8704 35.7791 59.0918 34.8121C57.3305 33.8451 55.949 32.5241 54.9475 30.8491C53.9459 29.1568 53.4452 27.2315 53.4452 25.073C53.4452 22.9145 53.9459 20.9891 54.9475 19.2969C55.949 17.5873 57.3305 16.2404 59.0918 15.2562C60.8704 14.2546 62.8907 13.7539 65.1528 13.7539C67.4322 13.7539 69.4439 14.2546 71.1879 15.2562C72.932 16.2404 74.2961 17.5873 75.2804 19.2969C76.2647 20.9891 76.7568 22.9145 76.7568 25.073C76.7568 27.2315 76.2647 29.1568 75.2804 30.8491C74.2961 32.5241 72.932 33.8451 71.1879 34.8121C69.4439 35.7791 67.4322 36.2626 65.1528 36.2626ZM65.1528 30.7973C66.2407 30.7973 67.1818 30.5555 67.9761 30.072C68.7877 29.5712 69.4093 28.8892 69.841 28.0258C70.29 27.1451 70.5145 26.1522 70.5145 25.0471C70.5145 23.9419 70.29 22.949 69.841 22.0684C69.4093 21.1877 68.7877 20.497 67.9761 19.9962C67.1818 19.4782 66.2407 19.2192 65.1528 19.2192C64.0649 19.2192 63.1152 19.4782 62.3036 19.9962C61.5093 20.497 60.8876 21.1877 60.4387 22.0684C59.9897 22.949 59.7652 23.9419 59.7652 25.0471C59.7652 26.1522 59.9897 27.1451 60.4387 28.0258C60.8876 28.8892 61.5093 29.5712 62.3036 30.072C63.1152 30.5555 64.0649 30.7973 65.1528 30.7973Z"
										fill="url(#paint2_linear_741_3244)"
									/>
									<path
										d="M86.2753 35.6409H79.6704V0H86.2753V35.6409Z"
										fill="url(#paint3_linear_741_3244)"
									/>
									<path
										d="M88.3127 14.3755H95.358L101.186 29.6317L107.014 14.3755H114.033L105.045 35.6409H97.3265L88.3127 14.3755Z"
										fill="url(#paint4_linear_741_3244)"
									/>
									<path
										d="M120.967 26.4717C121.019 27.4387 121.278 28.3021 121.744 29.0618C122.21 29.8216 122.884 30.4174 123.764 30.8491C124.662 31.2808 125.733 31.4966 126.976 31.4966C128.098 31.4966 129.083 31.3585 129.929 31.0822C130.792 30.8059 131.517 30.4692 132.105 30.072C132.709 29.6576 133.158 29.2604 133.451 28.8805L136.171 32.9212C135.688 33.5256 135.04 34.0868 134.229 34.6048C133.434 35.1056 132.415 35.5028 131.172 35.7963C129.946 36.1071 128.409 36.2626 126.562 36.2626C124.23 36.2626 122.184 35.805 120.423 34.8898C118.662 33.9746 117.289 32.6536 116.304 30.9268C115.32 29.2 114.828 27.1451 114.828 24.7621C114.828 22.69 115.268 20.8251 116.149 19.1673C117.03 17.4924 118.308 16.1714 119.983 15.2044C121.675 14.2374 123.704 13.7539 126.069 13.7539C128.297 13.7539 130.222 14.1856 131.846 15.049C133.486 15.8951 134.755 17.1384 135.653 18.7788C136.551 20.4193 137 22.4223 137 24.788C137 24.9262 136.991 25.2111 136.974 25.6428C136.974 26.0572 136.957 26.3335 136.922 26.4717H120.967ZM130.835 22.4051C130.818 21.8525 130.645 21.2568 130.317 20.6179C130.007 19.9789 129.514 19.435 128.841 18.986C128.167 18.5371 127.27 18.3126 126.147 18.3126C125.025 18.3126 124.101 18.5284 123.376 18.9601C122.668 19.3918 122.132 19.9271 121.77 20.566C121.407 21.1877 121.2 21.8007 121.148 22.4051H130.835Z"
										fill="url(#paint5_linear_741_3244)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_741_3244"
											x1="-43.3046"
											y1="4.04715"
											x2="147.317"
											y2="42.4952"
											gradientUnits="userSpaceOnUse"
										>
											<stop offset="0.2234" stopColor="#480CA8" />
											<stop offset="0.367316" stopColor="#560BAD" />
											<stop offset="0.545799" stopColor="#A615A1" />
											<stop offset="0.711532" stopColor="#8A1879" />
											<stop offset="1" stopColor="#88199B" />
										</linearGradient>
										<linearGradient
											id="paint1_linear_741_3244"
											x1="-43.3046"
											y1="4.04715"
											x2="147.317"
											y2="42.4952"
											gradientUnits="userSpaceOnUse"
										>
											<stop offset="0.2234" stopColor="#480CA8" />
											<stop offset="0.367316" stopColor="#560BAD" />
											<stop offset="0.545799" stopColor="#A615A1" />
											<stop offset="0.711532" stopColor="#8A1879" />
											<stop offset="1" stopColor="#88199B" />
										</linearGradient>
										<linearGradient
											id="paint2_linear_741_3244"
											x1="-43.3046"
											y1="4.04715"
											x2="147.317"
											y2="42.4952"
											gradientUnits="userSpaceOnUse"
										>
											<stop offset="0.2234" stopColor="#480CA8" />
											<stop offset="0.367316" stopColor="#560BAD" />
											<stop offset="0.545799" stopColor="#A615A1" />
											<stop offset="0.711532" stopColor="#8A1879" />
											<stop offset="1" stopColor="#88199B" />
										</linearGradient>
										<linearGradient
											id="paint3_linear_741_3244"
											x1="-43.3046"
											y1="4.04715"
											x2="147.317"
											y2="42.4952"
											gradientUnits="userSpaceOnUse"
										>
											<stop offset="0.2234" stopColor="#480CA8" />
											<stop offset="0.367316" stopColor="#560BAD" />
											<stop offset="0.545799" stopColor="#A615A1" />
											<stop offset="0.711532" stopColor="#8A1879" />
											<stop offset="1" stopColor="#88199B" />
										</linearGradient>
										<linearGradient
											id="paint4_linear_741_3244"
											x1="-43.3046"
											y1="4.04715"
											x2="147.317"
											y2="42.4952"
											gradientUnits="userSpaceOnUse"
										>
											<stop offset="0.2234" stopColor="#480CA8" />
											<stop offset="0.367316" stopColor="#560BAD" />
											<stop offset="0.545799" stopColor="#A615A1" />
											<stop offset="0.711532" stopColor="#8A1879" />
											<stop offset="1" stopColor="#88199B" />
										</linearGradient>
										<linearGradient
											id="paint5_linear_741_3244"
											x1="-43.3046"
											y1="4.04715"
											x2="147.317"
											y2="42.4952"
											gradientUnits="userSpaceOnUse"
										>
											<stop offset="0.2234" stopColor="#480CA8" />
											<stop offset="0.367316" stopColor="#560BAD" />
											<stop offset="0.545799" stopColor="#A615A1" />
											<stop offset="0.711532" stopColor="#8A1879" />
											<stop offset="1" stopColor="#88199B" />
										</linearGradient>
									</defs>
								</svg> */}
								<svg xmlns="http://www.w3.org/2000/svg" width="12vw" height="49" viewBox="0 0 188 49" fill="none">
<path d="M70.1071 43.9257H58.6719L61.9468 48.2114H73.5149L70.1071 43.9257Z" fill="#5B0A93"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5606 2.74288H0.949219V48H14.5606C19.3835 48 23.3721 47.0286 26.5264 45.0857C29.7035 43.1429 32.0806 40.4686 33.6578 37.0629C35.2349 33.6572 36.0235 29.7486 36.0235 25.3372C36.0235 20.9486 35.2349 17.0514 33.6578 13.6457C32.0806 10.24 29.7035 7.57716 26.5264 5.65716C23.3721 3.7143 19.3835 2.74288 14.5606 2.74288ZM11.1664 38.9143V11.8286H13.6349C16.2178 11.8286 18.3664 12.4229 20.0806 13.6114C21.7949 14.8 23.0635 16.4229 23.8864 18.48C24.7321 20.5143 25.1549 22.8229 25.1549 25.4057C25.1549 27.9657 24.7206 30.2743 23.8521 32.3314C23.0064 34.3657 21.7378 35.9772 20.0464 37.1657C18.3549 38.3314 16.2178 38.9143 13.6349 38.9143H11.1664ZM81.3514 46.9372C83.7514 48.1943 86.4942 48.8229 89.5799 48.8229C92.6656 48.8229 95.3856 48.1943 97.7399 46.9372C100.094 45.6572 101.934 43.9086 103.26 41.6914C104.586 39.4514 105.248 36.8914 105.248 34.0114C105.248 31.1314 104.586 28.5714 103.26 26.3314C101.934 24.0686 100.094 22.2857 97.7399 20.9829C95.3856 19.68 92.6656 19.0286 89.5799 19.0286C86.4942 19.0286 83.7514 19.68 81.3514 20.9829C78.9742 22.2857 77.0999 24.0686 75.7285 26.3314C74.3799 28.5714 73.7056 31.1314 73.7056 34.0114C73.7056 36.8914 74.3799 39.4514 75.7285 41.6914C77.0999 43.9086 78.9742 45.6572 81.3514 46.9372ZM92.6656 39.4629C91.7971 39.9886 90.7685 40.2514 89.5799 40.2514C88.3914 40.2514 87.3514 39.9886 86.4599 39.4629C85.5914 38.9372 84.9056 38.1943 84.4028 37.2343C83.9228 36.2743 83.6828 35.1886 83.6828 33.9772C83.6828 32.7429 83.9228 31.6457 84.4028 30.6857C84.9056 29.7257 85.5914 28.9714 86.4599 28.4229C87.3514 27.8743 88.3914 27.6 89.5799 27.6C90.7685 27.6 91.7971 27.8743 92.6656 28.4229C93.5342 28.9714 94.2085 29.7257 94.6885 30.6857C95.1685 31.6457 95.4085 32.7429 95.4085 33.9772C95.4085 35.1886 95.1685 36.2743 94.6885 37.2343C94.2085 38.1943 93.5342 38.9372 92.6656 39.4629ZM108.581 48H119.038V0.822876H108.581V48ZM132.307 19.8514H121.164L132.993 48H145.198L156.993 19.8514H145.918L139.095 38.5372L132.307 19.8514ZM168.401 38.8114C167.83 38.0343 167.51 37.1429 167.441 36.1372H187.807C187.853 35.9543 187.875 35.5886 187.875 35.04C187.898 34.4914 187.91 34.1257 187.91 33.9429C187.91 30.6514 187.293 27.9086 186.058 25.7143C184.847 23.4972 183.11 21.8286 180.847 20.7086C178.607 19.5886 175.955 19.0286 172.893 19.0286C169.67 19.0286 166.915 19.68 164.63 20.9829C162.344 22.2629 160.595 24.0114 159.384 26.2286C158.195 28.4229 157.601 30.8914 157.601 33.6343C157.601 36.9029 158.298 39.6686 159.693 41.9314C161.087 44.1943 162.995 45.9086 165.418 47.0743C167.841 48.24 170.607 48.8229 173.715 48.8229C176.298 48.8229 178.435 48.64 180.127 48.2743C181.818 47.9086 183.178 47.44 184.207 46.8686C185.258 46.2743 186.07 45.6686 186.641 45.0514L182.595 38.6057C182.161 39.04 181.544 39.4629 180.744 39.8743C179.967 40.2857 179.041 40.6286 177.967 40.9029C176.915 41.1772 175.727 41.3143 174.401 41.3143C173.007 41.3143 171.795 41.0972 170.767 40.6629C169.761 40.2057 168.973 39.5886 168.401 38.8114ZM177.521 28.5257C177.887 29.2343 178.081 29.9543 178.104 30.6857H167.681C167.727 29.8857 167.955 29.1314 168.367 28.4229C168.778 27.7143 169.373 27.1429 170.15 26.7086C170.95 26.2514 171.921 26.0229 173.064 26.0229C174.207 26.0229 175.144 26.2629 175.875 26.7429C176.607 27.2 177.155 27.7943 177.521 28.5257ZM67.4259 40.7099L61.2294 32.88L71.6523 19.8514H61.0923L55.6408 27.0857L50.4294 19.8514H38.7723L49.5037 33.7029L37.5723 48H48.338L54.9894 39.3257L56.0508 40.7099H67.4259ZM69.9696 43.9242H58.5155L61.6408 48H73.1951L69.9696 43.9242Z" fill="#5B0A93"/>
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
