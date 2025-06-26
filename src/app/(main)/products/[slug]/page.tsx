'use client'; // Thêm để hỗ trợ client component (vì ProductCard là client component)
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons/BannerMenuIcon';
import ProductBreadcrumb from '@/components/product/detail/ProductBreadcrumb';
import PaymentPromotions from '@/components/product/detail/PaymentPromotions';
import TradelnSection from '@/components/product/detail/TradeInSection';
import {
    Cpu,
    ArrowRight,
    ShoppingCart,
    SmartphoneCharging,
    ShieldX,
    Tickets,
    CircleAlert,
    ShieldCheck,
    PhoneCall,
    MapPin,
    ChevronRight
} from 'lucide-react';
import PromotionSection from '@/components/product/detail/PromotionSection';
import ProductCard from '@/components/product/ProductCard'; // Import ProductCard
import ActionButtons from '@/components/product/detail/ActionButtons'; // Import the ActionButtons component
import ImageCarousel from '@/components/product/detail/ImageCarousel'; // Import ImageCarousel
import ProductColors from '@/components/product/detail/ProductColors';
import ProductImage from '@/components/product/detail/ProductImage';
import ProductPrice from '@/components/product/detail/ProductPrice';
import ProductVersions from '@/components/product/detail/ProductVersions';
import TechnicalSpecs from '@/components/product/detail/TechnicalSpecs';
import WarrantyOptions from '@/components/product/detail/WarrantyOptions';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';
import RelatedAccessories from '@/components/product/detail/RelatedAccessories';

type Props = {
    params: {
        slug: string;
    };
};
export default function ProductDetail({ params }: Props) {
    const { slug } = params;

    // Placeholder handlers for ActionButtons
    const handleFavoriteClick = () => {
        console.log('Favorite clicked');
        // Add logic for adding to favorites
    };

    const handleQAClick = () => {
        console.log('Q&A clicked');
        // Add logic for navigating to Q&A section
    };

    const handleSpecsClick = () => {
        console.log('Specs clicked');
        // Add logic for showing specs
    };

    const handleCompareClick = () => {
        console.log('Compare clicked');
        // Add logic for comparing products
    };

    // Define images for ImageCarousel
    const images = [
        { src: '/images/top_banner.png', alt: 'Hình phụ 1' },
        { src: '/images/top_banner.png', alt: 'Hình phụ 2' },
        { src: '/images/top_banner.png', alt: 'Hình phụ 3' },
        { src: '/images/top_banner.png', alt: 'Hình phụ 4' },
    ];

    // Optional handler for image clicks
    const handleImageClick = (index: number) => {
        console.log(`Image ${index} clicked`);
        // Add logic to update main image or perform other actions
    };

    // Define colors for ProductColors
    const colors = [
        { name: 'Titan Đen', price: '36.590.000₫', imageSrc: '/images/top_banner.png', imageAlt: 'Titan Đen' },
        { name: 'Titan Tự nhiên', price: '36.890.000₫', imageSrc: '/images/top_banner.png', imageAlt: 'Titan Tự nhiên' },
        { name: 'Titan Trắng', price: '36.790.000₫', imageSrc: '/images/top_banner.png', imageAlt: 'Titan Trắng' },
        { name: 'Titan Sa Mạc', price: '36.490.000₫', imageSrc: '/images/top_banner.png', imageAlt: 'Titan Sa Mạc' },
    ];

    // Optional handler for color clicks
    const handleColorClick = (color: string) => {
        console.log(`Color ${color} clicked`);
    };

    // Define data for ProductImage
    const mainImage = {
        src: '/images/top_banner.png',
        alt: 'Hình sản phẩm iPhone 14 Pro Max',
    };

    // Optional handlers for ProductImage navigation
    const handlePrevClick = () => {
        console.log('Previous image clicked');
    };

    const handleNextClick = () => {
        console.log('Next image clicked');
    };

    // Define data for ProductPrice
    const priceData = {
        price: '30.890.000đ',
        originalPrice: '34.990.000đ',
    };

    // Define data for ProductVersions
    const versions = ['1TB', '512GB', '256GB'];

    // Optional handler for version clicks
    const handleVersionClick = (version: string) => {
        console.log(`Version ${version} clicked`);
    };

    // Define data for RelatedAccessories
    const accessories = [
        {
            name: 'Dán kính cường lực iPhone 16 Pro Max chính hãng JCPal',
            imageSrc: '/images/top_banner.png',
            imageAlt: 'Phụ kiện 2',
            price: '390.000đ',
            originalPrice: '450.000đ',
        },
        {
            name: 'Dán kính cường lực iPhone 16 Pro Max chính hãng JCPal',
            imageSrc: '/images/top_banner.png',
            imageAlt: 'Phụ kiện 2',
            price: '390.000đ',
            originalPrice: '450.000đ',
        },
        {
            name: 'Dán kính cường lực iPhone 16 Pro Max chính hãng JCPal',
            imageSrc: '/images/top_banner.png',
            imageAlt: 'Phụ kiện 2',
            price: '390.000đ',
            originalPrice: '450.000đ',
        },
        {
            name: 'Dán kính cường lực iPhone 16 Pro Max chính hãng JCPal',
            imageSrc: '/images/top_banner.png',
            imageAlt: 'Phụ kiện 2',
            price: '390.000đ',
            originalPrice: '450.000đ',
        },
    ];

    // Optional handler for add to cart
    const handleAddToCart = (accessory: string) => {
        console.log(`Added ${accessory} to cart`);
    };

    const technicalSpecs = [
        ['Kích thước màn hình', '6.8 inches'],
        ['Công nghệ màn hình', 'Dynamic AMOLED 2X'],
        [
            'Camera sau',
            `Camera chính: 200MP, Laser AF, OIS\nCamera: 50MP, PDAF, OIS, zoom quang học 5x\nCamera tele: 10MP\nCamera góc siêu rộng: 12 MP, f/2.2, 13mm, 120°`,
        ],
        ['Camera trước', '12 MP, f/2.2'],
        ['Chipset', 'Snapdragon 8 Gen 3 For Galaxy'],
        ['Công nghệ NFC', 'Có'],
        ['Dung lượng RAM', '12 GB'],
        ['Bộ nhớ trong', '256 GB'],
        ['Pin', '5,000mAh'],
        ['Thẻ SIM', 'SIM 1 + SIM 2 / SIM 1 + eSIM / 2 eSIM'],
        ['Hệ điều hành', 'Android 14, One UI 6.1'],
        ['Độ phân giải màn hình', '1440 x 3120 pixels'],
        [
            'Tính năng màn hình',
            'Độ sáng cao nhất 2,600 nits, 120Hz, Corning® Gorilla® Armor®, 16 triệu màu',
        ],
        ['Loại CPU', '3.39GHz,3.1GHz,2.9GHz,2.2GHz'],
        ['Tương thích', 'Bút SPEN - tích hợp sẵn lên máy'],
    ];




    const promotions = [
        {
            id: 1,
            text: 'Trả góp 0% đến 12 tháng, 0đ trả trước qua Samsung Finance+',
            link: '#',
        },
        {
            id: 2,
            text: 'Tặng voucher 500.000đ mua Gia dụng (áp dụng 1 số sản phẩm nhất định)',
            link: '#',
        },
    ];

    const paymentPromotions = [
        { text: 'Xem chính sách ưu đãi dành cho thành viên Smember' },
        { img: '/images/hsbc_full-removebg-preview.png', text: 'Hoàn tiền đến 2 triệu khi mở thẻ tín dụng HSBC' },
        { img: '/images/VBB-removebg-preview.png', text: 'Giảm đến 1 triệu khi thanh toán qua thẻ tín dụng Vietbank' },
        { img: '/images/logo-CMuLB7N9-removebg-preview.png', text: 'Giảm đến 1 triệu khi thanh toán qua thẻ Muadee by HDBank' },
        { img: '/images/LOGO-VIB-Blue-removebg-preview.png', text: 'Mở thẻ VIB nhận E-Voucher đến 600K' },
        { img: '/images/kredivo-removebg-preview.png', text: 'Giảm đến 500.000đ khi thanh toán qua Kredivo' },
        { img: '/images/sacombank-removebg-preview.png', text: 'Giảm 200K khi trả góp bằng thẻ Visa Sacombank qua MPOS' },
        { img: '/images/images.png', text: 'Giảm đến 200K khi thanh toán qua MOMO' },
        { text: 'Liên hệ B2B để được tư vấn giá tốt nhất cho khách hàng doanh nghiệp khi mua số lượng nhiều' },
    ];

    const tradeInOptions = ['Tìm sản phẩm muốn t', 'iPhone 15 Pro Max', 'Samsung S24 Ultra'];

    const features = [


        {
            id: 'feature-1',
            title: 'Samsung Galaxy S24 dùng chip gì?',
            description: 'Chip A16 Bionic với 5 nhân CPU và 16 nhân Neural Engine, giúp xử lý đa nhiệm nhanh chóng và nâng cao hiệu suất đồ họa.'
        },

        {
            id: 'feature-2',
            title: 'Dung lương ',
            description: 'Chip A16 Bionic với 5 nhân CPU và 16 nhân Neural Engine, giúp xử lý đa nhiệm nhanh chóng và nâng cao hiệu suất đồ họa.'
        },

        {
            id: 'feature-3',
            title: 'khung viền Samsung',
            description: 'Chip A16 Bionic với 5 nhân CPU và 16 nhân Neural Engine, giúp xử lý đa nhiệm nhanh chóng và nâng cao hiệu suất đồ họa.'
        },


    ];

    return (
        <>
            {/* Sử dụng component ProductBreadcrumb */}
            <ProductBreadcrumb slug={slug} />

            {/* Nội dung chính, đẩy xuống dưới header */}
            <div className="pt-30">
                <div className="max-w-[1200px] mx-auto px-2">
                    <div className="flex flex-col sm:flex-row">
                        {/* Cột trái (nội dung chính) */}
                        <div className="w-full sm:w-1/2 pr-4">
                            <h1 className="text-2xl font-bold mb-2">Chi tiết sản phẩm: {slug}</h1>

                            {/* Rating section */}
                            <div className="flex items-center mb-4">
                                <span className="text-yellow-500 text-xl">★</span>
                                <span className="text-lg font-semibold ml-1">4.9</span>
                                <span className="text-gray-500 ml-1 text-sm">(302 đánh giá)</span>
                            </div>

                            {/* Action buttons */}
                            <ActionButtons
                                onFavoriteClick={handleFavoriteClick}
                                onQAClick={handleQAClick}
                                onSpecsClick={handleSpecsClick}
                                onCompareClick={handleCompareClick}
                            />

                            {/* Hình ảnh sản phẩm chính */}
                            <ProductImage
                                src={mainImage.src}
                                alt={mainImage.alt}
                                onPrevClick={handlePrevClick}
                                onNextClick={handleNextClick}
                            />

                            {/* Carousel hoặc các hình ảnh phụ */}
                            <ImageCarousel images={images} onImageClick={handleImageClick} />

                            {/* Cam kết sản phẩm */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-black mb-4">Cam kết sản phẩm</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Box 1 */}
                                    <div className="flex flex-col p-4 bg-gray-50 rounded-2xl space-y-2">
                                        <div
                                            className="flex w-10 h-10 text-white font-bold text-sm rounded-full px-2 text-center hover:brightness-110 transition flex flex-col items-center justify-center leading-tight"
                                            style={{ background: 'linear-gradient(0deg, #d70018, #e45464)' }}
                                        >
                                            <SmartphoneCharging />
                                        </div>
                                        <p className="text-sm text-gray-800">Mới, đầy đủ phụ kiện từ nhà sản xuất</p>
                                    </div>

                                    {/* Box 2 */}
                                    <div className="flex flex-col p-4 bg-gray-50 rounded-2xl space-y-2">
                                        <div
                                            className="flex w-10 h-10 text-white font-bold text-sm rounded-full px-2 text-center hover:brightness-110 transition flex flex-col items-center justify-center leading-tight"
                                            style={{ background: 'linear-gradient(0deg, #d70018, #e45464)' }}
                                        >
                                            <ShieldX />
                                        </div>
                                        <p className="text-sm text-gray-800">
                                            Bảo hành 12 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng từ nhà sản xuất.
                                            <a href="#" className="text-blue-600 ml-1">Xem chi tiết</a>
                                        </p>
                                    </div>

                                    {/* Box 3 */}
                                    <div className="flex flex-col p-4 bg-gray-50 rounded-2xl space-y-2">
                                        <div
                                            className="flex w-10 h-10 text-white font-bold text-sm rounded-full px-2 text-center hover:brightness-110 transition flex flex-col items-center justify-center leading-tight"
                                            style={{ background: 'linear-gradient(0deg, #d70018, #e45464)' }}
                                        >
                                            <Cpu />
                                        </div>
                                        <div className="text-sm text-gray-800">
                                            <p>Samsung S24 Ultra</p>
                                            <p>2. Cáp truyền dữ liệu</p>
                                            <p>3. Que lấy sim</p>
                                            <p>* Galaxy S24 Ultra không bao gồm củ sạc.</p>
                                        </div>
                                    </div>

                                    {/* Box 4 */}
                                    <div className="flex flex-col p-4 bg-gray-50 rounded-2xl space-y-2">
                                        <div
                                            className="w-10 h-10 text-white font-bold text-sm rounded-full flex items-center justify-center"
                                            style={{ background: 'linear-gradient(0deg, #d70018, #e45464)' }}
                                        >
                                            <Tickets />
                                        </div>
                                        <p className="text-sm text-gray-800">
                                            Giá sản phẩm <strong>đã bao gồm thuế VAT</strong>, giúp bạn yên tâm và dễ dàng trong việc tính toán chi phí.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Thông số kĩ thuật */}
                            <div className="mt-12">
                                <TechnicalSpecs specs ={technicalSpecs} />
                            </div>

                            {/* Những câu hỏi thường gặp */}
                            <div className='mt-4 bg-gray-100 rounded-lg px-2 py-1'>
                                <Accordion type="single" collapsible className="w-full">
                                    {features.map((feature) => (
                                        <AccordionItem key={feature.id} value={feature.id}>
                                            <AccordionTrigger>{feature.title}</AccordionTrigger>
                                            <AccordionContent>{feature.description}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>

                        </div>

                        {/* Cột phải (Giá cả, phiên bản, màu sắc) */}
                        <div className="w-full sm:w-1/2 pl-4">
                            {/* Giá sản phẩm */}
                            <ProductPrice
                                price={priceData.price}
                                originalPrice={priceData.originalPrice}
                            />

                            {/* Phiên bản */}
                            <ProductVersions
                                versions={versions}
                                onVersionClick={handleVersionClick}
                            />

                            {/* Màu sắc */}
                            <ProductColors colors={colors} onColorClick={handleColorClick} />

                            {/* Thông tin Ưu đãi sinh viên */}
                            <div className="mt-4">
                                <div
                                    className="w-full h-[55px] border rounded-md flex flex-col space-y-1 p-2"
                                    style={{ backgroundColor: '#f3feff', color: 'black', borderColor: '#11b4be' }}
                                >
                                    <h3 className="text-xs font-semibold">
                                        Ưu đãi cho sinh viên - sinh viên, Giảng viên - giáo viên chỉ còn 23.390.000đ.
                                    </h3>
                                    <a href="" className="flex items-center space-x-1 text-blue-500 hover:text-blue-700 text-xs">
                                        Xác định mua <ArrowRight className="h-3 w-4 ml-1" />
                                    </a>
                                </div>
                            </div>

                            {/* Hình ảnh quảng cáo */}
                            <div className="mt-4">
                                <div className="relative w-full h-[70px] bg-gray-200 rounded-lg overflow-hidden group">
                                    <img
                                        src="/images/top_banner.png"
                                        alt="Hình sản phẩm iPhone 14 Pro Max"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 z-10 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <button className="bg-black/40 hover:bg-black/60 text-white p-1 rounded-full cursor-pointer">
                                            <ChevronLeftIcon className="w-7 h-7" />
                                        </button>
                                        <button className="bg-black/40 hover:bg-black/60 text-white p-1 rounded-full cursor-pointer">
                                            <ChevronRightIcon className="w-7 h-7" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Xem chi nhánh có hàng */}
                            <div
                                className="mt-4 relative w-full h-[185px] bg-gray-200 rounded-lg overflow-hidden group"
                                style={{ backgroundColor: '#f7f7f8' }}
                            >
                                <div className="flex items-center justify-between gap-x-4 px-4 py-2">
                                    <div>
                                        <h3 className="font-semibold text-base">Xem chi nhánh có hàng</h3>
                                        <p className="text-sm text-gray-600">
                                            Có <span className="text-blue-600 font-semibold">41</span> cửa hàng có sản phẩm
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <select
                                            className="px-3 py-1 border rounded-md text-sm"
                                            style={{ backgroundColor: '#fff', color: 'black', borderColor: '#e4e4e7' }}
                                        >
                                            <option>Hồ Chí Minh</option>
                                        </select>
                                        <select
                                            className="px-3 py-1 border rounded-md text-sm"
                                            style={{ backgroundColor: '#fff', color: 'black', borderColor: '#e4e4e7' }}
                                        >
                                            <option>Quận/Huyện</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <div className="flex space-x-3 overflow-x-auto pt-2">
                                        <div
                                            className="w-[250px] border rounded-lg p-3 flex flex-col space-y-2"
                                            style={{ backgroundColor: '#fff', color: 'black', borderColor: '#e4e4e7' }}
                                        >
                                            <p className="text-sm text-gray-800">
                                                134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM
                                            </p>
                                            <div className="flex items-center space-x-2">
                                                <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full flex items-center space-x-1">
                                                    <PhoneCall className="h-3 w-3" />
                                                    <span>02871000132</span>
                                                </span>
                                                <button className="flex items-center text-sm bg-gray-100 px-2 py-1 rounded-full">
                                                    <MapPin className="h-3 w-3 mr-1" />
                                                    Bản đồ
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className="w-[250px] border rounded-lg p-3 flex flex-col space-y-2"
                                            style={{ backgroundColor: '#fff', color: 'black', borderColor: '#e4e4e7' }}
                                        >
                                            <p className="text-sm text-gray-800">
                                                157-159 Nguyễn Thị Minh Khai, P. Phạm Ngũ Lão, Q.1
                                            </p>
                                            <div className="flex items-center space-x-2">
                                                <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full flex items-center space-x-1">
                                                    <PhoneCall className="h-3 w-3" />
                                                    <span>02871066159</span>
                                                </span>
                                                <button className="flex items-center text-sm bg-gray-100 px-2 py-1 rounded-full">
                                                    <MapPin className="h-3 w-3 mr-1" />
                                                    Bản đồ
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Khuyến mãi hấp dẫn (sử dụng component) */}
                            <PromotionSection title="Khuyến mãi hấp dẫn" promotions={promotions} />

                            {/* Nút mua và thêm giỏ hàng */}
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mt-4 w-full max-w-[750px]">
                                <button className="flex-1 h-[64px] border border-blue-500 text-blue-600 font-semibold text-sm rounded-xl px-2 text-center hover:bg-blue-50 transition flex items-center justify-center cursor-pointer">
                                    Trả góp 0%
                                </button>
                                <button
                                    className="flex-[2.5] h-[64px] text-white font-bold text-sm rounded-xl px-2 text-center hover:brightness-110 transition flex flex-col items-center justify-center leading-tight cursor-pointer"
                                    style={{ background: 'linear-gradient(0deg, #d70018, #e45464)' }}
                                >
                                    <span className="text-base font-bold">MUA NGAY</span>
                                    <span className="font-normal text-sm">Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng</span>
                                </button>
                                <button className="flex-1 h-[64px] border border-red-500 text-red-600 font-semibold text-sm rounded-xl px-2 hover:bg-red-50 transition flex items-center justify-center space-x-1 cursor-pointer">
                                    <ShoppingCart className="h-4 w-4 mr-1" strokeWidth={2} />
                                    <span>Thêm vào giỏ</span>
                                </button>
                            </div>

                            {/* Thu cũ lên đời */}
                            <TradelnSection minPrice="20.990.000đ" options={tradeInOptions} />

                            {/* Ưu đãi thanh toán */}
                            <PaymentPromotions promotions={paymentPromotions} />

                            {/* Phụ kiện mua cùng */}
                            <RelatedAccessories
                                accessories={accessories}
                                onAddToCart={handleAddToCart}
                            />

                            {/* Chọn gói dịch vụ bảo hành */}
                            {/* <div className="mt-4 p-4 rounded-lg bg-[#f7f7f8]">
                                <div className="flex items-center gap-2 mb-4">
                                    <ShieldCheck className="w-5 h-5 text-gray-600" />
                                    <h3 className="text-lg font-semibold">Chọn gói dịch vụ bảo hành</h3>
                                    <CircleAlert className="w-4 h-4 text-gray-500" />
                                </div>
                                <div className="flex flex-wrap gap-4 ">
                                    <button className="w-[170px] p-3 bg-white border rounded-xl text-left hover:shadow-md cursor-pointer">
                                        <div className="flex items-start space-x-1">
                                            <p className="text-sm font-semibold truncate w-full">
                                                S24+ 12 tháng00000000000000
                                            </p>
                                            <CircleAlert className="text-gray-500 w-3 h-3 mt-1" />
                                        </div>
                                        <p className="mt-1 text-sm font-bold text-red-600 flex items-start">1.600.000đ</p>
                                    </button>
                                    <button className="w-[170px] p-3 bg-white border rounded-xl text-left hover:shadow-md cursor-pointer">
                                        <div className="flex items-start space-x-1">
                                            <p className="text-sm font-semibold truncate w-full">
                                                S24+ 12 tháng00000000000000
                                            </p>
                                            <CircleAlert className="text-gray-500 w-3 h-3 mt-1" />
                                        </div>
                                        <p className="mt-1 text-sm font-bold text-red-600 flex items-start">1.600.000đ</p>
                                    </button>
                                    <button className="w-[170px] p-3 bg-white border rounded-xl text-left hover:shadow-md cursor-pointer">
                                        <div className="flex items-start space-x-1">
                                            <p className="text-sm font-semibold truncate w-full">
                                                S24+ 12 tháng00000000000000
                                            </p>
                                            <CircleAlert className="text-gray-500 w-3 h-3 mt-1" />
                                        </div>
                                        <p className="mt-1 text-sm font-bold text-red-600 flex items-start">1.600.000đ</p>
                                    </button>
                                    <button className="w-[170px] p-3 bg-white border rounded-xl text-left hover:shadow-md cursor-pointer">
                                        <div className="flex items-start space-x-1">
                                            <p className="text-sm font-semibold truncate w-full">
                                                S24+ 12 tháng00000000000000
                                            </p>
                                            <CircleAlert className="text-gray-500 w-3 h-3 mt-1" />
                                        </div>
                                        <p className="mt-1 text-sm font-bold text-red-600 flex items-start">1.600.000đ</p>
                                    </button>
                                </div>
                            </div> */}
                            <WarrantyOptions />
                        </div>
                    </div>

                    {/* Có thể bạn cũng thích */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">Có thể bạn cũng thích</h2>
                        <div className="flex flex-wrap gap-1 overflow-x-auto px-4 sm:px-0">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>

                    {/* Đặc điểm và tin tức */}
                    <div className='mt-4'>
                        <div className='max-x-[1200px] mx-auto'>
                            <div className='flex sm:flex-row'>
                                <div className='w-full h-full sm:w-1/1 pr-4 bg-gray-100 rounded-2xl px-4 py-4'>
                                    <h1 className='text-2xl font-bold mb-2'>Đặc điểm nổi bật</h1>
                                    <div className=' bg-white rounded-lg p-2 inline-block max-w-full mt-2'>
                                        <p className=''><b className='text-red-500'>iPad A16 11 inch</b> được trang bị chip A16 Bionic với 5 nhân CPU và 16 nhân Neural Engine, giúp xử lý đa nhiệm nhanh chóng và nâng cao hiệu suất đồ họa. Màn hình Liquid Retina 11 inch 2360 x 1640 pixel.</p>

                                    </div>


                                    <div className='flex flex-col bg-white rounded-lg px-2 py-1 mt-4'>
                                        <h1 className='text-2xl font-bold mt-2'>So sánh máy tính bảng iPad A16 11 inch với iPad Air 11 inch M3</h1>
                                        <p>iPad A16 11 inch và iPad Air 11 inch M3 được ra mắt cùng năm vậy hai thế hệ iPad này có điểm gì giống và khác, hãy cùng so sánh chi tiết:</p>
                                    </div>
                                </div>

                                <div className="w-full h-[405px] sm:w-1/2 ml-5 bg-gray-100 rounded-lg px-4 py-4">
                                    <div className='flex justify-between'>
                                        <h1 className="text-xl font-bold">Tin tức sản phẩm</h1>
                                        <a href="Xem tất cả" className="text-blue-600 text-sm flex items-center hover:underline" >xem tất cả
                                            <ChevronRight />
                                        </a>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-1 pt-4">
                                        <div
                                            className="rounded-lg py-2 px-2 flex flex-row"
                                            style={{ backgroundColor: '#fff', color: 'black', borderColor: '#e4e4e7' }}
                                        >
                                            <img
                                                src="/images/top_banner.png"
                                                alt="Phụ kiện 2"
                                                className="mr-3 w-[80px] h-[60px] object-cover rounded"
                                            />
                                            <div className="flex-1 text-sm" style={{ maxHeight: '3em' }}>
                                                <a
                                                    href=""
                                                    className="hover:underline"
                                                >
                                                    Dán kính cường lực iPhone 16 Pro Max chính hãng JCPal
                                                </a>

                                            </div>


                                        </div>

                                        <div
                                            className="rounded-lg py-2 px-2 mt-2 flex flex-row"
                                            style={{ backgroundColor: '#fff', color: 'black', borderColor: '#e4e4e7' }}
                                        >
                                            <img
                                                src="/images/top_banner.png"
                                                alt="Phụ kiện 2"
                                                className="mr-3 w-[80px] h-[60px] object-cover rounded"
                                            />
                                            <div className="flex-1 text-sm" style={{ maxHeight: '3em' }}>
                                                <a
                                                    href=""
                                                    className="hover:underline"
                                                >
                                                    Dán kính cường lực iPhone 16 Pro Max chính hãng JCPal
                                                </a>

                                            </div>
                                        </div>

                                        <div
                                            className="rounded-lg py-2 px-2 mt-2 flex flex-row"
                                            style={{ backgroundColor: '#fff', color: 'black', borderColor: '#e4e4e7' }}
                                        >
                                            <img
                                                src="/images/top_banner.png"
                                                alt="Phụ kiện 2"
                                                className="mr-3 w-[80px] h-[60px] object-cover rounded"
                                            />
                                            <div className="flex-1 text-sm" style={{ maxHeight: '3em' }}>
                                                <a
                                                    href=""
                                                    className="hover:underline"
                                                >
                                                    Dán kính cường lực iPhone 16 Pro Max chính hãng JCPal
                                                </a>

                                            </div>
                                        </div>

                                        <div
                                            className="rounded-lg py-2 px-2 mt-2 flex flex-row"
                                            style={{ backgroundColor: '#fff', color: 'black', borderColor: '#e4e4e7' }}
                                        >
                                            <img
                                                src="/images/top_banner.png"
                                                alt="Phụ kiện 2"
                                                className="mr-3 w-[80px] h-[60px] object-cover rounded"
                                            />
                                            <div className="flex-1 text-sm" style={{ maxHeight: '3em' }}>
                                                <a
                                                    href=""
                                                    className="hover:underline"
                                                >
                                                    Dán kính cường lực iPhone 16 Pro Max chính hãng JCPal
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Đánh giá  */}
                    <div className="w-full h-full bg-gray-100 rounded-lg mt-5 px-4 py-4">
                        <h1 className="text-xl font-bold">Đánh giá {slug}</h1>

                        {/* Box chính chứa nội dung đánh giá */}
                        <div className="w-full bg-white rounded-lg mt-4 p-4 flex flex-col lg:flex-row justify-between gap-4">

                            {/* Bên trái: Tổng điểm đánh giá */}
                            <div className="flex flex-col items-center justify-center w-full lg:w-1/3 text-center">
                                <p className="text-5xl font-bold text-gray-900">4.6<span className="text-2xl text-gray-400">/5</span></p>
                                <div className="flex text-yellow-400 my-2">
                                    {/* Icon sao vàng, thay bằng component nếu dùng Heroic  ons/Lucide */}
                                    {'★★★★★'.split('').map((star, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600">11 lượt đánh giá</p>
                                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                                    Viết đánh giá
                                </button>
                            </div>

                            {/* Bên giữa: Thanh tỷ lệ sao */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center text-sm gap-1">
                                {[5, 4, 3, 2, 1].map((star, index) => (
                                    <div key={index} className="flex items-center gap-1 mb-1">
                                        <span className="text-gray-700">{star}</span>
                                        <div className="text-yellow-400 text-xs">★</div>
                                        <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden max-w-[300px]">
                                            <div
                                                className="bg-red-600 h-2"
                                                style={{
                                                    width:
                                                        star === 5 ? "65%" : star === 4 ? "35%" : "0%",
                                                }}
                                            />
                                        </div>
                                        <span className="text-gray-500 text-xs w-16 text-right">
                                            {star === 5 ? "7 đánh giá" : star === 4 ? "4 đánh giá" : "0 đánh giá"}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="hidden md:block w-px h-24 bg-gray-400 mt-10"></div>


                            {/* Bên phải: Đánh giá theo trải nghiệm */}
                            <div className="w-full lg:w-1/2">
                                <h2 className="font-semibold mt-4">Đánh giá theo trải nghiệm</h2>
                                {['Hiệu năng', 'Thời lượng pin', 'Màn hình'].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between mt-3">
                                        <span>{item}</span>
                                        <div className="flex items-center space-x-1">
                                            <div className="flex text-yellow-400">{'★★★★★'.split('').map((s, i) => <span key={i}>★</span>)}</div>
                                            <span className="text-sm text-gray-600 ml-2">4.7/5 (9 đánh giá)</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>



                        {/* Đánh giá */}
                        <div className="flex flex-col gap-6 bg-white rounded-lg px-4 py-4 mt-4">
                            {/* Bộ lọc đánh giá */}
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                {["Tất cả", "Có hình ảnh", "Đã mua hàng", "5 sao", "4 sao", "3 sao", "2 sao", "1 sao"].map((filter, i) => (
                                    <button key={i} className={`px-3 py-1 rounded-full text-sm border ${i === 0 ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
                                        {filter}
                                    </button>
                                ))}
                            </div>
                            {/* Danh sách đánh giá */}
                            {[
                                {
                                    name: "Dương Ngọc Ánh",
                                    stars: 4,
                                    comment: "giao hàng nhanh nhưng hộp ngoài bị móp, bên trong hàng vẫn ổn",
                                    time: "1 tuần trước",
                                    note: "Tốt",
                                    boughtAt: "CellphoneS",
                                    tags: ["Hiệu năng Mạnh mẽ", "Thời lượng pin Khủng", "Màn hình Rất sắc nét"],
                                },
                                {
                                    name: "Đoàn Minh Thiện",
                                    stars: 4,
                                    comment: "💯💯💯💯💯💯💯💯💯💯",
                                    time: "1 tháng trước",
                                    note: "Tuyệt vời",
                                    boughtAt: "CellphoneS",
                                    tags: ["Hiệu năng Mạnh mẽ", "Thời lượng pin Khủng", "Màn hình Rất sắc nét"],
                                },

                            ].map((review, i) => (
                                <div key={i} className="border-b pb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold">{review.name}</p>
                                            <div className="flex items-center gap-2 text-yellow-400 text-sm mt-1">
                                                {"★★★★★".slice(0, review.stars)}
                                                <span className="text-gray-700 text-sm font-medium ml-2">{review.note}</span>
                                            </div>

                                            {review.boughtAt && (
                                                <p className="text-xs text-green-600 font-semibold mt-1">✓ Đã mua tại {review.boughtAt}</p>
                                            )}

                                            {review.tags && (
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {review.tags.map((tag, idx) => (
                                                        <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <p className="text-sm text-gray-800 whitespace-pre-line mt-2">{review.comment}</p>
                                            <p className="text-xs text-gray-500 mt-1">Đánh giá đã đăng vào {review.time}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Nút xem tất cả */}
                            <div className="flex justify-center mt-6">
                                <button className="px-6 py-2 rounded-full border hover:bg-gray-100 text-sm bg-white font-medium flex">
                                    Xem tất cả đánh giá
                                    <ChevronRight className='mt-1 h-3 w-5 ' />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Hỏi đáp */}
                    <div className="w-full h-full rounded-lg bg-gray-100 mt-4 items-start md:items-center gap-4 p-4">
                        <h1 className='text-xl font-bold '> Hỏi và đáp</h1>
                        {/* Icon trái */}
                        <div className='flex flex-col md:flex-row items-start md:items-center mt-4 bg-white rounded-lg p-4 gap-4'>
                            <img
                                src="/images/cellphones/hình ảnh biểu tượng cellphoneS.gif" // Thay bằng đường dẫn thật nếu có
                                alt="Bot"

                                className="w-24 h-24 object-contain"
                            />

                            {/* Nội dung giữa và phải */}
                            <div className="flex-1">
                                {/* Tiêu đề và mô tả */}
                                <div className="mb-4">
                                    <h2 className="text-lg font-semibold">Hãy đặt câu hỏi cho chúng tôi</h2>
                                    <p className="text-sm text-gray-600">
                                        CellphoneS sẽ phản hồi trong vòng 1 giờ. Nếu Quý khách gửi câu hỏi sau 22h,
                                        chúng tôi sẽ trả lời vào sáng hôm sau. Thông tin có thể thay đổi theo thời gian,
                                        vui lòng đặt câu hỏi để nhận được cập nhật mới nhất!
                                    </p>
                                </div>

                                {/* Input và nút gửi */}
                                <div className="flex w-full mt-2">
                                    <input
                                        type="text"
                                        placeholder="Viết câu hỏi của bạn tại đây"
                                        className="flex-grow px-4 py-4 border rounded-lg outline-none text-sm bg-white mr-2"
                                    />
                                    <button className="bg-red-600 text-white px-4 py-4 rounded-lg flex items-center gap-1 hover:bg-red-700 text-sm">
                                        Gửi câu hỏi
                                        <ArrowRight className="h-4 w-4 ml-1" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 bg-white rounded-lg px-4 py-4 mt-4">
                            {/* Danh sách đánh giá */}
                            {[
                                {
                                    name: "Dương Ngọc Ánh",
                                    stars: 4,
                                    comment: "giao hàng nhanh nhưng hộp ngoài bị móp, bên trong hàng vẫn ổn",
                                    time: "1 tuần trước",
                                    note: "Tốt",
                                    boughtAt: "CellphoneS",
                                    tags: ["Hiệu năng Mạnh mẽ", "Thời lượng pin Khủng", "Màn hình Rất sắc nét"],
                                },
                                {
                                    name: "Đoàn Minh Thiện",
                                    stars: 4,
                                    comment: "💯💯💯💯💯💯💯💯💯💯",
                                    time: "1 tháng trước",
                                    note: "Tuyệt vời",
                                    boughtAt: "CellphoneS",
                                    tags: ["Hiệu năng Mạnh mẽ", "Thời lượng pin Khủng", "Màn hình Rất sắc nét"],
                                },

                                {
                                    name: "Đoàn Minh Thiện",
                                    stars: 4,
                                    comment: "💯💯💯💯💯💯💯💯💯💯",
                                    time: "1 tháng trước",
                                    note: "Tuyệt vời",
                                    boughtAt: "CellphoneS",
                                    tags: ["Hiệu năng Mạnh mẽ", "Thời lượng pin Khủng", "Màn hình Rất sắc nét"],
                                },

                                {
                                    name: "Đoàn Minh Thiện",
                                    stars: 4,
                                    comment: "💯💯💯💯💯💯💯💯💯💯",
                                    time: "1 tháng trước",
                                    note: "Tuyệt vời",
                                    boughtAt: "CellphoneS",
                                    tags: ["Hiệu năng Mạnh mẽ", "Thời lượng pin Khủng", "Màn hình Rất sắc nét"],
                                },

                            ].map((review, i) => (
                                <div key={i} className="border-b pb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold">{review.name}</p>
                                            <div className="flex items-center gap-2 text-yellow-400 text-sm mt-1">
                                                {"★★★★★".slice(0, review.stars)}
                                                <span className="text-gray-700 text-sm font-medium ml-2">{review.note}</span>
                                            </div>

                                            {review.boughtAt && (
                                                <p className="text-xs text-green-600 font-semibold mt-1">✓ Đã mua tại {review.boughtAt}</p>
                                            )}

                                            {review.tags && (
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {review.tags.map((tag, idx) => (
                                                        <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <p className="text-sm text-gray-800 whitespace-pre-line mt-2">{review.comment}</p>
                                            <p className="text-xs text-gray-500 mt-1">Đánh giá đã đăng vào {review.time}</p>
                                        </div>
                                    </div>

                                </div>

                            ))}
                            {/* Nút xem tất cả */}
                            <div className="flex justify-center mt-6">
                                <button className="px-6 py-2 rounded-full border hover:bg-gray-100 text-sm bg-white font-medium flex">
                                    Xem tất cả đánh giá
                                    <ChevronRight className='mt-1 h-3 w-5 ' />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}