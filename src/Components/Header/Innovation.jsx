import React from 'react';
import "./Innovation.css";
import img1 from "./img/dasboard (1).png";
import img2 from "./img/dasboard (2).png";
import img3 from "./img/dasboard (3).png";
import img4 from "./img/dasboard (4).png";
import img5 from "./img/dasboard (5).png";


function Inovition() {
  return (
    <div>
    <section className='lg:pt-1 lg:mt-0 mt-[-150px] bg-white  w-full ' id='hero' >
    <div className='container lg:pt-6'>
       <div className=''>

       <div className='container'>
       <div className='text-center'>
          <h2 className='text-dark font-[800] text-[23px] lg:text-[43px] font-dm'>
          Where Imagination Meets the 
          </h2>
          <h2 className='text-dark font-[800] text-[23px] lg:text-[43px] font-dm'>
           agency Innovation
          </h2>
       </div>

       {/* details section */}
     

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
  {/* First row */}
  <div class="lg:col-span-1  object-cover bg-[#EFEAFC]">
    <div class="w-full  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='image1'>
    <img class="rounded-t-lg   h-44 object-cover" src={img1} alt=""/>
    </div>
    
    <div class="p-5">
    
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-dm">Content and Copywriting</h5>
   
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-lexend">non similique voluptatem</p>
    
</div>
</div>
  </div>
  <div class="lg:col-span-1 object-cover bg-[#EAF7FC]">
  <div class="w-full object-cover  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className='image1'>
  <img class="rounded-t-lg   h-44 object-cover" src={img2} alt=""/>
  </div>
  <div class="p-5">
  
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-dm">Content and Copywriting</h5>
 
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-lexend">consequatur excepturi magnam</p>
 
</div>
</div>
  </div>
  <div class="lg:col-span-1   object-cover bg-[#FEFAE9]">
  <div class="w-full object-cover  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className='image1'>
  <img class="rounded-t-lg   h-44 object-cover" src={img3} alt=""/>
  </div>
  <div class="p-5">
  
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-dm">Social Media Strategy</h5>
 
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-lexend">voluptatem numquam qui</p>
</div>
</div>
  </div>
  
  {/* Second row */}
  <div class="lg:col-span-1   object-cover bg-[#EAFCEA]">
  <div class="w-full object-cover  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className='image1'>
  <img class="rounded-t-lg   h-44 object-cover" src={img4} alt=""/>
  </div>
  <div class="p-5">
  
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-dm">Social Media Strategy</h5>
 
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-lexend">odit quidem corporis</p>
 
</div>
</div>
  </div>
  <div class="lg:col-span-2   object-cover bg-[#FEEDE9]">
  <div class="w-full object-cover border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className='lg:ml-[20%] ml-[0%]'>
  <img class="rounded-t-lg   h-44 object-cover" src={img5} alt=""/>
  </div>
    <div class="p-5">
    
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-dm">Brand Identity and Logo Design</h5>
   
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-lexend">non ipsam voluptas</p>
    
</div>
</div>
  </div>
</div>





       </div>

      
     
       </div>

       

</div>




  </section>
    </div>
  )
}

export default Inovition
