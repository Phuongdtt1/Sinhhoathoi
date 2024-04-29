const Quiz = () => {
    return (

        <form
            name="quiz"
            className="container"
        >
            <div className="text-center bg-red-400  p-8">
                <h1 className="font-bold m-4 text-4xl">
                    Cuộc thi tim hiểu
                    Điều lệ Hội liên hiệp phụ nữ Việt nam khóa
                    XVIII
                </h1>
                <input
                    type="text"
                    value="fname/login"
                />
                <input
                    type="text"
                    className="mx-4"
                    value="dvi/login"
                />
            </div>
            <ul className="m-8 bg-amber-50 p-4 text-justify">
                <b className="bg-blue-600 text-white"> 1. Theo Điều lệ Hội liên hiệp phụ nữ Việt Nam hiện hành thì Hội
                    Liên hiệp Phụ nữ Việt Nam?
                </b>
                <li>
                    <input
                        name="q1"
                        type="radio"
                        value="A"
                    />&ensp;
                    A) là tổ chức chính trị – xã hội trong hệ thống chính trị,
                    đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự
                    phát triển của phụ nữ và bình đẳng giới
                </li>
                <li>
                    <input
                        name="q1"
                        type="radio"
                        value="B"
                    />&ensp;
                    B) là tổ chức chính trị trong hệ thống chính trị, đại diện
                    cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát
                    triển của phụ nữ và bình đẳng giới
                </li>
                <li>
                    <input
                        name="q1"
                        type="radio"
                        value="C"
                    />&ensp;
                    C) là tổ chức xã hội trong hệ thống chính trị, đại diện cho
                    quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát triển
                    của phụ nữ và bình đẳng giới
                </li>
                <li>
                    <input
                        name="q1"
                        type="radio"
                        value="D"
                    />&ensp;
                    D) là tổ chức chính trị – xã hội nghề nghiệp trong hệ thống
                    chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn
                    đấu vì sự phát triển của phụ nữ và bình đẳng giới
                </li>
                <b className="bg-blue-600 text-white"> 2. Theo Điều lệ Hội liên hiệp Phụ nữ Việt Nam thì Hội liên hiệp
                    Phụ nữ Việt Nam là tổ chức gì?
                </b>
                <ul>
                    <li>
                        <input
                            name="q2"
                            type="radio"
                            value="A"
                        />&ensp;
                        A) Chính trị
                    </li>
                    <li>
                        <input
                            name="q2"
                            type="radio"
                            value="B"
                        />&ensp;
                        B) Chính trị – xã hội
                    </li>
                    <li>
                        <input
                            name="q2"
                            type="radio"
                            value="C"
                        />&ensp;
                        C) Xã hội nghề nghiệp
                    </li>
                    <li>
                        <input
                            name="q2"
                            type="radio"
                            value="D"
                        />&ensp;
                        D) xã hội
                    </li>
                    <b className="bg-blue-600 text-white"> 3. : Đại hội đại biểu Phụ nữ toàn quốc lần thứ XIII dự kiến
                        đến cuối nhiệm
                        kỳ, Trung ương Hội sẽ đề xuất thành công ít nhất bao nhiêu chính sách, đề án
                        và bao nhiêu chương trình?
                    </b>
                    <ul>
                        <li>
                            <input
                                name="q3"
                                type="radio"
                                value="A"
                            />&ensp;
                            A) Ít nhất 05 chính sách, đề án và 02 chương trình.
                        </li>
                        <li>
                            <input
                                name="q3"
                                type="radio"
                                value="B"
                            />&ensp;
                            B) Ít nhất 04 chính sách, đề án và 03 chương trình.
                        </li>
                        <li>
                            <input
                                name="q3"
                                type="radio"
                                value="C"
                            />&ensp;
                            C) Ít nhất 03 chính sách, đề án và 02 chương trình.
                        </li>
                        <li>
                            <input
                                name="q3"
                                type="radio"
                                value="D"
                            />&ensp;
                            D) Ít nhất 02 chính sách, đề án và 05 chương trình.
                        </li>
                    </ul>
                </ul>
            </ul>
            <div className="text-center bg-red-400 my-5 px-2 py-4 mx-48">
                <h1 className="font-bold  text-2xl"> Kết quả </h1>
                <input type="text" value="5/10"/>
                Điểm
            </div>
        </form>
    );
};

export default Quiz;