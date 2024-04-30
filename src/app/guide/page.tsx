import Link from 'next/link';

export default function Guide() {
    return (
        <div className="container">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mb-8">
                <img
                    src="https://res.cloudinary.com/ezcode97/image/upload/v1714494660/sinh_hoat_hoi/huong_dan/1.jpg"
                    title="nhấn 3 gạch/họ tên/đơn vị/vào thi"
                />
                <img
                    src="https://res.cloudinary.com/ezcode97/image/upload/v1714494660/sinh_hoat_hoi/huong_dan/2.jpg"
                    title="chọn cuộc thi"
                />
                <img
                    src="https://res.cloudinary.com/ezcode97/image/upload/v1714494660/sinh_hoat_hoi/huong_dan/3.jpg"
                    title="làm bài thi"
                />
                <img
                    src="https://res.cloudinary.com/ezcode97/image/upload/v1714494660/sinh_hoat_hoi/huong_dan/4.jpg"
                    title="chụp kết quả gửi giám khảo"
                />
            </div>
            <div>
                <div className="text-4xl font-bold my-4">Tài liệu tham khảo</div>
                <div className="my-4">
                    <Link
                        href="https://hoilhpn.org.vn/tin-chi-tiet/-/chi-tiet/%C4%91ieu-le-hoi-lien-hiep-phu-nu-viet-nam-46760-6801.html"
                        className="hover:underline hover:text-blue-700 text-blue-500"
                    >
                        {'>'} Điều lệ Hội Liên hiệp phụ nữ Việt Nam khóa XVIII
                    </Link>
                </div>
            </div>
        </div>
    );
};
