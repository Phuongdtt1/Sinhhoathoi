'use client';
import {useRouter} from 'next/navigation';
import {Carousel} from 'flowbite-react';
import React from 'react';

const Image = () => {
    const router = useRouter();
    const handleBtn = () => {
        router.push('/');
    };
    return (
        <div className="h-80 sm:h-64 xl:h-80 2xl:h-96">
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
            </Carousel>
            <div className="grid gap-4 grid-cols-3 grid-rows-3">
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
            </div>
        </div>

    )
        ;
};
export default Image;
