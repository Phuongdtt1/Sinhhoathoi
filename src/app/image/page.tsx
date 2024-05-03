'use client';
import React, { useState } from 'react';
import { ImageCarousel } from '@/app/components/ImageCarousel/ImageCarousel';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { VideoCard, VideoCardProps } from '@/app/components/VideoCard/VideoCard';
import Link from 'next/link';

interface GroupImage {
    title: string,
    images: {
        url: string,
    }[]
}

const womenImageUrls: string[] = [
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

const groupImages: GroupImage[] = [
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

const Image = () => {
    const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageUrl, setCurrentImageUrl] = useState('');

    const toggleGroup = (title: string) => {
        if (expandedGroups.includes(title)) {
            setExpandedGroups(expandedGroups.filter(group => group !== title));
        } else {
            setExpandedGroups([...expandedGroups, title]);
        }
    };

    const isExpanded = (title: string) => {
        return expandedGroups.includes(title);
    };

    const openModal = (url: string) => {
        setCurrentImageUrl(url);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="container">
            <ImageCarousel urls={womenImageUrls} />
            <div className="text-2xl font-bold my-4">VIDEO HỌẠT ĐỘNG</div>
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
            <div className="text-2xl font-bold my-4">HÌNH ẢNH HỘI THI</div>
            {groupImages.map((group, index) => (
                <div key={index}>
                    <div
                        className="text-2xl my-4 text-fuchsia-800 cursor-pointer hover:underline hover:text-fuchsia-950"
                        onClick={() => toggleGroup(group.title)}
                    >
                        <div className="flex flex-row items-start gap-2">
                            <div>
                                {isExpanded(group.title) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            <div className={isExpanded(group.title) ? '' : 'truncate'}>{group.title}</div>
                        </div>
                    </div>
                    {expandedGroups.includes(group.title) && (
                        <div className="grid grid-cols-3 gap-2">
                            {group.images.map((image, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col gap-2 items-center justify-between cursor-pointer"
                                    onClick={() => openModal(image.url)}
                                >
                                    <div
                                        className="bg-cover bg-center w-full aspect-[4/3]"
                                        style={{ backgroundImage: `url(${image.url})` }}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white max-h-screen p-1">
                        <img
                            className="max-h-[95vh]"
                            src={currentImageUrl}
                            alt="Expanded"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-1 right-1 text-2xl text-black rounded-full bg-white size-10 border"
                        >&times;</button>
                    </div>
                </div>
            )}
            <div className="border-blue-900">
                <div className="text-2xl font-bold mt-4">TIN TỨC-SỰ KIỆN</div>
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
                        {'->'} PHỤ NỮ NGHỆ AN TỔ CHỨC CÁC HOẠT ĐỘNG &apos;ĐỒNG HÀNH CÙNG PHỤ NỮ BIÊN CƯƠNG&apos; TẠI CON
                        CUÔNG VÀ TƯƠNG DƯƠNG
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
                        {'->'} Phụ nữ thủ đô &apos;đồng hành cùng phụ nữ biên cương&apos; Nghệ An
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default Image;