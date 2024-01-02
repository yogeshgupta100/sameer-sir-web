import React from 'react'

const Curriculum = ({data}) => {
  return (
    <div className="curr-bg" style={{overflow:"hidden"}}>
        <div className="curr-content">
        <div className="curr-head" style={{display:"flex"}}>
            <span style={{
                color: "rgba(255, 255, 255, 0.85)",
                fontFamily: "Inter",
                fontSize: "clamp(0.8rem , 2vw , 1.5rem)" ,
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "2.22vw",
            }}>Curriculum
            </span>
            <span style={{
              width: "15.54vw",
              height: "0.038vw",
              backgroundColor: "#B8B8B8",
              marginTop:"1.332vw",
              marginLeft:"1.11vw"
            }}></span>
        </div>
            <p style={{fontSize: "clamp(0.57rem , 1.5vw , 1.5rem)" , color:"rgba(255, 255, 255, 0.80)" , lineHeight:"1.3"}}>Below is a  curriculum that covers the fundamentals of graphic design</p>
            <div className="text-grid" style={{width:"100%"}}>
              <span className="text-content">
                <h5 style={{fontSize: "clamp(0.7rem , 1.2vw , 1.5rem)" , lineHeight:"1.1"}}>
                {data?.attributes?.curriculum[0]?.heading}</h5>
                <p style={{fontSize: "clamp(0.56rem , 1.5vw , 1rem)" , lineHeight:"1.4" , marginTop:"0.3rem" }}>{data?.attributes?.curriculum[0]?.description}</p>
              </span>
              <span className="text-content">
              <h5 style={{fontSize: "clamp(0.7rem , 1.2vw , 1.5rem)" , lineHeight:"1.1"}}>
                {data?.attributes?.curriculum[1]?.heading}</h5>
                <p style={{fontSize: "clamp(0.56rem , 1.5vw , 1rem)" , lineHeight:"1.4" , marginTop:"0.3rem" }}>{data?.attributes?.curriculum[1]?.description}</p>
              </span>
              <span className="text-content">
              <h5 style={{fontSize: "clamp(0.7rem , 1.2vw , 1.5rem)" , lineHeight:"1.1"}}>
                {data?.attributes?.curriculum[2]?.heading}</h5>
                <p style={{fontSize: "clamp(0.56rem , 1.5vw , 1rem)" , lineHeight:"1.4" , marginTop:"0.3rem" }}>{data?.attributes?.curriculum[2]?.description}</p>
              </span>
              <span className="text-content">
              <h5 style={{fontSize: "clamp(0.7rem , 1.2vw , 1.5rem)" , lineHeight:"1.1"}}>
                {data?.attributes?.curriculum[3]?.heading}</h5>
                <p style={{fontSize: "clamp(0.56rem , 1.5vw , 1rem)" , lineHeight:"1.4" , marginTop:"0.3rem" }}>{data?.attributes?.curriculum[3]?.description}</p>
              </span>
              <span className="text-content">
              <h5 style={{fontSize: "clamp(0.7rem , 1.2vw , 1.5rem)" , lineHeight:"1.1"}}>
                {data?.attributes?.curriculum[4]?.heading}</h5>
                <p style={{fontSize: "clamp(0.56rem , 1.5vw , 1rem)" , lineHeight:"1.4" , marginTop:"0.3rem" }}>{data?.attributes?.curriculum[4]?.description}</p>
              </span>
              
              <span className="text-content">
              <h5 style={{fontSize: "clamp(0.7rem , 1.2vw , 1.5rem)" , lineHeight:"1.1"}}>
                {data?.attributes?.curriculum[5]?.heading}</h5>
                <p style={{fontSize: "clamp(0.56rem , 1.5vw , 1rem)" , lineHeight:"1.4" , marginTop:"0.3rem" }}>{data?.attributes?.curriculum[5]?.description}</p>
              </span>
              <span className="text-content">
              <h5 style={{fontSize: "clamp(0.7rem , 1.2vw , 1.5rem)" , lineHeight:"1.1"}}>
                {data?.attributes?.curriculum[6]?.heading}</h5>
                <p style={{fontSize: "clamp(0.56rem , 1.5vw , 1rem)" , lineHeight:"1.4" , marginTop:"0.3rem" }}>{data?.attributes?.curriculum[6]?.description}</p>
              </span>
            </div>
        </div>
            <span
          className="why-image"
          style={{ minWidth: "40%", minHeight: "50%" , backgroundImage:`url(${"/assets/curriculum-women.png"})`, backgroundSize:"contain" , backgroundRepeat:"no-repeat" , right:"-6vw" , bottom:"0"}}
        ></span>
    </div>
  )
}

export default Curriculum