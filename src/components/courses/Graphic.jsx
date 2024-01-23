import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useToken } from "../../contexts/TokenProvider";
import { useUser } from "../../contexts/UserProvider";
import DownloadSyllabusFormModal from "../forms/DownloadSyllabusFormModal";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Graphic = ({ data }) => {
	// const { courseId } = useParams();
	// const [token, setToken] = useToken();
	// const [user, setUser] = useUser();
	const [showModal, setShowModal] = useState(false);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

	// const applyNow = () => {
	// 	if (!token) {
	// 		alert("Please login to continue");
	// 		return;
	// 	}

	// 	const headers = new Headers();
	// 	headers.append("Content-Type", "application/json");
	// 	headers.append("Authorization", `Bearer ${token}`);

	// 	fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/sessions`, {
	// 		method: "POST",
	// 		headers,
	// 		body: JSON.stringify({
	// 			email: user.email,
	// 			token,
	// 			courseId,
	// 		}),
	// 	})
	// 		.then((res) => {
	// 			if (res.ok) return res.json();
	// 			return res.json().then((json) => Promise.reject(json));
	// 		})
	// 		.then(({ url }) => {
	// 			window.location = url;
	// 		})
	// 		.catch((e) => {
	// 			console.error(e.error);
	// 		});
	// };
	
	const openSyllabusModal = () => {
		setShowModal(true);
    document.querySelector(".navbar").style.display = "none";
	};

	const closeSyllabusModal = () => {
		setShowModal(false);
    document.querySelector(".navbar").style.display = "block";
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
        <AnchorLink href="#pricing">
        <button type="button" className="purple-button" id="button" 
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
        </AnchorLink>
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
        {showModal && <DownloadSyllabusFormModal closeModal={closeSyllabusModal} onClose={closeSyllabusModal} form={"downloadSyllabus"}/>}
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
                  src={data?.attributes?.bannerImage?.data?.attributes?.url}
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
                  {data?.attributes?.description}
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
                    // lineHeight: "1.88vw",
                    color: "#3D3D3D",
                    lineHeight:"2rem"
                  }}>{data?.attributes?.batches[0]?.type}</div>
                  <div style={{
                    fontSize: "clamp(0.8rem , 1vw , 1rem)",
                    lineHeight: "1.55vw",
                    color: "#3D3D3D",
                  }}>{data?.attributes?.batches[0]?.classDays}</div>
                  <div style={{ display:"flex" , alignItems:"center" , fontWeight:"600"}}>
                    <span style={{margin:"0 1vw 0.4vw 0"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M18.7544 1.87104L13.7488 1.87106V0.625146C13.7488 0.279753 13.4691 0 13.1237 0C12.7783 0 12.4986 0.279753 12.4986 0.625146V1.87075H7.49738V0.625146C7.49738 0.279753 7.21763 0 6.87224 0C6.52684 0 6.24709 0.279753 6.24709 0.625146V1.87075H1.25029C0.559819 1.87075 0 2.43057 0 3.12104V18.7497C0 19.4402 0.559819 20 1.25029 20H18.7544C19.4449 20 20.0047 19.4402 20.0047 18.7497V3.12104C20.0047 2.43086 19.4449 1.87104 18.7544 1.87104ZM18.7544 18.7497H1.25029V3.12104H6.24709V3.75088C6.24709 4.09625 6.52684 4.37603 6.87224 4.37603C7.21763 4.37603 7.49738 4.09625 7.49738 3.75088V3.12136H12.4986V3.75119C12.4986 4.09658 12.7783 4.37634 13.1237 4.37634C13.4691 4.37634 13.7488 4.09658 13.7488 3.75119V3.12136H18.7544V18.7497ZM14.3784 9.99795H15.6287C15.9737 9.99795 16.2538 9.71788 16.2538 9.3728V8.12251C16.2538 7.77743 15.9737 7.49736 15.6287 7.49736H14.3784C14.0333 7.49736 13.7532 7.77743 13.7532 8.12251V9.3728C13.7532 9.71788 14.0333 9.99795 14.3784 9.99795ZM14.3784 14.9988H15.6287C15.9737 14.9988 16.2538 14.7191 16.2538 14.3737V13.1234C16.2538 12.7783 15.9737 12.4982 15.6287 12.4982H14.3784C14.0333 12.4982 13.7532 12.7783 13.7532 13.1234V14.3737C13.7532 14.7194 14.0333 14.9988 14.3784 14.9988ZM10.6275 12.4982H9.3772C9.03212 12.4982 8.75205 12.7783 8.75205 13.1234V14.3737C8.75205 14.7191 9.03212 14.9988 9.3772 14.9988H10.6275C10.9726 14.9988 11.2526 14.7191 11.2526 14.3737V13.1234C11.2526 12.7786 10.9726 12.4982 10.6275 12.4982ZM10.6275 7.49736H9.3772C9.03212 7.49736 8.75205 7.77743 8.75205 8.12251V9.3728C8.75205 9.71788 9.03212 9.99795 9.3772 9.99795H10.6275C10.9726 9.99795 11.2526 9.71788 11.2526 9.3728V8.12251C11.2526 7.77712 10.9726 7.49736 10.6275 7.49736ZM5.62632 7.49736H4.37603C4.03094 7.49736 3.75088 7.77743 3.75088 8.12251V9.3728C3.75088 9.71788 4.03094 9.99795 4.37603 9.99795H5.62632C5.9714 9.99795 6.25146 9.71788 6.25146 9.3728V8.12251C6.25146 7.77712 5.9714 7.49736 5.62632 7.49736ZM5.62632 12.4982H4.37603C4.03094 12.4982 3.75088 12.7783 3.75088 13.1234V14.3737C3.75088 14.7191 4.03094 14.9988 4.37603 14.9988H5.62632C5.9714 14.9988 6.25146 14.7191 6.25146 14.3737V13.1234C6.25146 12.7786 5.9714 12.4982 5.62632 12.4982Z" fill="#B46BD1" opacity={"1"}/>
</svg>
                    </span>
                    <span style={{
                    fontSize: "clamp(0.8rem , 1.1vw , 1.2rem)",
                    lineHeight: "1.55vw",
                    color: "#B46BD1",
                  }}>{(new Date(data?.attributes?.batches[0].startDate)).toLocaleDateString("en-US",options).replace(/,/g, '')}</span>
                    <span style={{minWidth: "0.07vw", minHeight: "30%" , margin:"0.5rem" , backgroundColor:"#B46BD1" , opacity:"0.5"}}></span>
                    <span style={{
                    fontSize: "clamp(0.8rem , 1.1vw , 1.2rem)",
                    lineHeight: "1.55vw",
                    color: "#B46BD1",
                  }}>{data?.attributes?.batches[0].startTime} - {data?.attributes?.batches[0].endTime}</span>
                  </div>
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
                    // lineHeight: "1.88vw",
                    color: "#3D3D3D",
                    lineHeight:"2rem"
                  }}>
                  {data?.attributes?.batches[0].duration}
                  </div>
                  <div style={{
                    fontSize: "clamp(0.8rem , 1vw , 1rem)",
                    lineHeight: "1.55vw",
                    color: "#3D3D3D",
                  }}>{data?.attributes?.batches[0].classDuration}</div>
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
