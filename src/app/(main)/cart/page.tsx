'use client'

import React, { JSX, useState } from 'react';
import { ChevronLeft, Trash2, Plus, Minus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
}

export default function CartPage(): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1);
  const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
  const [isItemSelected, setIsItemSelected] = useState<boolean>(false);

  const handleQuantityChange = (change: number): void => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  const formatPrice = (price: number): string => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  return (

<div className = 'max-w-[800px] mx-auto relative'>

    <div className="  min-h-screen ">
      {/* Header */}
      <div className="  sticky top-0 z-10 w-full ">
        <div className="flex px-4 py-3 ">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
        <div className='mx-auto'><h1 className=" text-center ml-3 text-lg font-semibold text-gray-900">Giỏ hàng của bạn</h1></div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="px-4 py-4">
        {/* Cart Tab */}
        <div className="flex mb-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-base font-semibold mr-2">
            Giỏ hàng
          </button>
        </div>

        {/* Select All */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="selectAll"
            checked={isSelectAll}
            onChange={(e) => setIsSelectAll(e.target.checked)}
            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <label htmlFor="selectAll" className="ml-2 text-gray-700 text-base font-medium">
            Chọn tất cả
          </label>
        </div>

        {/* Product Item */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex items-start">
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={isItemSelected}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsItemSelected(e.target.checked)}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 mt-1"
            />
            
            {/* Product Image */}
            <div className="ml-3 w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <div className="w-12 h-12 bg-gray-200 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-gray-400 rounded-t"></div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="flex-1 ml-3">
              <h3 className="text-gray-900 text-base font-semibold mb-1">
                Quạt đứng Aqua AQS-FED3501R(W)-VN-Trắng
              </h3>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-red-600 text-base font-semibold">890.000đ</span>
                  <span className="text-gray-400 line-through ml-2 text-sm font-semibold">1.490.000đ</span>
                </div>
                
                {/* Delete Button */}
                <button className="p-1">
                  <Trash2 className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-end mt-2">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-1 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="px-3 py-1 text-gray-900 min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-1 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>

     
      <div className="h-24"></div>
    </div>


     {/* Bottom Summary */}
     <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-white shadow-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-gray-700">Tạm tính: </span>
            <span className="text-red-600 font-bold ml-1">0đ</span>
          </div>
        </div>
        
        <button className=" bg-gray-400 text-white py-3 px-3 rounded-lg font-medium">
          Mua ngay
        </button>
      </div>

      {/* Bottom padding to account for fixed footer */}
    </div>
  );
}