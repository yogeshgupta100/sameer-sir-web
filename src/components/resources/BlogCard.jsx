import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogCard = ({currEle}) => {
  return (
    <div style={{height:"fit-content" , borderRadius:"1.2rem 1.2rem 0 0" , overflow:"hidden"}}>
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
										}}
									>
										{currEle.attributes.publishDate}
									</p>
                  <h5 style={{
                    color: "rgba(0, 0, 0, 0.80)",
                    fontFamily: "Open Sans",
                    fontSize: "1.3875vw",
                    fontStyle: "normal",
                    fontWeight: "600",
                    marginBottom:"1.11vw"
                  }}>
                    {currEle.attributes.title}
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
                    {currEle.attributes.content}
                  </p> 
                  <p style={{color:"rgba(91, 91, 91, 0.80)"}}>
                    By {currEle.attributes.author}
                  </p>
                  <NavLink to={"/article"}>
                  <button className='button' id='button'style={{
                    border:"none",
                    borderRadius:"0.4677vw",
                    background: "#B46BD1",
                    color:"#fff",
                    padding:"0.888vw 2.22vw"
                  }}>
                    Read more
                  </button>
                  </NavLink>
								</div> 
							</div>
    </div>
  )
}

export default BlogCard