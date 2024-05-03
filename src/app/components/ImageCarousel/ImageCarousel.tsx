import { Carousel } from 'flowbite-react';
import React from 'react';


export function ImageCarousel({ urls }: { urls: string[] }) {
    return (
        <div className="aspect-[3/2]">
            <Carousel>
                {
                    urls.map(
                        (name, index) => (
                            <img
                                key={index}
                                src={name}
                            />
                        ),
                    )
                }
            </Carousel>
        </div>
    );
}