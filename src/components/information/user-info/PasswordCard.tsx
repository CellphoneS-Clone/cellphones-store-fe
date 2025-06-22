import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Pencil } from "lucide-react";

export function PasswordCard() {
    // Dữ liệu mẫu
    const lastUpdated = "03/11/2024 16:42";

    return (
        <Card className="bg-white w-full md:w-1/2 rounded-xl">
            <CardHeader className="py-0 flex w-full justify-between items-center">
                <h2 className="text-base font-bold">Thay đổi mật khẩu</h2>
                <h2 className="text-base font-bold flex items-center gap-1 text-red-500 cursor-pointer"><Pencil className="w-4 h-4" />Cập nhật</h2>
            </CardHeader>
            <CardContent className="p-4 md:p-6 space-y-4">
                <div className="flex justify-between items-center text-base">
                    <span className="text-gray-400">Cập nhật lần cuối lúc:</span>
                    <span className="text-gray-700">{lastUpdated}</span>
                </div>
            </CardContent>
        </Card>
    );
} 