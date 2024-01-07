import Header from "../Header";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { FaYoutube, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Banner = () => {
	const { blogId } = useParams();
	const [blogData, setBlogData] = useState(null);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/blogs/${blogId}?populate=*`);
			const data = await res.json();
			setBlogData(data.data);
		})();
	}, []);

	return (
		<>
			<div
				className="banner"
				style={{
					boxShadow: "0 0.069vw 0.552vw 0 rgba(0, 0, 0, 0.25)",
				}}
			>
				<Header />
			</div>
			{blogData ? (
				<>
					<div className="container">
						<div className="small-nav">
							<ul
								style={{
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "space-evenly",
									textDecoration: "none",
									alignItems: "center",
									listStyleType: "none",
								}}
							>
								<li style={{ textDecoration: "none" }}>
									<NavLink
										to={"/all"}
										style={{
											textDecoration: "none",
										}}
									>
										<span
											style={{
												cursor: "pointer",
												fontFamily: "Raleway",
												color: "#fff",
												fontSize: "1rem",
												fontWeight: "medium",
												fontStyle: "normal",
												textAlign: "center",
											}}
										>
											All
										</span>
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/graphic "}
										style={{
											textDecoration: "none",
										}}
									>
										<span
											style={{
												cursor: "pointer",
												fontFamily: "Raleway",
												color: "#fff",
												fontSize: "1rem",
												fontWeight: "medium",
												fontStyle: "normal",
												textAlign: "center",
											}}
										>
											Graphic Design
										</span>
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/ui/ux"}
										style={{
											textDecoration: "none",
										}}
									>
										<span
											style={{
												cursor: "pointer",
												fontFamily: "Raleway",
												color: "#fff",
												fontSize: "1rem",
												fontWeight: "medium",
												fontStyle: "normal",
												textAlign: "center",
											}}
										>
											Ui/UX Design
										</span>
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/virtualReality"}
										style={{
											textDecoration: "none",
										}}
									>
										<span
											style={{
												cursor: "pointer",
												fontFamily: "Raleway",
												color: "#fff",
												fontSize: "1rem",
												fontWeight: "medium",
												fontStyle: "normal",
												textAlign: "center",
											}}
										>
											Virtual Reality
										</span>
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/all"}
										style={{
											textDecoration: "none",
										}}
									>
										<span
											style={{
												cursor: "pointer",
												fontFamily: "Raleway",
												color: "#fff",
												fontSize: "1rem",
												fontWeight: "medium",
												fontStyle: "normal",
												textAlign: "center",
											}}
										>
											Art
										</span>
									</NavLink>
								</li>
							</ul>
						</div>
						<div
							style={{
								width: "100%",
								display: "flex",
								gap: "15px",
								marginTop: "40px",
								justifyContent: "flex-end",
							}}
						>
							<NavLink to={"https://www.instagram.com/dxolve_official?igsh=OGQ5ZDc2ODk2ZA=="}>
								<span
									style={{
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
										cursor: "pointer",
									}}
								>
									<AiFillInstagram />
								</span>
							</NavLink>
							<NavLink to={"https://youtube.com/@dxolve_official?si=C4s_wlnZZJdeNqHe"}>
								<span
									style={{
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
										cursor: "pointer",
									}}
								>
									<FaYoutube />
								</span>
							</NavLink>
							<NavLink to={""}>
								<span
									style={{
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
										cursor: "pointer",
									}}
								>
									<FaLinkedinIn />
								</span>
							</NavLink>
							<NavLink to={""}>
								<span
									style={{
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
										cursor: "pointer",
									}}
								>
									<FaFacebookF />
								</span>
							</NavLink>
						</div>
						<div
							className="center-text"
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
								margin: "4.44vw 0 6.66vw",
							}}
						>
							<span className="avatar"></span>
							<div className="heading-text" style={{ width: "30rem", marginLeft: "1rem" }}>
								<div
									className="head"
									style={{
										color: "#B46BD1",
										fontFamily: "Raleway",
										fontSize: "2rem",
										fontWeight: "700",
										fontStyle: "normal",
										lineHeight: "normal",
									}}
								>
									{blogData.attributes.title}
								</div>
								<span
									className="text"
									style={{
										color: "rgba(91, 91, 91, 0.80)",
										fontFamily: "Open Sans",
										fontSize: "0.8rem",
										fontWeight: "600",
										letterSpacing: "0.04688rem",
										fontStyle: "normal",
										lineHeight: "normal",
									}}
								>
									By {blogData.attributes.author} {blogData.attributes.publishDate} |{" "}
									{blogData.attributes.timeRequired}
								</span>
							</div>
						</div>
						<div
							className="article-image"
							style={{
								backgroundImage: `url(${
									blogData.attributes.thumbnail?.data?.attributes?.url
								})`,
							}}
						></div>
					</div>

					{/* Yogesh ye element */}
					{/* ye ,.... ye he */}
					{/* koi aur nhi he */}
					{/* sirf ye he */}
					<div
						className="container content-container"
						style={{ padding: "2.22vw 16.65vw 0", width: "100%", marginTop: "5.55vw" }}
					>
						<Markdown>{blogData.attributes.content}</Markdown>
					</div>
				</>
			) : (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
						fontSize: "2rem",
					}}
				>
					404 | Not Found
				</div>
			)}
		</>
	);
};

export default Banner;
