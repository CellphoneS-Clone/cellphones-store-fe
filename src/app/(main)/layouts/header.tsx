"use client";

import Link from "next/link";
import Image from "next/image";
import { MenuItem } from "@/components/header/MenuItem";
import { LocationItem } from "@/components/header/LocationItem";
import { SearchBar } from "@/components/header/SearchBar";
import { PhoneItem } from "@/components/header/PhoneItem";
import { StoreItem } from "@/components/header/StoreItem";
import { DeliveryTrackingItem } from "@/components/header/DeliveryTrackingItem";
import { CartItem } from "@/components/header/CartItem";
import { UserItem } from "@/components/header/UserItem";
import {
  MenuIcon,
  LocationIcon,
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
          <MenuItem icon={<MenuIcon className="w-6 h-6" />}>
            <span>Danh mục</span>
          </MenuItem>

          {/* Xem giá tại */}
          <LocationItem
            icon={<LocationIcon className="w-6 h-6" />}
            location="Hồ Chí Minh"
          />

          {/* Search */}
          <SearchBar />

          {/* Gọi mua hàng */}
          <PhoneItem
            icon={<PhoneIcon className="w-6 h-6" />}
            number="1800.2097"
          />

          {/* Cửa hàng gần bạn */}
          <StoreItem
            icon={<StoreIcon className="w-6 h-6" />}
            text="Cửa hàng<br />gần bạn"
          />

          {/* Tra cứu đơn hàng */}
          <DeliveryTrackingItem
            icon={<DeliveryTrackingIcon className="w-10 h-10" />}
            text="Tra cứu<br />đơn hàng"
          />

          {/* Giỏ hàng */}
          <CartItem icon={<CartIcon className="w-6 h-6" />} text="Giỏ<br />hàng" />

          {/* Tài khoản */}
          <UserItem icon={<UserIcon className="w-6 h-6" />} name="Dương" />
        </div>
      </div>
    </header>
  );
};

export default Header;