const Quiz2 = () => {
    return (

        <form
            name="quiz"
            className="container"
        >

            <h1 className=" text-center bg-green-400 font-bold m-4 p-2 text-2xl">
                Cuộc thi tim hiểu
                Dân số kế hoạch hóa gia đình
            </h1>


            <div className="m-8 bg-green-50 p-4 text-justify">
                <strong>1a. Theo Điều lệ Hội liên hiệp phụ nữ Việt Nam hiện hành thì Hội
                    Liên hiệp Phụ nữ Việt Nam?</strong>
                <ul>
                    <li className="text-red-300">
                        <input name="q1" type="radio" value="A"/>&ensp;
                        A) là tổ chức chính trị – xã hội trong hệ thống chính trị,
                        đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì
                        sự
                        phát triển của phụ nữ và bình đẳng giới
                    </li>
                    <li>
                        <input name="q1" type="radio" value="B"/>&ensp;
                        B) là tổ chức chính trị trong hệ thống chính trị, đại diện
                        cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát
                        triển của phụ nữ và bình đẳng giới
                    </li>
                    <li>
                        <input name="q1" type="radio" value="C"/>&ensp;
                        C) là tổ chức xã hội trong hệ thống chính trị, đại diện cho
                        quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát
                        triển
                        của phụ nữ và bình đẳng giới
                    </li>
                    <li>
                        <input name="q1" type="radio" value="D"/>&ensp;
                        D) là tổ chức chính trị – xã hội nghề nghiệp trong hệ thống
                        chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam;
                        phấn
                        đấu vì sự phát triển của phụ nữ và bình đẳng giới
                    </li>
                    <br/>
                </ul>
                <strong>2b. Theo Điều lệ Hội liên hiệp Phụ nữ Việt Nam thì Hội liên hiệp
                    Phụ nữ Việt Nam là tổ chức gì?</strong>
                <ul>
                    <li>
                        <input name="q2" type="radio" value="A"/>&ensp;
                        A) Chính trị
                    </li>
                    <li className="text-red-300">
                        <input name="q2" type="radio" value="B"/>&ensp;
                        B) Chính trị – xã hội
                    </li>
                    <li>
                        <input name="q2" type="radio" value="C"/>&ensp;
                        C) Xã hội nghề nghiệp
                    </li>
                    <li>
                        <input name="q2" type="radio" value="D"/>&ensp;
                        D) xã hội
                    </li>
                    <br/>
                </ul>
                <strong>3a : Đại hội đại biểu Phụ nữ toàn quốc lần thứ XIII dự kiến đến cuối
                    nhiệm kỳ, Trung ương Hội sẽ đề xuất thành công ít nhất bao nhiêu chính sách,
                    đề án và bao nhiêu chương trình?
                </strong>
                <ul>
                    <li className="text-red-300">
                        <input name="q3" type="radio" value="A"/>&ensp;
                        A) Ít nhất 05 chính sách, đề án và 02 chương trình.
                    </li>
                    <li>
                        <input name="q3" type="radio" value="B"/>&ensp;
                        B) Ít nhất 04 chính sách, đề án và 03 chương trình.
                    </li>
                    <li>
                        <input name="q3" type="radio" value="C"/>&ensp;
                        C) Ít nhất 03 chính sách, đề án và 02 chương trình.
                    </li>
                    <li>
                        <input name="q3" type="radio" value="D"/>&ensp;
                        D) Ít nhất 02 chính sách, đề án và 05 chương trình.
                    </li>
                </ul>
                <strong>4b. Theo Điều lệ Hội LHPN Việt Nam khoá XIII sửa đổi 2022, Nhiệm kỳ của Ban Chấp hành, Ban
                    Thường vụ, Chủ tịch và Phó Chủ tịch được chỉ định:
                </strong>
                <ul>
                    <li>
                        <input name="q4" type="radio" value="A"/>&ensp;
                        A) Phải đảm bảo đủ năm năm.
                    </li>
                    <li className="text-red-300">
                        <input name="q4" type="radio" value="B"/>&ensp;
                        B) Không nhất thiết đủ năm năm.
                    </li>
                    <li>
                        <input name="q4" type="radio" value="C"/>&ensp;
                        C) Không nhất thiết đủ năm năm, nhưng phải đảm bảo trên 36 tháng.
                    </li>
                    <li>
                        <input name="q4" type="radio" value="D"/>&ensp;
                        D) Không nhất thiết đủ năm năm, nhưng phải đảm bảo ít nhất 36 tháng.

                    </li>
                    <br/>
                </ul>
                <strong>5a. Theo Điều lệ Hội LHPN Việt Nam khoá XIII sửa đổi 2022, Chi hội, tổ phụ nữ sinh hoạt:
                </strong>
                <ul>
                    <li>
                        <input name="q5" type="radio" value="A"/>&ensp;
                        A) Ít nhất ba tháng một lần.
                    </li>
                    <li>
                        <input name="q5" type="radio" value="B"/>&ensp;
                        B) Ba tháng một lần.
                    </li>
                    <li>
                        <input name="q5" type="radio" value="C"/>&ensp;
                        C) Sáu tháng một lần.
                    </li>
                    <li>
                        <input name="q5" type="radio" value="D"/>&ensp;
                        D) Ít nhất Sáu tháng một lần.
                    </li>
                    <br/>
                </ul>
                <strong>6c. Theo Điều lệ Hội liên hiệp Phụ nữ Việt Nam thì Hội liên hiệp Phụ nữ Việt Nam có chức
                    năng nào dưới đây?
                </strong>
                <ul>
                    <li>
                        <input name="q6" type="radio" value="A"/>&ensp;
                        A) Đại diện chăm lo, bảo vệ quyền, lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ,
                        tham
                        gia xây dựng Đảng, tham gia quản lý Nhà nước.
                    </li>
                    <li>
                        <input name="q6" type="radio" value="B"/>&ensp;
                        B) Đoàn kết, vận động phụ nữ thực hiện đường lối, chủ trương của Đảng, chính sách, pháp luật
                        của
                        Nhà nước; vận động xã hội thực hiện bình đẳng giới.
                    </li>
                    <li>
                        <input name="q6" type="radio" value="C"/>&ensp;
                        C) Cả phương án A và B đều đúng
                    </li>
                    <li>
                        <input name="q6" type="radio" value="D"/>&ensp;
                        D) Cả phương án A và B đều sai

                    </li>
                    <br/>
                </ul>

            </div>
            <div className="text-center bg-green-400  p-8">
                <input type="text" value="fname/login"/>
                <input type="text" className="mx-4" value="dvi/login"/>
                <h1 className="font-bold  text-2xl"> Kết quả </h1>
                <input type="text" value="5/10"/>
                Điểm
            </div>
        </form>
    );
};

export default Quiz2;