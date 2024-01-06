// import React from "react";
// import { FaYoutube } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import relativeTime from "dayjs/plugin/relativeTime";
// import dayjs from "dayjs";

// dayjs.extend(relativeTime);

// const TutorialCard = ({
// 	title,
// 	description,
// 	youtubeUrl,
// 	instaUrl,
// 	author,
// 	instaPublishDate,
// 	youtubePublishDate,
// 	youtubeEmbedUrl,
// }) => {
// 	return (
// 		<div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
// 			<div
// 				className="inner-card tutorials"
// 				style={{
// 					display: "flex",
// 					flexDirection:"column",
// 					borderRadius: "0.99vw",
// 					backgroundColor: "#fff",
// 					boxShadow: "0.13875vw 0.13875vw 1.04vw 0.13875vw rgba(0, 0, 0, 0.05)",
// 					width: "85%",
// 					aspectRatio: "3/1",
// 					alignItems: "flex-start",
// 					padding: "1.3vw 2.5rem 1.3vw 1.3vw",
// 					fontWeight: "bold",
// 					fontSize: "1.332vw",
// 				}}
// 			>
// 				<div
// 					className="career_img"
// 					style={{
// 						width: "45%",
// 						height: "100%",
// 						backgroundPosition: "center",
// 						backgroundSize: "cover",
// 						backgroundRepeat: "no-repeat",
// 						display: "flex",
// 						alignItems: "center",
// 						borderRadius: "0.99vw",
// 						boxShadow: "2.856px 2.856px 14.278px 2.856px rgba(0, 0, 0, 0.05)",
// 						overflow: "hidden",
// 					}}
// 				>
// 					<iframe
// 						width="100%"
// 						height="100%"
// 						src={youtubeEmbedUrl}
// 						title={title}
// 						frameborder="0"
// 						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// 						allowfullscreen
// 					></iframe>
// 				</div>
// 				<div
// 					className="inner-card"
// 					style={{
// 						margin: "0 2rem 0 3rem",
// 						width: "50%",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "space-between",
// 						height: "95%",
// 					}}
// 				>
// 					<div>
// 						<div style={{ color: "#B46BD1", fontWeight: "700", marginBottom: "0.555vw" }}>{title}</div>
// 						<div
// 							style={{
// 								whiteSpace: "pre-wrap",
// 								fontWeight: "300",
// 								color: "#000",
// 								fontSize: "clamp(0.5rem , 1.5vw , 1rem)",
// 							}}
// 						>
// 							{description}
// 						</div>
// 					</div>
// 					<div style={{ width: "100%", display: "flex", margin: "1rem 0", gap: "2rem" }}>
// 						<div style={{ display: "flex", gap: "0.8vw", justifyContent: "center" }}>
// 							<a
// 								target="_blank"
// 								href={instaUrl}
// 								style={{
// 									display: "flex",
// 									alignItems: "center",
// 									justifyContent: "center",
// 									padding: "2px",
// 									background: "#B86CD2",
// 									color: "white",
// 									borderRadius: "50%",
// 									height: "30px",
// 									width: "30px",
// 									cursor: "pointer",
// 								}}
// 							>
// 								<AiFillInstagram />
// 							</a>
// 							<span
// 								style={{
// 									fontSize: "clamp(0.5rem , 1.5vw , 1rem)",
// 									fontWeight: "400",
// 									color: "#B46BD1",
// 								}}
// 							>
// 								{dayjs(instaPublishDate).fromNow()}
// 							</span>
// 						</div>
// 						<div style={{ display: "flex", gap: "0.8vw", justifyContent: "center" }}>
// 							<a
// 								target="_blank"
// 								href={youtubeUrl}
// 								style={{
// 									display: "flex",
// 									alignItems: "center",
// 									justifyContent: "center",
// 									padding: "2px",
// 									fontSize: "1.2rem",
// 									background: "#B86CD2",
// 									color: "white",
// 									borderRadius: "50%",
// 									height: "30px",
// 									width: "30px",
// 									cursor: "pointer",
// 								}}
// 							>
// 								<FaYoutube />
// 							</a>
// 							<span
// 								style={{
// 									fontSize: "clamp(0.5rem , 1.5vw , 1rem)",
// 									fontWeight: "400",
// 									color: "#B46BD1",
// 								}}
// 							>
// 								{dayjs(youtubePublishDate).fromNow()}
// 							</span>
// 						</div>
// 					</div>
// 					<div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
// 						<span
// 							style={{
// 								width: "clamp(50px , 1vw , 60px)",
// 								aspectRatio: "1/1",
// 								backgroundImage: `url(${"/assets/emp1.jpg"})`,
// 								backgroundPosition: "center",
// 								backgroundSize: "cover",
// 								backgroundRepeat: "no-repeat",
// 								borderRadius: "50%",
// 							}}
// 						></span>
// 						<div
// 							style={{
// 								display: "flex",
// 								flexDirection: "column",
// 								whiteSpace: "nowrap",
// 								color: "#B46BD1",
// 								marginLeft: "1rem",
// 							}}
// 						>
// 							<span style={{ fontSize: "clamp(0.9rem , 1.5vw , 1.25rem)", fontWeight: "600" }}>
// 								{author}
// 							</span>
// 							<span style={{ fontSize: "clamp(0.5rem , 1.5vw , 1rem)", fontWeight: "400" }}>
// 								{dayjs(youtubePublishDate).fromNow()}
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default TutorialCard;
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

const TutorialCard = ({
  title,
  description,
  youtubeUrl,
  instaUrl,
  author,
  instaPublishDate,
  youtubePublishDate,
  youtubeEmbedUrl,
}) => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="inner-card tutorials"
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "1rem",
          backgroundColor: "#fff",
          boxShadow: "0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "1200px",
          margin: "2rem auto",
          padding: "2rem",
          fontSize: "1rem",
		//   display: "flex",
        }}
      >
        <div
          className="video-container"
          style={{
            display: "flex",
            flexDirection: "column",
            // marginBottom: "1.5rem",
            borderRadius: "0.5rem",
            overflow: "hidden",
          }}
        >
          <iframe
            title={title}
            width="100%"
            height="315"
            src={youtubeEmbedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="content-details"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.566vw",
			marginLeft: "4vw",
			width: "60%",
			// display: "flex",
			// flexDirection: "column",
			justifyContent: "space-evenly",
			height: "90%",
          }}
        >
          <div
            className="title"
            style={{
              color: "#B46BD1",
              fontWeight: "700",
              fontSize: "clamp(1.1rem , 1.5vw , 1.4rem)",
            //   marginBottom: "0.5rem",
            }}
          >
            {title}
          </div>
          <div
            className="description"
            style={{
              whiteSpace: "pre-wrap",
              color: "#000",
			  fontSize:"clamp(0.7rem , 1.5vw , 1rem)"
            }}
          >
            {description}
          </div>
          <div
            className="social-links"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="insta-link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={instaUrl}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "#B46BD1",
                  fontWeight: "500",
                }}
              >
                <AiFillInstagram />
                <span>
                  {dayjs(instaPublishDate).fromNow()}
                </span>
              </a>
            </div>
            <div className="youtube-link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={youtubeUrl}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "#B46BD1",
                  fontWeight: "500",
                }}
              >
                <FaYoutube />
                <span>
                  {dayjs(youtubePublishDate).fromNow()}
                </span>
              </a>
            </div>
          </div>
          <div
            className="author-details"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1.566vw",
            }}
          >
            <div
              className="author-image"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundSize: "cover",
                backgroundImage: `url('/assets/emp1.jpg')`,
              }}
            ></div>
            <div
              className="author-info"
              style={{
                display: "flex",
                flexDirection: "column",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="author-name"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#B46BD1",
                }}
              >
                {author}
              </span>
              <span
                className="published-date"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  color: "#B46BD1",
                }}
              >
                {dayjs(youtubePublishDate).fromNow()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;

