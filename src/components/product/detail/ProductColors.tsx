'use client';

import { Card } from "@/components/ui/card";

type ColorOption = {
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
};

type ProductColorsProps = {
  colors: ColorOption[];
  onColorClick?: (color: string) => void;
};

export default function ProductColors({ colors, onColorClick }: ProductColorsProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Màu sắc</h3>
      <div className="flex flex-wrap gap-2">
        {colors.map((color, index) => (
          <Card
            key={index}
            className="flex items-center p-2 border rounded-lg min-w-[250px] hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onColorClick?.(color.name)}
          >
            <div className="flex flex-col">
              <span className="text-base font-bold text-black">{color.name}</span>
              <span className="text-lg text-black">{color.price}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}