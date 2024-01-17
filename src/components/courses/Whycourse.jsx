import React from "react";

const Whycourse = ({data}) => {
  return (
    <>
      <div
        className="why-this-main"
        style={{
          background:
            "linear-gradient(259deg, #D9D9D9 0%, #220238 0.01%, #410248 57.06%, #490246 108.37%)",
        }}
      >
        <div
          className="why-this-heading"
          style={{ display: "flex", paddingTop: "5.55vw" }}
        >
          <div
            style={{
              width: "31.08vw",
              height: "0.028vw",
              backgroundColor: "#B8B8B8",
              marginTop: "2.22vw",
              marginLeft: "2.22vw",
              position: "relative",
              opacity: "0.7",
            }}
          >
            <span
              className="dot"
              style={{ position: "absolute", top: "-0.7vw", left: "1rem" }}
            ></span>
          </div>
          <div className="why-text">Why to take this course ?</div>
        </div>
        <div
          className="why-cards"
          style={{
            width: "70%",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1rem",
            marginTop: "7vw",
            height: "100%",
          }}
        >
          <div
            className="card"
            style={{
              borderRadius: "0.66vw",
              padding: "2.33vw 2.22vw 3.33vw 2.22vw",
              height: "100%",
            }}
          >
            <p
              className="card-heading"
              style={{ fontSize: "clamp(0.56rem , 2vw , 1.5rem)"}}
            >
              {data?.attributes?.whyToTakeThisCourse[0]?.heading}: 
            </p>
            <span
              className="card-para"
              style={{ fontSize: "clamp(0.5rem , 1.3vw , 1rem)" , lineHeight:"1.3" , marginTop:"0.5rem"}}
            >
              {data?.attributes?.whyToTakeThisCourse[0]?.description}
            </span>
          </div>
          <div
            className="card"
            style={{
              borderRadius: "0.66vw",
              padding: "2.33vw 2.22vw 3.33vw 2.22vw",
              // aspectRatio: "4/2.3",
            }}
          >
            <p
              className="card-heading"
              style={{ fontSize: "clamp(0.56rem , 2vw , 1.5rem)" }}
            >
              {data?.attributes?.whyToTakeThisCourse[1]?.heading}:
            </p>
            <p
              className="card-para"
              style={{ fontSize: "clamp(0.5rem , 1.3vw , 1rem)" , lineHeight:"1.3" , marginTop:"0.5rem"}}
            >
              {data?.attributes?.whyToTakeThisCourse[1]?.description}
            </p>
          </div>
          <div
            className="card"
            style={{
              borderRadius: "0.66vw",
              padding: "2.33vw 2.22vw 1vw 2.22vw",
              // aspectRatio: "4/2.3",
            }}
          >
            <p
              className="card-heading"
              style={{ fontSize: "clamp(0.56rem , 2vw , 1.5rem)" }}
            >
              {data?.attributes?.whyToTakeThisCourse[2]?.heading}:
            </p>
            <p
              className="card-para"
              style={{ fontSize: "clamp(0.5rem , 1.3vw , 1rem)" , lineHeight:"1.3" , marginTop:"0.5rem"}}
            >
              {data?.attributes?.whyToTakeThisCourse[2]?.description}
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo(0, 0)}
              style={{
                borderRadius: "0.5rem",
                border: "0.076vw solid #fff",
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
                justifyContent:"center"
              }}
            >
              <p
                style={{
                  alignItems: "flex-end",
                  marginRight: "0.2rem",
                  whiteSpace: "nowrap",
                  fontSize: "clamp(0.5rem , 1.5vw , 0.8rem)",
                  // width: "auto",
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
          </div>
        </div>
        <span
          className="why-image"
          style={{ minWidth: "30%", minHeight: "50%" }}
        ></span>
      </div>
    </>
  );
};

export default Whycourse;
