'use client';

import Link from 'next/link';
import { quizs } from '@/app/resources/QuizData';
import { useAtom } from 'jotai/index';
import { nameAtom, unitAtom } from '@/app/atoms';

const Quiz = () => {
    const [name] = useAtom(nameAtom);
    const [unit] = useAtom(unitAtom);
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


    return (
        <div className="container">
            {
                quizs.map((quiz, index) => (
                    <Link
                        key={index}
                        href={`/quiz/${index}`}
                    >
                        <div
                            className={`rounded-2xl ${quiz.metaData.color} text-white p-4 my-2`}
                        >
                            {quiz.quizTitle}
                        </div>
                    </Link>
                ))
            }
            <Link
                href="https://docs.google.com/document/d/1o8wSsWJ2PNErk5cEnWhjyZQ2arCAp9iBlLgJeUetaMc/edit?fbclid=IwZXh0bgNhZW0CMTAAAR1-g4m4tGyFT7JporvYL5CJYYLb2u3xxMnVvHbuaJjRhDasAuO3TjU4z-I_aem_ATwVElIH_MfD7GlqpEMp151Owd7Sl5bTJ8WGW6vCOt4dE54GqmzjuRvo-5Jc6Vo1v_oIrBksST8nRc850zWUy9vB&pli=1"
            >
                <div
                    className="underline hover:text-bold rounded-2xl bg-cyan-500 text-white p-4 my-2"
                >
                    Cuộc thi trực truyến về Điện Biên Phủ - 2024
                </div>
            </Link>
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
export default Quiz;