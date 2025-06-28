import { Button } from '@/components/ui/button';
import React from 'react';

const BottomSummary = () => {
    return (
        <div className="absolute bottom-0 left-0 right-0   flex flex-col bg-white shadow-2xl p-4">
                    <div className="mb-3">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Tạm tính: </span>
                            <span className="text-red-600 font-bold ml-1">0đ</span>
                        </div>
                    </div>
                    <Button className=" bg-gray-400 text-white py-3 px-3 rounded-lg font-medium">
                        Thanh toán
                    </Button>
                </div>
    );
};

export default BottomSummary;