import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Pencil } from "lucide-react";

// Định nghĩa kiểu dữ liệu cho một địa chỉ.
// Lý tưởng nhất, kiểu này nên được định nghĩa trong thư mục types.
type Address = {
    type: string;
    isDefault: boolean;
    recipientName: string;
    phone: string;
    fullAddress: string;
};

// Component con để hiển thị thông tin của một địa chỉ.
const AddressItem = ({ address }: { address: Address }) => (
    <div className="border rounded-lg p-4 flex flex-col space-y-4">
        <div className="flex justify-between items-center">
            <h3 className="font-bold uppercase">{address.type}</h3>
            {/* Hiển thị tag "Mặc định" nếu đây là địa chỉ mặc định */}
            {address.isDefault && (
                <span className="text-red-500 text-xs font-semibold border border-red-500 rounded-full px-2 py-0.5">Mặc định</span>
            )}
        </div>
        <div className="text-sm text-gray-700 space-y-2">
            <p className="font-bold">{address.recipientName} <span className="text-gray-500 font-normal px-2">|</span> {address.phone}</p>
            <p>{address.fullAddress}</p>
        </div>
        <div className="flex justify-end gap-x-4 text-sm">
            <button className="text-blue-600 hover:underline">Cập nhật</button>
            <button className="text-red-600 hover:underline">Xóa</button>
        </div>
    </div>
);

/**
 * Card quản lý "Sổ địa chỉ" của người dùng.
 * Hiển thị danh sách các địa chỉ đã lưu và cho phép thêm/sửa/xóa.
 */
export function AddressCard() {
    // Dữ liệu mẫu về danh sách địa chỉ
    const addresses: Address[] = [
        {
            type: "Nhà",
            isDefault: true,
            recipientName: "Lộc Trần Trân",
            phone: "0789006730",
            fullAddress: "Trần Trân 1, Thị trấn Phú Hoà, Huyện Thoại Sơn, An Giang"
        },
        {
            type: "Công ty",
            isDefault: false,
            recipientName: "Lộc Trần Trân",
            phone: "0789006730",
            fullAddress: "123 Đường ABC, Quận 1, TP.HCM"
        }
    ];

    return (
        <Card className="bg-white w-full rounded-xl">
            <CardHeader className="py-0 flex w-full justify-between items-center">
                <h2 className="text-base font-bold">Số địa chỉ</h2>
                <h2 className="text-base font-bold flex items-center gap-1 text-red-500 cursor-pointer"><Pencil className="w-4 h-4" />Thêm địa chỉ</h2>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {/* Lặp qua danh sách địa chỉ và render từng mục */}
                    {addresses.map((address, index) => (
                        <AddressItem key={index} address={address} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
} 