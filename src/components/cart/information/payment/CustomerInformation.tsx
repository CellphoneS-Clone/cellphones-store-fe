import React from 'react';

const CustomerInformation = () => {
    return (
        <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-4">THÔNG TIN NHẬN HÀNG</h3>
        
        <div className="space-y-4 bg-white px-4 py-2 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Khách hàng</span>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">E-NEW</span>
              <span className="text-sm">A Đạt</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Số điện thoại</span>
            <span className="text-sm">0799009054</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Email</span>
            <span className="text-sm text-red-600">dongvandat9054@gmail.com</span>
          </div>
          
          <div className="flex justify-between items-start">
            <span className="text-gray-600 text-sm">Nhận hàng tại</span>
            <span className="text-sm text-right max-w-xs">369 Nguyễn Văn Linh, Thạc Gián, Thanh Khê, Đà Nẵng</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Ghi chú</span>
            <span className="text-sm">dsdsds</span>
          </div>
        </div>
      </div>
    );
};

export default CustomerInformation;