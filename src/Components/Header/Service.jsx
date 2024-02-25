import React from 'react';
import './Service.css';
import img1 from "./img/Group.png";
import img2 from "./img/Group (1).png";
import img3 from "./img/Group (2).png";
import img4 from "./img/Group (3).png";
import img5 from "./img/Line.png";
import img6 from "./img/36.png";
import img7 from "./img/Text.png";


function Service() {
  return (
    <div>
    <section className='lg:pt-20 bg-white  w-full ' id='hero' >
    <div className='container lg:pt-6'>
       <div className=''>

       <div className='container'>
       <div className='text-center'>
          <h2 className='text-dark font-[800] text-[33px] lg:text-[43px] font-dm'>
          Simplify your business with <br/>  the Saas services
          </h2>
          
       </div>
       </div>


     
       </div>

       
<div className="container text-center grid md:grid-cols-2 grid-cols-1 gap-2 mt-5 mb-10">

<div>
<div className="bg-[#F4FBFD] p-8 rounded-lg shadow lg:m-4 m-2 ">

<div>
  <div className="flex flex-col items-center  md:flex-row md:max-w-xl">
    <img className="serviceimg1" src={img1} alt="img1" />
    <div className="flex flex-col justify-between p-4 text-start leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-dm dark:text-white">Creative Pixel</h5>
        <p className="mb-3 font-[400] text-[16px] text-gray-700 dark:text-gray-400 font-lexend">Creative agency encom a wide the range of services related to creative </p>
    </div>
  </div>
</div>

</div>
</div>

<div>
<div className="bg-[#FAF7F0] p-8 rounded-lg shadow lg:m-4 m-2">

<div>
  <div className="flex flex-col items-center  md:flex-row md:max-w-xl">
    <img className="serviceimg2" src={img2} alt="img2" />
    <div className="flex flex-col justify-between p-4 text-start leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-dm">Artistic Wave </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-lexend">Creative agency encom a wide the range of services related to creative </p>
    </div>
  </div>
</div>

</div>
</div>

<div>
<div className="bg-[#FAF7F0] p-8 rounded-lg shadow lg:m-4 m-2">

<div>
  <div className="flex flex-col items-center  md:flex-row md:max-w-xl">
    <img className="serviceimg2" src={img3} alt="img3" />
    <div className="flex flex-col justify-between p-4 text-start leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-dm">Design Forge</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-lexend">Creative agency encom a wide the range of services related to creative </p>
    </div>
  </div>
</div>

</div>
</div>

<div>
<div className="bg-[#F4FBFD] p-8 rounded-lg shadow lg:m-4 m-2">

<div>
  <div className="flex flex-col items-center  md:flex-row md:max-w-xl hover:bg-gray-100">
    <img className="serviceimg3" src={img4} alt="img4" />
    <div className="flex flex-col justify-between p-4 text-start leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-dm">Innovation Hub</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-lexend">Creative agency encom a wide the range of services related to creative </p>
    </div>
  </div>
</div>

</div>
</div>

</div>
</div>

{/* another section */}
<div className="mt-5">
<img className="" src={img5} alt=""/>
</div>


{/* another section*/}

<div className='md:flex items-center justify-between sm:flex-col md:flex-row '>
<div class="container text-center lg:p-10  grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
  <div>
  <img className="img6" src={img6} alt=""/>
  </div>
 
  <div>
  <div class="grid grid-rows-3 gap-3 img6">
  <div className='text-start'>
  <h1  className='mt-2 text-dark font-[800] font-dm text-[1.8rem] sm:text-[40px] loading-[55px]
  sm:loading-[46px]'>

  Unleash Your Brand's Creative Potential the agency
  </h1>
       
  </div>
  <div>
  <h5 className='text-[14px] text-start font-lexend' >
  Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus volutpat, sodales purus. Nunc quis maurodales purus. Nunc quis mauris et eros vulputate mattis Nulla vitae ex nunc.
        
   </h5>
  </div>
  <div>
  <img className="img7" src={img7} alt=""/>
  </div>
</div>
  </div>
</div>
</div>
    
  </section>
      
    </div>
  )
}

export default Service
