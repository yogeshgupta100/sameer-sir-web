import {useState , useEffect} from 'react'
import BlogCard from './BlogCard';

const Blog = () => {
    const [blog, setBlog] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/blogs?populate=*`);
      const data = await res.json();
      console.log(data.data);
      setBlog(data.data);
    })();
  }, []);
  return (
    <div
				className="card-contain"
				style={{
					maxWidth: "100vw",
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr",
					margin: "0 0 13.32vw",
          gap:"2rem",
          rowGap:"7rem",
				}}
			>
      {blog.map((currEle) => {
					return (
							<BlogCard currEle={currEle} />
					);
				})}
        </div>
  )
}

export default Blog