'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ImageCarousel } from '@/app/components/ImageCarousel/ImageCarousel';

const womenImageUrls: string[] = [
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/1.jpg',
    'https://res.cloudinary.com/ezcode97/image/upload/v1714322646/sinh_hoat_hoi/phu_nu/2.jpg',
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

const otherImages: { url: string, caption: string }[] = [
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/batnc1.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/batnc2.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324544/sinh_hoat_hoi/other/bcaovien.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324544/sinh_hoat_hoi/other/bcaovien2.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/bchung1.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/bcv3.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/bcv4.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/kyson.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/kyson2.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/kyson3.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/qua-1.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/qua-2.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/qua-3.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-1.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-2.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-3.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-4.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-5.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/tq-6.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/vo1.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/vo2.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/vo3.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/vo4.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324582/sinh_hoat_hoi/other/vo5.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324763/sinh_hoat_hoi/other/vo6.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324763/sinh_hoat_hoi/other/vo7.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
    {
        url: 'https://res.cloudinary.com/ezcode97/image/upload/v1714324763/sinh_hoat_hoi/other/vo8.jpg',
        caption: 'Bộ đội ở đâu đó. làm gì đó.',
    },
];

const Image = () => {
    const router = useRouter();
    const handleBtn = () => {
        router.push('/');
    };
    return (
        <div className="container">
            <ImageCarousel urls={womenImageUrls} />
            <div>
                {
                    otherImages.map(
                        (image, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-between items-center"
                            >
                                <img
                                    key={index}
                                    src={image.url}
                                    className="rounded-2xl my-2"
                                />
                                <div className="text-center my-2">{image.caption}</div>
                            </div>
                        ),
                    )
                }
            </div>
        </div>
    );
};
export default Image;
