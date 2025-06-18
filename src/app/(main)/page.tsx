import ProductCard from "@/components/product/ProductCard";

export default function HomePage() {
    return (
        <section className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Welcome to Cellphones Store</h1>
            <p className="text-gray-600 mb-4">Your one-stop shop for all mobile devices</p>
            {/* Add your main content here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProductCard
                    id="1"
                    name="Apple MacBook Air M2 2024 8CPU 8GPU 16GB 256GB I Chính hãng Apple Việt Nam"
                    price={20990000}
                    originalPrice={24990000}
                    image="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/m/image_1396_1.png"
                    rating={5}
                    discount={16}
                    promotion="Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng"
                />
            </div>

        </section>
    );
} 