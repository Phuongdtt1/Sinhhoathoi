import React, {useState} from 'react';

export interface VideoCardProps {
    title: string;
    content: string;
    url: string;
}

export function VideoCard({title, content, url}: VideoCardProps) {
    const [showVideo, setShowVideo] = useState(false);

    return (

        <div
            className="max-w-sm flex flex-col gap-2 p-6 shadow-md shadow-green-200 rounded-xl border-2"
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
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 h-16">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
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


        </div>
    )
        ;
}
