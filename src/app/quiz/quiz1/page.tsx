'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from 'flowbite-react';


const Quiz1 = () => {
    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    const unit = searchParams.get('unit');
    return (
        <form
            name="quiz"
            className="container"
        >
            <h1 className=" text-center bg-red-400 font-bold m-4 p-2 text-2xl">
                Cuộc thi tim hiểu
                Điều lệ Hội liên hiệp phụ nữ Việt nam khóa
                XVIII
            </h1>
            <div className="m-8 bg-amber-50 p-4 text-justify">
                <strong>1a. Theo Điều lệ Hội liên hiệp phụ nữ Việt Nam hiện hành thì Hội
                    Liên hiệp Phụ nữ Việt Nam?
                </strong>
                <ul>
                    <li className="text-red-300">
                        <input
                            name="q1"
                            type="radio"
                            value="A"
                        />
                        &ensp;
                        A) là tổ chức chính trị – xã hội trong hệ thống chính trị,
                        đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì
                        sự
                        phát triển của phụ nữ và bình đẳng giới
                    </li>
                    <li>
                        <input
                            name="q1"
                            type="radio"
                            value="B"
                        />
                        &ensp;
                        B) là tổ chức chính trị trong hệ thống chính trị, đại diện
                        cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát
                        triển của phụ nữ và bình đẳng giới
                    </li>
                    <li>
                        <input
                            name="q1"
                            type="radio"
                            value="C"
                        />
                        &ensp;
                        C) là tổ chức xã hội trong hệ thống chính trị, đại diện cho
                        quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát
                        triển
                        của phụ nữ và bình đẳng giới
                    </li>
                    <li>
                        <input
                            name="q1"
                            type="radio"
                            value="D"
                        />
                        &ensp;
                        D) là tổ chức chính trị – xã hội nghề nghiệp trong hệ thống
                        chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam;
                        phấn
                        đấu vì sự phát triển của phụ nữ và bình đẳng giới
                    </li>
                    <br />
                </ul>
                <strong>2b. Theo Điều lệ Hội liên hiệp Phụ nữ Việt Nam thì Hội liên hiệp
                    Phụ nữ Việt Nam là tổ chức gì?
                </strong>
                <ul>
                    <li>
                        <input
                            name="q2"
                            type="radio"
                            value="A"
                        />
                        &ensp;
                        A) Chính trị
                    </li>
                    <li className="text-red-300">
                        <input
                            name="q2"
                            type="radio"
                            value="B"
                        />
                        &ensp;
                        B) Chính trị – xã hội
                    </li>
                    <li>
                        <input
                            name="q2"
                            type="radio"
                            value="C"
                        />
                        &ensp;
                        C) Xã hội nghề nghiệp
                    </li>
                    <li>
                        <input
                            name="q2"
                            type="radio"
                            value="D"
                        />
                        &ensp;
                        D) xã hội
                    </li>
                    <br />
                </ul>
                <strong>3a : Đại hội đại biểu Phụ nữ toàn quốc lần thứ XIII dự kiến đến cuối
                    nhiệm kỳ, Trung ương Hội sẽ đề xuất thành công ít nhất bao nhiêu chính sách,
                    đề án và bao nhiêu chương trình?
                </strong>
                <ul>
                    <li className="text-red-300">
                        <input
                            name="q3"
                            type="radio"
                            value="A"
                        />
                        &ensp;
                        A) Ít nhất 05 chính sách, đề án và 02 chương trình.
                    </li>
                    <li>
                        <input
                            name="q3"
                            type="radio"
                            value="B"
                        />
                        &ensp;
                        B) Ít nhất 04 chính sách, đề án và 03 chương trình.
                    </li>
                    <li>
                        <input
                            name="q3"
                            type="radio"
                            value="C"
                        />
                        &ensp;
                        C) Ít nhất 03 chính sách, đề án và 02 chương trình.
                    </li>
                    <li>
                        <input
                            name="q3"
                            type="radio"
                            value="D"
                        />
                        &ensp;
                        D) Ít nhất 02 chính sách, đề án và 05 chương trình.
                    </li>
                </ul>
                <strong>4b. Theo Điều lệ Hội LHPN Việt Nam khoá XIII sửa đổi 2022, Nhiệm kỳ của Ban Chấp hành, Ban
                    Thường vụ, Chủ tịch và Phó Chủ tịch được chỉ định:
                </strong>
                <ul>
                    <li>
                        <input
                            name="q4"
                            type="radio"
                            value="A"
                        />
                        &ensp;
                        A) Phải đảm bảo đủ năm năm.
                    </li>
                    <li className="text-red-300">
                        <input
                            name="q4"
                            type="radio"
                            value="B"
                        />
                        &ensp;
                        B) Không nhất thiết đủ năm năm.
                    </li>
                    <li>
                        <input
                            name="q4"
                            type="radio"
                            value="C"
                        />
                        &ensp;
                        C) Không nhất thiết đủ năm năm, nhưng phải đảm bảo trên 36 tháng.
                    </li>
                    <li>
                        <input
                            name="q4"
                            type="radio"
                            value="D"
                        />
                        &ensp;
                        D) Không nhất thiết đủ năm năm, nhưng phải đảm bảo ít nhất 36 tháng.
                    </li>
                    <br />
                </ul>
                <strong>5a. Theo Điều lệ Hội LHPN Việt Nam khoá XIII sửa đổi 2022, Chi hội, tổ phụ nữ sinh hoạt:
                </strong>
                <ul>
                    <li className="text-red-300">
                        <input
                            name="q5"
                            type="radio"
                            value="A"
                        />
                        &ensp;
                        A) Ít nhất ba tháng một lần.
                    </li>
                    <li>
                        <input
                            name="q5"
                            type="radio"
                            value="B"
                        />
                        &ensp;
                        B) Ba tháng một lần.
                    </li>
                    <li>
                        <input
                            name="q5"
                            type="radio"
                            value="C"
                        />
                        &ensp;
                        C) Sáu tháng một lần.
                    </li>
                    <li>
                        <input
                            name="q5"
                            type="radio"
                            value="D"
                        />
                        &ensp;
                        D) Ít nhất Sáu tháng một lần.
                    </li>
                    <br />
                </ul>
                <strong>6c. Theo Điều lệ Hội liên hiệp Phụ nữ Việt Nam thì Hội liên hiệp Phụ nữ Việt Nam có chức
                    năng nào dưới đây?
                </strong>
                <ul>
                    <li>
                        <input
                            name="q6"
                            type="radio"
                            value="A"
                        />
                        &ensp;
                        A) Đại diện chăm lo, bảo vệ quyền, lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ,
                        tham
                        gia xây dựng Đảng, tham gia quản lý Nhà nước.
                    </li>
                    <li>
                        <input
                            name="q6"
                            type="radio"
                            value="B"
                        />
                        &ensp;
                        B) Đoàn kết, vận động phụ nữ thực hiện đường lối, chủ trương của Đảng, chính sách, pháp luật
                        của
                        Nhà nước; vận động xã hội thực hiện bình đẳng giới.
                    </li>
                    <li className="text-red-300">
                        <input
                            name="q6"
                            type="radio"
                            value="C"
                        />
                        &ensp;
                        C) Cả phương án A và B đều đúng
                    </li>
                    <li>
                        <input
                            name="q6"
                            type="radio"
                            value="D"
                        />
                        &ensp;
                        D) Cả phương án A và B đều sai
                    </li>
                    <br />
                </ul>
                <strong>7d. Theo quy định Điều lệ và Hướng dẫn thực hiện Điều lệ Hội hiện hành, các đối tượng nào dưới
                    đây là hội viên đương nhiên của Hội Liên hiệp Phụ nữ Việt Nam?
                </strong>
                <ul>
                    <li>
                        <input
                            name="q7"
                            type="radio"
                            value="A"
                        />
                        &ensp;
                        A) Nữ cán bộ, công chức, viên chức, công nhân lao động trong tổ chức công đoàn
                    </li>
                    <li>
                        <input
                            name="q7"
                            type="radio"
                            value="B"
                        />
                        &ensp;
                        B) Phụ nữ trong lực lượng vũ trang
                    </li>
                    <li>
                        <input
                            name="q7"
                            type="radio"
                            value="C"
                        />
                        &ensp;
                        C) Phụ nữ trong các tổ chức thành viên của Hội
                    </li>
                    <li className="text-red-300">
                        <input
                            name="q7"
                            type="radio"
                            value="D"
                        />
                        &ensp;
                        D) Cả 3 đáp án trên
                    </li>
                    <br />
                </ul>
                <strong>8d. Ngày 30/06/2017 Thủ tướng Chính phủ phê duyệt đề án nào do TW Hội LHPN Việt Nam đề xuất.
                </strong>
                <ul>
                    <li>
                        <input
                            name="q8"
                            type="radio"
                            value="A"
                        />
                        &ensp;
                        A) Đề án “Tuyên truyền, giáo dục, vận động, hỗ trợ phụ nữ tham gia giải quyết 1 số vấn đề xã hội
                        liên quan đến phụ nữ giai đoạn 2017-2027”
                    </li>
                    <li>
                        <input
                            name="q8"
                            type="radio"
                            value="B"
                        />
                        &ensp;
                        B) Đề án “Hỗ trợ phụ nữ khởi nghiệp giai đoạn 2017-2025”
                    </li>
                    <li>
                        <input
                            name="q8"
                            type="radio"
                            value="C"
                        />
                        &ensp;
                        C) Đề án “Hỗ trợ phụ nữ phát triển sinh kế bền vững giai đoạn 2017-2025”
                    </li>
                    <li className="text-red-300">
                        <input
                            name="q8"
                            type="radio"
                            value="D"
                        />
                        &ensp;
                        D) Phương án a và b
                    </li>
                    <br />
                </ul>
                <strong>9c. Chương trình Đồng hành cùng phụ nữ biên cương được BCH Trung ương Hội LHPN Việt Nam quyết
                    định là?
                </strong>
                <ul>
                    <li>
                        <input
                            name="q9"
                            type="radio"
                            value="A"
                        />
                        &ensp;
                        A) Một dự án đặc biệt được thực hiện từ năm 2018 – 2020.
                    </li>
                    <li>
                        <input
                            name="q9"
                            type="radio"
                            value="B"
                        />
                        &ensp;
                        B) Đề án được thực hiện từ năm 2018 – 2020.
                    </li>
                    <li className="text-red-300">
                        <input
                            name="q9"
                            type="radio"
                            value="C"
                        />
                        &ensp;
                        C) Đợt thi đua đặc biệt được thực hiện từ năm 2018 – 2020.
                    </li>
                    <li>
                        <input
                            name="q9"
                            type="radio"
                            value="D"
                        />
                        &ensp;
                        D) Đề tài được thực hiện từ năm 2018 – 2020.
                    </li>
                    <br />
                </ul>
                <strong>10d. Hội LHPN Việt Nam trong giai đoạn hiện nay có những nhiệm vụ gì?
                </strong>
                <ul>
                    <li>
                        <input
                            name="q10"
                            type="radio"
                            value="A"
                        />
                        &ensp;
                        A) Tuyên truyền, giáo dục phụ nữ về chính trị, tư tưởng, lý tưởng cách mạng, phẩm chất đạo đức,
                        lối sống; thực hiện đường lối, chủ trương của Đảng, chính sách, pháp luật của Nhà nước, tham gia
                        xây dựng Đảng, Nhà nước, phát triển kinh tế - xã hội và bảo vệ Tổ quốc; và vận động, hỗ trợ phụ
                        nữ nâng cao năng lực, trình độ, cải thiện đời sống vật chất, tinh thần và xây dựng gia đình hạnh
                        phúc;
                    </li>
                    <li>
                        <input
                            name="q10"
                            type="radio"
                            value="B"
                        />
                        &ensp;
                        B) Tham mưu đề xuất, tham gia xây dựng, phản biện xã hội và giám sát việc thực hiện đường lối,
                        chủ trương của Đảng, chính sách, pháp luật của Nhà nước có liên quan đến quyền, lợi ích hợp
                        pháp, chính đáng của phụ nữ, gia đình, trẻ em và bình đẳng giới;
                    </li>
                    <li>
                        <input
                            name="q10"
                            type="radio"
                            value="C"
                        />
                        &ensp;
                        C) Xây dựng, phát triển tổ chức Hội vững mạnh và Đoàn kết, hợp tác với phụ nữ các nước, các tổ
                        chức, cá nhân tiến bộ trên thế giới vì bình đẳng, phát triển và hòa bình
                    </li>
                    <li className="text-red-300">
                        <input
                            name="q10"
                            type="radio"
                            value="D"
                        />
                        &ensp;
                        D) Tất cả các phương án trên
                    </li>
                    <br />
                </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-red-200 p-8">
                <div>
                    <div className="text-2xl mb-4">
                        <span className="font-bold">Anh/Chị: {' '}</span>
                        {name}
                    </div>
                    <div className="text-2xl">
                        <span className="font-bold">Đơn vị: {' '}</span>
                        {unit}
                    </div>
                </div>
                <div className="flex flex-row justify-evenly items-center">
                    <Button size="lg">Nộp Bài</Button>
                    <input
                        type="text"
                        id="disabled-input"
                        aria-label="disabled input"
                        className="rounded-lg block cursor-not-allowed text-center w-36"
                        value="Disabled input"
                        disabled
                    />
                </div>
            </div>
        </form>
    );
};

export default Quiz1;