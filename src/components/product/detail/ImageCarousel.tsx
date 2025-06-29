'use client';

import Image from 'next/image';

type ImageCarouselProps = {
  images: { src: string; alt: string }[];
  onImageClick?: (index: number) => void;
};

export default function ImageCarousel({ images, onImageClick }: ImageCarouselProps) {
  return (
    <div className="mt-4 flex space-x-2 overflow-x-auto">
      {images.map((image, index) => (
        <button
          key={index}
          className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0"
          onClick={() => onImageClick?.(index)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="64px"
          />
        </button>
      ))}
    </div>
  );
}
