import React from 'react'

const BlogCard = ({currEle}) => {
  return (
							<div className="card" style={{height:"100%" , borderRadius:"0.75rem" , background:"#F6F6F1" , boxShadow: "2px 2px 20px 3px rgba(0, 0, 0, 0.12)" , overflow:"hidden"}}>
								<div className="blog-img" style={{
                  aspectRatio:"3/2" ,
                  overflow:"hidden",
                  backgroundImage:`url(${currEle?.attributes?.thumbnail?.data?.attributes?.url})`,
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
                      fontStyle: "normal",
                      fontWeight: "600",
                      letterSpacing: "0.05vw",
                      fontSize:"clamp(0.5rem , 1.5vw , 0.8rem)",
                      marginBottom:"1.5vw"
										}}
									>
										{currEle?.attributes?.publishDate}
									</p>
                  <h5 style={{
                    color: "rgba(0, 0, 0, 0.80)",
                    fontFamily: "Open Sans",
                    fontSize: "clamp(0.8rem , 1.2vw , 1.18rem)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "129.836%",
                    letterSpacing: "0.0475rem",
                    width:"90%"
                  }}>
                    {currEle?.attributes?.title}
                  </h5>
                  {/* <p style={{
                    color: "rgba(0, 0, 0, 0.75)",
                    fontFamily: "Open Sans",
                    fontSize: "0.888vw",
                    fontStyle: "normal",
                    fontWeight: "300",
                    textTransform: "capitalize",
                    maxHeight:"2.331vw",
                    overflow:"hidden",
                    marginBottom:"1.11vw"
                  }}>
                    {currEle?.attributes?.description}
                  </p>  */}
                  {/* <p style={{color:"rgba(91, 91, 91, 0.80)" , fontSize:"clamp(0.5rem , 1.3vw , 1rem)"}}>
                    By {currEle?.attributes?.author}
                  </p> */}
                  <a
										href={`/article/${currEle?.id}`}
										className="purple-btn course-btn"
										style={{
											textDecoration: "none",
                      display: "inline-block",
                      whiteSpace:"nowrap",
                      margin:"1rem 0"
										}}
									>
                    <p style={{display: "inline-block", fontSize:"clamp(0.7rem , 1.5vw , 1rem)"}}>Learn more</p>
									</a>
								</div> 
							</div>
  )
}

export default BlogCard