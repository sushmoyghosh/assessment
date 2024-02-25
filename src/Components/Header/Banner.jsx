import React from 'react';
import img1 from "./img/img1 (1).png";
import img2 from "./img/img1 (2).png";
import img3 from "./img/img1 (3).png";
import img4 from "./img/img1 (4).png";
import img5 from "./img/img1 (5).png";
import img6 from "./img/img1 (6).png";
import img7 from "./img/img1(7).png";
import './Banner.css';
function Banner() {
  return (
    <section className='lg:pt-20 bg-custom-gradient  w-full ' id='hero' >
    <div className='container lg:pt-16'>
       <div className='md:flex items-center justify-between sm:flex-col md:flex-row '>

       {/*=====hero left content======*/}
       <div className='w-full md:basis-1/2'>
         
       <h1 className='w-[660px] h-[266px] font-dm lg:text-[82px] sm:text-[40px] font-bold leading-[89px] text-[#140B43] mt-[80px] hidden sm:block'>Bring your business into creativity</h1>
       <h5 className="font-lexend text-sm font-lexend font-normal leading-[26px] w-[393px] h-[52px] mt-[10px] hidden sm:block">
       Incorporating a business offers benefits tax limited liability protection tax the
</h5>


       
       <h1  className='text-dark font-[800] text-[1.8rem] sm:text-[40px] loading-[35px]
       sm:loading-[46px] font-dm mt-5 sm:mt-0 block sm:hidden'>

       Bring your business into creativity
       </h1>
       <h5 className='text-[14px] block sm:hidden font-lexend' >
       Incorporating a business offers benefits tax limited liability protection tax the
        
       </h5>
         <button className='bannerbutton font-lexend'>Get Started</button>

       </div>
       {/*=====hero left content======
  
   import countUp from 'react-countup';
   */}
   {/* hero img*/}
   <div className='basis-1/3 mt-10 sm:mt-0 block sm:hidden'>
   <figure 
   
   
   className='flex items-center justify-center'>

    <div class="img1">
    <img class="img1details" src={img1} alt="img1"/>
   
</div>
   </figure>
 </div>
   {/* hero img*/}
   <div className=' mt-10 sm:mt-0 hidden sm:block'>
   <div >
   <div class="img1">
       <img class="img1details hidden sm:block" src={img1} alt="img1"/>
       <img class="img2details hidden sm:block " src={img2} alt="img2"/>
       <img class="img3details hidden sm:block" src={img3} alt="img3"/>
       <img class="img4details hidden sm:block" src={img4} alt="img4"/>
       <img class="img5details hidden sm:block" src={img5} alt="img5"/>
       <img class="img6details hidden sm:block" src={img6} alt="img6"/>
       <img class="img7details hidden sm:block" src={img7} alt="img7"/>
   </div>
</div>


   </div>
   {/* hero img*/}
   {/* hero content*/}
   

   {/* hero content*/}


       </div>
    </div>


    
  </section>
  )
}

export default Banner
