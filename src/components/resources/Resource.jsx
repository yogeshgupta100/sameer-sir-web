import React, { useState } from 'react'
import Header from '../Header'
import LandingPage from '../home/LandingPage'
import Resources from '../home/Resource'
import Heading from '../aboutus/Heading'
import DesignCard from './DesignCard'
import Blog from './Blog'
import Small_nav from '../Small_nav';
import Portfolio from './Portfolio'
import Upload from './Upload'
import { NavLink } from 'react-router-dom'
import { useToken } from '../../contexts/TokenProvider'
import { useUser } from '../../contexts/UserProvider'

const Resource = ({designCardData}) => {
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
      <div className="banner" style={{
          boxShadow: "0 0.069vw 0.555vw 0 rgba(0, 0, 0, 0.25)",
        }}>
      <Header/>
        </div>
      <div className="full-body" style={{position:"relative" , maxWidth:"100vw" , marginBottom:"3vw", display:"flex" , flexDirection:"column" , alignItems:"center"}}>
        <Small_nav/>  
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
			<div className="landing-page-content" style={{justifyContent:"flex-start" , paddingLeft:"6vw"}}>
			<div className="centered-text">
				<h2>Fuel Your Curiosity: Find a Plethora of Resources Tailored for Your Learning Journey.</h2>
				<p>Dive into a vast array of tools, insights, and support materials meticulously assembled to enrich your learning experience. </p>
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
			</div>
      </div>
            </div>
            <div className="about" style={{maxWidth:"100vw" , display:"flex" , justifyContent:"center"}}>
            <div className=" about-first2">
            <div className="container about-content course-detail" style={{display:"grid" , gridTemplateColumns:"4fr 1fr 4fr 1fr 4fr" , textAlign:"center"}}>
              <div className="part1" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
                <span style={{ fontSize: "clamp(1.5rem , 3vw , 2.5rem)"  , fontWeight:"600" , color:"#B46BD1" , lineHeight:"1.5"}}>50+</span>	
                <p style={{fontSize:"clamp(1rem , 2vw , 1.5rem)" , color:"#B46BD1"}}>Articles</p>
                <span style={{ fontSize: "clamp(0.8rem , 1.3vw , 1rem)" , lineHeight:"1.3" , marginTop:"0.5rem" , color:"#3D3D3D"}}>
                Join us on a journey into the future of digital  design and technology as we unveil the hottest trends set to shape the digital landscape in now and beyond.
                </span>
              </div>
			  <div className="v-line" style={{minWidth:"0.07vw" , minHeight:"100%"}}></div>
			  <div className="h-line" style={{minWidth:"100%" , height:"0.1vw" , display:"none" , margin:"auto"}}></div>
              <div className="part3" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
              <span style={{ fontSize: "clamp(1.5rem , 3vw , 2.5rem)"  , fontWeight:"600" , color:"#B46BD1" , lineHeight:"1.5"}}>30+</span>	
              <p style={{fontSize:"clamp(1rem , 2vw , 1.5rem)" , color:"#B46BD1"}}>Tutorials</p>
                <span style={{ fontSize: "clamp(0.8rem , 1.3vw , 1rem)" , lineHeight:"1.3" , marginTop:"0.5rem" , color:"#3D3D3D"}}>
                Unlock the secrets to creating exceptional digital experiences with our in-depth tutorial on mastering user-centered approach.
                </span>
              </div>
			  <div className="v-line" style={{minWidth:"0.07vw" , minHeight:"100%"}}></div>
			  <div className="h-line" style={{minWidth:"100%" , height:"0.1vw" , display:"none" , margin:"auto"}}></div>
			  <div className="part2" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
        <span style={{ fontSize: "clamp(1.5rem , 3vw , 2.5rem)"  , fontWeight:"600" , color:"#B46BD1" , lineHeight:"1.5"}}>40+</span>	
        <p style={{fontSize:"clamp(1rem , 2vw , 1.5rem)" , color:"#B46BD1"}}>Design challenges</p>
                <span style={{ fontSize: "clamp(0.8rem , 1.3vw , 1rem)" , lineHeight:"1.3" , marginTop:"0.5rem" , color:"#3D3D3D"}}>
                Welcome to Dxolve's Design Challenges, where innovation meets practicality, and where theory becomes hands-on experience.
                </span>
              </div>
            </div>
          </div>
            </div>
        </div>
      </div>
      <div className='container'><Heading content="Tutorials" subContent={"Immerse yourself in a world of guided learning, designed to empower learners of all levels. Our in-depth tutorials are crafted to simplify complex concepts, providing a seamless path from understanding to expertise."} left="20.5%"/></div>
      <Resources/>
      <div className='resource-content1' style={{paddingRight:"1rem"}}>
        <div className="vid-content" style={{width:"100%" , marginRight:"1rem"}}>
          <h4>Typography Mastery: Crafting Beautiful Text in Your Designs</h4>
          <span style={{paddingRight:"3rem" , marginTop:"0.6rem"}}>Dive deep into the world of typography and elevate your design projects with expert tips and techniques.</span>
          <button className='purple-btn' style={{
            textDecoration:"none",
            border:"none",
            maxWidth:"12.1vw",
            fontWeight:"500",  
            marginTop:"2.1vw",
            fontSize:"clamp(0.8rem , 1.5vw , 1rem)",
            whiteSpace:"nowrap",
          }}>Explore more</button>
        </div>
          <div className="vid1"></div>
          <div className="vid2" style={{position:"relative"}}></div>
        </div>
      <div className="container" style={{marginTop:"16.65vw"}} id='blogs'>
        <Heading content={"Blogs"} left={"30.5%"} />
        <div className="blogs-container container">
        <div className='container' style={{width:"100%", textAlign:"end"}}>
          <NavLink to={"/blogs"} style={{textDecoration:"none" , color:"#B46BD1"}}>view all</NavLink>
        </div>
          <Blog/>
          </div>
      </div>
      <Upload/>
      <Portfolio/>
      <Upload/>
        <div className="container design" style={{marginTop:"9.99vw"}}>
        <Heading content={"Design Challenges"} left={"30.5%"} />
        <div className="DesignCard container" style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          justifyContent:"center",
          gap:"2.22vw"
        }}>
          {designCardData.map((currEle) => {
      return(
          <DesignCard currEle={currEle}/>
        );
        })
      }
        </div>
        </div>
        </div>
    </>
  )
}

export default Resource