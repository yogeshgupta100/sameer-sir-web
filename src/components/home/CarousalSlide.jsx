import { BsPlay } from "react-icons/bs";

export default function CarousalSlide({ image, content, author, role }) {
	return (
		<div
			style={{
				display: "inline-flex",
				padding: "3rem 3.2rem",
				background: "linear-gradient(263deg, #720186 0%, #58017A 47.51%, #4B0173 127.7%)",
				height: "26rem",
				width: "74rem",
				margin: " 4rem 2vw 1rem",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					padding: "1.5rem 1rem",
					aspectRatio: "4/3",
					backgroundImage: `url("${image}")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<BsPlay
					style={{
						color: "white",
						height: "2.5rem",
						width: "2.5rem",
					}}
				/>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
					width: "100%",
					height: "100%",
					margin: "0 40px",
				}}
			>
				<div
					className="testimony"
					style={{
						position: "relative",
						display: "inline-block",
						fontSize: "14px",
					}}
				>
					<span
						style={{
							position: "absolute",
							right: "101%",
							fontSize: "2rem",
							lineHeight: "1rem",
						}}
					>
						“
					</span>
					<span
						style={{
							fontWeight: "300",
							fontSize:"1rem",
							fontStyle:"normal",
							fontFamily:"Open Sans"
						}}
					>
						{content} &nbsp;
					</span>
					<span
						style={{
							display: "inline-block",
							fontSize: "2rem",
							lineHeight: "1rem",
							translate: "0 1.3rem",
						}}
					>
						”
					</span>
				</div>
				<div
					style={{
						alignSelf: "flex-end",
					}}
				>
					<div
						style={{
							fontWeight: "700",
							fontSize: "1rem",
						}}
					>
						{author}
					</div>
					<div
						style={{
							fontSize: "12px",
							fontWeight: "300",
						}}
					>
						{role}
					</div>
				</div>
			</div>
		</div>
	);
}
