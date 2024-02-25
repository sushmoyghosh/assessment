import React from 'react';
import "./Slider.css";
import Carousel from 'better-react-carousel';
import img1 from "./img/slider (2).png";
import img2 from "./img/slider (1).png";
import img3 from "./img/slider (3).png";
function Slider() {
  return (
    <div className='container '>
      <h2 className=' text-[30px] text-center font-bold mt-5 lg:mt-20 font-dm'> Crafting Brands That Stand Out from the Crowd</h2>

      <div className='mb-20'>
      
      <Carousel loop>
      <Carousel.Item className=''>
      <div className='flex flex-col sm:flex-row lg:p-10'>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 mt-5'>

        <div>
        <div class="max-w-sm bg-white border border-b hover:border-b-blue-500 border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <div>
        <div>
            <img className="rounded-t-lg image" src={img1} alt="" />
        </div>
        <div>
         <p className='imageparagrap font-lexend'>October 19,2022</p>
        </div>
        
        </div>
        <div class="p-5">

        <div class="grid grid-cols-2 gap-2 ">
<div>
<p className='text-[12px] font-[400] font-lexend'> By Admin</p>
</div>

<div><p className='text-[12px] font-[400] ml-10 font-lexend'> Comments (05)</p>
</div>
</div>


            <div>
                <h5 class="mb-2 text-[22px] font-bold tracking-tight text-gray-900 dark:text-white font-dm">Empowering Brands the a through Creative</h5>
            </div>
            <p class="mb-3 text-[12px] font-normal text-gray-700 dark:text-gray-400 font-lexend">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div class="inline-flex items-center px-3 font-lexend py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </div>
        </div>
        </div>
        
        </div>

          <div>
          <div class="max-w-sm bg-white border border-b hover:border-b-blue-500 border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
          <div>
          <div>
              <img className="rounded-t-lg image" src={img2} alt="" />
          </div>
          <div>
           <p className='imageparagrap'>October 19,2022</p>
          </div>
          
          </div>
          <div class="p-5">

          <div class="grid grid-cols-2 gap-2 ">
<div>
<p className='text-[12px] font-[400]'> By Admin</p>
</div>

<div><p className='text-[12px] font-[400] ml-10'> Comments (05)</p>
</div>
</div>


              <div>
                  <h5 class="mb-2 text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">Empowering Brands the a through Creative</h5>
              </div>
              <p class="mb-3 text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                   <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </div>
          </div>
          </div>
          
          </div>

          <div>
          <div class="max-w-sm bg-white border border-b hover:border-b-blue-500 border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
          <div>
          <div>
              <img className="rounded-t-lg image" src={img3} alt="" />
          </div>
          <div>
           <p className='imageparagrap'>October 19,2022</p>
          </div>
          
          </div>
          <div class="p-5">

          <div class="grid grid-cols-2 gap-2 ">
<div>
<p className='text-[12px] font-[400]'> By Admin</p>
</div>

<div><p className='text-[12px] font-[400] ml-10'> Comments (05)</p>
</div>
</div>


              <div>
                  <h5 class="mb-2 text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">Empowering Brands the a through Creative</h5>
              </div>
              <p class="mb-3 text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                   <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </div>
          </div>
          </div>
          
          </div>
        
        </div>
      </div>
    </Carousel.Item>

      {/* ... other Carousel.Item components ... */}

      <Carousel.Item className=''>
      <div className='flex flex-col sm:flex-row lg:p-10'>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 mt-5'>

        <div>
        <div class="max-w-sm bg-white border border-b hover:border-b-blue-500 border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <div>
        <div>
            <img className="rounded-t-lg image" src={img1} alt="" />
        </div>
        <div>
         <p className='imageparagrap'>October 19,2022</p>
        </div>
        
        </div>
        <div class="p-5">

        <div class="grid grid-cols-2 gap-2 ">
<div>
<p className='text-[12px] font-[400]'> By Admin</p>
</div>

<div><p className='text-[12px] font-[400] ml-10'> Comments (05)</p>
</div>
</div>


            <div>
                <h5 class="mb-2 text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">Empowering Brands the a through Creative</h5>
            </div>
            <p class="mb-3 text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </div>
        </div>
        </div>
        
        </div>

          <div>
          <div class="max-w-sm bg-white border border-b hover:border-b-blue-500 border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
          <div>
          <div>
              <img className="rounded-t-lg image" src={img2} alt="" />
          </div>
          <div>
           <p className='imageparagrap'>October 19,2022</p>
          </div>
          
          </div>
          <div class="p-5">

          <div class="grid grid-cols-2 gap-2 ">
<div>
<p className='text-[12px] font-[400]'> By Admin</p>
</div>

<div><p className='text-[12px] font-[400] ml-10'> Comments (05)</p>
</div>
</div>


              <div>
                  <h5 class="mb-2 text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">Empowering Brands the a through Creative</h5>
              </div>
              <p class="mb-3 text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                   <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </div>
          </div>
          </div>
          
          </div>

          <div>
          <div class="max-w-sm bg-white border border-b hover:border-b-blue-500 border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
          <div>
          <div>
              <img className="rounded-t-lg image" src={img3} alt="" />
          </div>
          <div>
           <p className='imageparagrap'>October 19,2022</p>
          </div>
          
          </div>
          <div class="p-5">

          <div class="grid grid-cols-2 gap-2 ">
<div>
<p className='text-[12px] font-[400]'> By Admin</p>
</div>

<div><p className='text-[12px] font-[400] ml-10'> Comments (05)</p>
</div>
</div>


              <div>
                  <h5 class="mb-2 text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">Empowering Brands the a through Creative</h5>
              </div>
              <p class="mb-3 text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                   <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </div>
          </div>
          </div>
          
          </div>
        
        </div>
      </div>
    </Carousel.Item>

      <Carousel.Item className=''>
        <div className='flex flex-col sm:flex-row lg:p-10'>
          <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3 mt-5'>

          <div>
          <div class="max-w-sm bg-white border border-b hover:border-b-blue-500 border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
          <div>
          <div>
              <img className="rounded-t-lg image" src={img1} alt="" />
          </div>
          <div>
           <p className='imageparagrap'>October 19,2022</p>
          </div>
          
          </div>
          <div class="p-5">

          <div class="grid grid-cols-2 gap-2 ">
<div>
<p className='text-[12px] font-[400]'> By Admin</p>
</div>

<div><p className='text-[12px] font-[400] ml-10'> Comments (05)</p>
</div>
</div>


              <div>
                  <h5 class="mb-2 text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">Empowering Brands the a through Creative</h5>
              </div>
              <p class="mb-3 text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                   <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </div>
          </div>
          </div>
          
          </div>

            <div>
            <div class="max-w-sm bg-white border border-b hover:border-b-blue-500 border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <div>
            <div>
                <img className="rounded-t-lg image" src={img2} alt="" />
            </div>
            <div>
             <p className='imageparagrap'>October 19,2022</p>
            </div>
            
            </div>
            <div class="p-5">

            <div class="grid grid-cols-2 gap-2 ">
  <div>
  <p className='text-[12px] font-[400]'> By Admin</p>
  </div>
  
  <div><p className='text-[12px] font-[400] ml-10'> Comments (05)</p>
  </div>
</div>


                <div>
                    <h5 class="mb-2 text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">Empowering Brands the a through Creative</h5>
                </div>
                <p class="mb-3 text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                     <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </div>
            </div>
            </div>
            
            </div>

            <div>
            <div class="max-w-sm bg-white border border-b hover:border-b-blue-500 border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <div>
            <div>
                <img className="rounded-t-lg image" src={img3} alt="" />
            </div>
            <div>
             <p className='imageparagrap'>October 19,2022</p>
            </div>
            
            </div>
            <div class="p-5">

            <div class="grid grid-cols-2 gap-2 ">
  <div>
  <p className='text-[12px] font-[400]'> By Admin</p>
  </div>
  
  <div><p className='text-[12px] font-[400] ml-10'> Comments (05)</p>
  </div>
</div>


                <div>
                    <h5 class="mb-2 text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">Empowering Brands the a through Creative</h5>
                </div>
                <p class="mb-3 text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                     <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </div>
            </div>
            </div>
            
            </div>
          
          </div>
        </div>
      </Carousel.Item>
      
    </Carousel>


     
  

      
      </div>
    </div>
  )
}

export default Slider
