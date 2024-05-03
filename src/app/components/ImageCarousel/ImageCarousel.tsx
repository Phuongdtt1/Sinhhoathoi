import { Carousel } from 'flowbite-react';
import React from 'react';


export function ImageCarousel({ urls }: { urls: string[] }) {
    return (
        <div className="aspect-4/3">
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