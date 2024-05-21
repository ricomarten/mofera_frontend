import React, { useState } from 'react';

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState([]);

  const toggleMenu = (index) => {
    setOpenMenus((prevOpenMenus) =>
      prevOpenMenus.includes(index)
        ? prevOpenMenus.filter((i) => i !== index)
        : [...prevOpenMenus, index]
    );
  };

  return (
    <div className="w-64 bg-green-800 text-white h-screen fixed">
      <div className="p-8">
        <img src={"src/assets/dashboard/logo.png"}></img>
        <ul>
          <li className="border-b border-green-700">
          <div class="flex justify-between">
            <a href="#" className="block text-left p-4 hover:bg-white hover:text-green-800 hover:rounded-full"><img src={"src/assets/DashboardDesktop/vector14.svg"}></img>Home</a>
            </div>
          </li>
          <li className="border-b border-green-700">
            <button onClick={() => toggleMenu(0)} className="w-full text-left p-4 hover:bg-green-800 flex justify-between items-center">
              About
              <span>{openMenus.includes(0) ? '-' : '+'}</span>
            </button>
            {openMenus.includes(0) && (
              <ul className="pl-8 bg-green-800">
                <li>
                  <a href="#" className="block p-2 hover:bg-white hover:text-green-900">Our Team</a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-600">Our History</a>
                </li>
              </ul>
            )}
          </li>
          <li className="border-b border-green-700">
            <button onClick={() => toggleMenu(1)} className="w-full text-left p-4 hover:bg-green-800 flex justify-between items-center">
              Services
              <span>{openMenus.includes(1) ? '-' : '+'}</span>
            </button>
            {openMenus.includes(1) && (
              <ul className="pl-8 bg-green-800">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-600">Web Development</a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-600">SEO</a>
                </li>
              </ul>
            )}
          </li>
          <li className="border-b border-green-700">
            <a href="#" className="block p-4 hover:bg-green-800">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
