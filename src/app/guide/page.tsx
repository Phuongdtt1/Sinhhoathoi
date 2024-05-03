import Link from 'next/link';

const references = [
    {
        url: 'https://hoilhpn.org.vn/documents/246915/6360445/33cd.signed.pdf/21845a53-05da-4e07-a6b9-dfc30b4a4531',
        text: 'Công điện của Thủ tướng Chính phủ số 33/CĐ-TTg về tăng cường bảo đảm an toàn thông tin mạng',
    },
    {
        url: 'https://hoilhpn.org.vn/documents/20182/0/_VB_1713259272222_VB_3222-CV%202024.pdf/5d060488-8411-4cd8-92fb-316a2c7b617e',
        text: 'v/v bảo đảm trật tự, an toàn giao thông, nhân dịp nghỉ lễ Giỗ tổ Hùng Vương, lễ 30/4-/1/5 và cao điểm du lịch hè 2024',
    },
    {
        url: 'https://hoilhpn.org.vn/tin-chi-tiet/-/chi-tiet/%C4%91ieu-le-hoi-lien-hiep-phu-nu-viet-nam-46760-6801.html',
        text: 'Điều lệ Hội Liên hiệp phụ nữ Việt Nam khóa XVIII',
    },
    {
        url: 'https://hoilhpn.org.vn/documents/20182/0/_VB_1692093800943_VB_2494-Q%C4%90-HTPNPTKT.pdf/b9612f2c-37e3-467f-b812-393e111a291c',
        text: 'Quyết định phê duyệt danh sách các Dự án khởi nghiệp được lựa chọn vào vòng chung kết cấp vùng Cuộc thi \'Phụ nữ khởi nghiệp, phát huy tài nguyên bản địa\' năm 2023',
    },
];

export default function Guide() {
    return (
        <div className="container">
            <div className="text-purple-500 text-4xl font-bold m-4">
                Hướng dẫn thi trắc nghiệm
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mb-8">
                {Array.from({ length: 4 }, (_, index) => (
                    <img
                        key={index}
                        src={`https://res.cloudinary.com/ezcode97/image/upload/v1714494660/sinh_hoat_hoi/huong_dan/${index + 1}.jpg`}
                        title={`Bước ${index + 1}`}
                    />
                ))}
            </div>
            <div className="border-blue-900">
                <div className="text-2xl font-bold my-4">TÀI LIỆU THAM KHẢO</div>
                <div className="my-4">
                    {references.map((reference, index) => (
                        <Link
                            key={index}
                            href={reference.url}
                            className="hover:underline hover:text-blue-700 text-blue-500 block"
                        >
                            {'->'} {reference.text}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
