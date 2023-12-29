import { useRef, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link, NavLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Subscribe = () => {
	const [courses, setCourses] = useState([]);
	const inputRef = useRef(null);
	const componentDidMount = () =>{
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/courses?populate=*`);
			const data = await res.json();
			console.log(data.data);
			setCourses(data.data);
		})();
	}, []);

	function subscribe() {
		const email = inputRef.current.value;
		fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/subscribers`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ data: { email } }),
		});
	}

	return (
		<>
			<div className="Subscribe-main">
				<span className="subscribe-logo" style={{width:"20%"}}>
					<img src="/assets/logo_white.png" style={{width:"100%" , aspectRatio:"3/1"}}/>
				</span>
				<span className="subscribe-content">
					<p>Subscribe to our news letter</p>
					<div className="subscribe">
						<div
							className="email"
							style={{
								display: "flex",
								alignItems: "center",
								border: "none",
							}}
						>
							<input
								className="input-email"
								type="email"
								style={{
									width: "100%",
									border: "none",
									height: "100%",
									padding: "0 2.22vw",
									fontSize: "2vw",
									color: "#B86CD2",
									fontWeight: "600",
									alignSelf: "center",
								}}
								placeholder="Enter your Email Address"
								ref={inputRef}
							/>
						</div>
						<button
							type="button"
							onClick={subscribe}
							style={{
								borderRadius: "0 0.69vw 0.69vw 0",
								width: "35%",
								padding: "0",
								margin: "0",
								textDecoration: "none",
								border: "none",
							}}
						>
							Submit
						</button>
					</div>
				</span>
			</div>

			<footer
				style={{
					display: "flex",
					padding: "6vw 0 0 6vw",
					justifyContent: "space-between",
				}}
			>
				<div
					className="footer-main"
					style={{
						display: "flex",
						justifyContent: "space-between",
						gap: "4vw",
						marginBottom: "5vw",
					}}
				>
					<div
						className="left-container"
						style={{
							width: "40%",
							borderRight: "1px solid #797979",
							paddingRight: "4vw",
							height: "fit-content",
						}}
					>
						<h2 style={{ marginBottom: "15px", fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}>crafting visions</h2>
						<p style={{color:"#000"}}>
						Make us a part of your design journey and elevate your career!
						</p>
						<div
							style={{
								display: "flex",
								gap: "15px",
								marginTop: "40px",
							}}
						>
							<NavLink to={"https://www.instagram.com/dxolve_official?igsh=OGQ5ZDc2ODk2ZA=="}>
							<span style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								fontSize: "1.2rem",
								background: "#B86CD2",
								color: "white",
								borderRadius: "50%",
								height: "30px",
								width: "30px",
								cursor: "pointer"
							}}>
								<AiFillInstagram />
							</span>
							</NavLink>
							<NavLink to={"https://youtube.com/@dxolve_official?si=C4s_wlnZZJdeNqHe"}>
							<span style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								fontSize: "1.2rem",
								background: "#B86CD2",
								color: "white",
								borderRadius: "50%",
								height: "30px",
								width: "30px",
								cursor: "pointer"
							}}>
								<FaYoutube />
							</span>
							</NavLink>
							<NavLink to={""}>
							<span style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								fontSize: "1rem",
								background: "#B86CD2",
								color: "white",
								borderRadius: "50%",
								height: "30px",
								width: "30px",
								cursor: "pointer"
							}}>
								<FaLinkedinIn />
							</span>
							</NavLink>
							<NavLink  to={""}>
							<span style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								fontSize: "1rem",
								background: "#B86CD2",
								color: "white",
								borderRadius: "50%",
								height: "30px",
								width: "30px",
								cursor: "pointer"
							}}>
								<FaFacebookF />
							</span>
							</NavLink>
						</div>
					</div>

					<div
						className="right-container"
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "60%",
							gap: "4vw",
						}}
					>
						<div>
							<h5 style={{ fontSize: "clamp(1rem, 2vw ,1.25rem)" }}>Company</h5>
							<ul>
								<li>
									<NavLink to="/about" onClick={componentDidMount}>About us</NavLink>
								</li>
								<li>
									<NavLink to="/" onClick={componentDidMount}>Home</NavLink>
								</li>
								<li>
									<NavLink to="/blogs" onClick={componentDidMount}>Blogs</NavLink>
								</li>
								<li>
									<NavLink to="/resource" onClick={componentDidMount}>Resources</NavLink>
								</li>
							</ul>
						</div>

						<div>
							<h5 style={{ fontSize: "clamp(1rem, 2vw ,1.25rem)" }}>Courses</h5>
							<ul>
								{courses.map((course) => (
									<li>
										<NavLink to={`/courses/${course.id}`}>{course.attributes.name}</NavLink>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h5 style={{ fontSize: "clamp(1rem, 2vw ,1.25rem)" }}>Resources</h5>
							<ul>
								<li>
									<AnchorLink href="#faq">FAQ's</AnchorLink>
								</li>
								<li>
									<NavLink to="/tnc/privacy-policy" onClick={componentDidMount}>Privacy Policy</NavLink>
								</li>
								<li>
									<NavLink to="/tnc/cancellation-and-refund-policy" onClick={componentDidMount}>Cancellation and refund policy</NavLink>
								</li>
							</ul>
						</div>

						<div>
							<h5 style={{ fontSize: "clamp(1rem, 2vw ,1.25rem)" }}>Career</h5>
							<ul>
								<li>
									<NavLink to="/">Join us</NavLink>
								</li>
								<li>
									<NavLink to="/">Achievements</NavLink>
								</li>
								<li>
									<NavLink to="/">Team</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<img
					src="/assets/footer-img.png"
					alt="woman"
					style={{
						display: "inline-block",
						width: "clamp(100px, 20vw, 400px)",
						alignSelf: "flex-end",
					}}
				/>
			</footer>

			<div
				className="footer-end"
				style={{
					maxWidth: "100vw",
					minHeight: "2.77vw",
					backgroundImage: `url(${"/assets/subscribe-bg.jpg"})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					textAlign: "center",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<span
					style={{
						color: "rgba(255, 255, 255, 0.90)",
						fontFamily: "Raleway",
						fontSize: "clamp(12px , 1.5vw , 16px)",
						fontStyle: "normal",
						fontWeight: "600",
					}}
				>
					Copyright @ Dxolve.com
				</span>
			</div>
		</>
	);
};

export default Subscribe;
