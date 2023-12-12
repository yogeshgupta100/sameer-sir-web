export default function CoursesModal() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: "1.665vw",
				padding: "0.2775vw",
				borderRadius: "0.97125vw",
				background: "white",
				boxShadow: "0.13875vw 0.13875vw 1.04vw 0 rgba(0, 0, 0, 0.15)",
			}}
		>
			<div
				className="inner-card"
				style={{
					display: "flex",
					borderRadius: "0.99vw",
					backgroundColor: "#B46BD1",
					boxShadow: "0.198vw 0.198vw 0.99vw 0.198vw rgba(0, 0, 0, 0.05)",
					width: "30%",
					aspectRatio: "7/6",
					alignItems: "flex-end",
					padding: "1.887vw 1.776vw",
					fontWeight: "bold",
					fontSize: "1.332vw",
					color: "white",
				}}
			>
				Blogs
			</div>
			<div
				className="inner-card"
				style={{
					display: "flex",
					borderRadius: "0.99vw",
					backgroundColor: "#B46BD1",
					boxShadow: "0.198vw 0.198vw 0.99vw 0.198vw rgba(0, 0, 0, 0.05)",
					width: "30%",
					aspectRatio: "7/6",
					alignItems: "flex-end",
					padding: "1.887vw 1.776vw",
					fontWeight: "bold",
					fontSize: "1.332vw",
					color: "white",
				}}
			>
				Tutorials
			</div>
			<div
				className="inner-card"
				style={{
					margin: "auto",
					width: "14.43vw",
				}}
			>
				<div style={{ color: "#B46BD1", fontWeight: "700", marginBottom: "0.555vw" }}>Hire from Us</div>
				<div style={{ whiteSpace: "pre-wrap", fontWeight: "600" }}>Lorem ipsum dolor sit amet consectetur.</div>
				<div style={{ fontSize: "0.8325vw", marginBottom: "1.332vw" }}>Lorem ipsum dolor sit amet consectetur.</div>
				<button
					style={{
						color: "white",
						backgroundColor: "#B46BD1",
						outline: "none",
						border: "none",
						fontSize: "0.99vw",
						padding: "0.555vw 1.11vw",
						borderRadius: "0.555vw",
						width: "fit-content",
					}}
				>
					Explore more
				</button>
			</div>
		</div>
	);
}
