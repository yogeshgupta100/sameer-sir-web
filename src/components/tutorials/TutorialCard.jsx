import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { AiFillInstagram } from 'react-icons/ai'

const TutorialCard = () => {
  return (
    <div className='container' style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
        <div
				className="inner-card"
				style={{
					display: "flex",
					borderRadius: "0.99vw",
					backgroundColor: "#fff",
					boxShadow: "0.13875vw 0.13875vw 1.04vw 0.13875vw rgba(0, 0, 0, 0.05)",
					width: "85%",
					aspectRatio: "3/1",
					alignItems: "flex-start",
					padding: "1.3vw 2.5rem 1.3vw 1.3vw",
					fontWeight: "bold",
					fontSize: "1.332vw",
				}}
			>
				<div className="career_img" style={{width:"45%" ,
				 height:"100%" ,
				  backgroundPosition:"center",
				  backgroundSize:"cover",
				  backgroundRepeat:"no-repeat",
				  display:"flex",
				  alignItems:"center",
				  borderRadius: "0.99vw",
				  boxShadow: "2.856px 2.856px 14.278px 2.856px rgba(0, 0, 0, 0.05)",
                  overflow:"hidden",
				  }}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xi_6oV6A0a4?si=jKgUB3KU4ePvM5ej" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div
				className="inner-card"
				style={{
					margin: "0 2rem 0 3rem",
					width: "50%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    height:"95%"
				}}
			>
				<div>
                <div style={{ color: "#B46BD1", fontWeight: "700", marginBottom: "0.555vw" }}>Visual Storytelling: Designing Compelling Narratives</div>
				<div style={{ whiteSpace: "pre-wrap", fontWeight: "300" , color:"#000" , fontSize:"clamp(0.5rem , 1.5vw , 1rem)"}}>At Dxolve , we are passionate about empowering creative minds to shape the digital world of tomorrow. We believe in the transformative power of design.....</div>
                </div>
				<div style={{width:"100%" , display:"flex" , margin:"1rem 0" , gap:"2rem"}}>
                <div style={{display:"flex" , gap:"0.8vw" , justifyContent:"center"}}>
                <span style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								background: "#B86CD2",
								color: "white",
								borderRadius: "50%",
								height: "30px",
								width: "30px",
								cursor: "pointer"
							}}>
								<AiFillInstagram />
							</span>
                            <span style={{fontSize:"clamp(0.5rem , 1.5vw , 1rem)" , fontWeight:"400" , color:"#B46BD1"}}>2 weeks ago</span>
                </div>
                    <div style={{display:"flex" , gap:"0.8vw" , justifyContent:"center"}}>
                    <span style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								fontSize: "1.2rem",
								background: "#B86CD2",
								color: "white",
								borderRadius: "50%",
								height: "30px",
								width: "30px",
								cursor: "pointer"
							}}>
								<FaYoutube />
							</span>
                            <span style={{fontSize:"clamp(0.5rem , 1.5vw , 1rem)" , fontWeight:"400" , color:"#B46BD1"}}>2 weeks ago</span>
                    </div>
                </div>
				<div style={{width:"100%", display:"flex" , justifyContent:"flex-start"}}>
                    <span style={{width:"clamp(50px , 1vw , 60px)" , aspectRatio:"1/1" , backgroundImage:`url(${"/assets/emp1.jpg"})`, backgroundPosition:"center" , backgroundSize:"cover" , backgroundRepeat:"no-repeat" , borderRadius:"50%"}}></span>
                    <div style={{display:"flex" , flexDirection:"column" , whiteSpace:"nowrap" , color:"#B46BD1" , marginLeft:"1rem"}}>
                        <span style={{fontSize:"clamp(0.9rem , 1.5vw , 1.25rem)" , fontWeight:"600"}}>Omkar Nath</span>
                        <span style={{fontSize:"clamp(0.5rem , 1.5vw , 1rem)" , fontWeight:"400"}}>2 weeks ago</span>
                    </div>
                </div>
			</div>
            <div className="fav-icon" style={{height:"100%" }}>
            <NavLink to={"https://youtube.com/@dxolve_official?si=C4s_wlnZZJdeNqHe"}>
							<span style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								fontSize: "1.2rem",
								background: "#B86CD2",
								color: "white",
								borderRadius: "50%",
								height: "30px",
								width: "30px",
								cursor: "pointer"
							}}>
								
							</span>
                            </NavLink>
            </div>
            </div>
    </div>
  )
}

export default TutorialCard