export default function CareerModal() {
	return (
		<div
			style={{
				alignItems: "center",
				borderRadius: "0.99vw",
				background: "white",
				display:"grid",
				gridTemplateColumns:"1fr 1fr",
				gap:"2rem",
				backgroundColor:"transparent",
			}}
		>
			<div
				className="inner-card"
				style={{
					display: "flex",
					borderRadius: "0.99vw",
					backgroundColor: "#fff",
					boxShadow: "0.13875vw 0.13875vw 1.04vw 0.13875vw rgba(0, 0, 0, 0.05)",
					width: "100%",
					aspectRatio: "7/4",
					alignItems: "center",
					padding: "1.3vw",
					fontWeight: "bold",
					fontSize: "1.332vw",
					color: "white",
				}}
			>
				<div className="career_img" style={{width:"45%" ,
				 height:"100%" ,
				  background:`url(${"/public/assets/career.jpeg"})`,
				  backgroundPosition:"center",
				  backgroundSize:"cover",
				  backgroundRepeat:"no-repeat",
				  display:"flex",
				  alignItems:"center",
				  borderRadius: "0.99vw",
				  boxShadow: "2.856px 2.856px 14.278px 2.856px rgba(0, 0, 0, 0.05)",
				  }}>
				</div>
				<div
				className="inner-card"
				style={{
					margin: "auto",
					width: "14.43vw",
				}}
			>
				<div style={{ color: "#B46BD1", fontWeight: "700", marginBottom: "0.555vw" }}>Hire from Us</div>
				<div style={{ whiteSpace: "pre-wrap", fontWeight: "600" , color:"#000"}}>Lorem ipsum dolor sit amet consectetur.</div>
				<div style={{ fontSize: "0.8325vw", marginBottom: "1.332vw" , color:"#000"}}>Lorem ipsum dolor sit amet consectetur.</div>
				<button
					style={{
						color: "white",
						backgroundColor: "#B46BD1",
						outline: "none",
						border: "none",
						fontSize: "0.98vw",
						padding: "0.555vw 1.11vw",
						borderRadius: "0.555vw",
						width: "fit-content",
					}}
				>
					Explore more
				</button>
			</div>
			</div>
			<div
				className="inner-card"
				style={{
					display: "flex",
					borderRadius: "0.99vw",
					backgroundColor: "#fff",
					boxShadow: "0.13875vw 0.13875vw 1.04vw 0.13875vw rgba(0, 0, 0, 0.05)",
					width: "100%",
					aspectRatio: "7/4",
					alignItems: "center",
					padding: "1.3vw",
					fontWeight: "bold",
					fontSize: "1.332vw",
					color: "white",
				}}
			>
				<div className="career_img" style={{width:"45%" ,
				 height:"100%" ,
				  background:`url(${"/public/assets/career.jpeg"})`,
				  backgroundPosition:"center",
				  backgroundSize:"cover",
				  backgroundRepeat:"no-repeat",
				  display:"flex",
				  alignItems:"center",
				  borderRadius: "0.99vw",
				  boxShadow: "2.856px 2.856px 14.278px 2.856px rgba(0, 0, 0, 0.05)",
				  }}>
				</div>
				<div
				className="inner-card"
				style={{
					margin: "auto",
					width: "14.43vw",
				}}
			>
				<div style={{ color: "#B46BD1", fontWeight: "700", marginBottom: "0.555vw" }}>Hire from Us</div>
				<div style={{ whiteSpace: "pre-wrap", fontWeight: "600" , color:"#000"}}>Lorem ipsum dolor sit amet consectetur.</div>
				<div style={{ fontSize: "0.8325vw", marginBottom: "1.332vw" , color:"#000"}}>Lorem ipsum dolor sit amet consectetur.</div>
				<button
					style={{
						color: "white",
						backgroundColor: "#B46BD1",
						outline: "none",
						border: "none",
						fontSize: "0.98vw",
						padding: "0.555vw 1.11vw",
						borderRadius: "0.555vw",
						width: "fit-content",
					}}
				>
					Explore more
				</button>
			</div>
			</div>
		</div>
	);
}
