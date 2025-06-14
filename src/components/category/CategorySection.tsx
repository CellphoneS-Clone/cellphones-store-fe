'use client'

import React from 'react';
import Link from 'next/link';
import { CategoryCard } from './CategoryCard';

interface CategoryItem {
  title: string;
  imageUrl: string;
  link: string;
}

interface CategorySectionProps {
  categories: CategoryItem[];
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center mb-2.5">
        <h2 className="text-[22px] font-semibold text-[#444]">
          <Link href="#">PHỤ KIỆN</Link>
        </h2>
        <Link href="#" className="text-[13px] font-normal text-[#111] hover:text-[#d70018] hover:underline hover:font-bold transition-all">
          Xem tất cả
        </Link>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {categories.map((item, index) => (
          <CategoryCard key={index} category={item} index={index} />
        ))}
      </div>
    </div>
  );
}