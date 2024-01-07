import { BsPlay } from "react-icons/bs";
import styles from "./carousal.module.css";

export default function CarousalSlide({ authorImage, testimony, author, authorRole }) {
	return (
		<div
			className="carousel-body"
			style={{
				display: "inline-flex",
				padding: "3.33vw 3.55vw",
				background: "linear-gradient(263deg, #720186 0%, #58017A 47.51%, #4B0173 127.7%)",
				maxWidth: "82vw",
				color: "white",
				alignItems: "center",
			}}
		>
			<div
				className={styles.imgContainer}
				style={{
					position: "relative",
					width: "40%",
				}}
			>
				<img id="carousel-image" src={authorImage?.data?.attributes?.url} alt="" />
				<BsPlay
					style={{
						position: "absolute",
						bottom: "1rem",
						left: "1rem",
						color: "white",
						fontSize: "clamp(1rem , 3vw , 2rem)",
					}}
				/>
			</div>

			<div
				className={styles.contentContainer}
				id="carousel-content"
				style={{
					width: "60%",
					margin: "0 0 0 2.77vw",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
					gap: "1.5rem",
				}}
			>
				<div
					className="testimony"
					style={{
						position: "relative",
						display: "inline-block",
						fontSize: "1vw",
					}}
				>
					<span
						style={{
							position: "absolute",
							right: "101%",
							fontSize: "clamp(1rem , 3vw , 2rem)",
							lineHeight: "1.11vw",
						}}
					>
						“
					</span>
					<span
						style={{
							fontSize: "clamp(0.66rem , 1vw , 1.5rem)",
							fontStyle: "normal",
							fontFamily: "Open Sans",
							fontWeight: "300",
						}}
					>
						{testimony} &nbsp;
					</span>
					<span
						style={{
							display: "inline-block",
							fontSize: "clamp(1rem , 3vw , 2rem)",
							lineHeight: "1.11vw",
							translate: "0 0.55vw",
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
							fontWeight: "600",
							fontSize: "clamp(0.55rem , 1.3vw , 1.5rem)",
						}}
					>
						{author}
					</div>
					<div
						style={{
							fontSize: "clamp(0.4rem , 1vw , 1rem)",
							fontWeight: "300",
						}}
					>
						{authorRole}
					</div>
				</div>
			</div>
		</div>
	);
}
