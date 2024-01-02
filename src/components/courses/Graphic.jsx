import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useToken } from "../../contexts/TokenProvider";
import { useUser } from "../../contexts/UserProvider";
import Header from "../Header";
import LandingPage from "../home/LandingPage";

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
            <div className="landing-page" id="home-main">
			<div className="landing-page-content">
			<div className="centered-text">
				<h2>{data?.attributes?.description}</h2>
				<p>Join us and up-skill yourself to compete with the current industry trends and the booming job markets.</p>
				<div className="buttons" style={{ display: "flex" }}>
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
										borderRadius: "0.6rem",
										border: "1.1px solid #fff",
										marginRight: "1rem",	
										padding: "0.625rem 3.3vw",
										fontWeight: "500",
										fontSize: "clamp(0.8rem , 1.2vw , 1.25rem)",
										maxHeight: "3rem",
										whiteSpace:"nowrap",
									}}
								>
									<span>Download syllabus</span>
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
				<span className="landing-img">
					<img src={data?.attributes?.thumbnail?.data?.attributes?.url} style={{
						maxWidth:"40vw",
						aspectRatio:"1/0.99",
						marginLeft:"0.5rem"
					}}/>
				</span>
			</div>
		</div>
            </div>
            <div className="about" style={{maxWidth:"100vw" , display:"flex" , justifyContent:"center" }}>
            <div className=" about-first2">
            <div className="container about-content">
              <div className="part1">
                <h3>Course Description</h3>
                <p>
                  At Dxolve , we are passionate about empowering
                  creative minds to shape the digital world of tomorrow. We
                  believe in the transformative power of design, and our mission
                  is to provide an exceptional learning experience that nurtures
                  the design talents of individuals like you.
                </p>
                <p>
                  We are a team of dedicated designers, educators, and industry
                  professionals who are committed to nurturing creative talent
                  and fostering innovation
                </p>
              </div>
              
			  <div className="v-line" style={{minWidth:"0.07vw" , minHeight:"100%"}}></div>
              <div className="part2">
                <h3>Course Duration</h3>
                <p>
                  {data?.attributes?.batches[0].duration}
                </p>
              </div>
			  <div className="v-line" style={{minWidth:"0.07vw" , minHeight:"100%"}}></div>
              <div className="part2">
                <h3>Next Batch</h3>
                <p>
                  {data?.attributes?.batches[0].duration}
                </p>
              </div>
            </div>
          </div>
            </div>
        </div>
		</>
	);
};

export default Graphic;
