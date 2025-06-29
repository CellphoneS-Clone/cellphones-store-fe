"use client"

import React, { useState } from 'react';
import { ChevronRight, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PromoCode from '@/components/cart/information/payment/PromoCode';
import OrderSummary from '@/components/cart/information/payment/OrderSummary';
import PaymentMethod from '@/components/cart/information/payment/PaymentMethod';
import CustomerInformation from '@/components/cart/information/payment/CustomerInformation';
import AgreementCheckbox from '@/components/cart/information/payment/AgreementCheckbox';
import BottomSummary from '@/components/cart/information/payment/BottomSummary';

export default function PaymentPage() {
 


  return (
    <div className=" ">
        <div className='bg-white px-4 py-2 rounded-lg border border-gray-200 '>
      {/* Promo Code Section */}
      <PromoCode/>
      {/* Order Summary */}
      <OrderSummary/>
      </div>
      {/* Payment Method */}
        <PaymentMethod/>
      {/* Customer Information */}
      <CustomerInformation/>

      {/* Agreement Checkbox */}
      <AgreementCheckbox/>

      <div className="h-24"></div>
      {/* Bottom Summary */}
      <BottomSummary/>
    </div>
  );
}