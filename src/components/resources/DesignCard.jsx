import React from "react";

const DesignCard = ({ currEle }) => {
  return (
    <>
      <div
        className="designCard container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,auto)",
          gap: "1.11vw",
          justifyContent:"center",
          marginTop:"4.44vw"
        }}
      >
        <div
          className="card"
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            padding: "1.11vw",
            flexDirection:"row",
            alignItems:"center",
            backgroundColor:"#F6F6F1",
          }}
        >
          <div className="content" style={{width:"60%" , margin:"1.11vw 0.888vw"}}>
            <p>
              {currEle.content}
            </p>
            <button className='button' id='button'style={{
              border:"none",
              borderRadius:"0.4677vw",
              background: "#B46BD1",
              color:"#fff",
              padding:"0.888vw 2.22vw"
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
            borderRadius: "0.694vw"
          }}>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignCard;
