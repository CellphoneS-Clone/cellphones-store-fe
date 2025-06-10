"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MenuIcon,
  LocationIcon,
  SearchIcon,
  PhoneIcon,
  StoreIcon,
  DeliveryTrackingIcon,
  CartIcon,
  UserIcon,
} from "@/components/icons/HeaderIcons";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#d70018] shadow-md">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-2 h-[64px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 mr-2">
          <Image
            src="/images/cellphoneS_logo.png"
            alt="Logo CellphoneS"
            width={160}
            height={50}
            priority
          />
        </Link>

        <div className="flex items-center gap-x-2 flex-nowrap overflow-x-auto flex-1 justify-end">
          {/* Danh mục */}
          <Link
            href="#"
            className="flex items-center gap-2 bg-white/20 text-white text-[13px] rounded-xl px-2 py-2.5 shrink-0"
          >
            <MenuIcon className="w-6 h-6" />
            <span>Danh mục</span>
          </Link>

          {/* Xem giá tại */}
          <div className="hidden lg:flex items-center gap-2 bg-white/20 text-white text-[13px] rounded-xl px-2 py-2 cursor-pointer shrink-0">
            <LocationIcon className="w-6 h-6" />
            <div className="text-left leading-tight">
              <p className="text-[11px]">Xem giá tại</p>
              <p className="font-medium text-[13px]">Hồ Chí Minh</p>
            </div>
          </div>

          {/* Search */}
          <form className="flex items-center bg-white rounded-xl h-[36px] overflow-hidden flex-grow max-w-[400px]">
            <button type="submit" className="px-2 text-gray-500">
              <SearchIcon className="w-5 h-5" />
            </button>
            <input
              type="text"
              placeholder="Bạn cần tìm gì?"
              className="flex-1 h-full outline-none text-[13px] text-gray-800 px-1"
            />
          </form>

          {/* Gọi mua hàng */}
          <div className="hidden xl:flex items-center gap-2 text-white text-[13px] px-2 py-2 rounded-xl hover:bg-white/20 transition cursor-pointer shrink-0">
            <PhoneIcon className="w-6 h-6" />
            <div className="leading-tight">
              <p className="text-xs">Gọi mua hàng</p>
              <p className="font-medium text-[13px]">1800.2097</p>
            </div>
          </div>

          {/* Cửa hàng gần bạn */}
          <Link
            href="#"
            className="hidden lg:flex items-center gap-2 text-white text-[13px] px-2 py-2 rounded-xl hover:bg-white/20 transition shrink-0"
          >
            <StoreIcon className="w-6 h-6" />
            <span className="leading-tight text-left">Cửa hàng<br />gần bạn</span>
          </Link>

          {/* Tra cứu đơn hàng */}
          <Link
            href="#"
            className="hidden md:flex items-center gap-2 text-white text-[13px] px-2 py-2 rounded-xl hover:bg-white/20 transition shrink-0"
          >
            <DeliveryTrackingIcon className="w-10 h-10" />
            <span className="leading-tight text-left">Tra cứu<br />đơn hàng</span>
          </Link>

          {/* Giỏ hàng */}
          <Link
            href="#"
            className="flex items-center gap-2 text-white text-[13px] px-2 py-2 rounded-xl hover:bg-white/20 transition shrink-0"
          >
            <CartIcon className="w-6 h-6" />
            <span className="leading-tight text-left">Giỏ<br />hàng</span>
          </Link>

          {/* Tài khoản */}
          <div className="flex flex-col items-center justify-center text-center bg-white/20 text-white text-[13px] rounded-xl px-2 py-1 cursor-pointer shrink-0">
            <UserIcon className="w-6 h-6" />
            <span>Dương</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
