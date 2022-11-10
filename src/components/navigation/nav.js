import React, { useRef, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
const Nav = () => {
  const [isActive, setIsActive] = useState(true)
  const navItemsRef = useRef(null);
  const handleNavItemWithThreeDotNenu = () => {
    navItemsRef.current.classList.toggle("hidden");
    navItemsRef.current.classList.toggle("flex");
  }
  const datas = [
    { url: '/', txt: 'Home' },
    { url: '/contact', txt: 'Contact' },
    { url: '/faqs', txt: 'FAQs' },
    { url: '/notice', txt: 'Notice' },
    { url: '/book', txt: 'Books' },
    { url: '/about', txt: 'About' },
    { url: '/sine-in', txt: 'Sine-in' },
  ];

  const Li = (data) => {
    return (<li>
      <NavLink className={data.classNames} end
        to={data.url}
      >
        {data.txt}
      </NavLink>

    </li>)
  }
  return (<>
    <div className="h-16"></div>
    <nav className="flex fixed top-0 left-0 w-full h-14 items-start bg-white shadow-lg lg:items-center z-10">
      <button onClick={handleNavItemWithThreeDotNenu} className="z-10 self-center absolute left-5 lg:hidden"> <FaBars /> </button>
      <ul ref={navItemsRef} className="hidden bg-white lg:bg-none p-10 lg:p-0 lg:px-5 space-y-5 lg:space-y-0 rounded-xl lg:flex flex-col lg:flex-row lg:space-x-8 font-medium ">
        {datas.map(data => {
          return (
            <Li key={uuidv4()} {...{
              classNames: "text-gray-900 dark:text-white duration-100 hover:text-lg hover:text-white hover:bg-pink-500 rounded-xl p-3",
              txt: data.txt,
              url: data.url
            }} />
          )
        })}
      </ul>
    </nav>
  </>

  )
}

export default Nav
// <Button variant="text">Text</Button>
  // <Button variant="contained">Contained</Button>
  // <Button variant="outlined">Outlined</Button>