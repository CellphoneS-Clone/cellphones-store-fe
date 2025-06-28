'use client';
import { usePathname } from 'next/navigation';

import { ChevronLeft } from 'lucide-react';
import React from 'react';
import PaymentInfoPage from './payment-info/page';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const cartPage = ( {
    children,
}: {
    children: React.ReactNode
}) => {

    const pathname = usePathname();


console.log(pathname)

    return (

        <div className='md:max-w-[600px] bg-gray-100 mx-auto relative'>

            <div className="  max-h-screen overflow-y-scroll  no-scrollbar">
                {/* Header */}
                <div className="   w-full border-b-1 border-gray-200 mb-2.5  bg-gray-100">
                    <div className="flex px-4 py-3 ">
                        <Link href={`${pathname == "/cart/payment"? "/cart/payment-info": "/" }`}> <ChevronLeft className="w-6 h-6 text-gray-600" /></Link>
                       
                        <div className='mx-auto'>  <h1 className=" text-lg font-semibold text-black"> {pathname == "/cart/payment"?"Thanh Toán":"Thông tin"} </h1></div>
                    </div>
                </div>
                <div className='items-center sticky top-0 z-10 bg-gray-100 py-3  justify-around  mb-2.5  sm:flex gap-3'>
                    <div className={`border-b-2  ${pathname  == "/cart/payment-info"?"border-red-600 text-red-600":'' }  px-20 font-semibold`}>
                        1. THÔNG TIN
                    </div>

                    <div className={`border-b-2  ${pathname  == "/cart/payment"?"border-red-600 text-red-600":'' }  px-20 font-semibold`}>
                        2. THANH TOÁN
                    </div>

                </div>


                <div>
                    {/* main */}
                    {children}
                </div>
            </div>

        </div>
    );
};

export default cartPage;