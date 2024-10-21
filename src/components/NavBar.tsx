import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  function toggleOpen() {
    setOpen(prevOpen => !prevOpen);
  }

  return (
    <div className="flex justify-between items-center lg:px-18 bg-black z-10">
      <img
        src="https://cdn.prod.website-files.com/66822bf5bdab120be26a1ea9/668f5cf5a08220cdd6433316_%20Logo01.svg"
        loading="lazy"
        alt="Logo"
        className="z-11 bg-black"
      />
      <ul className="gap-6 lg:gap-9 justify-end pr-9 py-6 text-light-grey font-sans font-medium hidden text-lg sm:flex text-nowrap">
        <li className="hover:text-orange hover:cursor-pointer hover:duration-200">Home</li>
        <li className="hover:text-orange hover:cursor-pointer hover:duration-200">About</li>
        <li className="hover:text-orange hover:cursor-pointer hover:duration-200">Menu</li>
        <li className="hover:text-orange hover:cursor-pointer hover:duration-200">Services</li>
        <li className="hover:text-orange hover:cursor-pointer hover:duration-200">Blog</li>
        <li className="hover:text-orange hover:cursor-pointer hover:duration-200">Contact Us</li>
      </ul>
      <div className="ham-menu flex sm:hidden " onClick={toggleOpen}>
        {open ? (
      <div className="">
          <img
            src="https://www.svgrepo.com/show/521590/cross.svg"
            alt="Close menu"
            className="size-12 z-20 relative"
            style={{
              filter: "invert(97%) sepia(6%) saturate(48%) hue-rotate(227deg) brightness(99%) contrast(95%)",
            }}
          />
      <ul className="z-0 sm:hidden absolute left-0 w-[90%] px-9 text-light-grey font-sans font-bold space-y-3 mt-6 text-nowrap text-lg hover:cursor-pointer slide-in bg-black" >
        <li className="hover:text-orange hover:duration-300">Home</li>
        <li className="hover:text-orange hover:duration-300" >About</li>
        <li className="hover:text-orange hover:duration-300">Menu</li>
        <li className="hover:text-orange hover:duration-300">Services</li>
        <li className="hover:text-orange hover:duration-300">Blog</li>
        <li className="hover:text-orange hover:duration-300">Contact Us</li>
      </ul>
      </div>
        ) : (
          <img
            src="https://www.svgrepo.com/show/506800/burger-menu.svg"
            alt="Open menu"
            className="z-10 size-12 scale-75"
            style={{
              filter: "invert(97%) sepia(6%) saturate(48%) hue-rotate(227deg) brightness(99%) contrast(95%)",
            }}
          />
        )}
      </div>
    </div>
  );
}

