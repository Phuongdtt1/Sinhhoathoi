import { Carousel } from 'flowbite-react';
import React from 'react';

export function ImageCarousel() {
    return (
        <div className="container h-full">
            <Carousel>
                <img
                    src="/images/cot-moc-403.jpg"
                />
                <img
                    src="/images/cot-moc.jpg"
                />
                <img
                    src="/images/lu-que-ky-son.jpg"
                />
                <img
                    src="/images/lu-que-ky-son-2.jpg"
                />
                <img
                    src="/images/tuyen-truyen.jpg"
                />
                <img
                    src="/images/dien-bien-hoa-binh.jpg"
                />
                <img
                    src="/images/lu-que-ky-son.jpg"
                />
                <img
                    src="/images/lu-que-ky-son-2.jpg"
                />
                <img
                    src="/images/tong-ket.jpg"
                />
            </Carousel>
        </div>
    );
}