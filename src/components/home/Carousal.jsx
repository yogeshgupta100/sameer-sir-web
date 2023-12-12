import CarousalSlide from "./CarousalSlide";
import { useEffect, useRef, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const data = [
	{
		image: "/assets/carousal-image.jpg",
		content:
			"I can't express how grateful I am for my experience with [Your Business Name]. As someone who was completely new to UX/UI design, I was initially overwhelmed by the vast world of design. However, their course, 'Mastering UX/UI Design: From Novice to Pro,' truly transformed my understanding and skills.",
		author: "Anna James",
		role: "UX Designer",
	},
	{
		image: "/assets/about-section1-1.jpg",
		content:
			"I can't express how grateful i am for my experience with [your business name]. as someone who was completely new to ux/ui design, i was initially overwhelmed by the vast world of design. however, their course, 'mastering ux/ui design: from novice to pro,' truly transformed my understanding and skills.",
		author: "Anna James",
		role: "UX Designer",
	},
];

export default function Carousal() {
	const sliderRef = useRef(null);
	const [currentSlide, setCurrentSlide] = useState(0);

	const [testimonies, setTestimonies] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/testimonies?populate=*`);
			const data = await res.json();
			setTestimonies(data.data);
		})();
	}, []);

	return (
		<div
			style={{
				width: "100vw",
				overflow: "hidden",
			}}
		>
			<div
				ref={sliderRef}
				style={{
					width: "max-content",
					color: "white",
					marginLeft: "10vw",
					transition: "all 0.5s ease-in-out",
				}}
			>
				{testimonies.map((testimony, index) => {
					return <CarousalSlide key={index} {...testimony.attributes} />;
				})}
			</div>

			<div
				style={{
					display: "grid",
					justifyContent: "space-between",
					alignItems: "center",
					gridTemplateColumns: "1fr 1fr 1fr",
					marginTop: "2.22vw",
				}}
			>
				<div></div>
				<div 
					style={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					{data.map((item, index) => (
						<div
							key={index}
							style={{
								height: "0.66vw",
								width: "0.66vw",
								borderRadius: "50%",
								background: currentSlide === index ? "#63017F" : "white",
								border: "1px solid #63017F",
								margin: "0 0.2vw 2.22vw",
								cursor: "pointer",
							}}
							onClick={() => {
								setCurrentSlide(index);
								sliderRef.current.style.transform = `translateX(-${index * 75}vw)`;
							}}
						/>
					))}
				</div>
				{/* Buttons */}
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "0.7rem",
					}}
				>
					<button
						type="button"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							color: "white",
							background: currentSlide === 0 ? "#63017F" : "#710186",
							borderRadius: "50%",
							height: "3vw",
							width: "3vw",
							outline: "none",
							border: "none",
						}}
						onClick={() => {
							setCurrentSlide((prev) => prev - 1);
							sliderRef.current.style.transform = `translateX(-${(currentSlide - 1) * 75}vw)`;
						}}
						disabled={currentSlide === 0}
					>
						<SlArrowLeft />
					</button>
					<button
						type="button"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							color: "white",
							background: currentSlide === data.length - 1 ? "#63017F" : "#710186",
							borderRadius: "50%",
							height: "3vw",
							width: "3vw",
							outline: "none",
							border: "none",
						}}
						onClick={() => {
							setCurrentSlide((prev) => prev + 1);
							sliderRef.current.style.transform = `translateX(-${(currentSlide + 1) * 75}vw)`;
						}}
						disabled={currentSlide === data.length - 1}
					>
						<SlArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
}
