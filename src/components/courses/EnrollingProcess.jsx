import React from "react";

const EnrollingProcess = () => {
  return (
    <>
      <div
        className="why-this-main"
        style={{
          background:
            "linear-gradient(254deg, #6C0082 0.31%, #44006F 46.97%, #7A0089 114.38%)",
            minHeight:"70vw",
        }}
      >
        <div
          className="why-this-heading"
          style={{ display: "flex", paddingTop: "5.55vw" }}
        >
          <span
            style={{
              width: "31.08vw",
              height: "0.038vw",
              backgroundColor: "#B8B8B8",
              marginTop: "2.22vw",
              marginLeft: "2.22vw",
            }}
          ></span>
          <span className="why-text">Our Enrolling Process !</span>
        </div>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 4fr",
            // width: "100%",
            minHeight: "50vw",
            margin:"6rem 0 0 10rem",
          }}
        >
          <div>
            <span className="why-image" style={{backgroundImage:`url(${"/assets/enrolling-women.png"})` , left:"-4.44vw" , width:"30%" , height:"80%"}}></span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,auto)",
              gap: "1.5rem",
              rowGap: "4rem",
            }}
          >
            <div
              className="card"
              style={{
                width: "22.2vw",
                aspectRatio:"3/3",
                borderRadius: "0.625rem",
                padding: "3.33vw 2.22vw 5.55vw",
              }}
            >
              <p className="card-heading">Explore Course Details </p>
              <p className="card-para">
                Before enrolling, take some time to explore our course details.
                Visit our website and browse through the course description,
                curriculum, and FAQs to ensure it aligns with your goals and
                interests.
              </p>
            </div>
            <div
              className="card"
              style={{
                width: "22.2vw",
                aspectRatio:"3/3",
                borderRadius: "0.625rem",
                padding: "3.33vw 2.22vw 0",
              }}
            >
              <p className="card-heading">Explore Course Details </p>
              <p className="card-para">
                Before enrolling, take some time to explore our course details.
                Visit our website and browse through the course description,
                curriculum, and FAQs to ensure it aligns with your goals and
                interests.
              </p>
            </div>
            <div
              className="card"
              style={{
                width: "22.2vw",
                aspectRatio:"3/3",
                borderRadius: "0.625rem",
                padding: "3.33vw 2.22vw 0",
              }}
            >
              <p className="card-heading">Explore Course Details </p>
              <p className="card-para">
                Before enrolling, take some time to explore our course details.
                Visit our website and browse through the course description,
                curriculum, and FAQs to ensure it aligns with your goals and
                interests.
              </p>
            </div>
            <div
              className="card"
              style={{
                width: "22.2vw",
                aspectRatio:"3/3",
                borderRadius: "0.625rem",
                padding: "3.33vw 2.22vw 0",
              }}
            >
              <p className="card-heading">Explore Course Details </p>
              <p className="card-para">
                Before enrolling, take some time to explore our course details.
                Visit our website and browse through the course description,
                curriculum, and FAQs to ensure it aligns with your goals and
                interests.
              </p>
            </div>
            <div
              className="card"
              style={{
                width: "22.2vw",
                aspectRatio:"3/3",  
                borderRadius: "0.625rem",
                padding: "3.33vw 2.22vw 0",
              }}
            >
              <p className="card-heading">Explore Course Details </p>
              <p className="card-para">
                Before enrolling, take some time to explore our course details.
                Visit our website and browse through the course description,
                curriculum, and FAQs to ensure it aligns with your goals and
                interests.
              </p>
            </div>
            <span className="join-btn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <button className="purple-btn" style={{border:"none" , height:"4vw" , display:"flex", alignItems:"center"}}>
                <p style={{marginRight:"1rem" , textAlign:"center"}}>Join Today</p>
                <span style={{height:"100%" , display:"flex" , alignItems:"flex-start"}}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 15" fill="none">
						<path
							d="M1 7.5L17 7.5M17 7.5L11 13.5M17 7.5L11 1.5"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg></span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollingProcess;
