import React from "react";
import Hamburger from "hamburger-react";

function Hammburgir({ toggled, toggle }) {
  return (
    <div className="relative">
      {/* Hamburger Button */}
      <div className="sm:hidden cursor-pointer">
        <Hamburger toggled={toggled} toggle={toggle} />
      </div>

      {/* Dropdown Menu */}
      {toggled && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col gap-2 p-4 z-50">
          <a href="#" className="hover:bg-gray-800 px-2 py-1 rounded transition">
            Home
          </a>
          <a href="#container2" className="hover:bg-gray-800 px-2 py-1 rounded transition">
            Programs
          </a>
          <a href="#container3" className="hover:bg-gray-800 px-2 py-1 rounded transition">
            Plans
          </a>
          <a href="#container4" className="hover:bg-gray-800 px-2 py-1 rounded transition">
            Testimonials
          </a>
        </div>
      )}
    </div>
  );
}

export default Hammburgir;



