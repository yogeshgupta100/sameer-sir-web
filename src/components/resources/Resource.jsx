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
          // marginBottom:"2.22vw",
          // minHeight:"80vw",
          position:"relative",
          marginBottom:"11.25vw"
        }}
      >
            <div className="image-hero">
            <div className="landing-page">
			<div className="landing-page-content" style={{justifyContent:"flex-start" , paddingLeft:"6vw" , zIndex:"0"}}>
			<div className="centered-text">
				<h2 style={{whiteSpace:"nowrap" , marginBottom:"0.2rem"}}>Fuel Your Curiosity: Find a Plethora of</h2><h2 style={{whiteSpace:"nowrap"}}> Resources Tailored for Your Learning Journey.</h2>
				<p style={{whiteSpace:"nowrap" , paddingBottom:"0"}}>Dive into a vast array of tools, insights, and support materials meticulously</p><p> assembled to enrich your learning experience. </p>
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
      <Resources imageUrl1={"/assets/resource1.jpeg"} imageUrl2={"/assets/resource2.jpeg"} link={'/tutorials'}/>
      <div className="resource-page" style={{display:"flex" , justifyContent:"center" , width:"100%" , margin:"0"}}>
      <div className='resource-content1' style={{width:"90%"}}>
      <div className="vid-content" style={{width:"45%" , margin:"3rem 0 0 0rem"}}>
          <p>Typography Mastery: Crafting Beautiful</p><p> Text in Your Designs</p>
          <span style={{paddingRight:"1rem" , marginTop:"1vw"}}>Dive deep into the world of typography and elevate your design</span><span>projects with expert tips and techniques.</span>
          <a href='/tutorials' className='purple-btn' style={{
        textDecoration:"none",
        border:"none",
        maxWidth:"12.1vw",
        fontWeight:"500",  
        marginTop:"3vw",
        fontSize:"clamp(0.8rem , 1.5vw , 1rem)",
        whiteSpace:"nowrap",
      }}>Explore more</a>
        </div>
        <div className="vid1" style={{backgroundImage:`url(${"/assets/resource1.jpeg"})`}}></div>
        <div className="vid2" style={{position:"relative" , backgroundImage:`url(${"/assets/resource2.jpeg"})`}}></div>
        </div>
        </div>
        <div className="container" style={{marginTop:"16.65vw" }}>
        <Heading content={"Blogs"} subContent={" Engage in thought-provoking articles, expert opinions, and in-depth analyses that transcend boundaries. Our blog is a treasure trove of diverse topics, offering a rich tapestry of ideas for curious minds."} left={"30.5%"} />
        </div>
      <div style={{ justifyContent:"center" , width:"100%" , display:"flex" , marginBottom:"7vw"}} id='blogs'>
        <div className="blogs-container" style={{marginTop:"5vw" , width:"73%"}}>
        <div style={{width:"100%", textAlign:"end" , margin:"0 0 0.3rem 0"}}>
          <NavLink to={"/blogs"} style={{textDecoration:"none" , color:"#B46BD1"}}>view all</NavLink>
        </div>
          <Blog/>
          </div>
      </div>
      <Upload/>
      <Portfolio/>
      <Upload/>
        <div className="container design">
        <Heading content={"Design Challenges"} subContent={"Immerse yourself in our curated collection of design challenges, showcasing the ingenious solutions crafted by our creative community. "} left={"30.5%"} />
        <div className="DesignCard container" style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          justifyContent:"center",
          gap:"2.22vw",
          paddingTop:"4vw"
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