'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons/BannerMenuIcon';

type ProductImageProps = {
  src: string;
  alt: string;
  onPrevClick?: () => void;
  onNextClick?: () => void;
};

export default function ProductImage({
  src,
  alt,
  onPrevClick,
  onNextClick,
}: ProductImageProps) {
  return (
    <div className="mt-6">
      <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden group">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full cursor-pointer"
            onClick={onPrevClick}
          >
            <ChevronLeftIcon className="w-7 h-7" />
          </button>
          <button
            className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full cursor-pointer"
            onClick={onNextClick}
          >
            <ChevronRightIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}