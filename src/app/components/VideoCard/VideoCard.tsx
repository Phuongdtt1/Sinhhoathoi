import React, { useState } from 'react';
import { VideoCardProps } from '@/app/resources/videos';

export function VideoCard({ title, content, url }: VideoCardProps) {
    const [showVideo, setShowVideo] = useState(false);

    return (

        <div
            className="flex flex-col gap-2 p-6 shadow-md rounded-xl border-2"
        >
            <div
                onClick={() => setShowVideo(true)}
                className="cursor-pointer"
            >
                <iframe
                    src={url}
                    className="w-full aspect-video pointer-events-none"
                ></iframe>
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
            {showVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-full p-1">
                        <iframe
                            src={url}
                            className="w-full max-h-[calc(100vh-0.5rem)] aspect-video"
                            allow="autoplay"
                            allowFullScreen
                        ></iframe>
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-1 right-1 text-3xl text-black rounded-full bg-white size-10 border"
                        >&times;</button>
                    </div>
                </div>
            )}
        </div>
    )
        ;
}
