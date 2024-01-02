import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogCard = ({currEle}) => {
  return (
    <div style={{height:"fit-content" , borderRadius:"0.7rem" , overflow:"hidden" ,
    background: "#F6F6F1",
    boxShadow: "2px 2px 20px 3px rgba(0, 0, 0, 0.12)", width:"100%"}}>
							<div className="card" style={{height:"100%"}}>
								<div className="blog-img" style={{
                  aspectRatio:"3/2" ,
                  overflow:"hidden",
                  backgroundImage:`url(${import.meta.env.VITE_STRAPI_SERVER_URL}${currEle?.attributes?.thumbnail?.data?.attributes?.url})`,
                  backgroundPosition:"center",
                  backgroundSize:"cover",
                  backgroundRepeat:"no-repeat",
                  margin:"0.45rem",
                  borderRadius:"0.3em"
                }}>
                </div>
								<div
									className="card-body container"
									style={{
										padding: "1.11vw", 
										lineHeight: "1.11vw",
									}}
								>
									<p
										style={{
											color: "rgba(91, 91, 91, 0.80)",
                      fontFamily: "Open Sans",
                      fontSize: "0.777vw",
                      fontStyle: "normal",
                      fontWeight: "600",
                      letterSpacing: "0.05vw",
                      fontSize:"clamp(0.5rem , 1.5vw , 0.8rem)"
										}}
									>
										{currEle?.attributes?.publishDate}
									</p>
                  <h5 style={{
                    color: "rgba(0, 0, 0, 0.80)",
                    fontFamily: "Open Sans",
                    fontSize: "1.3875vw",
                    fontStyle: "normal",
                    fontWeight: "600",
                    marginBottom:"1.11vw",
                    fontSize:"clamp(0.8rem , 1.5vw , 1rem)"
                  }}>
                    {currEle?.attributes?.title}
                  </h5>
                  <p style={{
                    color: "rgba(0, 0, 0, 0.75)",
                    fontFamily: "Open Sans",
                    fontSize: "0.888vw",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "135.836%",
                    textTransform: "capitalize",
                    maxHeight:"2.331vw",
                    overflow:"hidden"
                  }}>
                    {currEle?.attributes?.description}
                  </p> 
                  <p style={{color:"rgba(91, 91, 91, 0.80)" , fontSize:"clamp(0.8rem , 1.5vw , 1.4rem)"}}>
                    By {currEle?.attributes?.author}
                  </p>
                  <NavLink to={`../article/:blogId`}>
                  <button className='purple-btn' style={{
        textDecoration:"none",
        border:"none",
        maxWidth:"60%",
        fontWeight:"500",  
        // marginTop:"2.1vw",
        fontSize:"clamp(0.7rem , 1.5vw , 1rem)",
        whiteSpace:"nowrap",
        padding:"0.8rem",
        textAlign:"center"
      }}>Read more</button>
                  </NavLink>
								</div> 
							</div>
    </div>
  )
}

export default BlogCard