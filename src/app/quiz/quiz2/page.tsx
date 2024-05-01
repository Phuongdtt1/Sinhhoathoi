const Quiz2 = () => {
    return (

        <form
            name="quiz"
            className="container"
        >

            <h1 className=" text-center bg-green-400 font-bold m-4 p-2 text-2xl">
                Cuộc thi tim hiểu
                Tăng cường Bảo đảm an toàn thông tin mạng
            </h1>


            <div className="m-8 bg-green-50 p-4 text-justify">
                <strong>1. Những lợi ích của mạng xã hội?</strong>
                <ul>
                    <li className="text-red-300">
                        <input name="q1" type="radio" value="A"/>&ensp;
                        A) Cập nhật tin tức và xu hướng nhanh nhất; kết nối với nhiều người
                    </li>
                    <li>
                        <input name="q1" type="radio" value="B"/>&ensp;
                        B) Học hỏi những kỹ năng khác nhau; chia sẻ các bức ảnh và kỷ niệm
                    </li>
                    <li>
                        <input name="q1" type="radio" value="C"/>&ensp;
                        C) Tìm hiểu về các chủ đề mới; chơi các trò chơi
                    </li>
                    <li>
                        <input name="q1" type="radio" value="D"/>&ensp;
                        D) Tất cả các phương án trên
                    </li>
                    <br/>
                </ul>
                <strong>2. Những hạn chế của mạng xã hội?</strong>
                <ul>
                    <li>
                        <input name="q2" type="radio" value="A"/>&ensp;
                        A) Đưa thông tin không chính xác hoặc tin xấu khiến chúng ta tin vào những thông tin sai lệch
                    </li>
                    <li className="text-red-300">
                        <input name="q2" type="radio" value="B"/>&ensp;
                        B) Có thể dễ dàng tiếp cận với những thông tin nguy hiểm, hình ảnh bạo lực
                    </li>
                    <li>
                        <input name="q2" type="radio" value="C"/>&ensp;
                        C) Nguy cơ bị lừa đảo, đánh cắp thông tin cá nhân
                    </li>
                    <li>
                        <input name="q2" type="radio" value="D"/>&ensp;
                        D) Tất cả các phương án trên
                    </li>
                    <br/>
                </ul>
                <strong>3. Chọn thiết bị mạng không dây (bộ phát wifi) như thế nào để đảm bảo an toàn thông tin khi sử
                    dụng?
                </strong>
                <ul>
                    <li className="text-red-300">
                        <input name="q3" type="radio" value="A"/>&ensp;
                        A) Chọn thiết bị có nguồn gốc xuất xứ rõ ràng, thương hiệu uy tín, có khả năng bảo mật và loại
                        bỏ mã độc, ngăn chặn sự thâm nhập bất hợp pháp từ bên ngoài
                    </li>
                    <li>
                        <input name="q3" type="radio" value="B"/>&ensp;
                        B) Chọn thiết bị có nguồn gốc xuất xứ, thương hiệu nổi tiếng của nước ngoài
                    </li>
                    <li>
                        <input name="q3" type="radio" value="C"/>&ensp;
                        C) Chọn thiết bị có giá rẻ, mẫu mã đẹp
                    </li>
                    <li>
                        <input name="q3" type="radio" value="D"/>&ensp;
                        D) Chọn thiết bị có mẫu mã đẹp, độ phủ sóng rộng, không nhất thiết phải là thương hiệu nổi tiếng
                    </li>
                </ul>
                <strong>4. Các biện pháp hạn chế tác động có hại của sóng wifi?
                </strong>
                <ul>
                    <li>
                        <input name="q4" type="radio" value="A"/>&ensp;
                        A) Ngắt kết nối wifi và hạn chế sử dụng điện thoại, máy tính trước khi đi ngủ
                    </li>
                    <li className="text-red-300">
                        <input name="q4" type="radio" value="B"/>&ensp;
                        B) Đặt thiết bị phát sóng ở xa nơi sinh hoạt thường xuyên của con người, tránh đặt trong phòng
                        ngủ
                    </li>
                    <li>
                        <input name="q4" type="radio" value="C"/>&ensp;
                        C) Sử dụng dây cáp mạng thay cho bộ phát wifi
                    </li>
                    <li>
                        <input name="q4" type="radio" value="D"/>&ensp;
                        D) Tất cả các phương án trên

                    </li>
                    <br/>
                </ul>
                <strong>5. Những hạn chế về công nghệ của việc học tập trực tuyến là gì?
                </strong>
                <ul>
                    <li>
                        <input name="q5" type="radio" value="A"/>&ensp;
                        A) Phụ thuộc vào cấu hình của máy tính khi chạy các phần mềm học trực tuyến và đường truyền tín
                        hiệu của mạng internet
                    </li>
                    <li>
                        <input name="q5" type="radio" value="B"/>&ensp;
                        B) Các phần mềm có thể thu phí và khó đăng ký tài khoản
                    </li>
                    <li>
                        <input name="q5" type="radio" value="C"/>&ensp;
                        C) Dễ lộ, lọt thông tin người dùng hoặc bị mất quyền kiểm soát tài khoản
                    </li>
                    <li>
                        <input name="q5" type="radio" value="D"/>&ensp;
                        D) Tất cả các phương án trên
                    </li>
                    <br/>
                </ul>
                <strong>6. Hành vi nào dưới đây không bị nghiêm cấm thực hiện trên không gian mạng?
                </strong>
                <ul>
                    <li>
                        <input name="q6" type="radio" value="A"/>&ensp;
                        A) Xúc phạm tôn giáo, phân biệt đối xử về giới, phân biệt chủng tộc
                    </li>
                    <li>
                        <input name="q6" type="radio" value="B"/>&ensp;
                        B) Phát tán chương trình tin học gây hại cho hoạt động của mạng viễn thông
                    </li>
                    <li>
                        <input name="q6" type="radio" value="C"/>&ensp;
                        C) Đăng tải thông tin dâm ô, đồi trụy, tội ác; phá hoại thuần phong mỹ tục của dân tộc
                    </li>
                    <li>
                        <input name="q6" type="radio" value="D"/>&ensp;
                        D) Đăng ta những thông tin, video clip quảng bá hình ảnh đẹp về đất nước Việt Nam

                    </li>
                    <br/>
                </ul>
                <strong>7. Ý nào sau đây không phải là biện pháp để bảo vệ thông tin cá nhân trên mạng là?
                </strong>
                <ul>
                    <li>
                        <input name="q7" type="radio" value="A"/>&ensp;
                        A) Kích hoạt tính năng xác thực nhiều bước để bảo vệ tài khoản người dùng
                    </li>
                    <li>
                        <input name="q7" type="radio" value="B"/>&ensp;
                        B) Không trả lời những tin nhắn từ người lạ được gửi đến trên mạng xã hội
                    </li>
                    <li>
                        <input name="q7" type="radio" value="C"/>&ensp;
                        C) Đặt mật kẩu đơn giản, dễ nhớ cho các thiết bị: máy tính, điện thoại...
                    </li>
                    <li>
                        <input name="q7" type="radio" value="D"/>&ensp;
                        D) Thường xuyên kển tra riêng tư, tính bảo mật trên thiết bị

                    </li>
                    <br/>
                </ul>
                <strong>8. Thông tin trên không gian mạng có nội dung tuyên truyền chống Nhà nước Cộng hòa xã hội chủ
                    nghĩa Việt Nam bao gồm:
                </strong>
                <ul>
                    <li>
                        <input name="q8" type="radio" value="A"/>&ensp;
                        A) Tuyên truyền xuyên tạc, phỉ báng chính quyền nhân dân;
                    </li>
                    <li>
                        <input name="q8" type="radio" value="B"/>&ensp;
                        B) Chiến tranh tâm lý, kích động chiến tranh xâm lược, chia rẽ, gây thù hận giữa các dân tộc,
                        tôn giáo và nhân dân các nước;
                    </li>
                    <li>
                        <input name="q8" type="radio" value="C"/>&ensp;
                        C) Xúc phạm dân tộc, quốc kỳ, quốc huy, quốc ca, vĩ nhân, lãnh tụ, danh nhân, anh hùng dân tộc.
                    </li>
                    <li>
                        <input name="q8" type="radio" value="D"/>&ensp;
                        D) Tất cả đáp áp trên

                    </li>
                    <br/>
                </ul>
                <strong>9. Người có hành vi vi phạm được quy định trong Luật An ninh mạng thì bị xử lý như thế nào?
                </strong>
                <ul>
                    <li>
                        <input name="q9" type="radio" value="A"/>&ensp;
                        A) Tùy theo tính chất, mức độ vi phạm mà bị xử lý kỷ luật, xử lý vi phạm hành chính hoặc bị truy
                        cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường
                    </li>
                    <li>
                        <input name="q9" type="radio" value="B"/>&ensp;
                        B) Tùy theo tính chất, mức độ vi phạm mà bị khiển trách, xử lý kỷ luật, xử lý vi phạm hành chính
                        hoặc bị truy cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường
                    </li>
                    <li>
                        <input name="q9" type="radio" value="C"/>&ensp;
                        C) Nhẹ thì bị xử lý vi phạm hành chính, nặng thì bị truy cứu trách nhiệm hình sự, nếu gây thiệt
                        hại thì phải bồi thường
                    </li>
                    <li>
                        <input name="q9" type="radio" value="D"/>&ensp;
                        D) Có thể bị buộc thôi việc, xử lý vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự, nếu
                        gây thiệt hại thì phải bồi thường

                    </li>
                    <br/>
                </ul>
                <strong>10. Tội phạm mạng là?
                </strong>
                <ul>
                    <li>
                        <input name="q10" type="radio" value="A"/>&ensp;
                        A) Là hành vi sử dụng không gian mạng, công nghệ thông tin, phương tiện điện tử để phá hoại, gây
                        gián đoạn hoạt động của máy tính, mạng máy tính được quy định tại Bộ luật Hình sự
                    </li>
                    <li>
                        <input name="q10" type="radio" value="B"/>&ensp;
                        B) Là hành vi sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện
                        tội phạm được quy định tại Bộ luật Hình sự
                    </li>
                    <li>
                        <input name="q10" type="radio" value="C"/>&ensp;
                        C) Là việc sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện
                        hành vi khủng bố, tài trợ khủng bố
                    </li>
                    <li>
                        <input name="q10" type="radio" value="D"/>&ensp;
                        D) Là hành vi cố ý vượt qua cảnh báo, mã truy cập, mật mã, tường lửa, sử dụng quyền quản trị của
                        người khác hoặc bằng phương thức khác để chiếm đoạt, thu thập trái phép thông tin của cơ quan,
                        tổ chức, cá nhân

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