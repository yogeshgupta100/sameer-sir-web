import React from "react";
import Header from "../Header";
import { NavLink } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";

const Banner = () => {
  return (
    <>
      <div
        className="banner"
        style={{
          boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Header />
      </div>
      <div className="container">
        <div className="small-nav">
          <ul
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              textDecoration: "none",
              alignItems: "center",
              listStyleType:"none",
            }}
          >
            <li style={{ textDecoration: "none" }}>
              <NavLink
                to={"/all"}
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}>
                  All
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/graphic "}
                style={{
                  textDecoration: "none",
                }}
              >
                
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Graphic Design 
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/ui/ux"}
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Ui/UX Design
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/virtualReality"}
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Virtual Reality
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/all"}
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Raleway",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "medium",
                    fontStyle: "normal",
                    textAlign: "center",
                  }}
                >
                  Art
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <span
          className="icon-container"
          style={{
            width: "100%",
            margin: "2rem 0",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            style={{
              width: "2rem",
              height: "2rem",
            }}
          >
            <circle cx="20" cy="20" r="20" fill="#B86CD2" />
            <path
              d="M21.0282 10.0012C21.7579 9.99843 22.4876 10.0058 23.2171 10.0232L23.4111 10.0302C23.6351 10.0382 23.8561 10.0482 24.1231 10.0602C25.1871 10.1102 25.913 10.2782 26.55 10.5252C27.21 10.7792 27.766 11.1232 28.322 11.6792C28.8303 12.1788 29.2237 12.7831 29.4749 13.4501C29.7219 14.0871 29.8899 14.8141 29.9399 15.878C29.9519 16.144 29.9619 16.366 29.9699 16.59L29.9759 16.784C29.9937 17.5132 30.0013 18.2425 29.9989 18.9719L29.9999 19.7179V21.0279C30.0024 21.7576 29.9947 22.4873 29.9769 23.2168L29.9709 23.4108C29.9629 23.6348 29.9529 23.8558 29.9409 24.1227C29.8909 25.1867 29.7209 25.9127 29.4749 26.5497C29.2246 27.2174 28.831 27.8222 28.322 28.3216C27.8219 28.8299 27.2173 29.2233 26.55 29.4746C25.913 29.7216 25.1871 29.8896 24.1231 29.9396C23.8561 29.9516 23.6351 29.9615 23.4111 29.9696L23.2171 29.9755C22.4876 29.9933 21.7579 30.001 21.0282 29.9986L20.2822 29.9995H18.9733C18.2436 30.002 17.5138 29.9943 16.7843 29.9766L16.5904 29.9706C16.353 29.9619 16.1156 29.9519 15.8784 29.9406C14.8144 29.8906 14.0884 29.7206 13.4505 29.4746C12.7832 29.2239 12.1787 28.8304 11.6795 28.3216C11.1706 27.8219 10.7768 27.2172 10.5256 26.5497C10.2786 25.9127 10.1106 25.1867 10.0606 24.1227C10.0494 23.8855 10.0394 23.6481 10.0306 23.4108L10.0256 23.2168C10.0071 22.4873 9.99881 21.7576 10.0006 21.0279V18.9719C9.99779 18.2425 10.0051 17.5132 10.0226 16.784L10.0296 16.59C10.0376 16.366 10.0476 16.144 10.0596 15.878C10.1096 14.8131 10.2776 14.0881 10.5246 13.4501C10.7759 12.7828 11.1705 12.1786 11.6805 11.6802C12.1794 11.1709 12.7834 10.7768 13.4505 10.5252C14.0884 10.2782 14.8134 10.1102 15.8784 10.0602L16.5904 10.0302L16.7843 10.0252C17.5135 10.0068 18.2429 9.99847 18.9723 10.0002L21.0282 10.0012ZM20.0002 15.0011C19.3378 14.9917 18.68 15.1141 18.0653 15.3611C17.4505 15.6082 16.891 15.9749 16.4192 16.4401C15.9474 16.9052 15.5728 17.4595 15.3171 18.0707C15.0614 18.6819 14.9297 19.3379 14.9297 20.0004C14.9297 20.6629 15.0614 21.3189 15.3171 21.9301C15.5728 22.5413 15.9474 23.0956 16.4192 23.5607C16.891 24.0259 17.4505 24.3926 18.0653 24.6397C18.68 24.8867 19.3378 25.0091 20.0002 24.9997C21.3263 24.9997 22.598 24.473 23.5356 23.5353C24.4733 22.5977 25.0001 21.3259 25.0001 19.9999C25.0001 18.6739 24.4733 17.4021 23.5356 16.4645C22.598 15.5268 21.3263 15.0011 20.0002 15.0011ZM20.0002 17.001C20.3987 16.9936 20.7947 17.0658 21.165 17.2132C21.5353 17.3606 21.8725 17.5803 22.1569 17.8595C22.4414 18.1387 22.6673 18.4718 22.8216 18.8393C22.9758 19.2068 23.0553 19.6013 23.0554 19.9999C23.0555 20.3984 22.9761 20.793 22.822 21.1606C22.6678 21.5281 22.442 21.8613 22.1577 22.1406C21.8733 22.4198 21.5362 22.6397 21.1659 22.7872C20.7957 22.9347 20.3997 23.007 20.0012 22.9998C19.2056 22.9998 18.4426 22.6837 17.88 22.1211C17.3174 21.5585 17.0013 20.7955 17.0013 19.9999C17.0013 19.2043 17.3174 18.4412 17.88 17.8786C18.4426 17.3161 19.2056 17 20.0012 17L20.0002 17.001ZM25.2501 13.5011C24.9275 13.514 24.6224 13.6513 24.3987 13.8841C24.175 14.1169 24.0501 14.4272 24.0501 14.7501C24.0501 15.0729 24.175 15.3833 24.3987 15.6161C24.6224 15.8489 24.9275 15.9861 25.2501 15.999C25.5816 15.999 25.8995 15.8673 26.1339 15.6329C26.3683 15.3985 26.5 15.0806 26.5 14.7491C26.5 14.4176 26.3683 14.0996 26.1339 13.8652C25.8995 13.6308 25.5816 13.4991 25.2501 13.4991V13.5011Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            style={{
              width: "2rem",
              height: "2rem",
            }}
          >
            <circle cx="20" cy="20" r="20" fill="#B86CD2" />
            <path
              d="M21.0282 10.0012C21.7579 9.99843 22.4876 10.0058 23.2171 10.0232L23.4111 10.0302C23.6351 10.0382 23.8561 10.0482 24.1231 10.0602C25.1871 10.1102 25.913 10.2782 26.55 10.5252C27.21 10.7792 27.766 11.1232 28.322 11.6792C28.8303 12.1788 29.2237 12.7831 29.4749 13.4501C29.7219 14.0871 29.8899 14.8141 29.9399 15.878C29.9519 16.144 29.9619 16.366 29.9699 16.59L29.9759 16.784C29.9937 17.5132 30.0013 18.2425 29.9989 18.9719L29.9999 19.7179V21.0279C30.0024 21.7576 29.9947 22.4873 29.9769 23.2168L29.9709 23.4108C29.9629 23.6348 29.9529 23.8558 29.9409 24.1227C29.8909 25.1867 29.7209 25.9127 29.4749 26.5497C29.2246 27.2174 28.831 27.8222 28.322 28.3216C27.8219 28.8299 27.2173 29.2233 26.55 29.4746C25.913 29.7216 25.1871 29.8896 24.1231 29.9396C23.8561 29.9516 23.6351 29.9615 23.4111 29.9696L23.2171 29.9755C22.4876 29.9933 21.7579 30.001 21.0282 29.9986L20.2822 29.9995H18.9733C18.2436 30.002 17.5138 29.9943 16.7843 29.9766L16.5904 29.9706C16.353 29.9619 16.1156 29.9519 15.8784 29.9406C14.8144 29.8906 14.0884 29.7206 13.4505 29.4746C12.7832 29.2239 12.1787 28.8304 11.6795 28.3216C11.1706 27.8219 10.7768 27.2172 10.5256 26.5497C10.2786 25.9127 10.1106 25.1867 10.0606 24.1227C10.0494 23.8855 10.0394 23.6481 10.0306 23.4108L10.0256 23.2168C10.0071 22.4873 9.99881 21.7576 10.0006 21.0279V18.9719C9.99779 18.2425 10.0051 17.5132 10.0226 16.784L10.0296 16.59C10.0376 16.366 10.0476 16.144 10.0596 15.878C10.1096 14.8131 10.2776 14.0881 10.5246 13.4501C10.7759 12.7828 11.1705 12.1786 11.6805 11.6802C12.1794 11.1709 12.7834 10.7768 13.4505 10.5252C14.0884 10.2782 14.8134 10.1102 15.8784 10.0602L16.5904 10.0302L16.7843 10.0252C17.5135 10.0068 18.2429 9.99847 18.9723 10.0002L21.0282 10.0012ZM20.0002 15.0011C19.3378 14.9917 18.68 15.1141 18.0653 15.3611C17.4505 15.6082 16.891 15.9749 16.4192 16.4401C15.9474 16.9052 15.5728 17.4595 15.3171 18.0707C15.0614 18.6819 14.9297 19.3379 14.9297 20.0004C14.9297 20.6629 15.0614 21.3189 15.3171 21.9301C15.5728 22.5413 15.9474 23.0956 16.4192 23.5607C16.891 24.0259 17.4505 24.3926 18.0653 24.6397C18.68 24.8867 19.3378 25.0091 20.0002 24.9997C21.3263 24.9997 22.598 24.473 23.5356 23.5353C24.4733 22.5977 25.0001 21.3259 25.0001 19.9999C25.0001 18.6739 24.4733 17.4021 23.5356 16.4645C22.598 15.5268 21.3263 15.0011 20.0002 15.0011ZM20.0002 17.001C20.3987 16.9936 20.7947 17.0658 21.165 17.2132C21.5353 17.3606 21.8725 17.5803 22.1569 17.8595C22.4414 18.1387 22.6673 18.4718 22.8216 18.8393C22.9758 19.2068 23.0553 19.6013 23.0554 19.9999C23.0555 20.3984 22.9761 20.793 22.822 21.1606C22.6678 21.5281 22.442 21.8613 22.1577 22.1406C21.8733 22.4198 21.5362 22.6397 21.1659 22.7872C20.7957 22.9347 20.3997 23.007 20.0012 22.9998C19.2056 22.9998 18.4426 22.6837 17.88 22.1211C17.3174 21.5585 17.0013 20.7955 17.0013 19.9999C17.0013 19.2043 17.3174 18.4412 17.88 17.8786C18.4426 17.3161 19.2056 17 20.0012 17L20.0002 17.001ZM25.2501 13.5011C24.9275 13.514 24.6224 13.6513 24.3987 13.8841C24.175 14.1169 24.0501 14.4272 24.0501 14.7501C24.0501 15.0729 24.175 15.3833 24.3987 15.6161C24.6224 15.8489 24.9275 15.9861 25.2501 15.999C25.5816 15.999 25.8995 15.8673 26.1339 15.6329C26.3683 15.3985 26.5 15.0806 26.5 14.7491C26.5 14.4176 26.3683 14.0996 26.1339 13.8652C25.8995 13.6308 25.5816 13.4991 25.2501 13.4991V13.5011Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            style={{
              width: "2rem",
              height: "2rem",
            }}
          >
            <circle cx="20" cy="20" r="20" fill="#B86CD2" />
            <path
              d="M21.0282 10.0012C21.7579 9.99843 22.4876 10.0058 23.2171 10.0232L23.4111 10.0302C23.6351 10.0382 23.8561 10.0482 24.1231 10.0602C25.1871 10.1102 25.913 10.2782 26.55 10.5252C27.21 10.7792 27.766 11.1232 28.322 11.6792C28.8303 12.1788 29.2237 12.7831 29.4749 13.4501C29.7219 14.0871 29.8899 14.8141 29.9399 15.878C29.9519 16.144 29.9619 16.366 29.9699 16.59L29.9759 16.784C29.9937 17.5132 30.0013 18.2425 29.9989 18.9719L29.9999 19.7179V21.0279C30.0024 21.7576 29.9947 22.4873 29.9769 23.2168L29.9709 23.4108C29.9629 23.6348 29.9529 23.8558 29.9409 24.1227C29.8909 25.1867 29.7209 25.9127 29.4749 26.5497C29.2246 27.2174 28.831 27.8222 28.322 28.3216C27.8219 28.8299 27.2173 29.2233 26.55 29.4746C25.913 29.7216 25.1871 29.8896 24.1231 29.9396C23.8561 29.9516 23.6351 29.9615 23.4111 29.9696L23.2171 29.9755C22.4876 29.9933 21.7579 30.001 21.0282 29.9986L20.2822 29.9995H18.9733C18.2436 30.002 17.5138 29.9943 16.7843 29.9766L16.5904 29.9706C16.353 29.9619 16.1156 29.9519 15.8784 29.9406C14.8144 29.8906 14.0884 29.7206 13.4505 29.4746C12.7832 29.2239 12.1787 28.8304 11.6795 28.3216C11.1706 27.8219 10.7768 27.2172 10.5256 26.5497C10.2786 25.9127 10.1106 25.1867 10.0606 24.1227C10.0494 23.8855 10.0394 23.6481 10.0306 23.4108L10.0256 23.2168C10.0071 22.4873 9.99881 21.7576 10.0006 21.0279V18.9719C9.99779 18.2425 10.0051 17.5132 10.0226 16.784L10.0296 16.59C10.0376 16.366 10.0476 16.144 10.0596 15.878C10.1096 14.8131 10.2776 14.0881 10.5246 13.4501C10.7759 12.7828 11.1705 12.1786 11.6805 11.6802C12.1794 11.1709 12.7834 10.7768 13.4505 10.5252C14.0884 10.2782 14.8134 10.1102 15.8784 10.0602L16.5904 10.0302L16.7843 10.0252C17.5135 10.0068 18.2429 9.99847 18.9723 10.0002L21.0282 10.0012ZM20.0002 15.0011C19.3378 14.9917 18.68 15.1141 18.0653 15.3611C17.4505 15.6082 16.891 15.9749 16.4192 16.4401C15.9474 16.9052 15.5728 17.4595 15.3171 18.0707C15.0614 18.6819 14.9297 19.3379 14.9297 20.0004C14.9297 20.6629 15.0614 21.3189 15.3171 21.9301C15.5728 22.5413 15.9474 23.0956 16.4192 23.5607C16.891 24.0259 17.4505 24.3926 18.0653 24.6397C18.68 24.8867 19.3378 25.0091 20.0002 24.9997C21.3263 24.9997 22.598 24.473 23.5356 23.5353C24.4733 22.5977 25.0001 21.3259 25.0001 19.9999C25.0001 18.6739 24.4733 17.4021 23.5356 16.4645C22.598 15.5268 21.3263 15.0011 20.0002 15.0011ZM20.0002 17.001C20.3987 16.9936 20.7947 17.0658 21.165 17.2132C21.5353 17.3606 21.8725 17.5803 22.1569 17.8595C22.4414 18.1387 22.6673 18.4718 22.8216 18.8393C22.9758 19.2068 23.0553 19.6013 23.0554 19.9999C23.0555 20.3984 22.9761 20.793 22.822 21.1606C22.6678 21.5281 22.442 21.8613 22.1577 22.1406C21.8733 22.4198 21.5362 22.6397 21.1659 22.7872C20.7957 22.9347 20.3997 23.007 20.0012 22.9998C19.2056 22.9998 18.4426 22.6837 17.88 22.1211C17.3174 21.5585 17.0013 20.7955 17.0013 19.9999C17.0013 19.2043 17.3174 18.4412 17.88 17.8786C18.4426 17.3161 19.2056 17 20.0012 17L20.0002 17.001ZM25.2501 13.5011C24.9275 13.514 24.6224 13.6513 24.3987 13.8841C24.175 14.1169 24.0501 14.4272 24.0501 14.7501C24.0501 15.0729 24.175 15.3833 24.3987 15.6161C24.6224 15.8489 24.9275 15.9861 25.2501 15.999C25.5816 15.999 25.8995 15.8673 26.1339 15.6329C26.3683 15.3985 26.5 15.0806 26.5 14.7491C26.5 14.4176 26.3683 14.0996 26.1339 13.8652C25.8995 13.6308 25.5816 13.4991 25.2501 13.4991V13.5011Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            style={{
              width: "2rem",
              height: "2rem",
            }}
          >
            <circle cx="20" cy="20" r="20" fill="#B86CD2" />
            <path
              d="M21.0282 10.0012C21.7579 9.99843 22.4876 10.0058 23.2171 10.0232L23.4111 10.0302C23.6351 10.0382 23.8561 10.0482 24.1231 10.0602C25.1871 10.1102 25.913 10.2782 26.55 10.5252C27.21 10.7792 27.766 11.1232 28.322 11.6792C28.8303 12.1788 29.2237 12.7831 29.4749 13.4501C29.7219 14.0871 29.8899 14.8141 29.9399 15.878C29.9519 16.144 29.9619 16.366 29.9699 16.59L29.9759 16.784C29.9937 17.5132 30.0013 18.2425 29.9989 18.9719L29.9999 19.7179V21.0279C30.0024 21.7576 29.9947 22.4873 29.9769 23.2168L29.9709 23.4108C29.9629 23.6348 29.9529 23.8558 29.9409 24.1227C29.8909 25.1867 29.7209 25.9127 29.4749 26.5497C29.2246 27.2174 28.831 27.8222 28.322 28.3216C27.8219 28.8299 27.2173 29.2233 26.55 29.4746C25.913 29.7216 25.1871 29.8896 24.1231 29.9396C23.8561 29.9516 23.6351 29.9615 23.4111 29.9696L23.2171 29.9755C22.4876 29.9933 21.7579 30.001 21.0282 29.9986L20.2822 29.9995H18.9733C18.2436 30.002 17.5138 29.9943 16.7843 29.9766L16.5904 29.9706C16.353 29.9619 16.1156 29.9519 15.8784 29.9406C14.8144 29.8906 14.0884 29.7206 13.4505 29.4746C12.7832 29.2239 12.1787 28.8304 11.6795 28.3216C11.1706 27.8219 10.7768 27.2172 10.5256 26.5497C10.2786 25.9127 10.1106 25.1867 10.0606 24.1227C10.0494 23.8855 10.0394 23.6481 10.0306 23.4108L10.0256 23.2168C10.0071 22.4873 9.99881 21.7576 10.0006 21.0279V18.9719C9.99779 18.2425 10.0051 17.5132 10.0226 16.784L10.0296 16.59C10.0376 16.366 10.0476 16.144 10.0596 15.878C10.1096 14.8131 10.2776 14.0881 10.5246 13.4501C10.7759 12.7828 11.1705 12.1786 11.6805 11.6802C12.1794 11.1709 12.7834 10.7768 13.4505 10.5252C14.0884 10.2782 14.8134 10.1102 15.8784 10.0602L16.5904 10.0302L16.7843 10.0252C17.5135 10.0068 18.2429 9.99847 18.9723 10.0002L21.0282 10.0012ZM20.0002 15.0011C19.3378 14.9917 18.68 15.1141 18.0653 15.3611C17.4505 15.6082 16.891 15.9749 16.4192 16.4401C15.9474 16.9052 15.5728 17.4595 15.3171 18.0707C15.0614 18.6819 14.9297 19.3379 14.9297 20.0004C14.9297 20.6629 15.0614 21.3189 15.3171 21.9301C15.5728 22.5413 15.9474 23.0956 16.4192 23.5607C16.891 24.0259 17.4505 24.3926 18.0653 24.6397C18.68 24.8867 19.3378 25.0091 20.0002 24.9997C21.3263 24.9997 22.598 24.473 23.5356 23.5353C24.4733 22.5977 25.0001 21.3259 25.0001 19.9999C25.0001 18.6739 24.4733 17.4021 23.5356 16.4645C22.598 15.5268 21.3263 15.0011 20.0002 15.0011ZM20.0002 17.001C20.3987 16.9936 20.7947 17.0658 21.165 17.2132C21.5353 17.3606 21.8725 17.5803 22.1569 17.8595C22.4414 18.1387 22.6673 18.4718 22.8216 18.8393C22.9758 19.2068 23.0553 19.6013 23.0554 19.9999C23.0555 20.3984 22.9761 20.793 22.822 21.1606C22.6678 21.5281 22.442 21.8613 22.1577 22.1406C21.8733 22.4198 21.5362 22.6397 21.1659 22.7872C20.7957 22.9347 20.3997 23.007 20.0012 22.9998C19.2056 22.9998 18.4426 22.6837 17.88 22.1211C17.3174 21.5585 17.0013 20.7955 17.0013 19.9999C17.0013 19.2043 17.3174 18.4412 17.88 17.8786C18.4426 17.3161 19.2056 17 20.0012 17L20.0002 17.001ZM25.2501 13.5011C24.9275 13.514 24.6224 13.6513 24.3987 13.8841C24.175 14.1169 24.0501 14.4272 24.0501 14.7501C24.0501 15.0729 24.175 15.3833 24.3987 15.6161C24.6224 15.8489 24.9275 15.9861 25.2501 15.999C25.5816 15.999 25.8995 15.8673 26.1339 15.6329C26.3683 15.3985 26.5 15.0806 26.5 14.7491C26.5 14.4176 26.3683 14.0996 26.1339 13.8652C25.8995 13.6308 25.5816 13.4991 25.2501 13.4991V13.5011Z"
              fill="white"
            />
          </svg>
        </span>
        <div
          className="center-text"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "4rem 0 6rem",
          }}
        >
          <span className="avatar"></span>
          <div
            className="heading-text"
            style={{ width: "30rem", marginLeft: "1rem" }}
          >
            <div
              className="head"
              style={{
                color: "#B46BD1",
                fontFamily: "Raleway",
                fontSize: "2rem",
                fontWeight: "700",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              Platform Update: Improved User Experience and More
            </div>
            <span
              className="text"
              style={{
                color: "rgba(91, 91, 91, 0.80)",
                fontFamily: "Open Sans",
                fontSize: "0.8rem",
                fontWeight: "600",
                letterSpacing: "0.04688rem",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              By Omkar Nath April 10, 2023 | 6 min read
            </span>
          </div>
        </div>
        <div className="article-image"></div>
      </div>
      <div
        className="container"
        style={{ padding: "2rem 15rem 0", width: "100%", marginTop: "5rem"}}
      >
        <div
          className="article 1"
          style={{
            borderLeft: "0.4rem solid #B86CD2",
            width: "100%",
            paddingLeft: "1.5rem",
          }}
        >
          <p>
            In an era where digital technology evolves at an astonishing pace,
            keeping up with the changing landscape is imperative for any online
            platform. Users expect more than just functionality; they crave a
            seamless experience, sleek designs, and innovative features. A
            platform's commitment to providing these elements can often make the
            difference between user retention and attrition. This is why
            platform updates are not just expected but eagerly anticipated.
          </p>
          <p>
            In this blog, we'll delve into the world of platform updates,
            exploring the significance of improved user experiences and the
            "more" that comes with them. We'll discuss why these updates are
            crucial, the impact they have, and how they shape the future of
            digital interactions.
          </p>
        </div>
        <div
          className="article 2"
          style={{
            width: "100%",
            paddingLeft: "1.5rem",
            margin:"6rem 0 0"
          }}
        >
          <h5>The Quest for Enhanced User Experience</h5>
          <p>
            User experience, often abbreviated as UX, lies at the heart of any
            digital platform's success. It encompasses how users feel when they
            interact with a website, application, or service. If the experience
            is smooth, intuitive, and enjoyable, it can convert first-time users
            into loyal customers. However, the reverse is also true; a subpar UX
            can drive users away.
          </p>
          <p>
            Platform updates are the tools used by developers and designers to
            enhance the UX. These updates can bring several improvements:
          </p>
          <p>
            <strong>1. Speed and Performance:</strong> Faster loading times and smoother
            interactions are a priority. Slow and leggy platforms frustrate
            users and may lead to abandonment.</p> 
            <p><strong>2. Intuitive Design:</strong> Clear and
            intuitive navigation makes it easier for users to find what they're
            looking for and accomplish tasks.</p> 
            <p><strong>3. Accessibility:</strong> Ensuring that
            the platform is accessible to users with disabilities is a
            fundamental aspect of good UX.
          </p>
          <p>
            <strong>4. Mobile Responsiveness:</strong> With the increasing use of mobile devices,
            responsive design is vital to cater to a diverse user base.</p>
            <p><strong>5.
            Personalization:</strong>Users appreciate platforms that remember their
            preferences and deliver tailored content.</p> 
            <p><strong>6. Enhanced Security:</strong>Security breaches can ruin the user experience, so updates
            often include improved security features.
          </p>
        </div>
        <div className="article 3" style={{
            width: "100%",
            paddingLeft: "1.5rem",
            margin:"6rem 0 0"
          }}>
          <h5>The "More" That Matters</h5>
          <p>
            While an improved user experience is a major part of platform
            updates, the "more" that these updates promise can take many forms.
            Here are a few aspects of "more" that users and platform owners
            value: New Features Users are excited when they see new features
            that enhance the platform's functionality. These features can range
            from small quality-of-life improvements to major game-changers. Bug
            Fixes Eliminating pesky bugs and issues can significantly improve
            user satisfaction. Enhanced Compatibility Updates often ensure the
            platform works well with the latest devices, browsers, and operating
            systems. Better Content Contents is king, and updates may include
            new content or improved algorithms for content recommendations.
            Community and Social Features Social interaction is a core part of
            many platforms, and updates can enhance communication and community
            building. Future-Proofing Updates may also involve preparing the
            platform for future trends and technologies, ensuring it remains
            relevant in a fast-changing landscape.
          </p>
        </div>
        <div className="article 4" style={{
            width: "100%",
            paddingLeft: "1.5rem",
            margin:"6rem 0 0"
          }}>
          <h5>The Impact of Regular Updates</h5>
          <p>
            Regular platform updates benefit both users and platform owners.
            Users enjoy a better experience, which can lead to increased loyalty
            and engagement. On the other hand, platform owners benefit from
            higher user retention rates, improved reputation, and the ability to
            stay competitive in a crowded digital marketplace. In addition to
            these advantages, regular updates are also essential for security.
            Cyber threats evolve continuously, and a platform that doesn't
            update its security features regularly can become vulnerable to
            attacks. Updates provide an opportunity to strengthen security
            measures.
          </p>
        </div>
        <div className="conclusion article" style={{
            borderLeft: "0.4rem solid #B86CD2",
            width: "100%",
            paddingLeft: "1.5rem",
            margin:"6rem 0 0"
          }}>
          <h5>Conclusion</h5>
          <p>
            In the digital world, standing still is not an option. Users demand
            a seamless experience, and that's why platform updates are not only
            expected but welcomed. The quest for an improved user experience and
            the promise of "more" features are what keep users engaged and
            satisfied. In return, platform owners gain a competitive edge and
            foster a loyal user base. So, when you see that "Platform Update"
            notification, remember that it represents a commitment to making
            your digital experience better. Embrace it, and you'll likely find
            that it enhances your online life in more ways than you expected.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
