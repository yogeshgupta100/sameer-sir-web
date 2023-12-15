import React from "react";
import Header from "../Header";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Graphic = ({ data }) => {
	const { courseId } = useParams();

	const applyNow = () => {
		fetch(`${import.meta.env.VITE_EXPRESS_SERVER_URL}/create-checkout-session`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: "aryavbhola@gmail.com",
				token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzAyMjAwODU3LCJleHAiOjE3MDQ3OTI4NTd9.z7NY-ri7GouinjcuN3oPfoAMxUOOyNWUuQ_69P60WXc",
				courseId,
			}),
		})
			.then((res) => {
				if (res.ok) return res.json();
				return res.json().then((json) => Promise.reject(json));
			})
			.then(({ url }) => {
				window.location = url;
			})
			.catch((e) => {
				console.error(e.error);
			});
	};

	return (
		<>
			<div className="landing-page" style={{ height: "auto", marginBottom: "3rem" }}>
				<Header />
				<div className="centered-text" style={{ }}>
					<h2
						style={{
							width: "48rem",
							fontSize: "2.4rem",
							fontWeight: "700",
							lineHeight: "3rem",
							fontFamily: "Raleway",
							letterSpacing: "0.1rem",
						}}
					>
						{data ? data.attributes.name : "loading..."}
					</h2>
					<p style={{ lineHeight: "1.875rem" }}>{data ? data.attributes.description : "loading..."}</p>
					<div className="buttons" style={{ display: "flex" }}>
						<button
							type="button"
							className="button"
							id="button"
							onClick={applyNow}
							style={{
								borderRadius: "0.6rem",
								border: "1.1px solid #B86CD2",
								marginRight: "1rem",
								padding: "0.625rem 3.3rem",
								fontWeight: "500",
								fontSize: "1.04rem",
							}}
						>
							Apply now
						</button>
						<NavLink to={"/forms/downloadSyllabus"}>
							<button
								type="button"
								className="btn"
								// id='button'
								style={{
									borderRadius: "0.6rem",
									border: "1.1px solid #fff",
									marginRight: "1rem",
									padding: "0.625rem 1rem",
									fontWeight: "500",
									fontSize: "1.04rem",
								}}
							>
								Download syllabus
							</button>
						</NavLink>
					</div>
					<div style={{ width: "100%", marginTop: "5rem" }}>
						<p style={{ margin: "0" }}>Tools covered</p>
						<div
							className="extra-buttons"
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(4,7rem)",
								gap: "0.654rem",
								marginTop: "0",
							}}
						>
							<button
								type="button"
								className="button"
								id="button"
								style={{
									borderRadius: "0.3rem",
									border: "1.1px solid #B86CD2",
									fontWeight: "400",
									fontSize: "0.8rem",
								}}
							>
								Unreal Engine
							</button>
							<button
								type="button"
								className="button"
								id="button"
								style={{
									borderRadius: "0.3rem",
									border: "1.1px solid #B86CD2",
									fontWeight: "400",
									fontSize: "0.8rem",
								}}
							>
								Unity 3d
							</button>
							<button
								type="button"
								className="button"
								id="button"
								style={{
									borderRadius: "0.3rem",
									border: "1.1px solid #B86CD2",
									fontWeight: "400",
									fontSize: "0.8rem",
								}}
							>
								Steam VR
							</button>
							<button
								type="button"
								className="button"
								id="button"
								style={{
									borderRadius: "0.3rem",
									border: "1.1px solid #B86CD2",
									fontWeight: "400",
									fontSize: "0.8rem",
								}}
							>
								Vuforia
							</button>
						</div>
					</div>
				</div>
			<div
				className=" about-first2"
				style={{
					position: "absolute",
					// bottom: "-33rem",
					display: "flex",
					alignItems: "center",
					height: "25rem",
					paddingLeft: "3rem",
				}}
			>
				<div
					className="container about-content"
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3,1fr)",
						gap: "1rem",
						justifyContent: "center",
						height: "18rem",
						alignContent: "center",
					}}
				>
					<div
						className="part1"
						style={{
							width: "100%",
							textAlign: "center",
							fontFamily: "Open Sans",
							borderRight: "1px solid #CDCDCD",
							paddingRight: "3rem",
						}}
					>
						<h3
							style={{
								textAlign: "center",
								fontSize: "1.3rem",
								fontWeight: "600",
								letterSpacing: "1px",
								color: "#B46BD1",
							}}
						>
							Course description
						</h3>
						<p
							style={{
								fontSize: "0.85rem",
								color: "#3D3D3D",
								lineHeight: "1.6rem",
							}}
						>
							Welcome to the enchanting world of "Graphic Design Alchemy," where creativity knows no
							bounds, and the ordinary transforms into extraordinary. it's a journey of self-discovery,
							artistic expression
						</p>
					</div>
					<div
						className="part2"
						style={{
							textAlign: "center",
							borderRight: "1px solid #CDCDCD",
						}}
					>
						<h3
							style={{
								textAlign: "center",
								fontSize: "1.3rem",
								fontWeight: "600",
								letterSpacing: "1px",
								color: "#B46BD1",
							}}
						>
							Course duration
						</h3>
						<p
							style={{
								fontSize: "0.85rem",
								color: "#3D3D3D",
								lineHeight: "1.6rem",
							}}
						>
							6 months
						</p>
						<p
							style={{
								fontSize: "0.85rem",
								color: "#3D3D3D",
								lineHeight: "1.6rem",
							}}
						>
							2 hours a day
						</p>
					</div>
					{/* <span className="v-line" ></span> */}
					<div
						className="part3"
						style={{
							textAlign: "center",
						}}
					>
						<h3
							style={{
								textAlign: "center",
								fontSize: "1.3rem",
								fontWeight: "600",
								letterSpacing: "1px",
								color: "#B46BD1",
							}}
						>
							Next branch
						</h3>
						<p
							style={{
								fontSize: "0.85rem",
								color: "#3D3D3D",
								lineHeight: "1.6rem",
							}}
						>
							weekend
						</p>
						<p
							style={{
								fontSize: "0.85rem",
								color: "#3D3D3D",
								lineHeight: "1.6rem",
							}}
						>
							sat & sun
						</p>
					</div>
				</div>
			</div>
			</div>
		</>
	);
};

export default Graphic;
