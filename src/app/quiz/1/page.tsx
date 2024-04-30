'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from 'flowbite-react';
import { quizs } from '@/app/resources/QuizData';

const Quiz1 = () => {
    const quiz = quizs[0];
    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    const unit = searchParams.get('unit');
    return (
        <form
            name="quiz"
            className="container"
        >
            <h1 className=" text-center bg-red-400 font-bold m-4 p-2 text-2xl">
                {quiz.quizTitle}
            </h1>
            {
                quiz.questions.map(
                    (question, i) => (
                        <div key={i}>
                            <div className="my-2 font-bold">
                                <span>{i + 1}. {' '}</span>
                                {question.question}
                            </div>
                            {
                                question.answers.map((answer, index) => (
                                    <div
                                        key={index}
                                        className={answer.correct ? 'text-red-500' : ''}
                                    >
                                        <span>{String.fromCharCode('A'.charCodeAt(0) + index)}. {' '}</span>
                                        {answer.text}
                                    </div>
                                ))
                            }
                        </div>
                    ),
                )
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-red-200 p-8">
                <div>
                    <div className="text-2xl mb-4">
                        <span className="font-bold">Anh/Chị: {' '}</span>
                        {name}
                    </div>
                    <div className="text-2xl">
                        <span className="font-bold">Đơn vị: {' '}</span>
                        {unit}
                    </div>
                </div>
                <div className="flex flex-row justify-evenly items-center">
                    <Button size="lg">Nộp Bài</Button>
                    <input
                        type="text"
                        id="disabled-input"
                        aria-label="disabled input"
                        className="rounded-lg block cursor-not-allowed text-center w-36"
                        value="Disabled input"
                        disabled
                    />
                </div>
            </div>
        </form>
    );
};

export default Quiz1;