export default function ResourcesModal() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: "1.5rem",
				padding: "0.25rem",
				borderRadius: "14px",
				background: "white",
				boxShadow: "2px 2px 15px 0px rgba(0, 0, 0, 0.15)",
				// padding: "1rem",
			}}
		>
			<div
				className="inner-card"
				style={{
					display: "flex",
					borderRadius: "14.278px",
					backgroundColor: "#B46BD1",
					boxShadow: "2.85569px 2.85569px 14.27845px 2.85569px rgba(0, 0, 0, 0.05)",
					width: "30%",
					aspectRatio: "7/6",
					alignItems: "flex-end",
					padding: "1.7rem 1.6rem",
					fontWeight: "bold",
					fontSize: "1.2rem",
					color: "white",
				}}
			>
				Resources
			</div>
			<div
				className="inner-card"
				style={{
					display: "flex",
					borderRadius: "14.278px",
					backgroundColor: "#B46BD1",
					boxShadow: "2.85569px 2.85569px 14.27845px 2.85569px rgba(0, 0, 0, 0.05)",
					width: "30%",
					aspectRatio: "7/6",
					alignItems: "flex-end",
					padding: "1.7rem 1.6rem",
					fontWeight: "bold",
					fontSize: "1.2rem",
					color: "white",
				}}
			>
				Tutorials
			</div>
			<div
				className="inner-card"
				style={{
					margin: "auto",
					width: "13rem",
				}}
			>
				<div style={{ color: "#B46BD1", fontWeight: "700", marginBottom: "0.5rem" }}>Hire from Us</div>
				<div style={{ whiteSpace: "pre-wrap", fontWeight: "600" }}>Lorem ipsum dolor sit amet consectetur.</div>
				<div style={{ fontSize: "12px", marginBottom: "1.2rem" }}>Lorem ipsum dolor sit amet consectetur.</div>
				<button
					style={{
						color: "white",
						backgroundColor: "#B46BD1",
						outline: "none",
						border: "none",
						fontSize: "14px",
						padding: "0.5rem 1rem",
						borderRadius: "0.5rem",
						width: "fit-content",
					}}
				>
					Explore more
				</button>
			</div>
		</div>
	);
}
