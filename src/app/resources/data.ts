import { VideoCardProps } from '@/app/components/VideoCard/VideoCard';

export interface QuizData {
    quizTitle: string;
    questions: {
        question: string;
        answers: {
            text: string;
            correct: boolean;
        }[];
    }[];
    metaData: {
        color: string;
    };
}

export const quizzes: QuizData[] = [
    {
        'quizTitle': 'Cuộc thi tim hiểu Tăng cường bảo đảm an toàn thông tin mạng',
        'questions': [
            {
                'question': 'Những lợi ích của mạng xã hội?',
                'answers': [
                    {
                        'text': 'Cập nhật tin tức và xu hướng nhanh nhất; kết nối với nhiều người',
                        'correct': false,
                    },
                    {
                        'text': 'Học hỏi những kỹ năng khác nhau; chia sẻ các bức ảnh và kỷ niệm',
                        'correct': false,
                    },
                    {
                        'text': 'Tìm hiểu về các chủ đề mới; chơi các trò chơi',
                        'correct': false,
                    },
                    {
                        'text': 'Tất cả các phương án trên',
                        'correct': true,
                    },
                ],
            },
            {
                'question': 'Những hạn chế của mạng xã hội?',
                'answers': [
                    {
                        'text': 'Đưa thông tin không chính xác hoặc tin xấu khiến chúng ta tin vào những thông tin sai lệch',
                        'correct': false,
                    },
                    {
                        'text': 'Có thể dễ dàng tiếp cận với những thông tin nguy hiểm, hình ảnh bạo lực',
                        'correct': false,
                    },
                    {
                        'text': 'Nguy cơ bị lừa đảo, đánh cắp thông tin cá nhân',
                        'correct': false,
                    },
                    {
                        'text': 'Tất cả các phương án trên',
                        'correct': true,
                    },
                ],
            },
            {
                'question': 'Chọn thiết bị mạng không dây (bộ phát wifi) như thế nào để đảm bảo an toàn thông tin khi sử dụng?',
                'answers': [
                    {
                        'text': 'Chọn thiết bị có nguồn gốc xuất xứ rõ ràng, thương hiệu uy tín, có khả năng bảo mật và loại bỏ mã độc, ngăn chặn sự thâm nhập bất hợp pháp từ bên ngoài',
                        'correct': true,
                    },
                    {
                        'text': 'Chọn thiết bị có nguồn gốc xuất xứ, thương hiệu nổi tiếng của nước ngoài',
                        'correct': false,
                    },
                    {
                        'text': 'Chọn thiết bị có giá rẻ, mẫu mã đẹp',
                        'correct': false,
                    },
                    {
                        'text': 'Chọn thiết bị có mẫu mã đẹp, độ phủ sóng rộng, không nhất thiết phải là thương hiệu nổi tiếng.',
                        'correct': false,
                    },
                ],
            },
            {
                'question': 'Các biện pháp hạn chế tác động có hại của sóng wifi?',
                'answers': [
                    {
                        'text': 'Ngắt kết nối wifi và hạn chế sử dụng điện thoại, máy tính trước khi đi ngủ',
                        'correct': false,
                    },
                    {
                        'text': 'Đặt thiết bị phát sóng ở xa nơi sinh hoạt thường xuyên của con người, tránh đặt trong phòng ngủ',
                        'correct': false,
                    },
                    {
                        'text': 'Sử dụng dây cáp mạng thay cho bộ phát wifi',
                        'correct': false,
                    },
                    {
                        'text': 'Tất cả các phương án trên',
                        'correct': true,
                    },
                ],
            },
            {
                'question': 'Những hạn chế về công nghệ của việc học tập trực tuyến là gì?',
                'answers': [
                    {
                        'text': 'Phụ thuộc vào cấu hình của máy tính khi chạy các phần mềm học trực tuyến và đường truyền tín hiệu của mạng internet',
                        'correct': false,
                    },
                    {
                        'text': 'Các phần mềm có thể thu phí và khó đăng ký tài khoản',
                        'correct': false,
                    },
                    {
                        'text': 'Dễ lộ, lọt thông tin người dùng hoặc bị mất quyền kiểm soát tài khoản',
                        'correct': false,
                    },
                    {
                        'text': 'Tất cả các phương án trên',
                        'correct': true,
                    },
                ],
            },
            {
                'question': 'Hành vi nào dưới đây không bị nghiêm cấm thực hiện trên không gian mạng?',
                'answers': [
                    {
                        'text': 'Xúc phạm tôn giáo, phân biệt đối xử về giới, phân biệt chủng tộc',
                        'correct': false,
                    },
                    {
                        'text': 'Phát tán chương trình tin học gây hại cho hoạt động của mạng viễn thông',
                        'correct': false,
                    },
                    {
                        'text': 'Đăng tải thông tin dâm ô, đồi trụy, tội ác; phá hoại thuần phong mỹ tục của dân tộc',
                        'correct': false,
                    },
                    {
                        'text': 'Đăng ta những thông tin, video clip quảng bá hình ảnh đẹp về đất nước Việt Nam',
                        'correct': true,
                    },
                ],
            },
            {
                'question': 'Ý nào sau đây không phải là biện pháp để bảo vệ thông tin cá nhân trên mạng là?',
                'answers': [
                    {
                        'text': 'Kích hoạt tính năng xác thực nhiều bước để bảo vệ tài khoản người dùng',
                        'correct': false,
                    },
                    {
                        'text': 'Không trả lời những tin nhắn từ người lạ được gửi đến trên mạng xã hội',
                        'correct': false,
                    },
                    {
                        'text': 'Đặt mật kẩu đơn giản, dễ nhớ cho các thiết bị: máy tính, điện thoại...',
                        'correct': true,
                    },
                    {
                        'text': 'Thường xuyên kển tra riêng tư, tính bảo mật trên thiết bị',
                        'correct': false,
                    },
                ],
            },
            {
                'question': 'Thông tin trên không gian mạng có nội dung tuyên truyền chống Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam bao gồm:',
                'answers': [
                    {
                        'text': 'Tuyên truyền xuyên tạc, phỉ báng chính quyền nhân dân;',
                        'correct': false,
                    },
                    {
                        'text': 'Chiến tranh tâm lý, kích động chiến tranh xâm lược, chia rẽ, gây thù hận giữa các dân tộc, tôn giáo và nhân dân các nước;',
                        'correct': false,
                    },
                    {
                        'text': 'Xúc phạm dân tộc, quốc kỳ, quốc huy, quốc ca, vĩ nhân, lãnh tụ, danh nhân, anh hùng dân tộc.',
                        'correct': false,
                    },
                    {
                        'text': 'Tất cả đáp áp trên',
                        'correct': true,
                    },
                ],
            },
            {
                'question': 'Người có hành vi vi phạm được quy định trong Luật An ninh mạng thì bị xử lý như thế nào?',
                'answers': [
                    {
                        'text': 'Tùy theo tính chất, mức độ vi phạm mà bị xử lý kỷ luật, xử lý vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường',
                        'correct': true,
                    },
                    {
                        'text': 'Tùy theo tính chất, mức độ vi phạm mà bị khiển trách, xử lý kỷ luật, xử lý vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường',
                        'correct': false,
                    },
                    {
                        'text': 'Có thể bị buộc thôi việc, xử lý vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường',
                        'correct': false,
                    },
                    {
                        'text': 'Đề tài được thực hiện từ năm 2018 – 2020.',
                        'correct': false,
                    },
                ],
            },
            {
                'question': 'Tội phạm mạng là?',
                'answers': [
                    {
                        'text': 'Là hành vi sử dụng không gian mạng, công nghệ thông tin, phương tiện điện tử để phá hoại, gây gián đoạn hoạt động của máy tính, mạng máy tính được quy định tại Bộ luật Hình sự',
                        'correct': false,
                    },
                    {
                        'text': 'Là hành vi sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện tội phạm được quy định tại Bộ luật Hình sự',
                        'correct': true,
                    },
                    {
                        'text': 'Là việc sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện hành vi khủng bố, tài trợ khủng bố',
                        'correct': false,
                    },
                    {
                        'text': 'Là hành vi cố ý vượt qua cảnh báo, mã truy cập, mật mã, tường lửa, sử dụng quyền quản trị của người khác hoặc bằng phương thức khác để chiếm đoạt, thu thập trái phép thông tin của cơ quan, tổ chức, cá nhân',
                        'correct': false,
                    },
                ],
            },

        ],
        'metaData': {
            'color': 'bg-red-500',
        },
    },
    {
        'quizTitle': 'Cuộc thi tim hiểu Điều lệ Hội liên hiệp phụ nữ Việt nam khóa XVIII',
        'questions': [
            {
                'question': 'Theo Điều lệ Hội liên hiệp phụ nữ Việt Nam hiện hành thì Hội Liên hiệp Phụ nữ Việt Nam?',
                'answers': [
                    {
                        'text': 'là tổ chức chính trị – xã hội trong hệ thống chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát triển của phụ nữ và bình đẳng giới',
                        'correct': false,
                    },
                    {
                        'text': 'là tổ chức chính trị trong hệ thống chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát triển của phụ nữ và bình đẳng giới',
                        'correct': false,
                    },
                    {
                        'text': 'là tổ chức xã hội trong hệ thống chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát triển của phụ nữ và bình đẳng giới',
                        'correct': false,
                    },
                    {
                        'text': 'là tổ chức chính trị – xã hội nghề nghiệp trong hệ thống chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát triển của phụ nữ và bình đẳng giới',
                        'correct': true,
                    },
                ],
            },
            {
                'question': 'Theo Điều lệ Hội liên hiệp Phụ nữ Việt Nam thì Hội liên hiệp Phụ nữ Việt Nam là tổ chức gì?',
                'answers': [
                    {
                        'text': 'Chính trị',
                        'correct': false,
                    },
                    {
                        'text': 'Chính trị – xã hội',
                        'correct': true,
                    },
                    {
                        'text': 'Xã hội nghề nghiệp',
                        'correct': false,
                    },
                    {
                        'text': 'Xã hội',
                        'correct': false,
                    },
                ],
            },
            {
                'question': 'Đại hội đại biểu Phụ nữ toàn quốc lần thứ XIII dự kiến đến cuối nhiệm kỳ, Trung ương Hội sẽ đề xuất thành công ít nhất bao nhiêu chính sách, đề án và bao nhiêu chương trình?',
                'answers': [
                    {
                        'text': 'Ít nhất 05 chính sách, đề án và 02 chương trình.',
                        'correct': true,
                    },
                    {
                        'text': 'Ít nhất 04 chính sách, đề án và 03 chương trình.',
                        'correct': false,
                    },
                    {
                        'text': 'Ít nhất 03 chính sách, đề án và 02 chương trình.',
                        'correct': false,
                    },
                    {
                        'text': 'Ít nhất 02 chính sách, đề án và 05 chương trình.',
                        'correct': false,
                    },
                ],
            },
            {
                'question': 'Theo Điều lệ Hội LHPN Việt Nam khoá XIII sửa đổi 2022, Nhiệm kỳ của Ban Chấp hành, Ban Thường vụ, Chủ tịch và Phó Chủ tịch được chỉ định:',
                'answers': [
                    {
                        'text': 'Phải đảm bảo đủ năm năm.',
                        'correct': false,
                    },
                    {
                        'text': 'Không nhất thiết đủ năm năm.',
                        'correct': true,
                    },
                    {
                        'text': 'Không nhất thiết đủ năm năm, nhưng phải đảm bảo trên 36 tháng.',
                        'correct': false,
                    },
                    {
                        'text': 'Không nhất thiết đủ năm năm, nhưng phải đảm bảo ít nhất 36 tháng.',
                        'correct': false,
                    },
                ],
            },
            {
                'question': 'Theo Điều lệ Hội LHPN Việt Nam khoá XIII sửa đổi 2022, Chi hội, tổ phụ nữ sinh hoạt:',
                'answers': [
                    {
                        'text': 'Ít nhất ba tháng một lần.',
                        'correct': true,
                    },
                    {
                        'text': 'Ba tháng một lần.',
                        'correct': false,
                    },
                    {
                        'text': 'Sáu tháng một lần.',
                        'correct': false,
                    },
                    {
                        'text': 'Ít nhất Sáu tháng một lần.',
                        'correct': false,
                    },
                ],
            },
            {
                'question': 'Theo Điều lệ Hội liên hiệp Phụ nữ Việt Nam thì Hội liên hiệp Phụ nữ Việt Nam có chức năng nào dưới đây?',
                'answers': [
                    {
                        'text': 'Đại diện chăm lo, bảo vệ quyền, lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ tham gia xây dựng Đảng, tham gia quản lý Nhà nước.',
                        'correct': false,
                    },
                    {
                        'text': 'Đoàn kết, vận động phụ nữ thực hiện đường lối, chủ trương của Đảng, chính sách, pháp luật của Nhà nước; vận động xã hội thực hiện bình đẳng giới.',
                        'correct': false,
                    },
                    {
                        'text': 'Cả phương án A và B đều đúng',
                        'correct': true,
                    },
                    {
                        'text': 'Cả phương án A và B đều sai',
                        'correct': false,
                    },
                ],
            },
            {
                'question': 'Theo quy định Điều lệ và Hướng dẫn thực hiện Điều lệ Hội hiện hành, các đối tượng nào dưới đây là hội viên đương nhiên của Hội Liên hiệp Phụ nữ Việt Nam?',
                'answers': [
                    {
                        'text': 'Nữ cán bộ, công chức, viên chức, công nhân lao động trong tổ chức công đoàn',
                        'correct': false,
                    },
                    {
                        'text': 'Phụ nữ trong lực lượng vũ trang',
                        'correct': false,
                    },
                    {
                        'text': 'Phụ nữ trong các tổ chức thành viên của Hội',
                        'correct': false,
                    },
                    {
                        'text': 'Cả 3 đáp án trên',
                        'correct': true,
                    },
                ],
            },
            {
                'question': 'Ngày 30/06/2017 Thủ tướng Chính phủ phê duyệt đề án nào do TW Hội LHPN Việt Nam đề xuất.',
                'answers': [
                    {
                        'text': 'Đề án “Tuyên truyền, giáo dục, vận động, hỗ trợ phụ nữ tham gia giải quyết 1 số vấn đề xã hội liên quan đến phụ nữ giai đoạn 2017-2027”',
                        'correct': false,
                    },
                    {
                        'text': 'Đề án “Hỗ trợ phụ nữ khởi nghiệp giai đoạn 2017-2025”',
                        'correct': false,
                    },
                    {
                        'text': 'Đề án “Hỗ trợ phụ nữ phát triển sinh kế bền vững giai đoạn 2017-2025',
                        'correct': false,
                    },
                    {
                        'text': 'Phương án a và b',
                        'correct': true,
                    },
                ],
            },
            {
                'question': 'Chương trình Đồng hành cùng phụ nữ biên cương được BCH Trung ương Hội LHPN Việt Nam quyết định là?',
                'answers': [
                    {
                        'text': 'Một dự án đặc biệt được thực hiện từ năm 2018 – 2020.',
                        'correct': false,
                    },
                    {
                        'text': 'Đề án được thực hiện từ năm 2018 – 2020.',
                        'correct': false,
                    },
                    {
                        'text': 'Đợt thi đua đặc biệt được thực hiện từ năm 2018 – 2020.',
                        'correct': true,
                    },
                    {
                        'text': 'Đề tài được thực hiện từ năm 2018 – 2020.',
                        'correct': false,
                    },
                ],
            },
            {
                'question': 'Hội LHPN Việt Nam trong giai đoạn hiện nay có những nhiệm vụ gì?',
                'answers': [
                    {
                        'text': 'Tuyên truyền, giáo dục phụ nữ về chính trị, tư tưởng, lý tưởng cách mạng, phẩm chất đạo đức,lối sống; thực hiện đường lối, chủ trương của Đảng, chính sách, pháp luật của Nhà nước, tham gia xây dựng Đảng, Nhà nước, phát triển kinh tế - xã hội và bảo vệ Tổ quốc; và vận động, hỗ trợ phụ nữ nâng cao năng lực, trình độ, cải thiện đời sống vật chất, tinh thần và xây dựng gia đình hạnh phúc;',
                        'correct': false,
                    },
                    {
                        'text': 'Tham mưu đề xuất, tham gia xây dựng, phản biện xã hội và giám sát việc thực hiện đường lối, chủ trương của Đảng, chính sách, pháp luật của Nhà nước có liên quan đến quyền, lợi ích hợp pháp, chính đáng của phụ nữ, gia đình, trẻ em và bình đẳng giới;',
                        'correct': false,
                    },
                    {
                        'text': 'Xây dựng, phát triển tổ chức Hội vững mạnh và Đoàn kết, hợp tác với phụ nữ các nước, các tổ chức, cá nhân tiến bộ trên thế giới vì bình đẳng, phát triển và hòa bình',
                        'correct': false,
                    },
                    {
                        'text': 'Tất cả các phương án trên.',
                        'correct': true,
                    },
                ],
            },
        ],
        'metaData': {
            'color': 'bg-blue-500',
        },
    },
];

export const references = [
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

export interface SectionProps {
    title: string;
    content: string[];
}

export const sections: SectionProps[] = [
    {
        title: 'HỆ THỐNG TỔ CHỨC VÀ TƯ CÁCH PHÁP NHÂN CỦA CÁC CẤP HỘI',
        content: [
            '1. Hội Liên hiệp Phụ nữ Việt Nam gồm 4 cấp:',
            'a. Cấp Trung ương;',
            'b. Cấp tỉnh (bao gồm Hội Liên hiệp Phụ nữ các tỉnh, thành phố trực thuộc Trung ương và tương đương);',
            'c. Cấp huyện (bao gồm Hội Liên hiệp Phụ nữ các quận, huyện, thị xã, thành phố thuộc tỉnh và tương đương);',
            'd. Cấp cơ sở (bao gồm Hội Liên hiệp Phụ nữ các xã, phường, thị trấn và tương đương).',
            '2. Trung ương Hội; Hội Liên hiệp Phụ nữ các tỉnh, thành phố trực thuộc Trung ương; Hội Liên hiệp Phụ nữ các quận, huyện, thị xã, thành phố thuộc tỉnh; Hội Liên hiệp Phụ nữ các xã, phường, thị trấn có tư cách pháp nhân độc lập, hoạt động trong khuôn khổ Hiến pháp và pháp luật.',
        ],
    },
    {
        title: 'CƠ QUAN LÃNH ĐẠO VÀ CƠ QUAN CHUYÊN TRÁCH CÁC CẤP HỘI',
        content: [
            '1. Cơ quan lãnh đạo các cấp Hội:',
            'a. Cơ quan lãnh đạo cao nhất của Hội là Đại hội đại biểu Phụ nữ toàn quốc;',
            'b. Cơ quan lãnh đạo ở mỗi cấp Hội là Đại hội đại biểu hoặc Đại hội toàn thể hội viên của cấp đó;',
            'c. Giữa hai kỳ đại hội, cơ quan lãnh đạo mỗi cấp Hội là Ban Chấp hành cùng cấp;',
            'd. Giữa hai kỳ họp Ban Chấp hành, cơ quan lãnh đạo là Đoàn Chủ tịch hoặc Ban Thường vụ cùng cấp.',
            '2. Cơ quan chuyên trách các cấp Hội:',
            'Cơ quan chuyên trách Trung ương Hội; cơ quan chuyên trách Hội Liên hiệp Phụ nữ các tỉnh, thành phố trực thuộc Trung ương và tương đương; cơ quan chuyên trách Hội Liên hiệp Phụ nữ các quận, huyện, thị xã, thành phố thuộc tỉnh và tương đương là cơ quan tham mưu, giúp việc cho Ban Chấp hành, Đoàn Chủ tịch hoặc Ban Thường vụ cùng cấp.',
        ],
    },
];

interface GroupImage {
    title: string,
    images: {
        url: string,
    }[]
}

export const womenImageUrls: string[] = [
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/3.jpg',
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/4.jpg',
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/5.jpg',
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/6.jpg',
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/7.jpg',
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/8.jpg',
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/9.jpg',
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/10.jpg',
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/11.jpg',
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/12.jpg',
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/13.jpg',
];
export const groupImages: GroupImage[] = [
    {
        title: 'Hội thi Báo cáo viên giỏi toàn quân năm 2023',
        images: [
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324544/sinh_hoat_hoi/other/bcaovien.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324544/sinh_hoat_hoi/other/bcaovien2.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/bcv3.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/bcv4.jpg',
            },
        ],
    },
    {
        title: 'Hội phụ nữ BĐBP Nghệ An tổ chức chương trình "Bát nước thao trường" và "Bữa cơm dinh dưỡng" phục vụ cán bộ, chiến sĩ đang thực hiện nhiệm vụ phục vụ diễn tập năm 2022',
        images: [
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/batnc1.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/batnc2.jpg',
            },
        ],
    },
    {
        title: 'Những nữ chiến sĩ biên phòng xinh đẹp biểu diễn võ thuật, khí công Trong lễ ra quân huấn luyện năm 2024',
        images: [
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/vo1.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/vo2.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/vo3.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/vo4.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/vo5.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324763/sinh_hoat_hoi/other/vo6.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324763/sinh_hoat_hoi/other/vo7.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324763/sinh_hoat_hoi/other/vo8.jpg',
            },
        ],
    },
    {
        title: 'Trao quà cho các học sinh vùng núi đặc biệt khó khăn tuyến Kỳ Sơn', images: [
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/kyson.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/kyson2.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/kyson3.jpg',
            },
        ],
    },
    {
        title: 'Trao tặng bò giống cho người nghèo Đan Lai', images: [
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/qua-3.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-2.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-3.jpg',
            },
        ],
    },
    {
        title: 'Chương trình đồng hành cùng phụ nữ biên cương',
        images: [
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-1.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-4.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-5.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-6.jpg',
            },

        ],
    },
    {
        title: 'Nguồn Facebook',
        images: [
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714414282/sinh_hoat_hoi/other/fb1.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714414282/sinh_hoat_hoi/other/fb2.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714414282/sinh_hoat_hoi/other/fb3.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714414282/sinh_hoat_hoi/other/fb4.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714414282/sinh_hoat_hoi/other/fb5.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714414282/sinh_hoat_hoi/other/fb6.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714414282/sinh_hoat_hoi/other/fb7.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714414282/sinh_hoat_hoi/other/fb8.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/qua-2.jpg',
            },
        ],
    },
];
export const videos: VideoCardProps[] = [
    {

        title: 'Tặng quà trị giá 200 triệu cho phụ nữ xã biên giới',
        content: '',
        url: 'https://drive.google.com/file/d/1JNkndDFvyj6RAICaBmcNxTAUaLxL9tPf/preview',

    }, {
        title: 'Đồng hành cùng mái ấm biên cương',
        content: '',
        url: 'https://drive.google.com/file/d/1bOGi2lkhT_Gk15EeJDyxlPNTHdlHimQX/preview',
    }, {
        title: 'Bát cháo tình thương tháng 1',
        content: '',
        url: 'https://drive.google.com/file/d/10fdMsEGCIONaYwDMpGNRzGej9LmXwFi7/preview',
    },
];

export interface NewsProps {
    title: string,
    link: string
}

export const newsItems: NewsProps[] = [
    {
        title: 'Sáng đẹp hình ảnh nữ Quân nhân BĐBP',
        link: 'https://www.bienphong.com.vn/sang-dep-hinh-anh-nu-quan-nhan-bdbp-post473259.html',
    },
    {
        title: 'Phụ nữ Nghệ An tổ chức các hoạt động "Đồng hành cùng phụ nữ biên cương" tại Con Cuông và Tương Dương',
        link: 'https://mattrannghean.org.vn/cms/portal/read/cac-phong-trao-thi-dua-khac/news/phu-nu-nghe-an-to-chuc-cac-hoat-dong-ong-hanh-cung-phu-nu-bien-cuong-tai-con-cuo.html',
    },
    {
        title: 'Hội phụ nữ Bộ chỉ huy Bộ đội Biên phòng Nghệ An xuất sắc giành giải A tại Hội thi “Cán bộ Hội cơ sở giỏi Bộ đội Biên phòng năm 2023”',
        link: 'https://lhpn.nghean.gov.vn/hoat-dong-hoi/hoi-phu-nu-bo-chi-huy-bo-doi-bien-phong-nghe-an-xuat-sac-gianh-giai-a-tai-hoi-thi-can-bo-hoi-co--583179',
    },
    {
        title: 'Phụ nữ thủ đô "đồng hành cùng phụ nữ biên cương" Nghệ An',
        link: 'https://lhpn.nghean.gov.vn/thong-bao/phu-nu-thu-do-dong-hanh-cung-phu-nu-bien-cuong-nghe-an-495363?pageindex=0',
    },
];