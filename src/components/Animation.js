import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import white_s from "../Images/dds.png"
import black_s from "../Images/qwqw.png"
export const Animation = () => {
   const [switches , setSwitches] = useState(true);
   const [black, setBlack] = useState(false);
   const toggleSwitch = () =>{
    setSwitches(!switches);
    setBlack(!black)
  
   }
  return (
    <div  className='container  boxes'>
        <div className='d-flex justify-content-center'>
           <div  className="switch" data-isOn={switches} onClick={toggleSwitch}>
              <motion.div className="handle" layout transition={spring} />

            </div>
      
        </div>
       <center><h4 style={{color: "white", fontSize: 20}}>https://switchiify.com/u/homepage</h4></center> 
            {black ?
            <>
            <img className='container' src={black_s} />
           
            </>
          :  
          <>
       
          <img className='container' src={white_s} />
          </>
          }
            
 
   
    </div>
  )
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
