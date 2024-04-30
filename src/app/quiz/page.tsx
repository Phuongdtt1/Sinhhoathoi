'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


const Quiz = () => {
    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    const unit = searchParams.get('unit');

    return (
        <div className="container flex flex-col items-center justify-evenly h-96">
            <Link
                className="rounded-2xl bg-red-500 text-white p-5 w-52 text-center"
                href={`/quiz/quiz1?name=${name}&unit=${unit}`}
            >
                Cuộc thi tim hiểu
                Điều lệ Hội liên hiệp phụ nữ Việt nam khóa
                XVIII
            </Link>
            <Link
                className="rounded-2xl bg-green-500 text-white p-5 w-52 text-center"
                href={`/quiz/quiz2?name=${name}&unit=${unit}`}
            >
                Cuộc thi tim hiểu
                Dân số kế hoạch hóa gia đình
            </Link>
        </div>
    );
};
export default Quiz;