'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


const Quiz = () => {
    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    const unit = searchParams.get('unit');

    return (
        <div className="container">
            <Link
                className="rounded-2xl bg-green-500 text-white"
                href={`/quiz/quiz2?name=${name}&unit=${unit}`}
            >
                Cuộc thi tim hiểu
                Tăng cường bảo đảm an toàn thông tin mạng
            </Link>
            <br />
            <Link
                className="rounded-2xl bg-blue-500 text-white"
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