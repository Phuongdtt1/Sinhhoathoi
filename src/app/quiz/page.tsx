const Quiz = () => {
    return (
        <form>
            <b> 1. Theo Điều lệ Hội liên hiệp phụ nữ Việt Nam hiện hành thì Hội Liên hiệp Phụ nữ Việt Nam?</b>
            <ul>
                <li>
                    <input name="q1" type="radio" value="A"/>A) là tổ chức chính trị – xã hội trong hệ thống chính trị,
                    đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự
                    phát triển của phụ nữ và bình đẳng giới
                </li>
                <li>
                    <input name="q1" type="radio" value="B"/>B) là tổ chức chính trị trong hệ thống chính trị, đại diện
                    cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát
                    triển của phụ nữ và bình đẳng giới
                </li>
                <li>
                    <input name="q1" type="radio" value="C"/>C) là tổ chức xã hội trong hệ thống chính trị, đại diện cho
                    quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát triển
                    của phụ nữ và bình đẳng giới
                </li>
                <li>
                    <input name="q1" type="radio" value="D"/>D) là tổ chức chính trị – xã hội nghề nghiệp trong hệ thống
                    chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn
                    đấu vì sự phát triển của phụ nữ và bình đẳng giới
                </li>
                <b> 2. Theo Điều lệ Hội liên hiệp Phụ nữ Việt Nam thì Hội liên hiệp Phụ nữ Việt Nam là tổ chức gì?</b>
                <ul>
                    <li>
                        <input name="q2" type="radio" value="A"/>A) Chính trị
                    </li>
                    <li>
                        <input name="q2" type="radio" value="B"/>B) Chính trị – xã hội
                    </li>
                    <li>
                        <input name="q2" type="radio" value="C"/>C) Xã hội nghề nghiệp
                    </li>
                    <li>
                        <input name="q2" type="radio" value="D"/>D) xã hội
                    </li>
                   
                </ul>
            </ul>
        </form>
    )
};

export default Quiz;