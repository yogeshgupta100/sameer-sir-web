import React  , { useState , useEffect } from 'react'
import Header from '../Header'
import HeroSection from './HeroSection'
import Blog from '../resources/Blog'
import Subscribe from '../aboutus/Subscribe'
import BlogCard from '../resources/BlogCard'

const MainBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
	  (async () => {
		  const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/blogs?populate=*`);
		  const data = await res.json();
		  // setBlogs(data.data);
      const fetchedBlogs = data.data;
    setBlogs(fetchedBlogs);
    setFilteredBlogs(fetchedBlogs);
		})();
	}, []);
	const filterItem = (category) =>{
		if(category === "All" || category === null){
      if (blogs.length > 0) {
        setFilteredBlogs(blogs);
      }
		}
		else{
			const updatedList = blogs.filter((currEle) => {
				return currEle?.attributes?.category === category;
			});
			setFilteredBlogs(updatedList);
		}
	}
	return (
    <>
      <Header/>
      <HeroSection/>
      <section className="p-menu1 container" style={{marginBottom:"4rem"}}>
          <nav id="navbar" className="navigation" role="navigation">
    <input id="toggleAccordion" type="checkbox" />
    <label className="hamburger1 " for="toggleAccordion" style={{display:"grid" , cursor:"pointer" , justifyContent:"flex-start" , marginBottom:"3.5vw" , marginLeft:"-0.5rem"}}>
      <div className="top"></div>
      <div className="meat"></div>
      <div className="bottom"></div>
    </label>
  
    <nav className="menu1" style={{background:"transparent", width:"100%" , display:"flex" , flexDirection:"column" , alignItems:"center" , lineHeight:"2rem"}}>
    <button style={{textDecoration:"none" , border:"none" , backgroundColor:"transparent" , color:"#B46BD1" , width:"100%" , fontSize:"clamp(1.5rem , 2vw , 2rem)" , textAlign:"start"}} onClick={()=> {filterItem("All");
    document.getElementById("toggleAccordion").checked = false;}}>All</button>
    <button style={{textDecoration:"none" , border:"none" , backgroundColor:"transparent" , color:"#B46BD1" , width:"100%" , fontSize:"clamp(1rem , 2vw , 2rem)" , textAlign:"start"}} onClick={()=> {filterItem("UX design"); document.getElementById("toggleAccordion").checked = false;}}>UX design</button>
                <button style={{textDecoration:"none" , border:"none" , backgroundColor:"transparent" , color:"#B46BD1" , width:"100%" , fontSize:"clamp(1rem , 2vw , 2rem)" , textAlign:"start"}} onClick={()=> {filterItem("UI design"); document.getElementById("toggleAccordion").checked = false;}}>UI design</button>
                <button style={{textDecoration:"none" , border:"none" , backgroundColor:"transparent" , color:"#B46BD1" , width:"100%" , fontSize:"clamp(1rem , 2vw , 2rem)" , textAlign:"start"}} onClick={()=> {filterItem("Design thinking"); document.getElementById("toggleAccordion").checked = false;}}>Design thinking</button>
                <button style={{textDecoration:"none" , border:"none" , backgroundColor:"transparent" , color:"#B46BD1" , width:"100%" , fontSize:"clamp(1rem , 2vw , 2rem)" , textAlign:"start"}} onClick={()=> {filterItem("Tools and Techniques"); document.getElementById("toggleAccordion").checked = false;}}>Tools and Techniques</button>
                <button style={{textDecoration:"none" , border:"none" , backgroundColor:"transparent" , color:"#B46BD1" , width:"100%" , fontSize:"clamp(1rem , 2vw , 2rem)" , textAlign:"start"}} onClick={()=> {filterItem("Front end development"); document.getElementById("toggleAccordion").checked = false;}}>Front end development</button>
                <button style={{textDecoration:"none" , border:"none" , backgroundColor:"transparent" , color:"#B46BD1" , width:"100%" , fontSize:"clamp(1rem , 2vw , 2rem)" , textAlign:"start"}} onClick={()=> {filterItem("Back end development"); document.getElementById("toggleAccordion").checked = false;}}>Back end development</button>
                <button style={{textDecoration:"none" , border:"none" , backgroundColor:"transparent" , color:"#B46BD1" , width:"100%" , fontSize:"clamp(1rem , 2vw , 2rem)" , textAlign:"start"}} onClick={()=> {filterItem("Full stack development"); document.getElementById("toggleAccordion").checked = false;}}>Full stack development</button>
                <button style={{textDecoration:"none" , border:"none" , backgroundColor:"transparent" , color:"#B46BD1" , width:"100%" , fontSize:"clamp(1rem , 2vw , 2rem)" , textAlign:"start"}} onClick={()=> {filterItem("Mixed reality(XR)"); document.getElementById("toggleAccordion").checked = false;}}>Mixed reality(XR)</button>
                <button style={{textDecoration:"none" , border:"none" , backgroundColor:"transparent" , color:"#B46BD1" , width:"100%" , fontSize:"clamp(1rem , 2vw , 2rem)" , textAlign:"start"}} onClick={()=> {filterItem("Augmented reality"); document.getElementById("toggleAccordion").checked = false;}}>Augmented reality</button>
                <button style={{textDecoration:"none" , border:"none" , backgroundColor:"transparent" , color:"#B46BD1" , width:"100%" , fontSize:"clamp(1rem , 2vw , 2rem)" , textAlign:"start"}} onClick={()=> {filterItem("Virtual reality"); document.getElementById("toggleAccordion").checked = false;}}>Virtual reality</button>
    </nav>
</nav>
</section>
    {/* <BlogCard currEle={blogs}/> */}
	<div
			className="card-contain container"
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(3,1fr)",
				gap: "2rem",
				rowGap: "4rem",
			}}
		>
			{filteredBlogs.map((currEle) => (
				<BlogCard currEle={currEle} />
			))}
		</div>
      <Subscribe/>
    </>
  )
}

export default MainBlog