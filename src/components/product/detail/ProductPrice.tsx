type ProductPriceProps = {
  price: string;
  originalPrice: string;
};

export default function ProductPrice({ price, originalPrice }: ProductPriceProps) {
  return (
    <div className="mb-4 p-4 bg-blue-50 border border-blue-800 rounded-2xl w-fit">
      <h3 className="text-lg font-semibold mb-2">Giá sản phẩm</h3>
      <p className="text-2xl font-bold text-red-600">
        {price} <span className="text-gray-500 line-through">{originalPrice}</span>
      </p>
    </div>
  );
}