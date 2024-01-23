import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useToken } from "../../contexts/TokenProvider";
import { useUser } from "../../contexts/UserProvider";
import Heading from '../aboutus/Heading'

const Pricing = () => {
    const { courseId } = useParams();
	const [token, setToken] = useToken();
	const [user, setUser] = useUser();
    const applyNow = () => {
		if (!token) {
			alert("Please login to continue");
			return;
		}

		const headers = new Headers();
		headers.append("Content-Type", "application/json");
		headers.append("Authorization", `Bearer ${token}`);

		fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/sessions`, {
			method: "POST",
			headers,
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
    <div id="pricing" style={{margin:"12vw 0"}}>
     <div className="container">
     <Heading content={"Pricing process"} subContent={"Flexible Pricing, Unmatched Value: Explore Our Subscription Options Tailored to Your Learning Needs"} left={"23.5%"} />
     </div>
      <div className="pricing-main">
      <div style={{width:"100%", position:"absolute" , bottom:"2.8vw" , display:"flex" , justifyContent:"flex-start" , left:"21.5vw"}}>
      <button
              type="button"
              onClick={applyNow}
              style={{
                borderRadius: "0.5rem",
                // border: "0.076vw solid #fff",
                fontSize: "0.99vw",
                backgroundColor: " #8833B6",
                width: "clamp(6rem , 70% , 13vw)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "600",
                aspectRatio: "3/1",
                marginLeft: "9vw",
                justifyContent:"center",
              }}
            >
              <p
                style={{
                  alignItems: "flex-end",
                  whiteSpace: "nowrap",
                  fontSize: "clamp(0.5rem , 1.5vw , 0.8rem)",
                  margin:"0",
                  paddingRight:"0.5vw"
                }}
              >
                Start Applying
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
              >
                <path
                  d="M1 7.5L17 7.5M17 7.5L11 13.5M17 7.5L11 1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
      </div>
        <img src='/assets/pricing.png' style={{width:"100%" , height:"100%"}} />
      </div>
    </div>
  )
}

export default Pricing