import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from "./img/Frame.png";
import phn from "./img/phn.png";
import './Header.css';

function Header() {
    const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'About Us',
    },
    {
      id: 3,
      link: 'Service',
    },
    {
      id: 4,
      link: 'Projects',
    },
    {
      id: 5,
      link: 'Blog',
    },
    {
        id: 6,
        link: 'Page',
      },
      {
        id: 7,
        link: 'Contact',
      },
  ];
    
 
  return (
    <div className={navbar ? 'head active' : 'head'}>
      <div className='flex justify-between bg-transparent items-center w-full h-20 container'>
        <div className='grid grid-cols-2'>
          <div>
         <img className='logoimg'
         
         src={logo} alt='logo'/>
          </div>
          <div>
          <h1 className='logotext font-dm'>CloudFlow</h1>
          </div>
        </div>

        <ul className="hidden md:flex menulist font-lexend">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 menu"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
          </ul>

           {/* dark mood */}
           <div className='grid grid-cols-2 hidden md:flex'>
          <div>
         <img className='phnlogo'
         
         src={phn} alt='phn'/>
          </div>
          <div>
          <p className='phnlogop font-lexend'>Need help?</p>
          <h1 className='phnlogoh font-lexend'>(808) 555-0111</h1>
          </div>
        </div>

    

         
        

        <div
        onClick={()=> setNav(!nav)}
         className='cursor-pointer text-blue-800 pr-4 z-10 text-dark md:hidden toggle'>
        {nav ? <FaTimes size={20}/> : <FaBars size={20}/>}
        </div>

        {/* toggle menu*/}

        {
            nav &&(
              <ul className="flex flex-col justify-center items-center gap-3 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-3xl py-6 hover:text-primaryColor"
                >
                  <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            )
        }
      </div>
    </div>
  )
}

export default Header
