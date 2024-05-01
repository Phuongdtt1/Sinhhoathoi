'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { quizs } from '@/app/resources/QuizData';


const Quiz = () => {
    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    const unit = searchParams.get('unit');
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-teal-500'];

    if (!name || !unit) return (
        <div className="container h-36 flex items-center justify-center">
            <p className="text-4xl text-center text-red-500 ">
                Vui lòng đăng nhập tại {''}
                <Link href="/login">
                    <span className="inline-block text-white p-4 rounded-2xl bg-blue-500">Đây</span>
                </Link>
            </p>
        </div>
    );

    return (
        <div className="container">
            {
                quizs.map((quiz, index) => (
                    <Link
                        key={index}
                        href={`/quiz/${index}?name=${name}&unit=${unit}`}
                    >
                        <div
                            className={`rounded-2xl ${colors[index % colors.length]} text-white p-4 my-2`}
                        >
                            {quiz.quizTitle}
                        </div>
                    </Link>
                ))
            }
            <Link
                href="https://docs.google.com/document/d/1o8wSsWJ2PNErk5cEnWhjyZQ2arCAp9iBlLgJeUetaMc/edit?fbclid=IwZXh0bgNhZW0CMTAAAR1-g4m4tGyFT7JporvYL5CJYYLb2u3xxMnVvHbuaJjRhDasAuO3TjU4z-I_aem_ATwVElIH_MfD7GlqpEMp151Owd7Sl5bTJ8WGW6vCOt4dE54GqmzjuRvo-5Jc6Vo1v_oIrBksST8nRc850zWUy9vB&pli=1"
            >
                <div
                    className="rounded-2xl bg-cyan-500 text-white p-4 my-2"
                >
                    Cuộc thi trực truyến về Điện Biên Phủ - 2024
                </div>
            </Link>
        </div>
    );
};
export default Quiz;