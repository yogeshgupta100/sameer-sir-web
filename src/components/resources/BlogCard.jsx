import React from 'react'

const BlogCard = ({currEle}) => {
  return (
    <>
       <div className="container-main" style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,auto)",
        gap:"2rem"
       }}>
        <div className="blog-card-body" style={{
            borderRadius: "0.75rem",
            background: "#F6F6F1",
            boxShadow: "2px 2px 20px 3px rgba(0, 0, 0, 0.12)",
        }}>
            <img src={`${import.meta.env.VITE_STRAPI_SERVER_URL}${Blog?.attributes?.thumbnail?.data?.attributes?.url}`} />
        </div>
       </div>
    </>
  )
}

export default BlogCard