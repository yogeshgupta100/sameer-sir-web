import React, { useEffect, useState } from "react";
import "@fontsource/open-sans";

function Section1() {
	const [countriesCounter, setCountriesCounter] = useState(0);
	const [graduatesCounter, setGraduatesCounter] = useState(0);
	const [placementRateCounter, setPlacementRateCounter] = useState(0);

	const animateCounter = (setter, start, end, duration) => {
		const range = end - start;
		const increment = range / (duration / 10);
		let current = start;

		const updateCounter = () => {
			current += increment;
			if (current >= end) {
				current = end;
				clearInterval(counterInterval);
			}
			setter(Math.round(current));
		};

		const counterInterval = setInterval(updateCounter, 10);
	};

	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/we-provide-section`);
			const data = await res.json();

      animateCounter(setCountriesCounter, 0, data.data.attributes.num1, 2000);
      animateCounter(setGraduatesCounter, 0, data.data.attributes.num2, 2000);
      animateCounter(setPlacementRateCounter, 0, data.data.attributes.num3, 2500);
		})();
	}, []);

	return (
		<div
			className="container counter"
			style={{
				minHeight: "25vw",
				// position:"relative",
				// top:"-3.3rem"
				marginTop:"-4.5vw"
			}}
		>
			<div className="counter-heading" style={{fontSize:"clamp(0.55rem , 3vw , 1.2rem)"}}>
				<span>We Provide</span>
			</div>
			<div
				className="counter-row"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					// minHeight: "80%",
					flexWrap:"nowrap",
					overflowX:"hidden",
					padding:"8vw 0"
				}}
				>
				<div className="col">
					<div
						className="awesomeCounter"
						style={{
							textAlign: "center",
							display:"flex",
							flexDirection:"column"
						}}
						>
						<span className="counter-number"
							style={{
								color: "#B46BD1",
								fontSize: "5.5vw",
								fontWeight: "900",
								fontFamily: "Open Sans",
							}}
						>
							{countriesCounter}+
						</span>
						<span
							style={{
								color: "#B46BD1",
								textAlign: "center",
								fontFamily: "Open Sans",
								fontSize: "clamp(0.33rem , 2.8vw , 1.2rem)",
								fontStyle: "normal",
								fontWeight: "500",
							}}
						>
							Industry leading experts
						</span>
					</div>
				</div>
				<div className="col">
					<div
						className="awesome-counter"
						style={{
							textAlign: "center",
							display:"flex",
							flexDirection:"column"
						}}
					>
						<span className="counter-number"
							style={{
								color: "#B46BD1",
								fontSize: "5.5vw",
								fontWeight: "900",
								fontFamily: "Open Sans",
							}}
						>
							{graduatesCounter}+
						</span>
						<span
							style={{
								color: "#B46BD1",
								textAlign: "center",
								fontFamily: "Open Sans",
								fontSize: "clamp(0.33rem , 2.8vw , 1.2rem)",
								fontStyle: "normal",
								fontWeight: "500",
							}}
						>
							Industry orientated modules
						</span>
					</div>
					<div className="v-line" style={{minWidth:"0.07vw" , minHeight:"100%"}}></div>
				</div>
				<div className="col">
					<div
						className="awesome-counter"
						style={{
							textAlign: "center",
							display:"flex",
							flexDirection:"column"
						}}
					>
						<span className="counter-number"
							style={{
								color: "#B46BD1",
								fontSize: "5.5vw",
								fontWeight: "900",
								fontFamily: "Open Sans",
							}}
						>
							{placementRateCounter}+
						</span>
						<span
							style={{
								color: "#B46BD1",
								textAlign: "center",
								fontFamily: "Open Sans",
								fontSize: "clamp(0.33rem , 2.8vw , 1.2rem)",
								fontStyle: "normal",
								fontWeight: "500",
							}}
						>
							Hiring partners
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section1;
