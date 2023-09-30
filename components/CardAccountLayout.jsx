import React from "react";
import Image from 'next/image'
import iconsImg from '../public/card.svg'

const CardAccountLayout = () => {
  return (
    <div className="flex flex-row">
      <div className="bg-gradient-to-b from-opacity-60 via-opacity-0 to-opacity-60 bg-gray-800 rounded-lg p-4">
        <div className="grid-c-title">
          <h3 className="text-white text-lg font-semibold">Cards</h3>
          <button className="grid-c-title-icon">
            <Image src={iconsImg.plus} alt="Plus Icon" />
          </button>
        </div>
        <div className="mt-8 mb-16">
          <p>Balance</p>
          <div className="lg-value text-xl text-gray-300">$ 22,000</div>
          <div className="card-wrapper flex">
            <span className="card-pin-hidden text-4xl mr-2">**** **** **** </span>
            <span className="text-gray-500">1234</span>
          </div>
          <div className="card-logo-wrapper flex justify-between items-center">
            <div>
              <p className="text-silver-v1 text-sm">Expires</p>
              <p className="text-white text-sm">12/22</p>
            </div>
            <div className="card-logo flex">
              <div className="logo-shape1 w-9 h-9 bg-scarlet-v1 rounded-full -mr-3 z-0"></div>
              <div className="logo-shape2 w-9 h-9 bg-yellow rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAccountLayout;
