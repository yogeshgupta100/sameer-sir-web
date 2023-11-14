import React , {useState} from 'react'
import Resource from './Resource';
import DesignCardApi from './DesignCardApi';
import Subscribe from '../aboutus/Subscribe'

const Mainresource = () => {
    const [designCardData ,setDesignCardData] = useState(DesignCardApi);
    const filterItem = (position) =>{
        const updatedList = DesignCardApi.filter((currEle) => {
            return currEle.position === position;
        });
        setDesignCardData(updatedList);
    };
  return (
    <>
    <Resource designCardData={designCardData}/>
    <Subscribe/>
    </>
  )
}

export default Mainresource