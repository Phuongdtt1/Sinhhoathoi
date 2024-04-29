import React, { useState } from 'react';
import { Card } from 'flowbite-react';

export interface VideoCardProps {
    title: string;
    content: string;
    url: string;
}

export function VideoCard({ title, content, url }: VideoCardProps) {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {content}
            </p>
            <button
                onClick={() => setShowVideo(true)}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Xem video {'>>'}
            </button>
            {showVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white max-h-screen p-2">
                        <iframe
                            src={url}
                            className="h-[95vh] aspect-video"
                            allow="autoplay"
                        ></iframe>
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-1 right-1 text-3xl text-black rounded-full bg-white size-10 border"
                        >&times;</button>
                    </div>
                </div>
            )}
        </Card>
    );
}
