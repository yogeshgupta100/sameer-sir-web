import React from "react";

const DesignCard = ({ currEle }) => {
  return (
    <>
      <div id="designCards"
        className="designCard container"
        style={{
          justifyContent:"center",
          // marginTop:"4.44vw",
          minWidth:"100%"
        }}
      >
        <div
          className="card"
          style={{
            width: "100%",
            display: "flex",
            padding: "1.11vw",
            flexDirection:"row",
            alignItems:"center",
            borderRadius: "0.9375rem",
            border: "1px solid #B86CD2",
            background: "#F6F6F1",
          }}
        >
          <div className="content" style={{width:"100%" , fontSize:"clamp(1rem , 1vw , 1.5rem)"}}>
            <p>
              {currEle.content}
            </p>
            <button className='button' id='button'style={{
              border:"none",
              borderRadius:"0.4677vw",
              background: "#B46BD1",
              color:"#fff",
              padding:"0.888vw 2.22vw",
              marginTop:"2rem"
            }}>
              View now
              </button>
          </div>
          <div className="design-card-img" style={{
            backgroundImage:`url(${currEle.imageUrl})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            width:"80%",
            aspectRatio:"3/3",
            borderRadius: "0.694vw",
          }}>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignCard;
