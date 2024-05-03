'use client';

import { VideoCard, VideoCardProps } from '@/app/components/VideoCard/VideoCard';
import Link from 'next/link';
import React from 'react';

const videos: VideoCardProps[] = [
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

const Activity = () => {
    return (
        <div className="container">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {videos.map((video, idx) => (
                    <VideoCard
                        key={idx}
                        title={video.title}
                        url={video.url}
                        content={video.content}
                    />
                ))}
            </div>
            <div className="border-blue-900">
                <h1 className="text-2xl font-bold my-4">TIN TỨC-SỰ KIỆN</h1>
                <p className="my-4">
                    <Link
                        href="https://www.bienphong.com.vn/sang-dep-hinh-anh-nu-quan-nhan-bdbp-post473259.html"
                        className="hover:underline hover:text-blue-700 text-blue-500"
                    >
                        {'->'} Sáng đẹp hình ảnh nữ Quân nhân BĐBP
                    </Link>
                    <br />
                    <Link
                        href="https://mattrannghean.org.vn/cms/portal/read/cac-phong-trao-thi-dua-khac/news/phu-nu-nghe-an-to-chuc-cac-hoat-dong-ong-hanh-cung-phu-nu-bien-cuong-tai-con-cuo.html"
                        className="hover:underline hover:text-blue-700 text-blue-500"
                    >
                        {'->'} PHỤ NỮ NGHỆ AN TỔ CHỨC CÁC HOẠT ĐỘNG 'ĐỒNG HÀNH CÙNG PHỤ NỮ BIÊN CƯƠNG' TẠI CON CUÔNG VÀ
                        TƯƠNG DƯƠNG
                    </Link>
                    <br />
                    <Link
                        href="https://lhpn.nghean.gov.vn/hoat-dong-hoi/hoi-phu-nu-bo-chi-huy-bo-doi-bien-phong-nghe-an-xuat-sac-gianh-giai-a-tai-hoi-thi-can-bo-hoi-co--583179"
                        className="hover:underline hover:text-blue-700 text-blue-500"
                    >
                        {'->'} Hội phụ nữ Bộ chỉ huy Bộ đội Biên phòng Nghệ An xuất sắc giành giải A tại Hội thi “Cán bộ
                        Hội cơ sở giỏi Bộ đội Biên phòng năm 2023”
                    </Link>
                    <br />
                    <Link
                        href="https://lhpn.nghean.gov.vn/thong-bao/phu-nu-thu-do-dong-hanh-cung-phu-nu-bien-cuong-nghe-an-495363?pageindex=0"
                        className="hover:underline hover:text-blue-700 text-blue-500"
                    >
                        {'->'} Phụ nữ thủ đô 'đồng hành cùng phụ nữ biên cương' Nghệ An
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Activity;