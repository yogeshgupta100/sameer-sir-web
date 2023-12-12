import { BsPlay } from "react-icons/bs";

export default function CarousalSlide({ authorImage, testimony, author, authorRole }) {
	return (
		<div className="carousel-body"
			style={{
				display: "inline-flex",
				padding: "3.33vw 3.55vw",
				background: "linear-gradient(263deg, #720186 0%, #58017A 47.51%, #4B0173 127.7%)",
				minHeight: "28.86vw",
				maxWidth: "82vw",
				margin: " 4.44vw 2vw 1.11vw",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					padding: "1.665vw 1.11vw",
					minWidth:"20vw",
					aspectRatio: "4/3",
					backgroundImage: `url(${import.meta.env.VITE_STRAPI_SERVER_URL}${authorImage.data.attributes.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<BsPlay
					style={{
						color: "white",
						minHeight: "2.77VW",
						maxWidth: "2.77vw",
					}}
				/>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
					maxWidth: "100%",
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
							fontSize: "2.22vw",
							lineHeight: "1.11vw",
						}}
					>
						“
					</span>
					<span
						style={{
							fontWeight: "300",
							fontSize:"1.11vw",
							fontStyle:"normal",
							fontFamily:"Open Sans"
						}}
					>
						{testimony} &nbsp;
					</span>
					<span
						style={{
							display: "inline-block",
							fontSize: "2.22vw",
							lineHeight: "1.11vw",
							translate: "0 1.44vw",
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
							fontSize: "1.11vw",
						}}
					>
						{author}
					</div>
					<div
						style={{
							fontSize: "0.83vw",
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
