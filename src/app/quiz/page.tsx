'use client';

import Link from 'next/link';
import {useSearchParams} from 'next/navigation';


const Quiz = () => {
    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    const unit = searchParams.get('unit');

    return (
        <div className="container items-center justify-evenly p-4 m-4 h-96">
            <Link
                className="rounded-2xl bg-green-500 text-white text-justify w-52 text-center"
                href={`/quiz/quiz2?name=${name}&unit=${unit}`}
            >
                Cuộc thi tim hiểu
                Tăng cường bảo đảm an toàn thông tin mạng
            </Link><br/>
            <Link
                className="rounded-2xl bg-green-500 text-white text-justify w-52 text-center"
                href={`/quiz/1?name=${name}&unit=${unit}`}
            >
                Cuộc thi tim hiểu
                Điều lệ Hội liên hiệp phụ nữ Việt nam khóa
                XVIII
            </Link>

        </div>
    );
};
export default Quiz;