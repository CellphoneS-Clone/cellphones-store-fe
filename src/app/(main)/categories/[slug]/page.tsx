'use client';

import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import ProductBreadcrumb from '@/components/product/detail/ProductBreadcrumb';
import ProductCard from '@/components/product/ProductCard';
import HighlightSection from '@/components/product/detail/HighlightSection';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import FAQSection from '@/components/product/detail/FAQSection';
import QASection from '@/components/product/detail/QASection';
import { CategorySection } from '@/components/category/CategorySection';
import { ArrowDownNarrowWide, ArrowDownWideNarrow, ArrowUpNarrowWide, BadgeCent, CarTaxiFront, ChevronDown, Eye, Funnel, Percent } from 'lucide-react';

export default function CategoryDetail() {
    const { slug } = useParams() as { slug: string };

    // Dữ liệu mẫu cho số lượng ProductCard
    const productCount = 5;

    interface CategoryItem {
        title: string;
        imageUrl: string;
        link: string;
    }

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

    const features = [
        {
            id: 'feature-1',
            title: 'Samsung Galaxy S24 dùng chip gì?',
            description: 'Chip A16 Bionic với 5 nhân CPU và 16 nhân Neural Engine, giúp xử lý đa nhiệm nhanh chóng và nâng cao hiệu suất đồ họa.',
        },
        {
            id: 'feature-2',
            title: 'Dung lượng',
            description: 'Chip A16 Bionic với 5 nhân CPU và 16 nhân Neural Engine, giúp xử lý đa nhiệm nhanh chóng và nâng cao hiệu suất đồ họa.',
        },
        {
            id: 'feature-3',
            title: 'Khung viền Samsung',
            description: 'Chip A16 Bionic với 5 nhân CPU và 16 nhân Neural Engine, giúp xử lý đa nhiệm nhanh chóng và nâng cao hiệu suất đồ họa.',
        },
    ];

    // State để quản lý trạng thái hiển thị dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        filter: false,
        product: false,
        price: false,
        utility: false,
        closure: false,
        compatibility: false,
        port: false,
        keyboard: false,
    });

    // Hàm bật/tắt dropdown
    const toggleDropdown = (type: string) => {
        setIsDropdownOpen((prev) => ({
            ...prev,
            filter: type === 'filter' ? !prev.filter : false,
            product: type === 'product' ? !prev.product : false,
            price: type === 'price' ? !prev.price : false,
            utility: type === 'utility' ? !prev.utility : false,
            closure: type === 'closure' ? !prev.closure : false,
            compatibility: type === 'compatibility' ? !prev.compatibility : false,
            port: type === 'port' ? !prev.port : false,
            keyboard: type === 'keyboard' ? !prev.keyboard : false,
        }));
    };

    return (
        <div>
            <ProductBreadcrumb slug={slug} />
            <div className="max-w-[1200px] mt-30 mx-auto px-4">
                <span className="text-gray-600 text-lg font-medium">Chọn theo sản phẩm</span>
                <CategorySection categories={categories} hideHeader={true} />
            </div>
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Phần lọc với dropdown */}
                <div className="mt-6">
                    <span className="text-gray-600 text-lg font-medium">Chọn theo tiêu chí</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <div className="relative">
                            <Button
                                variant={isDropdownOpen.filter ? 'destructive' : 'outline'}
                                size="sm"
                                onClick={() => toggleDropdown('filter')}
                                className={cn('')}
                            >
                                <Funnel />Bộ lọc

                            </Button>
                            {isDropdownOpen.filter && (
                                <div className="absolute z-10 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg p-2">
                                    <div className="mb-2">
                                        <h4 className="font-semibold text-gray-700">Tiện ích</h4>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Sạc nhanh
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Truyền dữ liệu tốc độ cao
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Bọc vải, dù
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Đạt chuẩn MFi bộ Apple
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Chống rối
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Chống cháy nổ
                                        </Button>
                                    </div>
                                    <div className="mb-2">
                                        <h4 className="font-semibold text-gray-700">Dòng sản phẩm</h4>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Sạc
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Cáp
                                        </Button>
                                    </div>
                                    <div className="mb-2">
                                        <h4 className="font-semibold text-gray-700">Tương thích</h4>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Điện thoại
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Tablet
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Laptop/ Macbook
                                        </Button>
                                    </div>
                                    <div className="mb-2">
                                        <h4 className="font-semibold text-gray-700">Số cổng sạc</h4>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            1 cổng
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            2 cổng
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            3 cổng
                                        </Button>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Loại bàn phím</h4>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Tenkeyless
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Mini-size
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full text-left">
                                            Full-size
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <Button
                                variant={isDropdownOpen.product ? 'destructive' : 'outline'}
                                size="sm"
                                onClick={() => toggleDropdown('product')}
                                className={cn('')}
                            >
                                <CarTaxiFront /> Sẵn sàng
                            </Button>
                            
                        </div>
                        <div className="relative">
                            <Button
                                variant={isDropdownOpen.price ? 'destructive' : 'outline'}
                                size="sm"
                                onClick={() => toggleDropdown('price')}
                                className={cn('')}
                            >
                                <BadgeCent /> Giá
                            </Button>
                            {isDropdownOpen.price && (
                                <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Giá thấp
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Giá cao
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <Button
                                variant={isDropdownOpen.utility ? 'destructive' : 'outline'}
                                size="sm"
                                onClick={() => toggleDropdown('utility')}
                                className={cn('')}
                            >
                                Tiện ích <ChevronDown className='mt-1' />
                            </Button>
                            {isDropdownOpen.utility && (
                                <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Sạc nhanh
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Truyền dữ liệu tốc độ cao
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Bọc vải, dù
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Đạt chuẩn MFi bộ Apple
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Chống rối
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Chống cháy nổ
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <Button
                                variant={isDropdownOpen.closure ? 'destructive' : 'outline'}
                                size="sm"
                                onClick={() => toggleDropdown('closure')}
                                className={cn('')}
                            >
                                Đóng sản phẩm <ChevronDown className='mt-1' />
                            </Button>
                            {isDropdownOpen.closure && (
                                <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Đóng sản phẩm 1
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Đóng sản phẩm 2
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <Button
                                variant={isDropdownOpen.compatibility ? 'destructive' : 'outline'}
                                size="sm"
                                onClick={() => toggleDropdown('compatibility')}
                                className={cn('')}
                            >
                                Tương thích <ChevronDown className='mt-1' />
                            </Button> 
                            {isDropdownOpen.compatibility && (
                                <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Tương thích 1
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Tương thích 2
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <Button
                                variant={isDropdownOpen.port ? 'destructive' : 'outline'}
                                size="sm"
                                onClick={() => toggleDropdown('port')}
                                className={cn('')}
                            >
                                Số cổng sạc <ChevronDown className='mt-1' />
                            </Button>
                            {isDropdownOpen.port && (
                                <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        1 cổng
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        2 cổng
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        3 cổng
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <Button
                                variant={isDropdownOpen.keyboard ? 'destructive' : 'outline'}
                                size="sm"
                                onClick={() => toggleDropdown('keyboard')}
                                className={cn('')}
                            >
                                Loại bàn phím <ChevronDown className='mt-1' />
                            </Button>
                            {isDropdownOpen.keyboard && (
                                <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Máy tính
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Laptop
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full text-left">
                                        Di động
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Phần sắp xếp */}
                <div className="mt-4">
                    <span className="text-gray-600 text-lg font-medium">Sắp xếp theo</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <Button variant="outline" size="sm"> <ArrowDownNarrowWide /> Giá Cao - Thấp</Button>
                        <Button variant="outline" size="sm" className={cn('')}>
                            <ArrowDownWideNarrow /> Giá Thấp - Cao 
                        </Button>
                        <Button variant="outline" size="sm" className={cn('')}>
                            <Percent /> Khuyến Mãi Hot
                        </Button>
                        <Button variant="destructive" size="sm" className={cn('')}>
                            <Eye /> Xem nhiều
                        </Button>
                    </div>
                </div>

                {/* Hiển thị danh sách sản phẩm bằng ProductCard */}
                <div className="flex flex-wrap gap-2.5 mt-6">
                    {Array.from({ length: productCount }).map((_, index) => (
                        <ProductCard key={index} />
                    ))}
                </div>

                {/* Tích hợp HighlightSection */}
                <HighlightSection slug={slug} />

                {/* Tích hợp Câu hỏi thường gặp */}
                <FAQSection features={features} />

                {/* Hỏi và đáp */}
                <QASection />
            </div>
        </div>
    );
}