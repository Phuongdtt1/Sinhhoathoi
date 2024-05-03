'use client';

import Link from 'next/link';
import { quizs } from '@/app/resources/QuizData';
import { useAtom } from 'jotai/index';
import { nameAtom, unitAtom } from '@/app/atoms';
import { LoginRequired } from '@/app/components/LoginRequired/LoginRequired';

const Quiz = () => {
    const [name] = useAtom(nameAtom);
    const [unit] = useAtom(unitAtom);

    if (!name || !unit) return (
        <LoginRequired />
    );

    return (
        <div className="container">
            {
                quizs.map((quiz, index) => (
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
        </div>
    );
};
export default Quiz;