'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useState } from 'react'

function ProductCard() {
    const [isFavorite, setIsFavorite] = useState(false)

    // Dữ liệu cứng mẫu
    const id = "iphone-15-pro-max-256gb";
    const name = "iPhone 15 Pro Max 256GB";
    const price = 32990000;
    const originalPrice = 34990000;
    const image = "/images/ipad_pro.png"; 
    const rating = 5;
    const discount = 6;
    const promotion = "Tặng phiếu mua hàng 500.000đ";

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsFavorite(!isFavorite)
    }

    return (
        <Card className="w-[224.8px] mr-2.5 overflow-hidden">
            {/* Phần hình ảnh */}
            <CardHeader className="p-0 relative">
                <Link href={`/products/${id}`} className="block">
                    <div className="relative aspect-square">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                        {/* Thông tin giảm giá */}
                        <div className="absolute top-0 left-0 flex flex-col gap-1">
                            {discount && (
                                <div className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-r-md shadow-lg transform -translate-x-2 hover:translate-x-0 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-red-600">
                                    -{discount}%
                                </div>
                            )}
                        </div>
                    </div>
                </Link>
            </CardHeader>

            {/* Phần thông tin sản phẩm */}
            <CardContent className="p-3">
                <Link href={`/products/${id}`} className="block">
                    <h3 className="text-sm font-medium line-clamp-2 mb-2">{name}</h3>
                    <div className="space-y-1">
                        {/* Giá sản phẩm */}
                        <div className="flex items-baseline gap-2">
                            <p className="text-lg font-bold text-primary-500">
                                {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                }).format(price)}
                            </p>
                            {originalPrice && (
                                <p className="text-sm text-gray-500 line-through">
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    }).format(originalPrice)}
                                </p>
                            )}
                        </div>
                        {promotion && (
                            <div className="text-xs text-gray-600 mt-1">
                                {promotion}
                            </div>
                        )}
                    </div>
                </Link>
            </CardContent>

            {/* Phần footer với đánh giá và nút yêu thích */}
            <CardFooter className="px-3 pb-3 pt-0">
                <div className="flex items-center justify-between w-full">
                    {/* Đánh giá sao */}
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                size={15}
                                className={cn(
                                    "text-gray-300",
                                    index < rating && "text-yellow-400 fill-yellow-400"
                                )}
                            />
                        ))}
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleFavoriteClick}
                        className={cn(
                            "text-gray-500 hover:bg-transparent transition-colors duration-200",
                            isFavorite ? "text-red-500" : "hover:text-red-500"
                        )}
                    >
                        <span className="text-xs">Yêu thích</span>
                        <Heart
                            className={cn(
                                "h-4 w-4 mr-1",
                                isFavorite && "fill-red-500"
                            )}
                        />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
export default ProductCard;