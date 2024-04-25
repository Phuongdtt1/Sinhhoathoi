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
                    src="/images/cot-moc-403.jpg"
                    alt="..."
                />
                <img
                    src="/images/cot-moc.jpg"
                    alt="..."
                />
                <img
                    src="/images/lu-que-ky-son.jpg"
                    alt="..."
                />
                <img
                    src="/images/lu-que-ky-son-2.jpg"
                    alt="..."
                />
                <img
                    src="/images/tuyen-truyen.jpg"
                    alt="..."
                />
                <img
                    src="/images/dien-bien-hoa-binh.jpg"
                    alt="..."
                />
                <img
                    src="/images/lu-que-ky-son.jpg"
                    alt="..."
                />
                <img
                    src="/images/lu-que-ky-son-2.jpg"
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
