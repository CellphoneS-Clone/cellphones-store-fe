import { ChevronRight, CreditCard } from 'lucide-react';
import React from 'react';

const PaymentMethod = () => {
    return (
        <div className="mb-6">
        <h3 className="font-semibold text-gray-700 my-3">THÔNG TIN THANH TOÁN</h3>
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white">
          <div className="flex items-center space-x-3">
            <CreditCard className="w-5 h-5 text-red-600" />
            <div>
              <div className="text-sm font-medium text-red-600">Chọn phương thức thanh toán</div>
              <div className="text-xs text-gray-500">Giảm thêm tới 200.000₫</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-red-600" />
        </div>
      </div>
    );
};

export default PaymentMethod;