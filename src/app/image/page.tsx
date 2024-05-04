'use client';
import React, { useState } from 'react';
import { ImageCarousel } from '@/app/components/ImageCarousel/ImageCarousel';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { VideoCard } from '@/app/components/VideoCard/VideoCard';
import Link from 'next/link';
import { groupImages, newsItems, videos, womenImageUrls } from '@/app/resources/data';

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
            <div className="mb-4">
                <Link href="/quiz">
                    <img
                        className="rounded-2xl bg-red-500 text-white w-full"
                        src="/images/banner.jpg"
                    />
                </Link>
            </div>
            <div className="text-2xl font-bold my-4">VIDEO HOẠT ĐỘNG</div>
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
            <div className="text-2xl font-bold my-4">HÌNH ẢNH</div>
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
                <div className="text-2xl font-bold mt-4">TIN TỨC</div>
                <p className="my-4 flex flex-col gap-2">
                    {newsItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <Link
                                href={item.link}
                                className="underline hover:text-bold hover:text-blue-700 text-blue-500 text-justify"
                            >
                                {'->'} {item.title}
                            </Link>
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    );
};
export default Image;