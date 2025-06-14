'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  alt: string;
  price: number;
  originalPrice: number;
  sNullPrice: number;
  sStudentDiscount: number;
  promotion: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
  formatPrice: (price: number) => string;
}

export function ProductCard({ product, formatPrice }: ProductCardProps) {
  return (
    <div
      key={product.id}
      className="relative bg-white rounded-sm shadow-sm min-w-[200px] snap-start"
    >
      {/* Nội dung sản phẩm */}
      <Link href={`/product/${product.id}`} className="block p-3">
        <Image
          src={product.image}
          alt={product.alt}
          width={140} 
          height={140}
          className="mx-auto transition-transform duration-300 hover:-translate-y-2"
        />
        <h3 className="text-sm font-semibold text-gray-800 mt-2 h-[60px] line-clamp-3">
          {product.name}
        </h3>
        <div className="mt-2">
          <div className="flex items-end">
            <p className="text-lg font-bold text-red-600">
              {formatPrice(product.price)}
            </p>
            <p className="text-sm text-gray-500 line-through ml-2">
              {formatPrice(product.originalPrice)}
            </p>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            S-Student giảm thêm{' '}
            <span className="font-bold text-red-600">
              {formatPrice(product.sStudentDiscount)}
            </span>
          </p>
        </div>
      </Link>
      {/* Yêu thích */}
      <div className="flex justify-end items-center px-3 pb-3">
        <span className="text-xs text-gray-500 mr-1">Yêu thích</span>
        <button className="text-red-600 hover:text-red-800">
          <Heart className="w-5 h-5 hover:fill-red-600 transition-all duration-200" />
        </button>
      </div>
      {/* Nhãn */}
      <span className="absolute top-0 right-0 bg-white border border-blue-700 text-blue-700 text-[10px] font-medium rounded-sm px-1 py-0.5 hover:bg-blue-600 hover:text-white transition-all duration-200">
        Trả góp 0%
      </span>
    </div>
  );
}