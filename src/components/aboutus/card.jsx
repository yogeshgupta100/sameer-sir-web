import React from "react";
import { RiInstagramFill } from "react-icons/ri";

const EmpCard = ({ currEle }) => {
	return (
		<div
			className="card-emp"
			style={{
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				minWidth: "20vw",
				aspectRatio:"2/3",
				borderRadius: "0.8325vw",
				border: "0.069vw solid #B86CD2",
				backgroundImage: `url(${import.meta.env.VITE_STRAPI_SERVER_URL}${
					currEle?.attributes?.picture?.data?.attributes?.url
				})`,
			}}
		>
			<div
				className="text"
				style={{
					position: "absolute",
					bottom: "0.41625vw",
					right: "10%",
					fontSize:"clamp(0.6rem , 3vw , 1.2rem)",
				}}
			>
					<span className="card-emp-content" style={{marginBottom:"5px" , color:"#fff"}}>{currEle.attributes.name}</span>
					<span className="card-emp-content">{currEle.attributes.role}</span>
			</div>
			<div className="hidden-content">
				<div className="hidden-container" style={{padding:"0 0 4vw"}}>
					<div style={{whiteSpace:"nowrap" , fontSize:"clamp(1rem , 3vw , 1.5rem)" , color:"#fff"}}><strong>{currEle.attributes.name}</strong></div>
					<div style={{fontSize:"clamp(0.5rem , 3vw , 1rem)" , lineHeight:"1"}}>
						{currEle.attributes.role} at {currEle.attributes.company}
					</div>
					<hr style={{margin:"0.8vw 0"}}/>
					<div style={{fontSize:"clamp(0.5rem , 3vw , 1rem)" , letterSpacing:"1" , lineHeight:"1.5"}}>{currEle.attributes.description}</div>
					<hr style={{margin:"0.8vw 0"}}/>
					<div className="icon-container">
						<a href={currEle.attributes.instagram}>
							<RiInstagramFill />
						</a>
						<a href={currEle.attributes.linkedin}>
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
								<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
							</svg>
						</a>
						<a href={currEle.attributes.facebook}>
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
								<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmpCard;
