import { Button } from '@/components/ui/button';
import React from 'react';

const BottomSummary = () => {
    return (
        <div className="fixed bottom-0 w-full flex  z-50">
            <div className="w-full md:max-w-[600px] flex justify-between items-center bg-white shadow-2xl p-4 rounded-t-lg">
                <div className="flex items-center">
                    <span className="text-gray-700">Tạm tính: </span>
                    <span className="text-red-600 font-bold ml-1">0đ</span>
                </div>
                <Button className="bg-gray-400 text-white py-3 px-3 rounded-lg font-medium">
                    Thanh toán
                </Button>
            </div>
        </div>
    );
};

export default BottomSummary;