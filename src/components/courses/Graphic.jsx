import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useToken } from "../../contexts/TokenProvider";
import { useUser } from "../../contexts/UserProvider";
import DownloadSyllabusFormModal from "../forms/DownloadSyllabusFormModal";

const Graphic = ({ data }) => {
	const { courseId } = useParams();
	const [token, setToken] = useToken();
	const [user, setUser] = useUser();
	const [showModal, setShowModal] = useState(false);

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
	
	const openSyllabusModal = () => {
		setShowModal(true);
	};

	const closeSyllabusModal = () => {
		setShowModal(false);
	};

  return (
    <>
      <div
        className="full"
        style={{
          background: "transparent",
          minHeight: "80vw",
          position: "relative",
        }}
      >
        <div className="image-hero">
          <div className="landing-page" id="home-main">
            <div className="landing-page-content">
              <div className="centered-text">
                <h2>{data?.attributes?.name}</h2>
                <p>{data?.attributes?.description}</p>
                <div style={{display:"flex" , width:"70%" , justifyContent:"flex-start" , gap:"1rem"}}>
        <button type="button" className="purple-button" id="button" 
        onClick={applyNow}
        style={{
          borderRadius: "12.32px",
          border: "0.104vw solid #FFF",
          fontSize:"clamp(0.44rem , 2vw , 1.25rem)",
          fontWeight:"500",
          minWidth: "40%",
          aspectRatio: "11/2.7",
          padding:"0.8vw 1vw",
          margin:"2.22vw 0",
          whiteSpace:"nowrap"
        }}>
        <span>
        Apply now
        </span>
        </button>
        <button type="button" className="button btn" onClick={openSyllabusModal} style={{
					borderRadius: "12.32px",
					border: "0.104vw solid #FFF",
					fontSize:"clamp(0.44rem , 2vw , 1.25rem)",
					fontWeight:"500",
					minWidth: "40%",
					aspectRatio: "10/2.8",
					padding:"0 1vw",
					margin:"2.22vw 0",
					whiteSpace:"nowrap",
				}}>
				<span>
              Download Syllabus
        </span>
				</button>
        {showModal && <DownloadSyllabusFormModal closeModal={closeSyllabusModal} onClose={closeSyllabusModal} />}
        {/* </a> */}
				{/* </a> */}
				</div>
                <div style={{ width: "100%", marginTop: "3vw" }}>
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
                      return (
                        <button
                          type="button"
                          className="button"
                          id="button"
                          style={{
                            borderRadius: "0.3rem",
                            border: "1.1px solid #B86CD2",
                            fontWeight: "400",
                            fontSize: "1rem",
                            whiteSpace: "nowrap",
							padding:"1rem"
                          }}
                        >
                          {currEle.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <span className="landing-img" style={{ width: "38vw" }}>
                <img
                  src={data?.attributes?.thumbnail?.data?.attributes?.url}
                  style={{
                    aspectRatio: "1/0.95",
                    marginLeft: "0.5rem",
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div
          className="about"
          style={{
            maxWidth: "100vw",
            display: "flex",
            justifyContent: "center",
			height:"18rem",
          }}
        >
          <div className=" about-first2">
            <div
              className="container about-content course-detail"
              style={{
                display: "grid",
                gridTemplateColumns: "4fr 1fr 4fr 1fr 4fr",
                textAlign: "center",
              }}
            >
              <div
                className="part1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 style={{ fontSize: "clamp(0.56rem , 2vw , 1.5rem)" }}>
                  Course Description
                </h3>
                <span
                  style={{
                    fontSize: "clamp(0.8rem , 1.3vw , 1rem)",
                    lineHeight: "1.3",
                    marginTop: "0.5rem",
                    color: "#3D3D3D",
                  }}
                >
                  Welcome to the enchanting world of "Graphic Design Alchemy,"
                  where creativity knows no bounds, and the ordinary transforms
                  into extraordinary. it's a journey of self-discovery, artistic
                  expression
                </span>
              </div>
              <div
                className="v-line"
                style={{ minWidth: "0.07vw", minHeight: "100%" }}
              ></div>
              <div
                className="h-line"
                style={{
                  minWidth: "100%",
                  height: "0.1vw",
                  display: "none",
                  margin: "auto",
                }}
              ></div>
              <div
                className="part3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3>Next Batch</h3>
                <span
                  style={{
                    fontSize: "clamp(0.8rem , 1.3vw , 1rem)",
                    marginTop: "0.5rem",
                    color: "#3D3D3D",
                  }}
                >
                  <div style={{
                    fontSize: "clamp(1rem , 1.2vw , 1.5rem)",
                    lineHeight: "1.88vw",
                    color: "#3D3D3D",
                  }}>Weekend</div>
                  <div style={{
                    fontSize: "clamp(0.8rem , 1vw , 1rem)",
                    lineHeight: "1.55vw",
                    color: "#3D3D3D",
                  }}>Sat & Sun</div>
                  {/* {data?.attributes?.batches[0].duration} */}
                </span>
              </div>
              <div
                className="v-line"
                style={{ minWidth: "0.07vw", minHeight: "100%" }}
              ></div>
              <div
                className="h-line"
                style={{
                  minWidth: "100%",
                  height: "0.1vw",
                  display: "none",
                  margin: "auto",
                }}
              ></div>
              <div
                className="part2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3>Course Duration</h3>
                <span
                  style={{
                    fontSize: "clamp(0.8rem , 1.3vw , 1rem)",
                    marginTop: "0.5rem",
                    color: "#3D3D3D",
                  }}
                >
                  <div style={{
                    fontSize: "clamp(1rem , 1.2vw , 1.5rem)",
                    lineHeight: "1.88vw",
                    color: "#3D3D3D",
                  }}>
                  {data?.attributes?.batches[0].duration}
                  </div>
                  <div style={{
                    fontSize: "clamp(0.8rem , 1vw , 1rem)",
                    lineHeight: "1.55vw",
                    color: "#3D3D3D",
                  }}>2 hours a day</div>
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
