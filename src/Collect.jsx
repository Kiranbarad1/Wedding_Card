import React from "react";

import  Data_da  from "./Data";
import { useNavigate } from "react-router-dom";
const Collect = () => {
   const nav =useNavigate()
  console.log('hgfg', Data_da );
  return (
    <>
    
      <h1 onClick={()=>nav('/custom')}>
        If you want the custom the click on the custom button and add your
        background image and text to it
      </h1>

      <h2 onClick={()=>nav('/card')}> if u want readimate backgound then select from the below</h2>
    </>
  );
};

export default Collect;
