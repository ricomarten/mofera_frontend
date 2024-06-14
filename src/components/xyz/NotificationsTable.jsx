import React, { useState } from 'react';
//import arrivalIcon from './../../assets/xyz/arrival-icon.svg';
//import shipmentIcon from './../../assets/xyz/shipment-icon.svg';

const shipmentNotifications = new Array(10).fill({
  id: '212123',
  shipper: 'Centra 1',
  estimatedArrival: '20 March 2024',
  timestamp: 'Sunday 6:24pm',
});

const arrivalNotifications = new Array(10).fill({
  id: '312321',
  sender: 'Centra 2',
  arrivalDate: '22 March 2024',
  timestamp: 'Monday 5:30pm',
});

function NotificationsTable() {
  const [showShipment, setShowShipment] = useState(true);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => setShowShipment(true)}
          className={`flex items-center justify-center font-bold px-4 py-2 rounded-lg w-1/2 focus:outline-none ${
            showShipment ? 'bg-primary text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          <img src={shipmentIcon} alt="Shipment Icon" className="w-6 h-6 mr-2" />
          Shipment Notifications
        </button>
        <button
          onClick={() => setShowShipment(false)}
          className={`flex items-center justify-center font-bold px-4 py-2 rounded-lg w-1/2 focus:outline-none ${
            showShipment ? 'bg-gray-300 text-gray-700' : 'bg-primary text-white'
          }`}
        >
          <img src={arrivalIcon} alt="Arrival Icon" className="w-6 h-6 mr-2" />
          Arrival Notifications
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-4 space-y-2">
        {(showShipment ? shipmentNotifications : arrivalNotifications).map(
          (notification, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-2 space-x-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={`https://via.placeholder.com/50?text=Img+${index + 1}`}
                  alt="avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">
                    <span className="font-bold">
                      {showShipment
                        ? `Shipping ID #${notification.id}`
                        : `Arrival ID #${notification.id}`}
                    </span>{' '}
                    {showShipment
                      ? `has been shipped by ${notification.shipper} (Estimated Time Arrival: ${notification.estimatedArrival})`
                      : `arrived from ${notification.sender} (Arrival Date: ${notification.arrivalDate})`}
                  </p>
                  <p className="text-gray-500 text-left">{notification.timestamp}</p>
                </div>
              </div>
              <button className="bg-primary text-white font-bold px-4 py-2 rounded-lg focus:outline-none">
                TRACK
              </button>
            </div>
          )
        )}
        <div className="flex justify-center mt-4 space-x-2">
          <button className="px-3 py-1 border border-gray-300 text-gray-500 rounded-lg focus:outline-none">
            &lt;
          </button>
          <button className="px-3 py-1 border border-gray-300 text-gray-500 rounded-lg focus:outline-none">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationsTable;
