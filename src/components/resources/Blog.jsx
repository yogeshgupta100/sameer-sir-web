import {useState , useEffect} from 'react'
import BlogCard from './BlogCard';

const Blog = () => {
    const [blog, setBlog] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/Blog?populate=*`);
      const data = await res.json();
      setBlog(data.data);
    })();
  }, []);
  return (
    <>
      {blog.map((currEle) => {
					return (
						<div
							className="teacher"
							style={{
								overflowY: "hidden",
							}}
						>
							<BlogCard currEle={currEle} />
							{/* <div className="teacher-hover"></div> */}
						</div>
					);
				})}
    </>
  )
}

export default Blog