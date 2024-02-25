import React from 'react';
import './Contact.css';
import img1 from "./img/extra (5).png";
import img2 from "./img/Group 8988.png";
import img3 from "./img/Group 8988 (1).png";


function Contact() {
  return (
    <div className='container '>
      <div className="container contact grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
        
       <div className='mt-[-200px] lg:mt-0'>
       <img src={img1} alt=''/>
       
       </div>
        <div>
       <h4 className='text-[43px] font-dm font-[700] text-[#140B43]'>We develop product that the people love to use</h4>
       <p className='text-[12px] font-lexend font-[400]'>Creative agency encompasses a wide an services related to creative and strategic marketing These age specialize in offering innovative solutions to clients branding and communication needs loren ipsum</p>
       

       <div className='flex flex-col md:flex-row items-center justify-between lg:mt-10 mt-0'>
  <div className="w-full lg:w-1/4">
  <div className='imagecontact'>
  <img src={img2} alt=''/>
 </div>
  </div>

  <div className="w-full lg:w-3/4 content ml-52 lg:ml-0">
  <h5 className='text-[18px] font-bold font-dm'>Content Wizards</h5>
  <p className='text-[12px] font-lexend'>Creative agency encompasses a wide range of services related to creative and strategic marketing </p>
  
  </div>
</div>

<div className='flex flex-col md:flex-row items-center justify-between lg:mt-10 mt-0'>
  <div className="w-full lg:w-1/4">
  <div className='imagecontact'>
  <img src={img3} alt=''/>
 </div>
  </div>

  <div className="w-full lg:w-3/4 content ml-52 lg:ml-0">
  <h5 className='text-[18px] font-bold font-dm'>Idea Makers</h5>
  <p className='text-[12px] font-lexend'>Creative agency encompasses a wide range of services related to creative and strategic marketing </p>
  
  </div>
</div>

       </div>


       {/*form */}
     
      </div>
      

      <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-20">
 
  <div class="lg:col-span-1   object-cover">
  <div class="w-full object-cover  ">
 
  <div className='lg:mt-20 mt-5'>
  <h5 className='text-[20px] font-bold font-dm'>Contact For Urgent Service</h5>
  <p className='text-[12px] font-lexend'>Creative agency encompasses a wides range of <br/> services related to the design creative and strategic</p>
  <p className='text-[16px] font-bold font-lexend'>+(201) 555-0124</p>
  </div>
</div>
  </div>
  <div class="lg:col-span-2   object-cover">
  <div class="w-full object-cover border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <form class="max-w-sm mx-auto">


<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
  <div>
  <div class="mb-5">
  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-lexend">Your Name</label>
  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Mr...." required />
 </div>
  </div>

  <div>
  <div class="mb-5">
 <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-lexend">Your password</label>
 <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
</div>
  </div>
 
  <div>
  <div class="mb-5">
 <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-lexend">Repeat password</label>
 <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
</div>
  </div>
</div>
<div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
  <div>
  <div class="mb-5">
  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-lexend">Your email</label>
  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
 </div>
  </div>

  <div>
  <div class="mb-5">
 <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-lexend">Your password</label>
 <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="****" required />
</div>
  </div>
 
  <div>
  <div class="mb-5">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-lexend">Select your country</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option>United States</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
  </select>
</div>
  </div>
</div>

<div class="mb-5">

<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-lexend">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

</div>



<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Now</button>
</form>
    
</div>
  </div>
</div>
     
    </div>

    
  )
}

export default Contact
