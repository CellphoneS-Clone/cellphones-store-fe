import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const paymentMethods = [
    { src: '/images/payment/alepay.webp', alt: 'Alepay', href: '#' },
    { src: '/images/payment/fundiin.webp', alt: 'Fundiin', href: '#' },
    { src: '/images/payment/kredivo-logo.webp', alt: 'Kredivo', href: '#' },
    { src: '/images/payment/momo.webp', alt: 'MoMo', href: '#' },
    { src: '/images/payment/mpos-logo.webp', alt: 'Mpos', href: '#' },
    { src: '/images/payment/onepay.webp', alt: 'Onepay', href: '#' },
    { src: '/images/payment/pay.webp', alt: 'Zalopay', href: '#' },
    { src: '/images/payment/vnpay.webp', alt: 'Vnpay', href: '#' },
    { src: '/images/payment/zalopay.webp', alt: 'Zalopay', href: '#' },
  ];

  const socialLinks = [
    { src: '/images/cellphones/cellphones-youtube.webp', alt: 'CellphoneS Youtube', href: '#' },
    { src: '/images/cellphones/cellphones-facebook.webp', alt: 'CellphoneS Facebook', href: '#' },
    { src: '/images/cellphones/cellphones-instagram.webp', alt: 'CellphoneS Instagram', href: '#' },
    { src: '/images/cellphones/cellphones-tiktok.webp', alt: 'CellphoneS Tiktok', href: '#' },
    { src: '/images/cellphones/cellphones-zalo.webp', alt: 'CellphoneS Zalo', href: '#' },
  ];

  const memberSites = [
    { name: 'Hệ thống bảo hành sửa chữa Điện thoại - Máy tính', src: '/images/webuser/dienthoaivui.webp', href: '#' },
    { name: 'Trung tâm bảo hành uỷ quyền Apple', src: '/images/webuser/Logo_CareS_1.webp', href: '#' },
    { name: 'Kênh thông tin giải trí công nghệ cho giới trẻ', src: '/images/webuser/schanel.webp', href: '#' },
    { name: 'Trang thông tin công nghệ mới nhất', src: '/images/webuser/sforum.webp', href: '#' },
  ];

  return (
    <footer className="mt-5 w-full bg-gray-100 shadow-lg">
      {/* Footer Top */}
      <div className="p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-3">
            {/* Box 1: Support and Payment */}
            <div className="w-full md:w-1/4 px-3 mb-4">
              <h3 className="text-base font-medium text-gray-700 mb-3">Tổng đài hỗ trợ miễn phí</h3>
              <ul className="list-none p-0 text-sm">
                <li className="mb-1">
                  Gọi mua hàng <Link href="tel:18002097" className="font-bold text-gray-600  no-underline">1800.2097</Link> (7h30 - 22h00)
                </li>
                <li className="mb-1">
                  Gọi khiếu nại <Link href="tel:18002063" className="font-bold text-gray-600  no-underline">1800.2063</Link> (8h00 - 21h30)
                </li>
                <li className="mb-1">
                  Gọi bảo hành <Link href="tel:18002064" className="font-bold text-gray-600  no-underline">1800.2064</Link> (8h00 - 21h00)
                </li>
              </ul>

              <h3 className="text-base font-medium text-gray-700 mb-3">Phương thức thanh toán</h3>
              <ul className="list-none p-0 flex flex-wrap gap-1">
                {paymentMethods.map((method, index) => (
                  <li key={index} className="border border-gray-300 rounded-md">
                    <Link href={method.href}>
                      <Image src={method.src} alt={method.alt} width={50} height={32} className="object-contain" />
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-base font-medium text-gray-700 mt-3">ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</h3>
              <p className="text-red-600 text-sm">(*) Nhận ngay voucher 10%</p>
              <p className="text-xs">*Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới</p>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="w-full h-8 p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  maxLength={10}
                  className="w-full h-8 p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                />
              </div>
              <div className="flex items-center mb-3">
                <label className="flex items-center gap-1 text-sm">
                  <input type="checkbox" checked disabled className="cursor-not-allowed" />
                  <Link href="#" className="text-red-600 text-xs no-underline">Tôi đồng ý với điều khoản của CellphoneS</Link>
                </label>
              </div>
              <button className="w-full bg-red-600 text-white font-semibold rounded-md py-2 text-sm">
                ĐĂNG KÝ NGAY
              </button>
            </div>

            {/* Box 2: Policies */}
            <div className="w-full md:w-1/4 px-3 mb-4">
              <h3 className="text-base font-medium text-gray-700 mb-3">Thông tin và chính sách</h3>
              <ul className="list-none p-0 text-sm">
                {[
                  'Mua hàng và thanh toán Online',
                  'Mua hàng trả góp Online',
                  'Mua hàng trả góp bằng thẻ tín dụng',
                  'Chính sách giao hàng',
                  'Tra điểm Smember',
                  'Xem ưu đãi Smember',
                  'Tra thông tin bảo hành',
                  'Tra cứu hoá đơn điện tử',
                  'Thông tin hoá đơn mua hàng',
                  'Trung tâm bảo hành chính hãng',
                  'Quy định về việc sao lưu dữ liệu',
                  'Chính sách khui hộp sản phẩm Apple',
                ].map((item, index) => (
                  <li key={index} className="mb-1">
                    <Link href="#" className="text-gray-600  no-underline">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: Services */}
            <div className="w-full md:w-1/4 px-3 mb-4">
              <h3 className="text-base font-medium text-gray-700 mb-3">Dịch vụ và thông tin khác</h3>
              <ul className="list-none p-0 text-sm">
                {[
                  'Khách hàng doanh nghiệp (B2B)',
                  'Ưu đãi thanh toán',
                  'Quy chế hoạt động',
                  'Chính sách bảo mật thông tin cá nhân',
                  'Chính sách Bảo hành',
                  'Liên hệ hợp tác kinh doanh',
                  'Tuyển dụng',
                  'Dịch vụ bảo hành mở rộng',
                ].map((item, index) => (
                  <li key={index} className="mb-1">
                    <Link href="#" className="text-gray-600  no-underline">{item}</Link>
                  </li>
                ))}
                <li className="mb-1">
                  <div className="flex flex-col">
                    <p className="flex items-center gap-1 text-sm">
                      <Image src="/images/logo_S.png" alt="Smember" width={15} height={15} className="rounded" />
                      Smember: Tích điểm & sử dụng ưu đãi
                    </p>
                    <div className="flex mt-2 gap-2">
                      {/* <Image src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/QR_appGeneral.jpg" alt="QR tải app" width={100} height={100} className="w-2/5" /> */}
                      <div className="flex flex-col w-3/5">
                        <Link href="#" className="p-1">
                          <Image src="/images/downloadCHPlay.webp" alt="Tải app từ Google Play" width={100} height={50} />
                        </Link>
                        <Link href="#" className="p-1">
                          <Image src="/images/downloadiOS.webp" alt="Tải app từ App Store" width={100} height={50} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Box 4: Social and Member Sites */}
            <div className="w-full md:w-1/4 px-3 mb-4">
              <h3 className="text-base font-medium text-gray-700 mb-3">Kết nối với CellphoneS</h3>
              <div className="flex flex-wrap mb-3">
                {socialLinks.map((social, index) => (
                  <div key={index} className="pr-2.5 mb-2">
                    <Link href={social.href} target="_blank">
                      <Image src={social.src} alt={social.alt} width={50} height={32} className="object-contain" />
                    </Link>
                  </div>
                ))}
              </div>
              <h3 className="text-base font-medium mb-3">Website thành viên</h3>
              <div className="flex flex-wrap">
                {memberSites.map((site, index) => (
                  <div key={index} className="mb-2 w-full">
                    <p className="text-xs text-gray-600 mb-1">{site.name}</p>
                    <Link href={site.href} target="_blank">
                      <Image src={site.src} alt={site.name} width={100} height={50} className="object-contain" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-3 mb-2">
            {[
              [
                { text: 'Điện thoại iPhone 16 Pro', href: 'https://cellphones.com.vn/iphone-16-pro.html' },
                { text: 'Điện thoại iPhone 16 Pro Max', href: 'https://cellphones.com.vn/iphone-16-pro-max.html' },
                { text: 'Điện thoại iPhone 15', href: 'https://cellphones.com.vn/mobile/apple/iphone-15.html' },
              ],
              [
                { text: 'Điện thoại', href: 'https://cellphones.com.vn/mobile.html' },
                { text: 'Điện thoại iPhone', href: 'https://cellphones.com.vn/mobile/apple.html' },
                { text: 'Điện thoại Xiaomi', href: 'https://cellphones.com.vn/mobile/xiaomi.html' },
                { text: 'Điện thoại Samsung Galaxy', href: 'https://cellphones.com.vn/mobile/samsung.html' },
                { text: 'Điện thoại OPPO', href: 'https://cellphones.com.vn/mobile/oppo.html' },
              ],
              [
                { text: 'Laptop', href: 'https://cellphones.com.vn/laptop.html' },
                { text: 'Laptop Acer', href: 'https://cellphones.com.vn/laptop/acer.html' },
                { text: 'Laptop Dell', href: 'https://cellphones.com.vn/laptop/dell.html' },
                { text: 'Laptop HP', href: 'https://cellphones.com.vn/laptop/hp.html' },
                { text: 'Tivi', href: 'https://cellphones.com.vn/tivi.html' },
                { text: 'Tivi Samsung', href: 'https://cellphones.com.vn/tivi/samsung.html' },
                { text: 'Tivi Sony', href: 'https://cellphones.com.vn/tivi/sony.html' },
                { text: 'Tivi LG', href: 'https://cellphones.com.vn/tivi/lg.html' },
              ],
              [
                { text: 'Đồ gia dụng', href: 'https://cellphones.com.vn/do-gia-dung.html' },
                { text: 'Máy hút bụi gia đình', href: 'https://cellphones.com.vn/nha-thong-minh/may-hut-bui.html' },
                { text: 'Laptop AI', href: 'https://cellphones.com.vn/laptop/ai.html' },
                { text: 'Back to School là gì', href: 'https://cellphones.com.vn/chao-nam-hoc-moi' },
              ],
            ].map((group, index) => (
              <div key={index} className="w-full md:w-1/4 px-3 mb-2">
                {group.map((item, idx) => (
                  <span key={idx} className="inline-block mr-1">
                    <Link href={item.href} className="text-[12px] text-gray-600  no-underline">{item.text}</Link>
                    {idx < group.length - 1 && <span className='text-gray-600 '> | </span>}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[11px] text-gray-500 mb-2 text-center">
              Công ty TNHH Thương Mại Tổng Hợp HTV - GPĐKKD: 0108075931 cấp tại Sở KH & ĐT TP. Hà Nội. Địa chỉ văn
              phòng: 543 Nguyễn Trãi, phường Thanh Xuân Nam, quận Thanh Xuân, Thành phố Hà Nội, Việt Nam. Điện thoại:
              024.7303.0119.
            </p>
            <div className="flex items-center gap-1">
              <Link href="http://online.gov.vn/Home/WebDetails/75641" target="_blank">
                {/* <Image src="https://cdn2.cellphones.com.vn/80x,webp/media/logo/logoSaleNoti.png" alt="Đã thông báo" width={80} height={38} /> */}
              </Link>
              <Link href="https://www.dmca.com/Protection/Status.aspx?ID=158f5667-cce3-4a18-b2d1-826225e6b022" target="_blank">
                {/* <Image src="https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022" alt="DMCA.com Protection Status" width={96} height={20} /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;