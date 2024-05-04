const introduction_title: string = 'Hướng dẫn sinh hoạt Chi hội, tổ phụ nữ';


interface SectionProps {
    title: string;
    content: string[];
}

const sections: SectionProps[] = [
    {
        title: 'I. VỊ TRÍ, NHIỆM VỤ CỦA  CHI HỘI, TỔ HỘI PHỤ NỮ',
        content: [
            '1. Vị trí',
            '-  Chi hội, tổ phụ nữ là tế bào của tổ chức Hội, nơi tập hợp hội viên phụ nữ',
            '- Chi hội, tổ phụ nữ được thành lập theo địa bàn dân cư (xóm, đường phố, bản, làng), theo nghề nghiệp, lứa tuổi, theo chuyên đề.',
            '2. Nhiệm vụ',
            '- Tuyên truyền, vận động hội viên nắm vững và thực hiện đúng đường lối chủ trương của Đảng, luật pháp chính sách của Nhà nước và nhiệm vụ chính trị của địa phương.',
            '- Tổ chức thực hiện các hoạt động của Hội, chăm lo, bảo vệ quyền, lợi ích hợp pháp, chính đáng của phụ nữ. Giúp hội viên chia sẻ tình cảm, kinh nghiệm trong lao động sản xuất, xây dựng gia đình...',
            '- Tập hợp, động viên phụ nữ tham gia sinh hoạt Hội',
            '- Tổ phụ nữ sinh hoạt ít nhất 3 tháng 1 lần',
        ],
    },
    {
        title: 'II. NỘI DUNG, HÌNH THỨC SINH HOẠT CHI, TỔ PHỤ NỮ.',
        content: [
            '1. Nội dung sinh hoạt',
            '- Tuyên truyền, giáo dục, hướng dẫn phụ nữ thực hiện đường lối chủ trương, luật pháp chính sách của Đảng, Nhà nước, các nhiệm vụ phát triển kinh tế xã hội ở cơ sở.',
            '- Những thành tựu của phong trào phụ nữ và Công tác phụ nữ nhiệm kỳ qua.',
            '- Kết quả Đại hội Đại biểu phụ nữ toàn quốc lần thứ X',
            '- Phổ biến, tổ chức thực hiện nhiệm vụ, phong trào thi đua và các nhiệm vụ công tác trọng tâm của Hội.',
            '- Nội dung chủ đề thực hành tiết kiệm, chống tham ô lãng phí theo tấm gương đạo đức Hồ Chí Minh',
            '- Những nội dung khác đáp ứng nhu cầu nguyện vọng của hội viên.',
            '2. Những hình thức sinh hoạt phổ biến',
            '- Sinh hoạt định kỳ để đánh giá hoạt động của tổ trong thời gian qua và triển khai công tác trong thời gian tới.',
            '- Sinh hoạt chuyên đề (toạ đàm, nói chuyện chuyên đề, thảo luận...) nhằm trao đổi sâu về một vấn đề, đáp ứng nhu cầu nâng cao kiến thức của hội viên.',
            '- Sinh hoạt nhân các dịp lễ lớn: ngày quốc tế phụ nữ 8/3 và khởi nghĩa Hai Bà Trưng; ngày sinh nhật Bác 19/5; ngày thành lập Hội liên hiệp phụ nữ Việt nam 20/10... nhằm giáo dục truyền thống, nâng cao hiểu biết về Đảng, về đất nước, về Hội LHPNVN.',
            '- Sinh hoạt văn hoá, văn nghệ, thể dục thể thao (câu lạc bộ, hội thi...) đáp ứng nhu cầu tinh thần đồng thời nâng cao kiến thức cho hội viên.',
            'Lưu ý:',
            '- Tuỳ từng nội dung chi, tổ lựa chọn hình thức sinh hoạt cho phù hợp. Ví dụ, những nội dung mới, đối với hội viên nên tổ chức theo hình thức nói chuyện chuyên đề.',
            '- Trong một buổi sinh hoạt chi hội, tổ phụ nữ có thể sử dụng kết hợp một hoặc nhiều hình thức khác nhau. Ví dụ, có thể dùng hình thức sinh hoạt văn hoá văn nghệ để thể hiện chủ đề phòng chống tệ nạn xã hội',
            '- Đa dạng hóa nội dung, hình thức sinh hoạt là một trong những biện pháp quan trọng để thu hút hội viên.',
        ],
    },
    {
        title: 'III. TIẾN TRÌNH MỘT BUỔI SINH HOẠT CHI HỘI, TỔ PHỤ NỮ.',
        content: [
            '1. Chuẩn bị',
            '- Xác định chủ đề sinh hoạt, thông báo cho hội viên trong tổ biết trước để chuẩn bị tham gia ý kiến.',
            '- Xác định thời gian, địa điểm họp',
            '- Phân công người điều hành và thư ký ghi chép',
            '2. Tiến hành sinh hoạt tổ hội viên',
            '- Mở đầu:',
            '+ Ổn định tổ chức: sắp xếp chỗ ngồi, có thể có một vài tiết mục văn nghệ, trò chơi trước khi vào họp',
            '+ Điểm danh số lượng hội viên đến dự',
            '+ Tuyên bố lý do, giới thiệu đại biểu (nếu có).',
            '+ Giới thiệu nội dung, chương trình buổi sinh hoạt tổ',
            '- Tiến hành sinh hoạt theo nội dung, hình thức đã định:',
            '+ Với hình thức sinh hoạt định kỳ, cần tập trung đánh giá những việc làm kỳ trước, biểu dương hội viên tích cực ; xem xét những tồn tại, hạn chế và tìm nguyên nhân, biện pháp khắc phục. Thảo luận và thống nhất những việc cần làm trong thời gian tới.',
            '+ Với hình thức sinh hoạt theo chuyên đề và sinh hoạt văn hoá văn nghệ, trước khi tiến hành sinh hoạt tổ theo nội dung đã định, cần giành thời gian để đánh giá tóm tắt và phổ biến các hoạt động của tổ.',
            '+ Với hình thức mít tinh nhân những ngày lễ lớn, phải nêu được ý nghĩa lịch sử của ngày lễ, lồng ghép nội dung đánh giá hoạt động của tổ trong thời gian qua, phương hướng hoạt động của tổ trong thời gian tới vào chương trình hành động, phát động thi đua của tổ.',
            '- Kết thúc sinh hoạt:',
            'Tóm tắt những nội dung chính của cuộc họp, nhấn mạnh những điểm trọng tâm cần thực hiện, thông báo nội dung sinh hoạt lần sau.',
            'Lưu ý :',
            '- Lựa chọn thời gian sinh hoạt chi hội, tổ hội viên cho phù hợp để hội viên có thể tham dự được đầy đủ nhất.',
            '- Tuỳ theo nội dung, hình thức mà mỗi buổi sinh hoạt hội viên nên từ 60 đến 90 phút.',
            '- Nếu có nhiều nội dung phải thảo luận trong buổi sinh hoạt tổ thì  thảo luận dứt điểm từng việc một.',
            '- Tránh không để hai, ba người cùng nói một lúc.',
            '- Các kỳ họp phải ghi biên bản.',
            '- Những vấn đề quan trọng hoặc chưa được thống nhất cao cần được biểu quyết.',
            '- Thực hiện thu hội phí trong buổi sinh hoạt tổ.',
            '- Có thể xen kẽ các tiết mục văn nghệ, nghỉ giải lao và trò chơi thư giãn để tạo không khí sôi nổi, vui vẻ.',
        ],
    },
];

// Component
function Section({ title, content }: SectionProps) {
    return (
        <div className="p-4 bg-gray-200 text-blue-800 font-normal text-justify m-4">
            <p className="text-bold text-blue-800  p-4 mb-4">{title}</p>
            <div className="indent-4 sm:indent-8">
                {content.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
}

export default function Guide() {
    return (
        <div className="container">
            <div className="text-red-500 text-center text-3xl font-bold mx-4 mt-4">{introduction_title}</div>
            <div className="grid  grid-cols-1">
                {sections.map((section, index) => (
                    <Section
                        key={index}
                        title={section.title}
                        content={section.content}
                    />
                ))}
            </div>
        </div>
    );
};
