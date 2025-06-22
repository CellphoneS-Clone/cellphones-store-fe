'use client';

import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

const statuses = [
    'Tất cả',
    'Chờ xác nhận',
    'Đã xác nhận',
    'Đang vận chuyển',
    'Đã giao hàng',
    'Đã hủy'
];

export default function OrderPage() {
    const [activeStatus, setActiveStatus] = useState(statuses[0]);
    const [date, setDate] = useState<DateRange | undefined>(undefined);
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    return (
        <div className="flex-auto min-w-0 space-y-4">
            <Card className="bg-white w-full rounded-xl">
                <CardHeader className="p-4 md:p-6">

                    <div className="border-b border-t border-neutral-200">
                        <nav className="px-4 md:px-6 -mb-px flex space-x-6 overflow-x-auto">
                            {statuses.map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setActiveStatus(status)}
                                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeStatus === status
                                        ? 'border-red-500 text-red-600'
                                        : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                                        }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <h3 className="text-base font-semibold">Lịch sử mua hàng của bạn</h3>
                        <div className="relative">
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[260px] flex items-center justify-between font-normal",
                                    !date && "text-muted-foreground"
                                )}
                                onClick={() => setIsPickerOpen(!isPickerOpen)}
                            >
                                <span className="flex items-center gap-2">
                                    <CalendarIcon className="h-4 w-4" />
                                    Chọn ngày
                                </span>
                                <span className="text-xs text-neutral-500 font-normal">
                                    {date?.from ? (
                                        date.to ? (
                                            <>
                                                {date.from.toLocaleDateString("vi-VN")} - {date.to.toLocaleDateString("vi-VN")}
                                            </>
                                        ) : (
                                            date.from.toLocaleDateString("vi-VN")
                                        )
                                    ) : (
                                        ""
                                    )}
                                </span>
                            </Button>
                            {isPickerOpen && (
                                <div className="absolute right-0 top-full mt-2 z-10">
                                    <Card className="bg-white border rounded-md shadow-lg">
                                        <Calendar
                                            initialFocus
                                            mode="range"
                                            defaultMonth={date?.from}
                                            selected={date}
                                            onSelect={setDate}
                                            numberOfMonths={1}
                                        />
                                    </Card>
                                </div>
                            )}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                    Thông tin đơn hàng sẽ được hiển thị ở đây.
                </CardContent>
            </Card>
        </div>
    );
}