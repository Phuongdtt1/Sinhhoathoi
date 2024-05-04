'use client';

import { SectionProps, sections } from '@/app/resources/data';

const introduction_title: string = 'Giới thiệu';

function Section({ title, content }: SectionProps) {
    return (
        <div className="p-4 bg-amber-100 text-blue-800 font-normal text-justify sm:m-4 my-4">
            <p className="text-bold text-white text-center bg-green-800 p-4 mb-4">{title}</p>
            <div className="indent-4 sm:indent-8">
                {content.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
}

function Introduction() {
    return (
        <div className="container">
            <div className="text-red-500 text-4xl font-bold mx-4 mt-4">{introduction_title}</div>
            <div className="grid md:grid-cols-2 grid-cols-1">
                {sections.map((section, index) => (
                    <Section
                        key={index}
                        title={section.title}
                        content={section.content}
                    />
                ))}
            </div>
        </div>
    );
}

export default Introduction;
