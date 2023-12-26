import React from 'react'

const Whycourse = () => {
  return (
    <>
        <div className="why-this-main">
            <div className="why-this-heading" style={{display:"flex" , paddingTop:"5.55vw"}}>
            <span style={{
            width: "31.08vw",
            height: "0.038vw",
            backgroundColor: "#B8B8B8",
            marginTop:"2.22vw",
            marginLeft:"2.22vw"
            }}></span>
            <span className="why-text">
            Why to take this course ? 
            </span>
            </div>
            <div className="why-cards container">
                <div className="card" style={{width:"22.2vw" , borderRadius:"0.66vw",padding:"3.33vw 2.22vw 0" }}>
                    <p className='card-heading'>Master graphic design fundamentals: </p>
                    <p className='card-para'>Whether you're a beginner or an experienced designer, this course will equip you with a strong foundation in graphic design principles, typography, color theory, and composition.
</p>
                </div>
                <div className="card" style={{width:"22.2vw" , borderRadius:"0.66vw" ,padding:"3.33vw 2.22vw 0"}}>
                <p className='card-heading' style={{paddingRight:"2.22vw"}}>Transform Ideas into Art:</p>
                    <p className='card-para'>Learn to transform your creative ideas into stunning visual artworks that captivate, communicate, and inspire. Graphic Design Alchemy is where imagination meets technique.
</p>
                </div>
                <div className="card" style={{width:"22.2vw" , borderRadius:"0.66vw" ,padding:"3.33vw 2.22vw 0"}}>
                <p className='card-heading' style={{paddingRight:"3.33vw"}}>Have Creative Freedom</p>
                    <p className='card-para'>Graphic design is a medium of artistic expression. By mastering it, you gain the power to bring your visions to life and share your message with the world.
</p>              <button
              type="button"
              style={{
                borderRadius: "0.5rem",
                border: "0.076vw solid #fff",
                // padding: "0.3.33vw 0.5rem",
                // fontWeight: "500",
                fontSize: "0.99vw",
                backgroundColor:" #8833B6",
                width:"45%",
                color:"#fff",
                display:"flex",
                alignItems:"center",
                fontFamily:"Raleway",
                fontStyle:"normal",
                fontWeight:"600",
                paddingRight:"0",
                paddingLeft:"0.69vw"
              }}
            >
              <p style={{alignItems:"flex-end" , marginRight:"0.276vw" , translate:"0 0.414vw"}}>Join Today</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 15" fill="none">
  <path d="M1 7.5L17 7.5M17 7.5L11 13.5M17 7.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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