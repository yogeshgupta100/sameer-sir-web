import React from 'react'
import Header from '../Header'
import HeroSection from './HeroSection'
import Blog from '../resources/Blog'
import Subscribe from '../aboutus/Subscribe'

const MainBlog = () => {
  return (
    <>
      <Header/>
      <HeroSection/>
      <div className="container">
        <Blog/>
      </div>
      <Subscribe/>
    </>
  )
}

export default MainBlog