import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useToken } from "../../contexts/TokenProvider";
import { useUser } from "../../contexts/UserProvider";

const Graphic = ({ data }) => {
	const { courseId } = useParams();
	const [token, setToken] = useToken();
	const [user, setUser] = useUser();

	const applyNow = () => {
		if (!token) {
			alert("Please login to continue");
			return;
		}

		fetch(`${import.meta.env.VITE_EXPRESS_SERVER_URL}/create-checkout-session`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: user.email,
				token,
				courseId,
			}),
		})
			.then((res) => {
				if (res.ok) return res.json();
				return res.json().then((json) => Promise.reject(json));
			})
			.then(({ url }) => {
				window.location = url;
			})
			.catch((e) => {
				console.error(e.error);
			});
	};

	return (
		<>
			<div
        className="full"
        style={{
          background: "transparent",
          marginBottom:"2.22vw",
          minHeight:"80vw",
          position:"relative",
        }}
      >
            <div className="image-hero">
            <div className="landing-page container" id="home-main">
			<div className="landing-page-content container">
			<div className="centered-text container">
				<h2>{data?.attributes?.name}</h2>
				<p>{data?.attributes?.description}</p>
				<div className="buttons" style={{ display: "flex"}}>
							<button
								type="button"
								className="button"
								id="button"
								onClick={applyNow}
								style={{
									borderRadius: "0.6rem",
									border: "1.1px solid #B86CD2",
									marginRight: "1rem",
									padding: "0.625rem 3.3vw",
									fontWeight: "500",
									fontSize: "clamp(0.8rem , 1.2vw , 1.25rem)",
									maxHeight: "3rem",
								}}
							>
								Apply now
							</button>
							<NavLink to={"/forms/downloadSyllabus"}>
								<button
									type="button"
									className="btn"
									style={{
									display: "inline-block",
									borderRadius: "0.6rem",
									border: "1.1px solid #fff",
									marginRight: "1rem",
									padding: "0.5rem 1rem",
									fontWeight: "500",
									fontSize: "clamp(0.8rem, 1.2vw, 1.25rem)",
									whiteSpace: "nowrap",
									width: "auto",
									maxWidth: "100%",
									boxSizing: "border-box",
									height:"2.5rem"
									}}
								>
									Download Syllabus
								</button>
							</NavLink>
						</div>
						<div style={{ width: "100%", marginTop: "5vw" }}>
							<p style={{ margin: "0" }}>Tools covered</p>
							<div
								className="extra-buttons"
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(6,1fr)",
									gap: "0.654rem",
									marginTop: "0",
								}}
							>
								{data?.attributes?.toolsCovered.map((currEle) => {
									return(
										<button
									type="button"
									className="button"
									id="button"
									style={{
										borderRadius: "0.3rem",
										border: "1.1px solid #B86CD2",
										fontWeight: "400",
										fontSize: "0.8rem",
										whiteSpace:"nowrap"
									}}
								>
									{currEle.name}
								</button>
									);
								})}
							</div>
						</div>
			</div>
				<span className="landing-img" style={{width:"38vw"}}>
					<img src={data?.attributes?.thumbnail?.data?.attributes?.url} style={{
						aspectRatio:"1/0.95",
						marginLeft:"0.5rem"
					}}/>
				</span>
			</div>
		</div>
            </div>
            <div className="about" style={{maxWidth:"100vw" , display:"flex" , justifyContent:"center" }}>
            <div className=" about-first2">
            <div className="container about-content course-detail" style={{display:"grid" , gridTemplateColumns:"8fr 1fr 4fr 1fr 4fr" , textAlign:"center"}}>
              <div className="part1" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
                <h3 style={{ fontSize: "clamp(0.56rem , 2vw , 1.5rem)" }}>Course Description</h3>	
                <span style={{ fontSize: "clamp(0.8rem , 1.3vw , 1rem)" , lineHeight:"1.3" , marginTop:"0.5rem" , color:"#3D3D3D"}}>
                  At Dxolve , we are passionate about empowering
                  creative minds to shape the digital world of tomorrow. We
                  believe in the transformative power of design, and our mission
                  is to provide an exceptional learning experience that nurtures
                  the design talents of individuals like you.
                </span>
              </div>
			  <div className="v-line" style={{minWidth:"0.07vw" , minHeight:"100%"}}></div>
			  <div className="h-line" style={{minWidth:"100%" , height:"0.1vw" , display:"none" , margin:"auto"}}></div>
              <div className="part3" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
                <h3>Next Batch</h3>
                <span style={{ fontSize: "clamp(0.8rem , 1.3vw , 1rem)" , lineHeight:"1.3" , marginTop:"0.5rem" , color:"#3D3D3D"}}>
                  {data?.attributes?.batches[0].duration}
                </span>
              </div>
			  <div className="v-line" style={{minWidth:"0.07vw" , minHeight:"100%"}}></div>
			  <div className="h-line" style={{minWidth:"100%" , height:"0.1vw" , display:"none" , margin:"auto"}}></div>
			  <div className="part2" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
                <h3>Course Duration</h3>
                <span style={{ fontSize: "clamp(0.8rem , 1.3vw , 1rem)" , lineHeight:"1.3" , marginTop:"0.5rem" , color:"#3D3D3D"}}>
                  {data?.attributes?.batches[0].duration}
                </span>
              </div>
            </div>
          </div>
            </div>
        </div>
		</>
	);
};

export default Graphic;
