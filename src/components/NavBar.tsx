import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(prevOpen => !prevOpen);
  }

  return (
    <>
      <div className="contactBar flex justify-between">
        <div className="text-orange pb-5 text-lg">20% Off for all students</div>
        <div className="contacts flex gap-3">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
          </svg>
          <div className="text-lg font-semibold text-white">(91)01234 56789</div>
          <div className="social-logos flex gap-2">
            <svg className="hover:fill-orange fill-white" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
            </svg>
            <svg className="hover:fill-orange fill-white" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
            <svg className="hover:fill-orange fill-white" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
            </svg>


          </div>
        </div>
      </div>

      <hr className="border-grey" />
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
      <hr className="border-grey" />
    </>
  );
}

