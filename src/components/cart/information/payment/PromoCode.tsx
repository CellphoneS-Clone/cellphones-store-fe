import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const PromoCode = () => {
     const [isPromoExpanded, setIsPromoExpanded] = useState(false);
    return (
        <div className="mb-6" >
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
          <span className="text-gray-600 text-sm">Nhập mã giảm giá (chỉ áp dụng 1 lần)</span>
          <span className="text-gray-400 text-sm">Áp dụng</span>
        </div>
        
        <div 
          className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg mt-2 cursor-pointer"
          onClick={() => setIsPromoExpanded(!isPromoExpanded)}
        >
          <span className="text-red-600 text-sm">hoặc chọn từ 1 mã giảm giá có sẵn</span>
          <ChevronRight className="w-4 h-4 text-red-600" />
        </div>
      </div>
    );
};

export default PromoCode;