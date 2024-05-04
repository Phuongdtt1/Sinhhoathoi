'use client';

import Link from 'next/link';
import { quizzes, references } from '@/app/resources/data';

const Quiz = () => {
    return (
        <div className="container">
            {
                quizzes.map((quiz, index) => (
                    <Link
                        key={index}
                        href={`/quiz/${index}`}
                    >
                        <div
                            className={`rounded-2xl ${quiz.metaData.color} text-white p-4 my-2`}
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
                    className="underline hover:text-bold rounded-2xl bg-cyan-500 text-white p-4 my-2"
                >
                    Cuộc thi trực truyến về Điện Biên Phủ - 2024
                </div>
            </Link>
            <div className="border-blue-900">
                <div className="text-2xl font-bold my-4">TÀI LIỆU THAM KHẢO</div>
                <div className="my-4">
                    {references.map((reference, index) => (
                        <Link
                            key={index}
                            href={reference.url}
                            className="hover:underline hover:text-blue-700 text-blue-500 block"
                        >
                            {'->'} {reference.text}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Quiz;