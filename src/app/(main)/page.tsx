'use client'

import React from 'react';
import { MenuBanner } from '@/components/layout/MenuBanner';
import { SlidingBanner } from '@/components/layout/SlidingBanner';
import { RightBanner } from '@/components/layout/RightBanner';
// import { ProductSuggestSection } from '@/components/product/ProductSuggestSection';
import { ProductListSection } from '@/components/product/ProductListSection';
import { CategorySection } from '@/components/category/CategorySection';
import { PaymentBannerSection } from '@/components/banner/PaymentBannerSection';

// Dữ liệu sản phẩm mẫu
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

const product: Product = {
  id: 1,
  name: "Laptop Acer Aspire 3 A314-42P-R3B3 NX.KSFSV.001",
  image: "/images/ipad_pro.png",
  alt: "Laptop Acer Aspire 3 A314-42P-R3B3 NX.KSFSV.001",
  price: 11990000,
  originalPrice: 13990000,
  sNullPrice: 11510000,
  sStudentDiscount: 480000,
  promotion: "Tặng Balo trị giá 600k cho thành viên S-Student khi mua Laptop (số lượng có hạn) và 2 km khác",
  rating: 5,
};

// Tạo danh sách 10 sản phẩm
const products: Product[] = Array.from({ length: 10 }, (_, index) => ({
  ...product,
  id: index + 1,
}));

// Danh sách thẻ liên quan
const relatedTags = [
  "Macbook",
  "Asus",
  "MSI",
  "Lenovo",
  "HP",
  "Acer",
  "Dell",
  "Huawei",
  "Gigabyte",
  "Laptop AI",
  "Xem tất cả",
];

// Dữ liệu categories
interface CategoryItem {
  title: string;
  imageUrl: string;
  link: string;
}

const demoItem: CategoryItem = {
  title: 'Phụ kiện Apple',
  imageUrl: '/images/ipad_pro.png',
  link: '#',
};

const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Thay thế ký tự không phải chữ/số bằng dấu gạch ngang
    .replace(/(^-|-$)/g, ''); // Xóa dấu gạch ngang ở đầu/cuối
};

const categories: CategoryItem[] = Array.from({ length: 14 }, (_, index) => ({
  title: `Phụ kiện Apple ${index + 1}`,
  imageUrl: '/images/ipad_pro.png',
  link: `/categories/${createSlug(`Phu kien Apple ${index + 1}`)}`,
}));

const paymentBanners = [
  { href: "#", src: "/images/top_banner.png", alt: "iphone techcombank" },
  { href: "#", src: "/images/top_banner.png", alt: "iphone mbbank" },
  { href: "#", src: "/images/top_banner.png", alt: "iphone acb" },
  { href: "#", src: "/images/top_banner.png", alt: "hsbc iphone" },
];

export default function HomePage() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <section className="box-border block h-full mx-auto relative w-full max-w-[1200px] py-2 px-4">
      {/* Menu banner */}
      <div className="mb-3 mt-16 w-full h-[400px]">
        {/* Top Home Section */}
        <div className="flex flex-row flex-nowrap gap-4 h-full">
          <MenuBanner
          // isOverlay={true}
          />
          <SlidingBanner
            slides={[
              { src: '/images/top_banner.png', alt: 'Mừng khai trương ưu đãi cực khủng', href: '' },
              { src: '/images/top_banner2.png', alt: 'Slide 2', href: '' },
              { src: '/images/top_banner.png', alt: 'Mừng khai trương ưu đãi cực khủng2', href: '' },
              { src: '/images/top_banner2.png', alt: 'Slide 3', href: '' },
              { src: '/images/top_banner.png', alt: 'Mừng khai trương ưu đãi cực khủng3', href: '' },
            ]}
            slideTitles={[
              { label: 'GALAXY S25 ULTRA', active: true },
              { label: 'TECNO SPARK 30 PRO', active: false },
              { label: 'POCO X7 PRO', active: false },
              { label: 'TAI NGHE SONY', active: false },
              { label: 'VIVO V50 LITE', active: false },
            ]}
          />
          <RightBanner
            banners={[
              { src: '/images/top_banner.png', alt: 'Banner quảng cáo 1', href: '' },
              { src: '/images/top_banner.png', alt: 'Banner quảng cáo 2', href: '' },
              { src: '/images/top_banner.png', alt: 'Banner quảng cáo 3', href: '' },
            ]}
          />
        </div>
      </div>

      <main className="container mx-auto py-4">
        {/* <ProductSuggestSection products={products} formatPrice={formatPrice} /> */}
        <ProductListSection
          products={products}
          relatedTags={relatedTags}
          formatPrice={formatPrice}
        />
        <CategorySection categories={categories} />
        <PaymentBannerSection paymentBanners={paymentBanners} />
      </main>
    </section>
  );
}
