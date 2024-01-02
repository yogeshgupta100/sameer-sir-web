import React  , { useState , useEffect } from 'react'
import Header from '../Header'
import HeroSection from './HeroSection'
import Blog from '../resources/Blog'
import Subscribe from '../aboutus/Subscribe'
import BlogCard from '../resources/BlogCard'

const MainBlog = () => {
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
      <Header/>
      <HeroSection/>
      {/* <div className="container">
        <Blog/>
      </div> */}
      <nav className="navbar" style={{width:"100%" , background: "linear-gradient(242deg, #5A0992 21.32%, #AA3293 128.23%)"}}>
			<div className="btn-group">
				<button className="btn-group__item" onClick={()=> filterItem("UX design")}>UX design</button>
				<button className="btn-group__item" onClick={()=> filterItem("UI design")}>UI design</button>
				<button className="btn-group__item" onClick={()=> filterItem("Design thinking")}>Design thinking</button>
				<button className="btn-group__item" onClick={()=> filterItem("Tools and Techniques")}>Tools and Techniques</button>
				<button className="btn-group__item" onClick={()=> filterItem("Front end development")}>Front end development</button>
				<button className="btn-group__item" onClick={()=> filterItem("Back end development")}>Back end development</button>
				<button className="btn-group__item" onClick={()=> filterItem("Full stack development")}>Full stack development</button>
				<button className="btn-group__item" onClick={()=> filterItem("Mixed reality")}>Mixed reality</button>
				<button className="btn-group__item" onClick={()=> filterItem("Augmented reality")}>Augmented reality</button>
				<button className="btn-group__item" onClick={()=> filterItem("VIrtual reality")}>VIrtual reality</button>
				<button className="btn-group__item" onClick={()=> setMenuData(Menu)}>All</button>
			</div>
		</nav>
    <BlogCard menuData={blogs}/>
      <Subscribe/>
    </>
  )
}

export default MainBlog