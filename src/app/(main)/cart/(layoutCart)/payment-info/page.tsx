'use client'

import React, { JSX, useState } from 'react';
import { ChevronLeft, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DeliveryToYourDoor from '@/components/cart/information/deliveryInformation/DeliveryToYourDoor';
import PickUpInStore from '@/components/cart/information/deliveryInformation/PickUpInStore';
import Input from '@/components/cart/input/Input';
import Link from 'next/link';
import ProductItem from '@/components/cart/information/deliveryInformation/ProductItem';
import CustomerInformation from '@/components/cart/information/deliveryInformation/CustomerInformation';
import DeliveryInformation from '@/components/cart/information/deliveryInformation/DeliveryInformation';
import BottomSummary from '@/components/cart/information/deliveryInformation/BottomSummary';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
}

export default function PaymentInfoPage(): JSX.Element {

  const formatPrice = (price: number): string => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  return (
    <div>
                    {/* Cart Content */}
                    <div className="px-4 py-4 rounded-lg bg-white border border-gray-200 ">
                        {/* Product Item */}
                       <ProductItem/>
                    </div>
                    {/* customer information */}
                    <CustomerInformation/>

                    {/* Delivery information */}
                    <DeliveryInformation/>

                    <div className="h-24"></div>

                    {/* Bottom Summary */}
                <BottomSummary/>
    </div>
  )
  
}