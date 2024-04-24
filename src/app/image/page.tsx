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
        <div className="h-80 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img
                    src="/images/apple.jpg"
                    alt="..."
                />
                <img
                    src="/images/orange.jpg"
                    alt="..."
                />
                <img
                    src="/images/mango.jpg"
                    alt="..."
                />
                <img
                    src="/images/lemon.jpg"
                    alt="..."
                />
            </Carousel>
        </div>
    );
};
export default Image;
