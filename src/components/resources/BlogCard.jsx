import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogCard = ({currEle}) => {
  return (
    <div style={{height:"fit-content"}}>
       {/* <div className="row"> */}
							<div className="card" style={{height:"100%"}}>
								<div className="blog-img" style={{
                  aspectRatio:"3/2" ,
                  overflow:"hidden",
                  backgroundImage:`url(${import.meta.env.VITE_STRAPI_SERVER_URL}${currEle?.attributes?.thumbnail?.data?.attributes?.url})`,
                  backgroundPosition:"center",
                  backgroundSize:"cover",
                  backgroundRepeat:"no-repeat"
                }}>
                </div>
								<div
									className="card-body container"
									style={{
										padding: "1rem",
										lineHeight: "1rem",
									}}
								>
									<p
										style={{
											color: "rgba(91, 91, 91, 0.80)",
                      fontFamily: "Open Sans",
                      fontSize: "0.7rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      // lineHeight: "129.836%",
                      letterSpacing: "0.04494rem",
										}}
									>
										{currEle.attributes.publishDate}
									</p>
                  <h5 style={{
                    color: "rgba(0, 0, 0, 0.80)",
                    fontFamily: "Open Sans",
                    fontSize: "1.25rem",
                    fontStyle: "normal",
                    fontWeight: "600",
                    marginBottom:"1rem"
                  }}>
                    {currEle.attributes.title}
                  </h5>
                  <p style={{
                    color: "rgba(0, 0, 0, 0.75)",
                    fontFamily: "Open Sans",
                    fontSize: "0.8rem",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "135.836%",
                    textTransform: "capitalize",
                    height:"2.1rem",
                    overflow:"hidden"
                  }}>
                    {currEle.attributes.content}
                  </p> 
                  <p style={{color:"rgba(91, 91, 91, 0.80)"}}>
                    By {currEle.attributes.author}
                  </p>
                  <NavLink to={"/article"}>
                  <button className='button' id='button'style={{
                    border:"none",
                    borderRadius:"0.42144rem",
                    background: "#B46BD1",
                    color:"#fff",
                    padding:"0.8rem 2rem"
                  }}>
                    Read more
                  </button>
                  </NavLink>
								</div> 
							</div>
						 {/* </div> */}
    </div>
  )
}

export default BlogCard