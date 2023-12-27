import { BsPlay } from "react-icons/bs";

export default function CarousalSlide({ authorImage, testimony, author, authorRole }) {
	return (
		<div className="carousel-body"
			style={{
				display: "inline-flex",
				padding: "3.33vw 3.55vw",
				background: "linear-gradient(263deg, #720186 0%, #58017A 47.51%, #4B0173 127.7%)",
				maxWidth: "82vw",
				aspectRatio:"3/1.5",
				color: "white",
			}}
		>
			<div id="carousel-image"
				style={{
					display: "flex",
					alignItems: "flex-end",
					padding: "1.665vw 1.11vw",
					aspectRatio: "1.3/2",
					backgroundImage: `url(${import.meta.env.VITE_STRAPI_SERVER_URL}${authorImage.data.attributes.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<BsPlay
					style={{
						color: "white",
						minHeight: "3vw",
						maxWidth: "30vw",
					}}
				/>
			</div>
			<div id="carousel-content"
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
					maxWidth: "100vw",
					minHeight: "100%",
					margin: "0 2.77vw",
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
							fontSize:"clamp(0.66rem , 1.5vw , 1.5rem)",
							fontStyle:"normal",
							fontFamily:"Open Sans"
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
							fontWeight: "700",
							fontSize: "clamp(0.55rem , 1.5vw , 1.5rem)",
						}}
					>
						{author}
					</div>
					<div
						style={{
							fontSize: "clamp(0.4rem , 1.5vw , 1rem)",
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
