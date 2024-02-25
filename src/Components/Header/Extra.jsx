import React from 'react';
import "./Extra.css";
import img1 from './img/extra (3).png';
import img2 from './img/extra (2).png';
import img3 from './img/extra (4).png';
function Extra() {
  return (
   <section>
   <div>
   <div className=' bg-[#FAF7F0]' >
    <div className='container maindiv'>
    <div className=" p-20 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
         
   <div className='lg:pt-20 sm:pt-0'>
   <div className='imgone pt-10'>
   <img src={img1} alt=''></img>
   </div>

   <div>
   <p className='text-[14px] font[400] mt-2 mb-2 font-lexend' >
   Creative agency encompasses wide range of services related i the creative and st marketing These agencies specialize in offering innovative solutions to clients branding loren ipsum
  </p>
  <p className='text-[18px] font-bold font-dm'>----Creative agency  </p>
  <p className='text-[12px] ml-10 font-lexend'>Creative agency  </p>
   
  
   </div>

   </div>

   <div className='lg:p-10 sm:p-0'>
   <img src={img2} alt=''></img>
   </div>

 </div>

 
 <div className='seconddiv mt-10 lg:mt-5 ' >
 <img src={img3} alt=''/>
 </div>
 </div>
    </div>
   </div>


   </section>

    
  )
}

export default Extra
