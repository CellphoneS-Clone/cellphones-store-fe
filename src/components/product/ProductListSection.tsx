'use client'

import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
// import { ChevronLeftIcon, ChevronRightIcon } from '../icons/BannerMenuIcon';

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

interface ProductListSectionProps {
  products: Product[];
  relatedTags: string[];
  formatPrice: (price: number) => string;
}

export function ProductListSection({ products, relatedTags, formatPrice }: ProductListSectionProps) {
  return (
    <div className="my-4 rounded-2xl bg-gradient-to-r p-2">
      {/* Tiêu đề */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xl sm:text-2xl font-semibold text-blue-950">LAPTOP</span>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {relatedTags.map((tag, index) => (
            <Link
              key={index}
              href={`/tags/${tag.toLowerCase().replace(' ', '-')}`}
              className="bg-gray-100 border border-gray-200 text-gray-600 text-xs sm:text-sm font-medium px-1.5 sm:px-2 py-1 rounded-lg transition-all duration-200"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="relative group mx-auto max-w-[1156px] w-full px-2">
        {/* Nút trái */}
        {/* <button
                onClick={() => scrollSuggest('left')}
                className="hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
              >
                <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
              </button> */}

        {/* Danh sách sản phẩm */}
        <div className="overflow-hidden">
          {/* <div ref={suggestRef} className="overflow-hidden"> */}
          <div className="grid grid-flow-col auto-cols-[minmax(224.8px,_1fr)] gap-2 snap-x snap-mandatory py-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}

              />
            ))}
          </div>
        </div>

        {/* Nút phải */}
        {/* <button
                onClick={() => scrollSuggest('right')}
                className="hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
              >
                <ChevronRightIcon className="w-6 h-6 text-gray-600" />
              </button> */}
      </div>
    </div>
  );
}