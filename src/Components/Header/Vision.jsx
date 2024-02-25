import React from 'react';
import "./Vision.css";
import img1 from "./img/dashboard_uiux_juli_12_01 3.png";
function Vision() {
  return (
   
     <div className='bg-[#F5F5F7] lg:h-72 h-auto'>

     <div className='container grid vision grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2'>

     <div className='imagevision lg:mt-[-80px]'>
       <img src={img1} alt=''/>
     </div>

     <div className='lg:p-10 lg:mt-[0px] mt-[-130px] text-center lg:text-start mb-5'>
       <h2 className='text-[33px] font-[700] leading-9 lg:pt-10 '>Your Vision, Our Passion Outstanding Results</h2>
       <div class="grid grid-cols-2 gap-2 mt-3">
  <div>
  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Email" required />
  </div>

  <div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </div>
</div>
      
     </div>


     </div>
     
     
     </div>
   
   
   
  )
}

export default Vision
