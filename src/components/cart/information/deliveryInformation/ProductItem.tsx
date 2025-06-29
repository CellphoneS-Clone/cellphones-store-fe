import React from 'react';

const ProductItem = () => {
    return (
        <div className="bg-white   p-4 mb-4 min-w-full">
                            <div className="md:flex items-start">
                                {/* Checkbox */}

                                {/* Product Image */}
                                <div className="ml-3 w-20 h-20   bg-gray-100 rounded-lg hidden sm:flex items-center justify-center">
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
                                <div className="md:flex-1 ml-3">
                                    <h3 className="text-gray-900 text-sm md:text-base font-semibold mb-1 overflow-x-hidden">
                                        Quạt đứng Aqua AQS-FED3501R(W)-VN-Trắng
                                    </h3>

                                    <div className="md:flex items-center justify-between">
                                        <div className='md:flex items-center'>
                                            <div className="text-red-600 text-sm md:text-base font-semibold">890.000đ</div>
                                            <div className="text-gray-400 line-through ml-2 text-xs md:text-sm font-semibold">1.490.000đ</div>
                                        </div>

                                        {/* quality */}
                                        <div className="p-1 text-base font-normal">
                                            Số lượng: <span className="text-red-600">1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
};

export default ProductItem;