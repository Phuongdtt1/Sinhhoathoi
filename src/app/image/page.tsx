'use client';
import React, { useState } from 'react';
import { ImageCarousel } from '@/app/components/ImageCarousel/ImageCarousel';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

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
        title: 'Chiều 28/7/2022, Hội phụ nữ BĐBP Nghệ An tổ chức chương trình "Bát nước thao trường" và "Bữa cơm dinh dưỡng" phục vụ cán bộ, chiến sĩ đang thực hiện nhiệm vụ phục vụ diễn tập năm 2022',
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
        title: 'Còn lại', images: [
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/qua-1.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/qua-2.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/qua-3.jpg',
            },

        ],
    },
    {
        title: 'Còn lại 2',
        images: [
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-1.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-2.jpg',
            },
            {
                url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-3.jpg',
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
        ],
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
            {groupImages.map((group, index) => (
                <div key={index}>
                    <div
                        className="text-2xl my-4 text-fuchsia-800 cursor-pointer hover:underline hover:text-fuchsia-950 inline-block"
                        onClick={() => toggleGroup(group.title)}
                    >
                        <div className="flex flex-row items-center gap-2">
                            {isExpanded(group.title) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            <div>{group.title}</div>
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
        </div>
    );
};
export default Image;