import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const filterItem = (category) =>{
        const updatedList = blogs?.attributes.filter((currEle) => {
            return currEle?.category === category;
        });
        setMenuData(updatedList);
	}
	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/blogs?populate=*`);
			const data = await res.json();
			setBlogs(data.data);
		})();
	}, []);

	return (
		<>
		<div
			className="card-contain"
			style={{
				maxWidth: "100vw",
				display: "grid",
				gridTemplateColumns: "repeat(3,1fr)",
				margin: "0 0 13.32vw",
				gap: "2rem",
				rowGap: "4rem",
			}}
		>
			{blogs.map((currEle) => (
				<BlogCard currEle={currEle} />
			))}
		</div>
		</>
	);
};

export default Blog;
