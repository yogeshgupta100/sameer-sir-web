import React , {useState} from 'react'
import Resource from './Resource';
import DesignCardApi from './DesignCardApi';

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
    </>
  )
}

export default Mainresource