import { guideSections, SectionProps } from '@/app/resources/sections';

const guide_title: string = 'Hướng dẫn sinh hoạt Chi hội, tổ phụ nữ';

function Section({ title, content }: SectionProps) {
    return (
        <div className="p-4 bg-gray-200 text-blue-800 font-normal text-justify sm:m-2 my-4">
            <p className="text-bold text-blue-800 indent-2 sm:indent-4 mb-2">{title}</p>
            <div className="indent-4 sm:indent-8">
                {content.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
}

export default function Guide() {
    return (
        <div className="container">
            <div className="text-red-500 text-center text-3xl font-bold m-4">{guide_title}</div>
            <div className="grid grid-cols-1">
                {guideSections.map((section, index) => (
                    <Section
                        key={index}
                        title={section.title}
                        content={section.content}
                    />
                ))}
            </div>
        </div>
    );
};
