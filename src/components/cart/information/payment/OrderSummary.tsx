import React from 'react';

const OrderSummary = () => {
    return (
        <div className="mb-6 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Số lượng sản phẩm</span>
          <span className="text-sm">01</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Tổng tiền hàng</span>
          <span className="text-sm">1.490.000₫</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Phí vận chuyển</span>
          <span className="text-sm text-green-600">Miễn phí</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Giảm giá trực tiếp</span>
          <span className="text-sm text-red-600">- 200.000₫</span>
        </div>
        
        <hr className="my-3" />
        
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold text-base">Tổng tiền</div>
            <div className="text-xs text-gray-500">Đã gồm VAT và được làm tròn</div>
          </div>
          <span className="font-semibold text-lg">1.290.000₫</span>
        </div>
      </div>
    );
};

export default OrderSummary;