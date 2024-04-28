import { Carousel } from 'flowbite-react';
import React from 'react';

export function ImageCarousel() {
    return (
        <div className="h-full">
            <Carousel>
                <img
                    src="/images/3.jpg"
                />
                <img
                    src="/images/4.jpg"
                />
                <img
                    src="/images/6.jpg"
                />
                <img
                    src="/images/7.jpg"
                />
            </Carousel>
        </div>
    );
}