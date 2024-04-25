'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ImageCarousel } from '@/app/components/ImageCarousel/ImageCarousel';

const Image = () => {
    const router = useRouter();
    const handleBtn = () => {
        router.push('/');
    };
    return (
        <div className="container h-96">
            <ImageCarousel />
        </div>
    )
        ;
};
export default Image;
