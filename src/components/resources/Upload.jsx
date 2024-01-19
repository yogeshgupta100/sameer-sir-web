import React from "react";
import Heading from "../aboutus/Heading";
import Blog from "./Blog";

const Upload = () => {
	return (
		<>
			<div className="banner-section" style={{ width: "100vw", padding: "1rem auto", marginBottom: "5vw" }}>
				<div
					style={{
						color: "#fff",
						textAlign: "center",
						fontFamily: "Open Sans",
						fontSize: "clamp(1rem , 2.5vw , 2rem)",
						fontWeight: "700",
						lineHeight: "150%",
						width: "clamp(100%, 2vw , 60%)",
						display: "flex",
						flexDirection: "column",
						fontStyle: "normal",
					}}
				>
					<span>Want To Upload Your Assets And Become Part Of</span>
					<span>Our Resource Community</span>
					<div className="upload-btn">
						{/* <button
									type="button"
									className="btn"
                  id='button'
									style={{
									display: "inline-block",
									borderRadius: "0.75rem",
									border: "1.1px solid #fff",
									padding: "0.5rem 1rem",
									fontWeight: "500",
									fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)",
									whiteSpace: "nowrap",
									width: "auto",
									maxWidth: "100%",
									boxSizing: "border-box",
                  marginTop:"1.5rem"
									}}
								>
									Upload now
								</button> */}
						<button
							type="button"
							className="purple-button"
							id="button"
							style={{
								borderRadius: "12.32px",
								border: "0.104vw solid #FFF",
								fontSize: "clamp(0.44rem , 2vw , 1.25rem)",
								fontWeight: "500",
								// minWidth: "40%",
								aspectRatio: "11/2.7",
								padding: "0.5vw 2vw",
								margin: "2.22vw 0",
								display: "inline-block",
								whiteSpace: "nowrap",
								width: "auto",
								maxWidth: "100%",
								boxSizing: "border-box",
								marginTop: "1.5rem",
							}}
						>
							<span>Upload now</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Upload;
