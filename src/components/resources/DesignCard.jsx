import React from "react";

const DesignCard = ({ currEle }) => {
  return (
    <>
      <div
        className="designCard container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,auto)",
          gap: "1rem",
          justifyContent:"center",
          marginTop:"4rem"
        }}
      >
        <div
          className="card"
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            padding: "1rem",
            flexDirection:"row",
            alignItems:"center",
            backgroundColor:"#F6F6F1",
          }}
        >
          <div className="content" style={{width:"60%" , margin:"1rem 0.8rem"}}>
            <p>
              {currEle.content}
            </p>
            <button className='button' id='button'style={{
              border:"none",
              borderRadius:"0.42144rem",
              background: "#B46BD1",
              color:"#fff",
              padding:"0.8rem 2rem"
            }}>
              View now
              </button>
          </div>
          <div className="design-card-img" style={{
            backgroundImage:`url(${currEle.imageUrl})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            width:"40%",
            aspectRatio:"3/3",
            borderRadius: "0.625rem"
          }}>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignCard;
