'use client';

type ProductVersionsProps = {
  versions: string[];
  onVersionClick?: (version: string) => void;
};

export default function ProductVersions({ versions, onVersionClick }: ProductVersionsProps) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Phiên bản</h3>
      <div className="flex space-x-3">
        {versions.map((version, index) => (
          <button
            key={index}
            className="w-[100px] h-[55px] border rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onVersionClick?.(version)}
          >
            {version}
          </button>
        ))}
      </div>
    </div>
  );
}