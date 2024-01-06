import React from "react";
import Heading from "../aboutus/Heading";
import { useState } from "react";

const Howyoulearn = () => {
  const [isPathOne, setIsPathOne] = useState(true);
  const [isPathTwo, setIsPathTwo] = useState(true);
  const [isPathThree, setIsPathThree] = useState(true);
  const [isPathFour, setIsPathFour] = useState(true);
  const toggleHandler1 = () => {
    const para1 = document.querySelector(".para1");
    setIsPathOne((prevState) => !prevState);

    if (para1.style.display === "none" || para1.style.display === "") {
      para1.style.display = "block";
    } else {
      para1.style.display = "none";
    }
  };
  const toggleHandler2 = () => {
    const para2 = document.querySelector(".para2");
    setIsPathTwo((prevState) => !prevState);
    if (para2.style.display === "none" || para2.style.display === "") {
      para2.style.display = "block";
    } else {
      para2.style.display = "none";
    }
  };
  const toggleHandler3 = () => {
    const para3 = document.querySelector(".para3");
    setIsPathThree((prevState) => !prevState);
    if (para3.style.display === "none" || para3.style.display === "") {
      para3.style.display = "block";
    } else {
      para3.style.display = "none";
    }
  };
  const toggleHandler4 = () => {
    const para4 = document.querySelector(".para4");
    setIsPathFour((prevState) => !prevState);
    if (para4.style.display === "none" || para4.style.display === "") {
      para4.style.display = "block";
    } else {
      para4.style.display = "none";
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "11.1vw", width: "100%", overflow: "hidden" }}
    >
      <Heading content={"How you learn"} left={"35%"} />
      <div
        className="mt-3 how-you-learn"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          margin: "0 0 8.88vw",
          gap: "1.665vw",
        }}
      >
        <div className="justify-content-around">
          <div
            className=" mt-3 py-0"
            style={{
              boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.15)",
              borderRadius: "0.75rem 0.75rem 0rem 0rem",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <img
              src="/assets/how-you-learn-01.jpeg"
              className="card-img-top"
              alt="course1"
              style={{ aspectRatio: "7/6" }}
            />
            <div
              className="container"
              style={{
                padding: "1.11vw 1.665vw",
                lineHeight: "1",
                aspectRatio: "4/2",
              }}
            >
              <p
                className="howtolearn-id"
                style={{ fontSize: "clamp(1rem , 1.5vw , 1.5rem)" }}
              >
                01.
              </p>
              <div
                className="text"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "0",
                }}
              >
                <div className="howtolearn-content">
                  <h6
                    style={{
                      fontSize: "clamp(1rem , 2vw , 1.3rem)",
                      paddingRight: "0.8rem",
                      width: "80%",
                    }}
                  >
                    Interactive Assignments
                  </h6>
                  <p
                    style={{
                      fontSize: "clamp(0.6rem , 2vw , 1rem)",
                      whiteSpace: "nowrap",
                      margin: "1vw auto",
                    }}
                  >
                    Hands-On Learning
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  onClick={toggleHandler1}
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#B86CD2" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d={
                      isPathOne
                        ? "M9.19944 13.3143C9.27071 13.2246 9.35767 13.1508 9.45535 13.0973C9.55303 13.0438 9.65952 13.0117 9.76872 13.0026C9.87792 12.9936 9.9877 13.0079 10.0918 13.0447C10.1959 13.0815 10.2922 13.1401 10.3753 13.2171L17.6129 19.9149L24.8504 13.2171C25.0192 13.0709 25.234 13.0012 25.4494 13.0228C25.6649 13.0445 25.8641 13.1557 26.0049 13.3331C26.1458 13.5104 26.2173 13.74 26.2043 13.9732C26.1912 14.2064 26.0947 14.4251 25.9352 14.5828L18.1552 21.7834C18.0042 21.9232 17.8118 22 17.6129 22C17.4139 22 17.2216 21.9232 17.0705 21.7834L9.29057 14.5828C9.12295 14.4275 9.01932 14.2066 9.00244 13.9687C8.98556 13.7309 9.05681 13.4955 9.20055 13.3143H9.19944Z"
                        : "M26.0056 22.6857C25.9344 22.7754 25.8474 22.8492 25.7497 22.9027C25.652 22.9562 25.5456 22.9883 25.4364 22.9974C25.3272 23.0064 25.2174 22.9921 25.1133 22.9553C25.0092 22.9185 24.9129 22.8599 24.8298 22.7829L17.5922 16.0851L10.3547 22.7829C10.1859 22.9291 9.97112 22.9988 9.75567 22.9772C9.54022 22.9555 9.34101 22.8443 9.20014 22.6669C9.05927 22.4896 8.9878 22.26 9.00082 22.0268C9.01384 21.7936 9.11034 21.5749 9.26992 21.4172L17.0498 14.2166C17.2009 14.0768 17.3933 14 17.5922 14C17.7911 14 17.9835 14.0768 18.1346 14.2166L25.9145 21.4172C26.0821 21.5725 26.1858 21.7934 26.2026 22.0313C26.2195 22.2691 26.1483 22.5045 26.0045 22.6857L26.0056 22.6857Z"
                    }
                    fill="white"
                  />
                </svg>
              </div>
              <div className="para1" style={{ display: "none" }}>
                <hr style={{ backgroundColor: "rgba(180, 107, 209, 1)" }} />
                <p
                  style={{
                    color: "#4D4D4D",
                    fontFamily: "Open Sans",
                    fontSize: "clamp(0.7rem , 2vw , 1rem)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.3",
                  }}
                >
                  Engage in lively discussions, collaborate seamlessly with
                  peers, and dive into hands-on activities—all from the comfort
                  of your own space.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-content-around">
          <div
            className=" mt-3 py-0"
            style={{
              boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.15)",
              borderRadius: "0.75rem 0.75rem 0rem 0rem",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <img
              src="/assets/how-you-learn-01.jpeg"
              className="card-img-top"
              alt="course1"
              style={{ aspectRatio: "7/6" }}
            />
            <div
              className="container"
              style={{
                padding: "1.11vw 1.665vw",
                lineHeight: "1",
                aspectRatio: "4/2",
              }}
            >
              <p
                className="howtolearn-id"
                style={{ fontSize: "clamp(1rem , 1.5vw , 1.5rem)" }}
              >
                02.
              </p>
              <div
                className="text"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "0",
                }}
              >
                <div className="howtolearn-content">
                  <h6
                    style={{
                      fontSize: "clamp(1rem , 2vw , 1.3rem)",
                      paddingRight: "0.8rem",
                      width: "80%",
                    }}
                  >
                    Real world projects
                  </h6>
                  <p
                    style={{
                      fontSize: "clamp(0.6rem , 2vw , 1rem)",
                      whiteSpace: "nowrap",
                      margin: "1vw auto",
                    }}
                  >
                    Real design scenarios
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  onClick={toggleHandler2}
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#B86CD2" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d={
                      isPathTwo
                        ? "M9.19944 13.3143C9.27071 13.2246 9.35767 13.1508 9.45535 13.0973C9.55303 13.0438 9.65952 13.0117 9.76872 13.0026C9.87792 12.9936 9.9877 13.0079 10.0918 13.0447C10.1959 13.0815 10.2922 13.1401 10.3753 13.2171L17.6129 19.9149L24.8504 13.2171C25.0192 13.0709 25.234 13.0012 25.4494 13.0228C25.6649 13.0445 25.8641 13.1557 26.0049 13.3331C26.1458 13.5104 26.2173 13.74 26.2043 13.9732C26.1912 14.2064 26.0947 14.4251 25.9352 14.5828L18.1552 21.7834C18.0042 21.9232 17.8118 22 17.6129 22C17.4139 22 17.2216 21.9232 17.0705 21.7834L9.29057 14.5828C9.12295 14.4275 9.01932 14.2066 9.00244 13.9687C8.98556 13.7309 9.05681 13.4955 9.20055 13.3143H9.19944Z"
                        : "M26.0056 22.6857C25.9344 22.7754 25.8474 22.8492 25.7497 22.9027C25.652 22.9562 25.5456 22.9883 25.4364 22.9974C25.3272 23.0064 25.2174 22.9921 25.1133 22.9553C25.0092 22.9185 24.9129 22.8599 24.8298 22.7829L17.5922 16.0851L10.3547 22.7829C10.1859 22.9291 9.97112 22.9988 9.75567 22.9772C9.54022 22.9555 9.34101 22.8443 9.20014 22.6669C9.05927 22.4896 8.9878 22.26 9.00082 22.0268C9.01384 21.7936 9.11034 21.5749 9.26992 21.4172L17.0498 14.2166C17.2009 14.0768 17.3933 14 17.5922 14C17.7911 14 17.9835 14.0768 18.1346 14.2166L25.9145 21.4172C26.0821 21.5725 26.1858 21.7934 26.2026 22.0313C26.2195 22.2691 26.1483 22.5045 26.0045 22.6857L26.0056 22.6857Z"
                    }
                    fill="white"
                  />
                </svg>
              </div>
              <div className="para2" style={{ display: "none" }}>
                <hr style={{ backgroundColor: "rgba(180, 107, 209, 1)" }} />
                <p
                  style={{
                    color: "#4D4D4D",
                    fontFamily: "Open Sans",
                    fontSize: "clamp(0.7rem , 2vw , 1rem)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.3",
                  }}
                >
                  We believe in learning by doing, and that's why our courses
                  are designed to bridge the gap between theory and practical
                  application.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-content-around">
          <div
            className=" mt-3 py-0"
            style={{
              boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.15)",
              borderRadius: "0.75rem 0.75rem 0rem 0rem",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <img
              src="/assets/how-you-learn-01.jpeg"
              className="card-img-top"
              alt="course1"
              style={{ aspectRatio: "7/6" }}
            />
            <div
              className="container"
              style={{
                padding: "1.11vw 1.665vw",
                lineHeight: "1",
                aspectRatio: "4/2",
              }}
            >
              <p
                className="howtolearn-id"
                style={{ fontSize: "clamp(1rem , 1.5vw , 1.5rem)" }}
              >
                03.
              </p>
              <div
                className="text"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "0",
                }}
              >
                <div className="howtolearn-content">
                  <h6
                    style={{
                      fontSize: "clamp(1rem , 2vw , 1.3rem)",
                      paddingRight: "0.8rem",
                      width: "80%",
                    }}
                  >
                    Discussion forums
                  </h6>
                  <p
                    style={{
                      fontSize: "clamp(0.6rem , 2vw , 1rem)",
                      whiteSpace: "nowrap",
                      margin: "1vw auto",
                    }}
                  >
                    Sharing ideas and experiences
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  onClick={toggleHandler3}
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#B86CD2" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d={
                      isPathThree
                        ? "M9.19944 13.3143C9.27071 13.2246 9.35767 13.1508 9.45535 13.0973C9.55303 13.0438 9.65952 13.0117 9.76872 13.0026C9.87792 12.9936 9.9877 13.0079 10.0918 13.0447C10.1959 13.0815 10.2922 13.1401 10.3753 13.2171L17.6129 19.9149L24.8504 13.2171C25.0192 13.0709 25.234 13.0012 25.4494 13.0228C25.6649 13.0445 25.8641 13.1557 26.0049 13.3331C26.1458 13.5104 26.2173 13.74 26.2043 13.9732C26.1912 14.2064 26.0947 14.4251 25.9352 14.5828L18.1552 21.7834C18.0042 21.9232 17.8118 22 17.6129 22C17.4139 22 17.2216 21.9232 17.0705 21.7834L9.29057 14.5828C9.12295 14.4275 9.01932 14.2066 9.00244 13.9687C8.98556 13.7309 9.05681 13.4955 9.20055 13.3143H9.19944Z"
                        : "M26.0056 22.6857C25.9344 22.7754 25.8474 22.8492 25.7497 22.9027C25.652 22.9562 25.5456 22.9883 25.4364 22.9974C25.3272 23.0064 25.2174 22.9921 25.1133 22.9553C25.0092 22.9185 24.9129 22.8599 24.8298 22.7829L17.5922 16.0851L10.3547 22.7829C10.1859 22.9291 9.97112 22.9988 9.75567 22.9772C9.54022 22.9555 9.34101 22.8443 9.20014 22.6669C9.05927 22.4896 8.9878 22.26 9.00082 22.0268C9.01384 21.7936 9.11034 21.5749 9.26992 21.4172L17.0498 14.2166C17.2009 14.0768 17.3933 14 17.5922 14C17.7911 14 17.9835 14.0768 18.1346 14.2166L25.9145 21.4172C26.0821 21.5725 26.1858 21.7934 26.2026 22.0313C26.2195 22.2691 26.1483 22.5045 26.0045 22.6857L26.0056 22.6857Z"
                    }
                    fill="white"
                  />
                </svg>
              </div>
              <div className="para3" style={{ display: "none" }}>
                <hr style={{ backgroundColor: "rgba(180, 107, 209, 1)" }} />
                <p
                  style={{
                    color: "#4D4D4D",
                    fontFamily: "Open Sans",
                    fontSize: "clamp(0.7rem , 2vw , 1rem)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.3",
                  }}
                >
                  Our discussion forum is a hub for knowledge-sharing, where you
                  can tap into the collective wisdom of a global community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-content-around">
          <div
            className=" mt-3 py-0"
            style={{
              boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.15)",
              borderRadius: "0.75rem 0.75rem 0rem 0rem",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <img
              src="/assets/how-you-learn-01.jpeg"
              className="card-img-top"
              alt="course1"
              style={{ aspectRatio: "7/6" }}
            />
            <div
              className="container"
              style={{
                padding: "1.11vw 1.665vw",
                lineHeight: "1",
                aspectRatio: "4/2",
              }}
            >
              <p
                className="howtolearn-id"
                style={{ fontSize: "clamp(1rem , 1.5vw , 1.5rem)" }}
              >
                04.
              </p>
              <div
                className="text"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "0",
                }}
              >
                <div className="howtolearn-content">
                  <h6
                    style={{
                      fontSize: "clamp(1rem , 2vw , 1.3rem)",
                      paddingRight: "0.8rem",
                      width: "80%",
                    }}
                  >
                    Peer learning
                  </h6>
                  <p
                    style={{
                      fontSize: "clamp(0.6rem , 2vw , 1rem)",
                      whiteSpace: "nowrap",
                      margin: "1vw auto",
                    }}
                  >
                    Collaborative projects
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  onClick={toggleHandler4}
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#B86CD2" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d={
                      isPathFour
                        ? "M9.19944 13.3143C9.27071 13.2246 9.35767 13.1508 9.45535 13.0973C9.55303 13.0438 9.65952 13.0117 9.76872 13.0026C9.87792 12.9936 9.9877 13.0079 10.0918 13.0447C10.1959 13.0815 10.2922 13.1401 10.3753 13.2171L17.6129 19.9149L24.8504 13.2171C25.0192 13.0709 25.234 13.0012 25.4494 13.0228C25.6649 13.0445 25.8641 13.1557 26.0049 13.3331C26.1458 13.5104 26.2173 13.74 26.2043 13.9732C26.1912 14.2064 26.0947 14.4251 25.9352 14.5828L18.1552 21.7834C18.0042 21.9232 17.8118 22 17.6129 22C17.4139 22 17.2216 21.9232 17.0705 21.7834L9.29057 14.5828C9.12295 14.4275 9.01932 14.2066 9.00244 13.9687C8.98556 13.7309 9.05681 13.4955 9.20055 13.3143H9.19944Z"
                        : "M26.0056 22.6857C25.9344 22.7754 25.8474 22.8492 25.7497 22.9027C25.652 22.9562 25.5456 22.9883 25.4364 22.9974C25.3272 23.0064 25.2174 22.9921 25.1133 22.9553C25.0092 22.9185 24.9129 22.8599 24.8298 22.7829L17.5922 16.0851L10.3547 22.7829C10.1859 22.9291 9.97112 22.9988 9.75567 22.9772C9.54022 22.9555 9.34101 22.8443 9.20014 22.6669C9.05927 22.4896 8.9878 22.26 9.00082 22.0268C9.01384 21.7936 9.11034 21.5749 9.26992 21.4172L17.0498 14.2166C17.2009 14.0768 17.3933 14 17.5922 14C17.7911 14 17.9835 14.0768 18.1346 14.2166L25.9145 21.4172C26.0821 21.5725 26.1858 21.7934 26.2026 22.0313C26.2195 22.2691 26.1483 22.5045 26.0045 22.6857L26.0056 22.6857Z"
                    }
                    fill="white"
                  />
                </svg>
              </div>
              <div className="para4" style={{ display: "none" }}>
                <hr style={{ backgroundColor: "rgba(180, 107, 209, 1)" }} />
                <p
                  style={{
                    color: "#4D4D4D",
                    fontFamily: "Open Sans",
                    fontSize: "clamp(0.7rem , 2vw , 1rem)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.3",
                  }}
                >
                  Engage in enriching discussions, share insights, and
                  collaborate on projects with a diverse group of learners from
                  around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howyoulearn;
