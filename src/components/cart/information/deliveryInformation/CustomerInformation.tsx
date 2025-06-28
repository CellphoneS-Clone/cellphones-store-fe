import React from 'react';
import Input from '../../input/Input';

const CustomerInformation = () => {
    return (
        <div className=" py-4  ">
                        <h1 className='text-base font-medium mb-0.5'>THÔNG TIN KHÁCH HÀNG</h1>

                        <div className='bg-white flex flex-col gap-4 rounded-lg border border-gray-200   p-4 mb-4'>
                            <div className='md:flex justify-between items-center '><div className=' text-xs font-medium sm:text-base mr-0.5'>A Đạt <span className='ml-1 text-green-500 text-sm rounded-xs px-0.5 border border-green-500' >S - NEW</span> </div> <div className='text-sm text-gray-600'>0799009054</div></div>
                            <div>
                                <div>
                                    <div>
                                        {/* input */}
                                        <Input name='mm' id='Email' label='Email' type='email' />
                                    </div>
                                </div>
                            </div>
                            <div className='text-xs text-gray-600'><span> (*) Hóa đơn VAT sẽ được gửi qua email này  </span></div>
                        </div>
                    </div>
    );
};

export default CustomerInformation;