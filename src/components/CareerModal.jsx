

export default function CareerModal() {
	return (
		<div
			style={{
				alignItems: "center",
				// borderRadius: "0.99vw",
				background: "white",
				display:"grid",
				gridTemplateColumns:"1fr 1fr",
				gap:"2rem",
				backgroundColor:"transparent",
				margin:"4.44vw 7.77vw",
			}}
		>
			<div
				className="inner-card"
				style={{
					display: "flex",
					// borderRadius: "0.99vw",
					backgroundColor: "#fff",
					boxShadow: "0.13875vw 0.13875vw 1.04vw 0.13875vw rgba(0, 0, 0, 0.05)",
					width: "100%",
					aspectRatio: "7/4",
					alignItems: "center",
					padding: "0.6vw",
					fontWeight: "bold",
					fontSize: "1.332vw",
					// color: "white",
				}}
			>
				<img src="/assets/career-1.png" style={{width:"45%"}}/>
				<div
				className="inner-card"
				style={{
					margin: "auto",
					width: "45%",
				}}
			>
				<div style={{ color: "#B46BD1", fontWeight: "700", marginBottom: "1vw" , fontSize:"clamp(1rem , 1.3vw , 1.5rem)"}}>HIRE FROM US</div>
				<div style={{fontWeight: "400" , color:"#303030" , fontSize:"clamp(1rem , 1.1vw , 1.25rem)" , lineHeight:"1.5vw" , marginBottom:"1.5vw"}}>Empower your team with the best minds. Choose us for unparalleled talent and unmatched results.</div>
				<a href={'/resource'}>
				<button
					style={{
						color: "white",
						backgroundColor: "#B46BD1",
						outline: "none",
						border: "none",
						fontSize: "0.971vw",
						padding: "0.555vw 1.11vw",
						borderRadius: "0.555vw",
						width: "fit-content",
					}}
				>
					<p>Explore more</p>
				</button>
				</a>
			</div>
			</div>
			<div
				className="inner-card"
				style={{
					display: "flex",
					// borderRadius: "0.99vw",
					backgroundColor: "#fff",
					boxShadow: "0.13875vw 0.13875vw 1.04vw 0.13875vw rgba(0, 0, 0, 0.05)",
					width: "100%",
					aspectRatio: "7/4",
					alignItems: "center",
					padding: "0.6vw",
					fontWeight: "bold",
					fontSize: "1.332vw",
					// color: "white",
				}}
			>
				<img src="/assets/career-1.png" style={{width:"45%"}}/>
				<div
				className="inner-card"
				style={{
					margin: "auto",
					width: "45%",
				}}
			>
				<div style={{ color: "#B46BD1", fontWeight: "700", marginBottom: "1vw" , fontSize:"clamp(1rem , 1.3vw , 1.5rem)"}}>WORK WITH US</div>
				<div style={{fontWeight: "400" , color:"#303030" , fontSize:"clamp(1rem , 1.1vw , 1.25rem)" , lineHeight:"1.5vw" , marginBottom:"1.5vw"}}>Be part of a dynamic team that values creativity, collaboration, and continuous learning.</div>
				<a href={'/resource'}>
				<button
					style={{
						color: "white",
						backgroundColor: "#B46BD1",
						outline: "none",
						border: "none",
						fontSize: "0.971vw",
						padding: "0.555vw 1.11vw",
						borderRadius: "0.555vw",
						width: "fit-content",
					}}
				>
					<p>Explore more</p>
				</button>
				</a>
			</div>
			</div>
		</div>
	);
}
