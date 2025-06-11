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

export default function HomePage() {
    return (
        <section className="box-border block h-full mx-auto relative w-[1200px] bg-red-300 py-2">
            <div className="mb-3 mt-16 w-full h-[400px]">
                {/* Top Home Section */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Left Menu */}
                    <div
                        id="menu-main"
                        className="w-full lg:w-[225px] h-[400px] rounded-2xl shadow-[0_1px_2px_0_rgba(60,64,67,0.1),0_2px_6px_2px_rgba(60,64,67,0.15)] overflow-hidden bg-white"
                    >
                        <div className="menu-wrapper h-full overflow-y-hidden scrollbar-none p-2">
                            <div className="menu-tree min-h-[375px] w-[200px] rounded-lg p-0">
                                {/* Menu Items */}
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
                    <div className="block-top-home__sliding-banner rounded-b-2xl shadow-[0_1px_2px_0_rgba(60,64,67,0.1),0_2px_6px_2px_rgba(60,64,67,0.15)] overflow-hidden w-full lg:w-[calc(100%-490px)] lg:mr-4 max-w-[690px]">
                        {/* Phần Slide*/}
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
                                            {/* Overlay icon left & right */}
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
                    <div className="block-top-home__right-banner w-full lg:w-[265px] hidden lg:block">
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
        </section>
    );
}