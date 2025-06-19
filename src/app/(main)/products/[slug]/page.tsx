type Props = {
    params: {
        slug: string;
    };
};

export default function ProductDetail({ params }: Props) {
    const { slug } = params;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">Chi tiết sản phẩm: {slug}</h1>
            <p className="text-gray-700">Đây là trang mô tả sản phẩm có slug là <strong>{slug}</strong>.</p>

            <div className="mt-4">
                <p><strong>Tên sản phẩm:</strong> Áo thun cotton cao cấp</p>
                <p><strong>Giá:</strong> 250.000 VNĐ</p>
                <p><strong>Mô tả:</strong> Áo thun form rộng, chất liệu cotton 100%, thoáng mát cho mùa hè.</p>
            </div>
        </div>
    );
}
