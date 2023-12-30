import React from 'react'

const Whycourse = () => {
  return (
    <>
        <div className="why-this-main" style={{background: "linear-gradient(259deg, #D9D9D9 0%, #220238 0.01%, #410248 57.06%, #490246 108.37%)" , aspectRatio:"4/2"}}>
            <div className="why-this-heading" style={{display:"flex" , paddingTop:"5.55vw"}}>
            <div style={{
              width: "31.08vw",
              height: "0.028vw",
              backgroundColor: "#B8B8B8",
              marginTop:"2.22vw",
              marginLeft:"2.22vw",
              position:"relative",
              opacity:"0.7"
            }}>
            <span className='dot' style={{position:"absolute" , top:"-0.7vw" , left:"1rem"}}></span>
            </div>
            <span className="why-text">
            Why to take this course ? 
            </span>
            </div>
            <div className="why-cards container" style={{width:"100%" , display:"grid" , gridTemplateColumns:"1fr 1fr 1fr 1fr" , gap:"1rem" , marginTop:"8vw"}}>
                <div className="card" style={{ borderRadius:"0.66vw", padding:"2.33vw 2.22vw 3.33vw 2.22vw" , aspectRatio:"4/2.3"}}>
                    <p className='card-heading' style={{fontSize:"clamp(0.56rem , 2vw , 1.5rem)"}}>Master graphic design fundamentals: </p>
                    <span className='card-para' style={{fontSize:"clamp(0.46rem , 1.3vw , 1rem)"}}>Whether you're a beginner or an experienced designer, this course will equip you with a strong foundation in graphic design principles, typography, color theory, and composition.
</span>
                </div>
                <div className="card" style={{ borderRadius:"0.66vw" ,padding:"2.33vw 2.22vw 3.33vw 2.22vw" , aspectRatio:"4/2.3"}}>
                <p className='card-heading' style={{fontSize:"clamp(0.56rem , 2vw , 1.5rem)"}}>Transform Ideas into Art:</p>
                    <p className='card-para' style={{fontSize:"clamp(0.46rem , 1.3vw , 1rem)"}}>Learn to transform your creative ideas into stunning visual artworks that captivate, communicate, and inspire. Graphic Design Alchemy is where imagination meets technique.
</p>
                </div>
                <div className="card" style={{ borderRadius:"0.66vw" ,padding:"2.33vw 2.22vw 1vw 2.22vw" , aspectRatio:"4/2.3"}}>
                <p className='card-heading' style={{fontSize:"clamp(0.56rem , 2vw , 1.5rem)"}}>Have Creative Freedom</p>
                    <p className='card-para' style={{fontSize:"clamp(0.46rem , 1.3vw , 1rem)"}}>Graphic design is a medium of artistic expression. By mastering it, you gain the power to bring your visions to life and share your message with the world.
</p>              <button
              type="button"
              style={{
                borderRadius: "0.5rem",
                border: "0.076vw solid #fff",
                fontSize: "0.99vw",
                backgroundColor:" #8833B6",
                width:"45%",
                color:"#fff",
                display:"flex",
                alignItems:"center",
                fontFamily:"Raleway",
                fontStyle:"normal",
                fontWeight:"600",
                aspectRatio:"3/1.2",
                marginTop:"1rem"
              }}
            >
              <p style={{alignItems:"flex-end" , marginRight:"0.2rem" , whiteSpace:"nowrap"}}>Join Today</p>
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