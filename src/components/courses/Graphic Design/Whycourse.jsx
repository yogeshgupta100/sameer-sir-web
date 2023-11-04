import React from 'react'

const Whycourse = () => {
  return (
    <>
        <div className="why-this-main">
            <div className="why-this-heading" style={{display:"flex" , paddingTop:"5rem"}}>
            <span style={{
            width: "28rem",
            height: "0.03438rem",
            backgroundColor: "#B8B8B8",
            marginTop:"2rem",
            marginLeft:"2rem"
            }}></span>
            <span className="why-text">
            Why to take this course ? 
            </span>
            </div>
            <div className="why-cards container">
                <div className="card" style={{width:"20rem" , borderRadius:"0.6rem",padding:"3rem 2rem 0" }}>
                    <p className='card-heading'>Master graphic design fundamentals: </p>
                    <p className='card-para'>Whether you're a beginner or an experienced designer, this course will equip you with a strong foundation in graphic design principles, typography, color theory, and composition.
</p>
                </div>
                <div className="card" style={{width:"20rem" , borderRadius:"0.6rem" ,padding:"3rem 2rem 0"}}>
                <p className='card-heading' style={{paddingRight:"2rem"}}>Transform Ideas into Art:</p>
                    <p className='card-para'>Learn to transform your creative ideas into stunning visual artworks that captivate, communicate, and inspire. Graphic Design Alchemy is where imagination meets technique.
</p>
                </div>
                <div className="card" style={{width:"20rem" , borderRadius:"0.6rem" ,padding:"3rem 2rem 0"}}>
                <p className='card-heading' style={{paddingRight:"3rem"}}>Have Creative Freedom</p>
                    <p className='card-para'>Graphic design is a medium of artistic expression. By mastering it, you gain the power to bring your visions to life and share your message with the world.
</p>              <button
              type="button"
              style={{
                borderRadius: "0.5rem",
                border: "1.1px solid #fff",
                // padding: "0.3rem 0.5rem",
                // fontWeight: "500",
                fontSize: "0.9rem",
                backgroundColor:" #8833B6",
                width:"45%",
                color:"#fff",
                display:"flex",
                alignItems:"center",
                fontFamily:"Raleway",
                fontStyle:"normal",
                fontWeight:"600",
                paddingRight:"0",
                paddingLeft:"10px"
              }}
            >
              <p style={{alignItems:"flex-end" , marginRight:"4px" , translate:"0 6px"}}>Join Today</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 7.5L17 7.5M17 7.5L11 13.5M17 7.5L11 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
                </div>
            </div>
            <span className="why-image">
            </span>
        </div>
    </>
  )
}

export default Whycourse