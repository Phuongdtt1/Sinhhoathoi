'use client';

import Link from 'next/link';

export default function Introduction() {
    return (
        <div className="container">
            <div
                className="text-red-500 text-4xl font-bold mx-4 mt-4"
            >
                GIỚI THIỆU
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="p-4 bg-amber-100 text-blue-800 font-normal text-justify m-4">
                    <p className="text-bold text-white text-center bg-green-800 p-4 mb-4">
                        * HỆ THỐNG TỔ CHỨC VÀ TƯ CÁCH PHÁP NHÂN CỦA CÁC CẤP HỘI
                    </p>
                    <div className="indent-4 sm:indent-8">
                        <div>
                            1. Hội Liên hiệp Phụ nữ Việt Nam gồm 4 cấp:
                        </div>
                        <ul>
                            <li>a. Cấp Trung ương;</li>
                            <li>b. Cấp tỉnh (bao gồm Hội Liên hiệp Phụ nữ các tỉnh, thành phố trực
                                thuộc Trung ương và tương đương);
                            </li>
                            <li>c. Cấp huyện (bao gồm Hội Liên hiệp Phụ nữ các quận, huyện, thị xã,
                                thành phố thuộc tỉnh và tương đương);
                            </li>
                            <li>d. Cấp cơ sở (bao gồm Hội Liên hiệp Phụ nữ các xã, phường, thị trấn và tương đương).
                            </li>
                        </ul>
                        <div>
                            2. Trung ương Hội; Hội Liên hiệp Phụ nữ các tỉnh, thành phố trực thuộc Trung ương; Hội Liên
                            hiệp Phụ nữ các quận, huyện, thị xã, thành phố thuộc tỉnh; Hội Liên hiệp Phụ nữ các xã,
                            phường, thị trấn có tư cách pháp nhân độc lập, hoạt động trong khuôn khổ Hiến pháp và pháp
                            luật.
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-amber-100 text-blue-800 font-normal text-justify m-4">
                    <p className="text-bold text-white text-center bg-green-800 p-4 mb-4">
                        * CƠ QUAN LÃNH ĐẠO VÀ CƠ QUAN CHUYÊN TRÁCH CÁC CẤP HỘI
                    </p>
                    <div className="indent-4 sm:indent-8">
                        <div>1. Cơ quan lãnh đạo các cấp Hội:</div>
                        <ul>
                            <li>
                                a. Cơ quan lãnh đạo cao nhất của Hội là Đại hội đại biểu Phụ nữ
                                toàn quốc;
                            </li>
                            <li>
                                b. Cơ quan lãnh đạo ở mỗi cấp Hội là Đại hội đại biểu hoặc Đại hội toàn
                                thể hội viên của cấp đó;
                            </li>
                            <li>
                                c. Giữa hai kỳ đại hội, cơ quan lãnh đạo mỗi cấp Hội là Ban Chấp hành
                                cùng cấp;
                            </li>
                            <li>
                                d. Giữa hai kỳ họp Ban Chấp hành, cơ quan lãnh đạo là Đoàn Chủ tịch hoặc
                                Ban Thường vụ cùng cấp.
                            </li>
                        </ul>
                        <div>2. Cơ quan chuyên trách các cấp Hội:</div>
                        <ul>
                            <li>Cơ quan chuyên trách Trung ương Hội; cơ quan chuyên trách Hội Liên hiệp
                                Phụ nữ các tỉnh, thành phố trực thuộc Trung ương và tương đương; cơ quan chuyên trách
                                Hội Liên hiệp Phụ nữ các quận, huyện, thị xã, thành phố thuộc tỉnh và tương đương là cơ
                                quan tham mưu, giúp việc cho Ban Chấp hành, Đoàn Chủ tịch hoặc Ban Thường vụ cùng cấp.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <Link
                    href="/quiz"
                >
                    <img
                        className="rounded-2xl bg-red-500 text-white"
                        src="/images/background.jpg"
                    />
                </Link>
            </div>
        </div>
    );
}
