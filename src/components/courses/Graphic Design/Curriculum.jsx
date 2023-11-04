import React from 'react'

const Curriculum = () => {
  return (
    <div className="curr-bg">
        <div className="curr-content">
        <div className="curr-head" style={{display:"flex"}}>
            <span style={{
                color: "rgba(255, 255, 255, 0.85)",
                fontFamily: "Inter",
                fontSize: "2.1rem",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "2rem",
            }}>Curriculum
            </span>
            <span style={{
              width: "14rem",
              height: "0.03438rem",
              backgroundColor: "#B8B8B8",
              marginTop:"1.2rem",
              marginLeft:"1rem"
            }}></span>
        </div>
            <p style={{fontSize:"0.9rem" , color:"rgba(255, 255, 255, 0.80)" , lineHeight:"1.8rem"}}>Below is a  curriculum that covers the fundamentals of graphic design</p>
            <div className="text-grid">
              <span className="text-content">
                <h5>Introduction to Graphic Design</h5>
                <p>Overview of the graphic design field, Historical context and evolution of design and Understanding the role of a graphic designer</p>
              </span>
              <span className="text-content">
                <h5>Introduction to Graphic Design</h5>
                <p>Overview of the graphic design field, Historical context and evolution of design and Understanding the role of a graphic designer</p>
              </span>
              <span className="text-content">
                <h5>Introduction to Graphic Design</h5>
                <p>Overview of the graphic design field, Historical context and evolution of design and Understanding the role of a graphic designer</p>
              </span>
              <span className="text-content">
                <h5>Introduction to Graphic Design</h5>
                <p>Overview of the graphic design field, Historical context and evolution of design and Understanding the role of a graphic designer</p>
              </span>
              <span className="text-content">
                <h5>Introduction to Graphic Design</h5>
                <p>Overview of the graphic design field, Historical context and evolution of design and Understanding the role of a graphic designer</p>
              </span>
              <span className="text-content">
                <h5>Introduction to Graphic Design</h5>
                <p>Overview of the graphic design field, Historical context and evolution of design and Understanding the role of a graphic designer</p>
              </span>
            </div>
        </div>
        <span className='read-more' style={{position:"absolute" , bottom:"3rem" , color:"#fff"}}>Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.177276 0.279419C0.240629 0.199602 0.317929 0.134048 0.404756 0.0865045C0.491583 0.0389608 0.586237 0.010359 0.683306 0.00233447C0.780376 -0.00569007 0.877958 0.00702017 0.970476 0.0397377C1.06299 0.0724553 1.14863 0.124539 1.2225 0.193012L7.65588 6.14655L14.0893 0.193012C14.2392 0.063006 14.4302 0.00107419 14.6217 0.0203087C14.8132 0.0395432 14.9903 0.138437 15.1155 0.296083C15.2407 0.45373 15.3042 0.657774 15.2927 0.865082C15.2811 1.07239 15.1953 1.26671 15.0535 1.40697L8.13799 7.80748C8.00371 7.93171 7.83271 8 7.65588 8C7.47905 8 7.30805 7.93171 7.17377 7.80748L0.258286 1.40697C0.109292 1.26885 0.0171723 1.0725 0.00216772 0.861079C-0.0128369 0.649656 0.0505006 0.440447 0.178264 0.279419H0.177276Z" fill="#EBBAFC"/>
</svg>
        </span>
            <span className="curr-image">
            </span>
    </div>
  )
}

export default Curriculum