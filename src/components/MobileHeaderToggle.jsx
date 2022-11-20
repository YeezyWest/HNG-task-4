import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function MobileHeaderToggle({ handleToggle }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex items-center justify-between p-4 rounded-full border-grey-200 lg:hidden">
      <button
        type="button"
        className={'flex flex-col items-end justify-between w-5 h-4'}
        onClick={() => {
          handleToggle();
          setSidebarOpen(true);
          console.log(sidebarOpen);
        }}
      >
        <span className="w-full h-0.5 rounded-xl bg-black" />
        <span className="w-10/12 h-0.5  rounded-xl bg-black" />
        <span className="w-1/2 h-0.5 rounded-xl bg-black" />
      </button>
      <div
        className={
          sidebarOpen === false
            ? 'bg-white fixed top-0 right-0 h-full w-0 text-xl transition-all	'
            : 'bg-white fixed top-0 right-0 h-full w-10/12 text-xl transition-all	'
        }
      >
        <p
          className="mb-3 p-10 pb-0 text-right font-Outfit font-normal text-2xl"
          onClick={() => {
            setSidebarOpen(false);
            console.log(sidebarOpen);
          }}
        >
          x
        </p>
        <hr />
        <ul className="p-10 space-y-10">
          <li className="flex gap-4 text-[#82808F]">
            <span>
             <img src="/Icon (1).svg" alt="" />
           </span>
            Home</li>
          <li className="flex gap-4 text-[#82808F]"> 
            <span>
            <img src="/icon(2).png" alt="" />
          </span>
            Features</li>
          <li className="flex gap-4 text-[#82808F]">
            <span>
              <img src="/icons(3).png" alt="" />
            </span>
            For Business</li>
          <li className="flex gap-4 text-[#EF6820] bg-[#FDEAD7] px-1 py-5 w-full">
            <span>
              <img src="/Vector(3).png" alt="" />
            </span>
            About Us</li>
          <li className="flex gap-4 text-[#82808F]">
            <span>
              <img src="/icon(5).png" alt="" />
            </span>
            Sign Up</li>
        </ul>
      </div>
    </div>
  );
}

MobileHeaderToggle.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};