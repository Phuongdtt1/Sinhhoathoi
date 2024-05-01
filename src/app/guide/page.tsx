import Link from 'next/link';

export default function Guide() {
    return (
        <div className="container items-left justify-evenly m-4 p-4">
            <Link
                className="rounded-2xl bg-red-500 text-white  w-52 text-center"
                href="/"
            >
                Giới thiệu
            </Link>
            <Link
                className="rounded-2xl bg-purple-500 text-white w-52 text-center"
                href="/guide"
            >
                Hướng dẫn thi trắc nghiệm
            </Link>

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
                <div className="border-blue-900">
                    <div className="text-2xl font-bold my-4">TÀI LIỆU THAM KHẢO</div>
                    <div className="my-4">
                        <Link
                            href="https://hoilhpn.org.vn/documents/246915/6360445/33cd.signed.pdf/21845a53-05da-4e07-a6b9-dfc30b4a4531"
                            className="hover:underline hover:text-blue-700 text-blue-500"
                        >
                            {'->'} Công điện của Thủ tướng Chính phủ số 33/CĐ-TTg về tăng cường bảo đảm an toàn thông
                            tin
                            mạng

                        </Link><br/>
                        <Link
                            href="https://hoilhpn.org.vn/documents/20182/0/_VB_1713259272222_VB_3222-CV%202024.pdf/5d060488-8411-4cd8-92fb-316a2c7b617e"
                            className="hover:underline hover:text-blue-700 text-blue-500"
                        >
                            {'->'} v/v bảo đảm trật tự, an toàn giao thông, nhân dịp nghỉ lễ Giỗ tổ Hùng Vương, lễ
                            30/4-/1/5
                            và cao điểm du lịch hè 2024

                        </Link><br/>
                        <Link
                            href="https://hoilhpn.org.vn/tin-chi-tiet/-/chi-tiet/%C4%91ieu-le-hoi-lien-hiep-phu-nu-viet-nam-46760-6801.html"
                            className="hover:underline hover:text-blue-700 text-blue-500"
                        >
                            {'->'} Điều lệ Hội Liên hiệp phụ nữ Việt Nam khóa XVIII
                        </Link><br/>
                        <Link
                            href="https://hoilhpn.org.vn/documents/20182/0/_VB_1692093800943_VB_2494-Q%C4%90-HTPNPTKT.pdf/b9612f2c-37e3-467f-b812-393e111a291c"
                            className="hover:underline hover:text-blue-700 text-blue-500"
                        >
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            {'->'} Quyết định phê duyệt danh sách các Dự án khởi nghiệp được lựa chọn vào vòng chung kết
                            cấp
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            vùng Cuộc thi "Phụ nữ khởi nghiệp, phát huy tài nguyên bản địa" năm 2023
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};
