const introduction = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="p-4 bg-amber-100 text-blue-800 font-normal text-justify m-4">

                <img src="/images/1.jpg" title="nhấn 3 gạch/họ tên/đơn vị/vào thi"/>
                <img src="/images/2.jpg" title="chọn cuộc thi"/>
                <img src="/images/3.jpg" title="làm bài thi"/>
                <img src="/images/4.jpg" title="chụp kết quả gửi giám khảo"/>

            </div>
            <div>
                <h1>Tài liệu tham khảo
                    <link
                        href="https://hoilhpn.org.vn/tin-chi-tiet/-/chi-tiet/%C4%91ieu-le-hoi-lien-hiep-phu-nu-viet-nam-46760-6801.html">
                        Điều lệ Hội Liên hiệp phụ nữ Việt Nam khóa XVIII </link>

                </h1>
            </div>
        </div>
    );
};
export default introduction();