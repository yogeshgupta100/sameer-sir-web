import React from "react";
import Heading from "../aboutus/Heading";

const Portfolio = () => {
	return (
		<>
			<div id="portfolio"
				className="container"
				style={{
					padding: "6.66vw 0 0",
				}}
			>
				<Heading content={"Portfolio"} left={"30%"} />
			</div>

			<div
				className="portfolio-container"
				style={{
					background: `linear-gradient(180deg, #3e213d 0%, #2f3e69 100%)`,
					width: "100%",
					margin: "6.66vw 0",
					display: "flex",
					flexDirection: "column",
					gap: "1vw",
					padding: "2vw",
				}}
			>
				<div style={{ display: "flex", gap: "1vw" }}>
					<div style={{ width: "100%", backgroundColor: "white", padding: "2vw" }}>
						<a href="/" target="_blank" rel="noopener noreferrer">
							<img src="/assets/Rectangle 86.png" alt="" />
						</a>
					</div>
					<div style={{ width: "100%", backgroundColor: "white", padding: "2vw" }}>
						<a href="/" target="_blank" rel="noopener noreferrer">
							<img src="/assets/Rectangle 85.png" alt="" />
						</a>
					</div>
				</div>

				<div
					style={{
						width: "100%",
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr",
						gap: "1vw",
					}}
				>
					<div style={{ gridArea: "1 / 1 / 4 / 2", backgroundColor: "white", padding: "2vw" }}>
						<a href="/" target="_blank" rel="noopener noreferrer">
							<img src="/assets/Rectangle 87.png" alt="" style={{ width: "100%", display: "block" }} />
						</a>
					</div>
					<div style={{ gridArea: "1 / 2 / 3 / 4", backgroundColor: "white", padding: "2vw" }}>
						<a href="/" target="_blank" rel="noopener noreferrer">
							<img src="/assets/Rectangle 88.png" alt="" style={{ width: "100%", display: "block" }} />
						</a>
					</div>
					<div style={{ gridArea: "3 / 2 / 4 / 3", backgroundColor: "white", padding: "2vw" }}></div>
					<div style={{ gridArea: "4 / 1 / 6 / 2", backgroundColor: "white", padding: "2vw" }}>
						<a href="/" target="_blank" rel="noopener noreferrer">
							<img src="/assets/Rectangle 94.png" alt="" style={{ width: "100%", display: "block" }} />
						</a>
					</div>
					<div style={{ gridArea: "4 / 2 / 6 / 3", backgroundColor: "white", padding: "2vw" }}>
						<a href="/" target="_blank" rel="noopener noreferrer">
							<img src="/assets/Rectangle 89.png" alt="" style={{ width: "100%", display: "block" }} />
						</a>
					</div>
					<div style={{ gridArea: "3 / 3 / 6 / 4", backgroundColor: "white", padding: "2vw" }}>
						<a href="/" target="_blank" rel="noopener noreferrer">
							<img src="/assets/Rectangle 93.png" alt="" style={{ width: "100%", display: "block" }} />
						</a>
					</div>
				</div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr",
						gridTemplateRows: "1fr 1fr",
						gap: "1vw",
					}}
				>
					<div style={{ gridArea: "1 / 1 / 3 / 3", backgroundColor: "white", padding: "2vw" }}>
						<a href="/" target="_blank" rel="noopener noreferrer">
							<img src="/assets/Rectangle 95.png" alt="" style={{ width: "100%", display: "block" }} />
						</a>
					</div>
					<div style={{ gridArea: "1 / 3 / 2 / 4", backgroundColor: "white", padding: "2vw" }}>
						<a href="/" target="_blank" rel="noopener noreferrer">
							<img src="/assets/Rectangle 96.png" alt="" style={{ width: "100%", display: "block" }} />
						</a>
					</div>
					<div style={{ gridArea: "2 / 3 / 3 / 4", backgroundColor: "white", padding: "2vw" }}>
						<a href="/" target="_blank" rel="noopener noreferrer">
							<img src="/assets/Rectangle 97.png" alt="" style={{ width: "100%", display: "block" }} />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
