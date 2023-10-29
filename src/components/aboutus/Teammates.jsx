import React from 'react'
import Heading from './Heading';
import EmpCard from './card';

const Teammates = ({empData}) => {
  return (
    <>
    <div className='container' style={{
        marginTop:"9rem"
    }}>
    <Heading content={"The People Behind The Pixels"} left="30%"/>
      </div>
    <section className='main-card--container container'>
    {empData.map((currEle) => {
      return(
          <EmpCard currEle={currEle}/>
        );
        })
      }
      
    </section>
  </>
  )
}

export default Teammates