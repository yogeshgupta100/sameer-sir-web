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
            position:"relative"
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
          className="container enrolling"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 6fr",
            minWidth: "100%",
            minHeight: "30vw",
            margin:"6vw 3rem 0 0",
            gap:"3rem"
          }}
        >
          <div style={{ width:"100%" , height:"100%"}}>
            <span className="why-image enrolling-process" style={{backgroundImage:`url(${"/assets/enrolling-women.png"})`, backgroundRepeat:"no-repeat" , backgroundSize:"contain" , position:"absolute", bottom:"0" , left:"0"}}></span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "1.66vw",
              rowGap: "4vw",
              paddingLeft:"2rem"
            }}
          >
            <div
              className="card"
              style={{
                aspectRatio:"3/3",
                borderRadius: "0.625rem",
                padding: "2vw 2vw",
              }}
            >
              <p className="card-heading" style={{fontSize:"clamp(1rem , 1.2vw , 1.5rem)" , marginBottom:"1.22vw"}}>Explore Course Details </p>
              <p className="card-para" style={{fontSize: "clamp(0.7rem , 1.5vw , 1rem)"}}>
                Before enrolling, take some time to explore our course details.
                Visit our website and browse through the course description,
                curriculum, and FAQs to ensure it aligns with your goals and
                interests.
              </p>
            </div>
            <div
              className="card"
              style={{
                aspectRatio:"3/3",
                borderRadius: "0.625rem",
                padding: "2vw 2vw",
              }}
            >
              <p className="card-heading" style={{fontSize:"clamp(1rem , 1.2vw , 1.5rem)" , marginBottom:"1.22vw"}}>Explore Course Details </p>
              <p className="card-para" style={{fontSize: "clamp(0.7rem , 1.5vw , 1rem)"}}>
                Before enrolling, take some time to explore our course details.
                Visit our website and browse through the course description,
                curriculum, and FAQs to ensure it aligns with your goals and
                interests.
              </p>
            </div>
            <div
              className="card"
              style={{
                aspectRatio:"3/3",
                borderRadius: "0.625rem",
                padding: "2vw 2vw",
              }}
            >
              <p className="card-heading" style={{fontSize:"clamp(1rem , 1.2vw , 1.5rem)" , marginBottom:"1.22vw"}}>Explore Course Details </p>
              <p className="card-para" style={{fontSize: "clamp(0.7rem , 1.5vw , 1rem)"}}>
                Before enrolling, take some time to explore our course details.
                Visit our website and browse through the course description,
                curriculum, and FAQs to ensure it aligns with your goals and
                interests.
              </p>
            </div>
            <div
              className="card"
              style={{
                aspectRatio:"3/3",
                borderRadius: "0.625rem",
                padding: "2vw 2vw",
              }}
            >
              <p className="card-heading" style={{fontSize:"clamp(1rem , 1.2vw , 1.5rem)" , marginBottom:"1.22vw"}}>Explore Course Details </p>
              <p className="card-para" style={{fontSize: "clamp(0.7rem , 1.5vw , 1rem)"}}>
                Before enrolling, take some time to explore our course details.
                Visit our website and browse through the course description,
                curriculum, and FAQs to ensure it aligns with your goals and
                interests.
              </p>
            </div>
            <div
              className="card"
              style={{
                aspectRatio:"3/3",
                borderRadius: "0.625rem",
                padding: "2vw 2vw",
              }}
            >
              <p className="card-heading" style={{fontSize:"clamp(1rem , 1.2vw , 1.5rem)" , marginBottom:"1.22vw"}}>Explore Course Details </p>
              <p className="card-para" style={{fontSize: "clamp(0.7rem , 1.5vw , 1rem)"}}>
                Before enrolling, take some time to explore our course details.
                Visit our website and browse through the course description,
                curriculum, and FAQs to ensure it aligns with your goals and
                interests.
              </p>
            </div>
            <span className="join-btn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button
              type="button"
              style={{
                borderRadius: "0.5rem",
                // border: "0.076vw solid #fff",
                fontSize: "0.99vw",
                backgroundColor: " #8833B6",
                width: "clamp(4rem , 50% , 8rem)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "600",
                aspectRatio: "3/1.2",
                marginTop: "1rem",
                boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                justifyContent:"center"
              }}
            >
              <p
                style={{
                  alignItems: "flex-end",
                  // marginRight: "0.2rem",
                  whiteSpace: "nowrap",
                  fontSize: "clamp(0.5rem , 1.5vw , 0.8rem)",
                  width: "auto",
                  margin:"0"
                }}
              >
                Join Today
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
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollingProcess;
