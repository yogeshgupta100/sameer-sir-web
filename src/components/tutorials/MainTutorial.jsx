import React from 'react'
import HeaderTutorial from './HeaderTutorial'
import Subscribe from '../aboutus/Subscribe'
import Header from '../Header'
import TutorialCard from './TutorialCard'

const MainTutorial = () => {
  return (
    <>
      <Header/>
      <HeaderTutorial/>
      <TutorialCard/>
      <Subscribe/>
    </>
  )
}

export default MainTutorial