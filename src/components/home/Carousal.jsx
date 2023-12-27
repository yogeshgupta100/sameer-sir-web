import CarousalSlide from "./CarousalSlide";
import { useEffect, useRef, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import styles from "./carousal.module.css";

export default function Carousal() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [testimonies, setTestimonies] = useState([]);
	const sliderRef = useRef(null);

	const setSlide = (index) => {
		sliderRef.current.scrollLeft = index * sliderRef.current.children[0].offsetWidth;
		setCurrentSlide(index);
	};

	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/testimonies?populate=*`);
			const data = await res.json();
			setTestimonies(data.data);
		})();

		const scrollHandler = () => {
			const scrollPosition = sliderRef.current.scrollLeft;
			const slideWidth = sliderRef.current.children[0].offsetWidth;
			const slideIndex = Math.round(scrollPosition / slideWidth);
			setCurrentSlide(slideIndex);
		};

		sliderRef.current.addEventListener("scroll", scrollHandler);

		return () => {
			sliderRef.current.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	return (
		<>
			<div className={styles.container} ref={sliderRef}>
				{testimonies.map((testimony, index) => {
					return (
						<CarousalSlide
							key={index}
							author={testimony.attributes.author}
							authorRole={testimony.attributes.authorRole}
							authorImage={testimony.attributes.authorImage}
							testimony={testimony.attributes.testimony}
							currentSlide={currentSlide}
							index={index}
						/>
					);
				})}
			</div>

			<div className={styles.controls}>
				<div className={styles.dotContainer}>
					{testimonies.map((testimony, index) => {
						return (
							<div
								key={index}
								className={styles.dot}
								style={{
									backgroundColor: currentSlide === index ? "#63017F" : "transparent",
								}}
								onClick={() => {
									setSlide(index);
								}}
							/>
						);
					})}
				</div>

				<div className={styles.btnContainer}>
					<button
						disabled={currentSlide === 0}
						style={{
							backgroundColor: currentSlide === 0 ? "#4C0174" : "#710186",
							color: currentSlide === 0 ? "rgba(255, 255, 255, 0.6)" : "#fff",
						}}
						onClick={() => setSlide(currentSlide - 1)}
					>
						<SlArrowLeft />
					</button>
					<button
						disabled={currentSlide === testimonies.length - 1}
						style={{
							backgroundColor: currentSlide === testimonies.length - 1 ? "#4C0174" : "#710186",
							color: currentSlide === testimonies.length - 1 ? "rgba(255, 255, 255, 0.6)" : "#fff",
						}}
						onClick={() => setSlide(currentSlide + 1)}
					>
						<SlArrowRight />
					</button>
				</div>
			</div>
		</>
	);
}
