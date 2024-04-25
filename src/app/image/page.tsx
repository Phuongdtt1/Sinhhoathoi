'use client';
import { useRouter } from 'next/navigation';
import { Carousel } from 'flowbite-react';
import React from 'react';

const Image = () => {
    const router = useRouter();
    const handleBtn = () => {
        router.push('/');
    };
    return (
        <div className="h-screen">
            <Carousel>
                <img
                    src="/images/Picture1.jpg"
                    alt="..."
                />
                <img
                    src="/images/Picture2.jpg"
                    alt="..."
                />
                <img
                    src="/images/luquetkyson.jpg"
                    alt="..."
                />
                <img
                    src="/images/luquetkyson2.jpg"
                    alt="..."
                />
                <img
                    src="/images/tuyentruyen.jpg"
                    alt="..."
                />
                <img
                    src="/images/dienbienhoabinh.jpg"
                    alt="..."
                />
                <img
                    src="/images/luquetkyson.jpg"
                    alt="..."
                />
                <img
                    src="/images/luquetkyson2.jpg"
                    alt="..."
                />
                <img
                    src="/images/Tongket.jpg"
                    alt="..."
                />
            </Carousel>
        </div>
    )
        ;
};
export default Image;
