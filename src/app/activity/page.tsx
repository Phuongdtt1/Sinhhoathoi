'use client';

import { VideoCard, VideoCardProps } from '@/app/components/VideoCard/VideoCard';


const videos: VideoCardProps[] = [
    {
        title: 'Tiêu đề 1',
        content: 'Nội dung 1',
        url: 'https://drive.google.com/file/d/1JNkndDFvyj6RAICaBmcNxTAUaLxL9tPf/preview',
    }, {
        title: 'Tiêu đề 2',
        content: 'Nội dung 2',
        url: 'https://drive.google.com/file/d/1bOGi2lkhT_Gk15EeJDyxlPNTHdlHimQX/preview',
    }, {
        title: 'Tiêu đề 3',
        content: 'Nội dung 3',
        url: 'https://drive.google.com/file/d/10fdMsEGCIONaYwDMpGNRzGej9LmXwFi7/preview',
    },
];


const Activity = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-3 gap-4">
                {videos.map((video, idx) => (
                    <VideoCard
                        key={idx}
                        title={video.title}
                        url={video.url}
                        content={video.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default Activity;