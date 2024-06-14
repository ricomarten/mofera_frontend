import React, { useState } from 'react';
import Sidebar from "../../../components/xyz/Sidebar";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import Table from "./Table";
import RecentActivities from "./RecentActivities";
import SearchForm from "./Search";
import { IoNotifications } from "react-icons/io5";
import { motion } from "framer-motion";

import profilepic from "../../../assets/desktop/profilepicdesktop.svg";
import mascot from "../../../assets/xyz/half-mascot.svg";

const activities = [
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of dry leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-10@2x.png' },
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of dry leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-9@2x.png' },
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of dry leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-22@2x.png' },
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of dry leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-18@2x.png' },
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of dry leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-10@2x.png' },
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of dry leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-9@2x.png' },
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of dry leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-22@2x.png' },
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of dry leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-18@2x.png' },

];

const PowderDashboard = () => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [centraFilter, setCentraFilter] = useState("1");
  const [statsFilter, setStatsFilter] = useState("daily");
  const [trendFilter, setTrendFilter] = useState("monthly");

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <div className="bg-primary w-screen h-screen flex relative">
      <Sidebar isMinimized={isSidebarMinimized} toggleSidebar={toggleSidebar} />
      <div className="flex-1 bg-white rounded-xl mt-3 mr-3 mb-3 p-4 flex flex-col overflow-hidden relative">
        <div className="flex justify-between items-center mb-5">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-around h-28 p-8 bg-quinary rounded-3xl dark:bg-gray-800">
              <div className="flex items-center">
                <h2 className="text-4xl font-bold">Hello Maimunah!</h2>
                <img src={mascot} alt="mascot" className="ml-10" style={{ height: "112px" }} />
              </div>
          </div>

            <div className="flex items-center justify-center gap-20 h-22 rounded dark:bg-gray-800">
              <div>
                <SearchForm isSidebarMinimized={isSidebarMinimized} />
              </div>
              <div className="p-4 bg-quinary rounded-full absolute right-0 top-0 mr-32 mt-11">
                <a href="/dashboard"><IoNotifications className="text-2xl" /></a>
              </div>
              <div>
                <span className="flex items-center mr-6 mt-6">
                  <img src={profilepic} alt='profile picture' className='flex align-right mb-6 absolute right-0 top-0 mr-12 mt-12'/>
                </span>
              </div>
            </div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-12 ml-4 mb-4 rounded dark:bg-gray-800">
            <div className="flow-root">
              <p align="left"><span className="text-2xl font-bold">Powder Data</span></p>
              <p>Observe the statistics, trends, data of Powder</p>
            </div>
            <div className="flex justify-center gap-2">
              <form className="h-10 w-40">
              <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1"
                onChange={(e) => setCentraFilter(e.target.value)} >
                  <option value="1">Select Centra</option>
                  <option value="1">Select Centra 1</option>
                  <option value="2">Select Centra 2</option>
                  <option value="3">Select Centra 3</option>
                </select>
              </form>
              <form className="h-10 w-28">
                <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1">
                  <option>Filter</option>
                  <option>Filter 1</option>
                  <option>Filter 2</option>
                  <option>Filter 3</option>
                </select>
              </form>
            </div>
          </div>
          <div className="grid grid-rows grid-cols-2 gap-4 mb-4">
            <div className="row-span-2 flex flex-col h-[400px] bg-quinary rounded-3xl dark:bg-gray-800 p-8">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg text-black font-semibold">Powder Statistics</div>
                <form className="h-10 w-28">
                <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                  focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1"
                  onChange={(e) => setStatsFilter(e.target.value)}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="annually">Annually</option>
                  </select>
                </form>
              </div>
              <div className="flex-1 flex-grow flex-shrink">
                <BarChart />
              </div>
            </div>
            <div className="flex flex-col h-[288px] bg-quinary rounded-3xl dark:bg-gray-800 p-8">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg text-black font-semibold">Powder Trends</div>
                <form className="h-10 w-28">
                  <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                  focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1"
                  onChange={(e) => setTrendFilter(e.target.value)}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="annually">Annually</option>
                  </select>
                </form>
              </div>
              <div className="flex-1 flex-grow flex-shrink">
                <AreaChart />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="h-24 bg-quinary rounded-3xl flex items-center justify-center dark:bg-gray-800 p-4">
                <div>
                  <p className="text-sm">Total Powder <br /> Collected:</p>
                  <p className="text-lg font-bold">10,300 kg</p>
                </div>
              </div>
              <div className="h-24 bg-quinary rounded-3xl flex items-center justify-center dark:bg-gray-800 p-4">
                <div>
                  <p className="text-sm">Average Powder Collected Each Day:</p>
                  <p className="text-lg font-bold">500 kg</p>
                </div>
              </div>
              <div className="h-24 bg-quinary rounded-3xl flex items-center justify-center dark:bg-gray-800 p-4">
                <div>
                  <p className="text-sm">Total Powder <br /> Disposed:</p>
                  <p className="text-lg font-bold">102 kg</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex h-[440px] bg-quinary items-center justify-center rounded-3xl dark:bg-gray-800 p-4">
              <div className="text-2xl text-primary dark:text-gray-500 w-full">
                <div className="text-left text-lg ml-3 text-black font-semibold">Powder Data</div>
                <Table />
              </div>
            </div>
            <div className="flex flex-col bg-quinary rounded-3xl dark:bg-gray-800 p-4">
              <div className="text-lg text-left text-black font-semibold px-4 mt-4">Recent Activities</div>              
                <div>
                  <RecentActivities activities={activities} />
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PowderDashboard;
