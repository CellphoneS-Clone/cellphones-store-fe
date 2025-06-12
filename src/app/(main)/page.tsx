'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    PhoneTabletIcon,
    LaptopIcon,
    AudioIcon,
    WatchCameraIcon,
    HomeApplianceIcon,
    AccessoryIcon,
    TvIcon,
    TradeInIcon,
    RefurbishedIcon,
    PromotionIcon,
    TechNewsIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
} from '@/components/icons/BannerMenuIcon';
import { CustomRadialIcon } from '@/components/icons/MainIcon';
import { Star, Heart } from 'lucide-react';

import { useRef } from 'react';

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

const categories: CategoryItem[] = Array.from({ length: 14 }, (_, index) => ({
    ...demoItem,
    title: `${demoItem.title} ${index + 1}`,
}));

const paymentBanners = [
    {
        href: "#",
        src: "/images/top_banner.png",
        alt: "iphone techcombank",
    },
    {
        href: "#",
        src: "/images/top_banner.png",
        alt: "iphone mbbank",
    },
    {
        href: "#",
        src: "/images/top_banner.png",
        alt: "iphone acb",
    },
    {
        href: "#",
        src: "/images/top_banner.png",
        alt: "hsbc iphone",
    },
];

export default function HomePage() {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(price);
    };

    const suggestRef = useRef<HTMLDivElement>(null);
    const ITEM_WIDTH = 224.8 + 8; // item width + gap

    const scrollSuggest = (direction: 'left' | 'right') => {
        if (suggestRef.current) {
            const offset = direction === 'left' ? -ITEM_WIDTH : ITEM_WIDTH;
            suggestRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return (
        <section className="box-border block h-full mx-auto relative w-full max-w-[1200px]  py-2 px-4">
            {/* Menu banner */}
            <div className="mb-3 mt-16 w-full h-[400px]">
                {/* Top Home Section */}
                <div className="flex flex-row flex-nowrap gap-4 h-full">
                    {/* Left Menu */}
                    <div
                        id="menu-main"
                        className="hidden md:block w-[225px] h-full rounded-2xl shadow-[0_1px_2px_0_rgba(60,64,67,0.1),0_2px_6px_2px_rgba(60,64,67,0.15)] overflow-hidden bg-white"
                    >
                        <div className="menu-wrapper h-full overflow-y-hidden scrollbar-none p-2">
                            <div className="menu-tree min-h-[375px] w-[200px] rounded-lg p-0">
                                {[
                                    {
                                        icon: <PhoneTabletIcon className="w-6 h-6" />,
                                        links: [
                                            { href: '', text: 'Điện thoại' },
                                            { href: '', text: 'Tablet' },
                                        ],
                                        isMultiple: true,
                                    },
                                    {
                                        icon: <LaptopIcon className="w-6 h-6" />,
                                        links: [{ href: '', text: 'Laptop' }],
                                        isMultiple: false,
                                    },
                                    {
                                        icon: <AudioIcon className="w-6 h-6" />,
                                        links: [{ href: '', text: 'Âm thanh' }],
                                        isMultiple: false,
                                    },
                                    {
                                        icon: <WatchCameraIcon className="w-6 h-6" />,
                                        links: [
                                            { href: '', text: 'Đồng hồ' },
                                            { href: '', text: 'Camera' },
                                        ],
                                        isMultiple: true,
                                    },
                                    {
                                        icon: <HomeApplianceIcon className="w-6 h-6" />,
                                        links: [{ href: '', text: 'Đồ gia dụng' }],
                                        isMultiple: true,
                                    },
                                    {
                                        icon: <AccessoryIcon className="w-6 h-6" />,
                                        links: [{ href: '', text: 'Phụ kiện' }],
                                        isMultiple: false,
                                    },
                                    {
                                        icon: <TvIcon className="w-6 h-6" />,
                                        links: [{ href: '', text: 'Tivi' }],
                                        isMultiple: false,
                                    },
                                    {
                                        icon: <TradeInIcon className="w-6 h-6" />,
                                        links: [{ href: '', text: 'Thu cũ đổi mới' }],
                                        isMultiple: false,
                                    },
                                    {
                                        icon: <RefurbishedIcon className="w-6 h-6" />,
                                        links: [{ href: '', text: 'Hàng cũ' }],
                                        isMultiple: false,
                                    },
                                    {
                                        icon: <PromotionIcon className="w-6 h-6" />,
                                        links: [{ href: '', text: 'Khuyến mãi' }],
                                        isMultiple: false,
                                    },
                                    {
                                        icon: <TechNewsIcon className="w-6 h-6" />,
                                        links: [{ href: '', text: 'Tin công nghệ' }],
                                        isMultiple: false,
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="label-menu-tree px-2 py-0.5 group hover:scale-105 hover:opacity-70 rounded-md relative"
                                    >
                                        {item.isMultiple ? (
                                            <div className="label-item flex items-center justify-between min-h-[31.3px] cursor-pointer">
                                                <div className="right-content flex items-center">
                                                    {item.icon}
                                                    <div className="flex flex-wrap">
                                                        {item.links.map((link, linkIndex) => (
                                                            <Link
                                                                key={linkIndex}
                                                                href={link.href}
                                                                className="multiple-link text-sm font-medium text-gray-800 line-clamp-1"
                                                            >
                                                                <span>{link.text}, </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="icon-right w-[7.5px]">
                                                    <ChevronRightIcon className="w-3.5 h-3.5 text-gray-500" />
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.links[0].href}
                                                className="label-item flex items-center justify-between min-h-[31.3px] cursor-pointer text-gray-800 no-underline"
                                            >
                                                <div className="right-content flex items-center">
                                                    {item.icon}
                                                    <span className="single-link text-sm font-medium">{item.links[0].text}</span>
                                                </div>
                                                <div className="icon-right w-[7.5px]">
                                                    <ChevronRightIcon className="w-3.5 h-3.5 text-gray-500" />
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sliding Banner */}
                    <div className="block-top-home__sliding-banner rounded-b-2xl shadow-[0_1px_2px_0_rgba(60,64,67,0.1),0_2px_6px_2px_rgba(60,64,67,0.15)] overflow-hidden flex-1 h-full">
                        {/* Phần Slide */}
                        <div className="w-full h-[80%] relative overflow-hidden">
                            <div className="swiper-container gallery-top w-full h-full">
                                <div className="swiper-wrapper flex h-full">
                                    {[
                                        {
                                            src: '/images/top_banner.png',
                                            alt: 'Mừng khai trương ưu đãi cực khủng',
                                            href: '',
                                        },
                                        {
                                            src: '/images/top_banner2.png',
                                            alt: 'Slide 2',
                                            href: '',
                                        },
                                    ].map((slide, index) => (
                                        <div
                                            key={index}
                                            className="swiper-slide flex-shrink-0 w-full h-full flex items-center justify-center bg-white group relative"
                                        >
                                            <div className="absolute inset-0 z-10 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                <button className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full cursor-pointer">
                                                    <ChevronLeftIcon className="w-7 h-7" />
                                                </button>
                                                <button className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full cursor-pointer">
                                                    <ChevronRightIcon className="w-7 h-7" />
                                                </button>
                                            </div>
                                            <Link href={slide.href} className="w-full h-full flex items-center">
                                                <Image
                                                    src={slide.src}
                                                    alt={slide.alt}
                                                    width={690}
                                                    height={300}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Phần tiêu đề */}
                        <div className="w-full h-[20%] bg-white">
                            <div className="swiper-wrapper flex w-full h-full">
                                {[
                                    { label: 'GALAXY S25 ULTRA', active: true },
                                    { label: 'TECNO SPARK 30 PRO', active: false },
                                    { label: 'POCO X7 PRO', active: false },
                                    { label: 'TAI NGHE SONY', active: true },
                                    { label: 'VIVO V50 LITE', active: false },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="swiper-slide relative flex-1 flex items-center justify-center hover:bg-red-50 text-gray-800 text-xs font-medium text-center leading-5 cursor-pointer overflow-hidden"
                                    >
                                        {item.label}
                                        {item.active && (
                                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 rounded-full" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Banner */}
                    <div className="block-top-home__right-banner w-[265px] hidden lg:block h-full">
                        <div className="right-banner h-full max-w-[265px] w-full">
                            {[
                                {
                                    src: '/images/top_banner.png',
                                    alt: 'Banner quảng cáo 1',
                                    href: '',
                                },
                                {
                                    src: '/images/top_banner.png',
                                    alt: 'Banner quảng cáo 2',
                                    href: '',
                                },
                                {
                                    src: '/images/top_banner.png',
                                    alt: 'Banner quảng cáo 3',
                                    href: '',
                                },
                            ].map((banner, index) => (
                                <Link
                                    key={index}
                                    href={banner.href}
                                    className="right-banner__item rounded-lg shadow-[0_1px_2px_0_rgba(60,64,67,0.1),0_2px_6px_2px_rgba(60,64,67,0.15)] mb-[15.5px] min-h-[calc(33.33333%-10px)] overflow-hidden flex"
                                >
                                    <Image
                                        src={banner.src}
                                        width={690}
                                        height={300}
                                        alt={banner.alt}
                                        className="right-banner__img object-cover"
                                        loading="lazy"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto py-4">
                {/* List Product Suggest*/}
                <div className="my-4 rounded-2xl bg-gradient-to-r from-pink-200 to-blue-200 p-2">
                    {/* Tiêu đề */}
                    <div className="flex items-center mb-2">
                        <CustomRadialIcon className="w-10 h-10" />
                        <span className="text-xl sm:text-2xl font-semibold text-blue-950 ml-2">
                            GỢI Ý CHO BẠN
                        </span>
                    </div>

                    {/* Danh sách sản phẩm */}
                    <div className="relative group mx-auto max-w-[1156px] w-full px-2">
                        {/* Nút trái */}
                        <button
                            onClick={() => scrollSuggest('left')}
                            className="hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
                        >
                            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
                        </button>

                        {/* Danh sách sản phẩm */}
                        <div ref={suggestRef} className="overflow-hidden">
                            <div className="grid grid-flow-col auto-cols-[minmax(224.8px,_1fr)] gap-2 snap-x snap-mandatory">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="relative bg-white rounded-sm shadow min-w-[224.8px] snap-start"
                                    >
                                        {/* Nội dung sản phẩm */}
                                        <Link href={`/product/${product.id}`} className="block p-3">
                                            <Image
                                                src={product.image}
                                                alt={product.alt}
                                                width={160}
                                                height={160}
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
                                ))}
                            </div>
                        </div>

                        {/* Nút phải */}
                        <button
                            onClick={() => scrollSuggest('right')}
                            className="hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
                        >
                            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>


                {/* List Product */}
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

                    {/* Danh sách sản phẩm  */}
                    <div className="relative group">
                        {/* Nút trái */}
                        <button
                            className="hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
                        >
                            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
                        </button>

                        {/* Danh sách sản phẩm */}
                        <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden">
                            <div className="inline-flex gap-3">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded-lg shadow p-3 flex flex-col min-w-[180px] max-w-[180px]"
                                    >
                                        <Link href="#" className="block text-center">
                                            <Image
                                                src={product.image}
                                                alt={product.alt}
                                                width={160}
                                                height={160}
                                                className="mx-auto transition-transform duration-300 hover:-translate-y-2"
                                            />
                                            <h3 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-3 h-[60px] mt-2">
                                                {product.name}
                                            </h3>
                                            <div className="mt-2">
                                                <div className="flex flex-col items-start">
                                                    <p className="text-base sm:text-lg font-bold text-red-600">{formatPrice(product.price)}</p>
                                                    <p className="text-xs sm:text-sm ml-3 text-gray-500 line-through">{formatPrice(product.originalPrice)}</p>
                                                </div>
                                                <p className="text-[10px] sm:text-xs text-gray-600 mt-1">
                                                    Giá SNull: <span className="font-bold text-red-600">{formatPrice(product.sNullPrice)}</span>
                                                </p>
                                                <p className="text-[10px] sm:text-xs text-gray-600 mt-1">
                                                    S-Student: <span className="font-bold text-red-600">{formatPrice(product.sStudentDiscount)}</span>
                                                </p>
                                                <div className="mt-2 bg-gray-100 border border-gray-200 rounded-md p-2 text-[10px] sm:text-xs text-gray-600 line-clamp-2">
                                                    {product.promotion}
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="flex justify-between items-center mt-auto pt-3">
                                            <div className="flex">
                                                {[...Array(product.rating)].map((_, i) => (
                                                    <Star key={i} className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-yellow-500 fill-current" />
                                                ))}
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-[10px] sm:text-xs text-gray-500 mr-1">Yêu thích</span>
                                                <button className="text-red-600 hover:text-red-800">
                                                    <Heart className="w-4 sm:w-5 h-4 sm:h-5 hover:fill-red-600 transition-all duration-200" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Nút phải */}
                        <button
                            className="hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
                        >
                            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* List category */}
                <div className="mt-5">
                    <div className="flex justify-between items-center mb-2.5">
                        <h2 className="text-[22px] font-semibold text-[#444]">
                            <a href="#">PHỤ KIỆN</a>
                        </h2>
                        <a href="#" className="text-[13px] font-normal text-[#111] hover:text-[#d70018] hover:underline hover:font-bold transition-all">
                            Xem tất cả
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                        {categories.map((item, index) => (
                            <div
                                key={index}
                                className={`
              w-[100px]
              ${index >= 8 ? 'hidden sm:block' : ''}
            `}
                            >
                                <a
                                    href={item.link}
                                    className="block w-full min-h-[125px] rounded-[10px] bg-cover bg-no-repeat bg-right-bottom shadow-md hover:scale-[1.01] hover:-translate-y-[3px] hover:shadow-lg transition-all relative overflow-hidden"
                                    style={{ backgroundImage: `url(${item.imageUrl})`, backgroundColor: 'rgb(242, 131, 118)' }}
                                >
                                    <span className="block text-white text-sm font-semibold mt-1 max-w-[114px] px-1.5 break-words z-[1]">
                                        {item.title}
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Promotion */}
                <div className="mt-5">
                    <div className="mb-2">
                        <Link href="#" className="text-[22px] uppercase text-gray-700">
                            Ưu đãi thanh toán
                        </Link>
                    </div>

                    <div className="flex flex-wrap">
                        {paymentBanners.map((banner, index) => (
                            <Link
                                key={index}
                                href={banner.href}
                                className={`mb-2 inline-block overflow-hidden rounded-[10px] shadow-md ${(index + 1) % 4 !== 0 ? "mr-2.5" : ""
                                    } w-[calc(25%-7.5px)] 
              max-[1024px]:w-[calc(49%-5px)]
              max-[768px]:mr-[7px]`}
                            >
                                <Image
                                    src={banner.src}
                                    alt={banner.alt}
                                    width={690}
                                    height={300}
                                    loading="lazy"
                                    className="rounded-[10px] w-full h-auto"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </section >
    );
}