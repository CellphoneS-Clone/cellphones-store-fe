// src/components/product/detail/ProductBreadcrumb.tsx
import Link from 'next/link';

type BreadcrumbItem = { href: string; label: string };

type ProductBreadcrumbProps = {
  slug: string;
};

const ProductBreadcrumb = ({ slug }: ProductBreadcrumbProps) => {
  const breadcrumbs: BreadcrumbItem[] = [
    { href: '/', label: 'Trang chủ' },
    { href: '/dien-thoai', label: 'Điện thoại' },
    { href: '/apple', label: 'Apple' },
    { href: '/iphone-16-series', label: 'iPhone 16 Series' },
    { href: `/products/${slug}`, label: slug },
  ];

  return (
    <header className="bg-white h-10 flex items-center justify-between px-4 text-black fixed w-full top-16 z-10">
      <nav className="space-x-2 text-xs mx-auto max-w-[1200px] w-full px-2">
        {breadcrumbs.map((item, index) => (
          <span key={index}>
            <Link href={item.href} className="hover:text-gray-600">
              {index === 0 && <span className="mr-2">🏠</span>}
              {item.label}
            </Link>
            {index < breadcrumbs.length - 1 && <span className="text-black">/</span>}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default ProductBreadcrumb;