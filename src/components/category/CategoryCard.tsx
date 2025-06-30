'use client'

import React from 'react';
import Link from 'next/link';

export interface CategoryItem {
  title: string;
  imageUrl: string;
  link: string;
}

interface CategoryCardProps {
  category: CategoryItem;
  index: number;
  hideHeader?: boolean;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <div
      className={`
        w-[100px]
        ${index >= 8 ? 'hidden sm:block' : ''}
      `}
    >
      <Link
        href={category.link}
        className="block w-full min-h-[125px] rounded-[10px] bg-cover bg-no-repeat bg-right-bottom shadow-md hover:scale-[1.01] hover:-translate-y-[3px] hover:shadow-lg transition-all relative overflow-hidden"
        style={{ backgroundImage: `url(${category.imageUrl})`, backgroundColor: 'rgb(242, 131, 118)' }}
      >
        <span className="block text-white text-sm font-semibold mt-1 max-w-[114px] px-1.5 break-words z-[1]">
          {category.title}
        </span>
      </Link>
    </div>
  );
}