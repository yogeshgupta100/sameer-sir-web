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
				height: "60vh",
			}}
		>
			<div className="counter-heading">
				<span>We Provide</span>
			</div>
			<div
				className="row"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "80%",
				}}
			>
				<div className="col">
					<div
						className="awesomeCounter"
						style={{
							textAlign: "center",
						}}
					>
						<span
							style={{
								color: "#B46BD1",
								fontSize: "5rem",
								fontWeight: "900",
								fontFamily: "Open Sans",
							}}
						>
							{countriesCounter}+
						</span>
						<p
							style={{
								color: "#B46BD1",
								textAlign: "center",
								fontFamily: "Open Sans",
								fontSize: "1rem",
								fontStyle: "normal",
								fontWeight: "500",
							}}
						>
							Industry leading experts
						</p>
					</div>
				</div>
				<div className="col">
					<div
						className="awesome-counter"
						style={{
							textAlign: "center",
						}}
					>
						<span
							style={{
								color: "#B46BD1",
								fontSize: "5rem",
								fontWeight: "900",
								fontFamily: "Open Sans",
							}}
						>
							{graduatesCounter}+
						</span>
						<p
							style={{
								color: "#B46BD1",
								textAlign: "center",
								fontFamily: "Open Sans",
								fontSize: "1rem",
								fontStyle: "normal",
								fontWeight: "500",
							}}
						>
							Industry orientated modules
						</p>
					</div>
				</div>
				<div className="col">
					<div
						className="awesome-counter"
						style={{
							textAlign: "center",
						}}
					>
						<span
							style={{
								color: "#B46BD1",
								fontSize: "5rem",
								fontWeight: "900",
								fontFamily: "Open Sans",
							}}
						>
							{placementRateCounter}+
						</span>
						<p
							style={{
								color: "#B46BD1",
								textAlign: "center",
								fontFamily: "Open Sans",
								fontSize: "1rem",
								fontStyle: "normal",
								fontWeight: "500",
							}}
						>
							Hiring partners
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section1;
