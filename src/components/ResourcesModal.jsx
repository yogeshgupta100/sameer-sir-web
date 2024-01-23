import { NavLink } from "react-router-dom";

export default function ResourcesModal() {
	const componentDidMount = () =>{
		window.scrollTo(0, 0);
	}
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: "1vw",
				padding: "0.2vw 0.5vw 0 1vw",
				background: "white",
				boxShadow: "0.138vw 0.138vw 1.04vw 0 rgba(0, 0, 0, 0.15)",
				margin:"3.44vw 7.77vw",
			}}
		>
			<a href="/blogs"
			onClick={componentDidMount}
				className="inner-card"
				style={{
					display: "flex",
					borderRadius: "0.99vw",
					width: "32%",
					aspectRatio: "1/1",
					backgroundPosition:"center",
					backgroundRepeat:"no-repeat",
					backgroundSize:"cover",
				}}
			>
				<img src="/assets/resource-modal-blog.png" style={{
					width:"100%"
				}}/>
			</a>
			<a href="/tutorials"
			onClick={componentDidMount}
				className="inner-card"
				style={{
					display: "flex",
					borderRadius: "0.99vw",
					width: "32%",
					aspectRatio: "1/1",
					backgroundPosition:"center",
					backgroundRepeat:"no-repeat",
					backgroundSize:"cover",
				}}
			>
				<img src="/assets/resource-modal-tutorial.png" style={{
					width:"100%"
				}}/>
			</a>
			<div
				className="inner-card"
				style={{
					margin: "auto",
					maxWidth: "100%",
				}}
			>
				<div style={{ color: "#B46BD1", fontWeight: "700", marginBottom: "1vw" , fontSize:"clamp(1.3rem , 1.6vw , 1.9rem)"}}>FUEL YOUR CURIOSITY</div>
				<div style={{ whiteSpace: "nowrap", fontWeight: "400" , color:"#303030" , fontSize:"clamp(1rem , 1.3vw , 1.2rem) " , lineHeight:"1.5vw"}}>Find a Plethora of Resources Tailored for</div>
				<div style={{ whiteSpace: "nowrap", fontWeight: "400" , color:"#303030" , fontSize:"clamp(1rem , 1.3vw , 1.2rem)" , marginBottom:"1.5vw"}}>Your Learning Journey.</div>
				<NavLink to={'/resource'}>
				<button
				onClick={componentDidMount}
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
					Explore more
				</button>
				</NavLink>
			</div>
		</div>
	);
}
