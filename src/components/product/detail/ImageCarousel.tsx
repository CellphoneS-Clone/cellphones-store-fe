'use client';

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
          className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden"
          onClick={() => onImageClick?.(index)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}