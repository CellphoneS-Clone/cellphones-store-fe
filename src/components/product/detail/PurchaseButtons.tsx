import { ShoppingCart } from 'lucide-react';

export default function PurchaseButtons() {
  return (
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
  );
}