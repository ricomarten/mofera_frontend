import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoNotifications } from "react-icons/io5";
import { motion } from "framer-motion";

import Sidebar from '../../../components/xyz/Sidebar';
import CentraMonitorTable from '../../../components/xyz/CentraMonitorTable';
import CentraMonitorBar from '../../../components/xyz/CentraMonitorBar';
import profilepic from "../../../assets/desktop/profilepicdesktop.svg";

const CentraActivityMonitor = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate(); 
  const [filter, setFilter] = useState('daily');

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [dataType, setDataType] = useState('Wet Leaves');

  const handleDataTypeChange = (type) => {
    setDataType(type);
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleShipmentTrack = () => navigate("/shipmenttracker");

  return (
    <div className='bg-primary w-screen h-screen overflow-hidden flex'>
      <Sidebar />
      <div className='flex-1 bg-white rounded-xl mt-3 mr-3 mb-3 p-4 overflow-y-auto relative'>
        <div className="flex justify-between items-center mb-5">
          <h1 className='text-4xl font-semibold text-left ml-6 mt-6'>Centra Activity Monitor</h1>
          <div className="p-4 bg-quinary rounded-full right-0 top-0 mt-10 mr-[118px] absolute">
            <a href="/dashboard"><IoNotifications className="text-2xl" /></a>
          </div>
          <span className="flex items-center mr-7">
            <img src={profilepic} alt='profile picture' className='flex align-right right-0 top-0 mt-[27px]'/>
          </span>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-1 overflow-y-auto">

        <div className="ml-6 mb-5 flex items-center justify-between">
          <p className="text-left text-sm bg-quinary text-black border border-green-800 w-fit px-2 rounded">Date: {date.toLocaleDateString()}</p>
          <form className="h-10 w-40 mr-6">
            <select value={filter} className="bg-quinary border border-primary text-primary text-sm focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full mt-1 py-1 px-1">
              <option>Centra 1</option>
              <option>Centra 2</option>
              <option>Centra 3</option>
            </select>
          </form>
        </div>
        <div className='bg-quinary rounded-xl mt-4 mx-6'>
          <CentraMonitorTable dataType={dataType} handleDataTypeChange={handleDataTypeChange} />
        </div>
        <div className='flex flex-col lg:flex-row justify-between mt-4 mx-6 mb-4'>
          <div className='bg-quinary rounded-xl lg:w-2/3 lg:mr-2 p-4 mb-4 lg:mb-0 flex-grow'>
            <div className='flex items-center justify-between'>
              <h2 className='text-left font-medium text-xl mt-6 ml-2'>Statistics</h2>

              <form className="h-10 w-40">
                <select onChange={handleChange} value={filter} className="bg-quaternary border border-primary text-primary text-sm focus:ring-primary focus:border-primary block w-[120px] p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full ml-6 mt-4 py-1 px-1">
                  <option value="daily">Daily</option>
                  <option value="monthly">Monthly</option>
                </select>
              </form>

            </div>
            <CentraMonitorBar filter={filter} />
          </div>
          <div className='bg-quinary rounded-xl lg:w-1/3 lg:ml-2 p-4'>
            <h2 className='text-left font-medium text-xl ml-2 mt-5'>Shipped Packages</h2>
            <div className='mt-4'>
              <p className='text-left ml-3 mt-10'>Total Packages Sent:</p>
              <p className='text-left text-xl font-medium ml-3 mt-4'>300</p>
              <br />
              <p className='text-left ml-3'>Pending Packages:</p>
              <p className='text-left text-xl font-medium ml-3 mt-4'>105</p>
              <br />
              <p className='text-left ml-3'>Packages Arrived:</p>
              <p className='text-left text-xl font-medium ml-3 mt-4'>195</p>
              <br />
              <button className='bg-primary rounded-3xl text-white py-2 px-4' onClick={handleShipmentTrack}>View Shipment Tracker</button>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CentraActivityMonitor;
