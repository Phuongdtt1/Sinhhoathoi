'use client';

import {useSearchParams} from 'next/navigation';
import {Button} from 'flowbite-react';
import {quizs} from '@/app/resources/QuizData';
import {FormEvent, useState} from 'react';

interface Answer {
    text: string;
    correct: boolean;
}

interface QuizQuestion {
    question: string;
    answers: Answer[];
}

interface Quiz {
    quizTitle: string;
    questions: QuizQuestion[];
}

interface ContestProps {
    params: { index: number };
}

const Contest = ({params}: ContestProps) => {
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
    const [score, setScore] = useState(0);
    const quiz: Quiz = quizs[params.index];
    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    const unit = searchParams.get('unit');

    const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: answerIndex,
        });
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const isComplete = quiz.questions.every((_, index) => selectedAnswers[index] !== undefined);
        if (!isComplete) {
            alert('Hãy điền đủ mới nộp bài');
            return;
        }
        let newScore = 0;
        quiz.questions.forEach((question, index) => {
            if (selectedAnswers[index] !== undefined && question.answers[selectedAnswers[index]].correct) {
                newScore += 1;
            }
        });
        setScore(newScore);
    };

    return (
        <form
            name="quiz"
            className="container"
            onSubmit={handleSubmit}
        >
            <h1 className="text-center bg-red-400 font-bold text-2xl p-4">
                {quiz.quizTitle}
            </h1>
            {quiz.questions.map((question, questionIndex) => (
                <div
                    key={questionIndex}
                >
                    <div className="my-2 font-bold">
                        <span>{questionIndex + 1}. {' '}</span>
                        {question.question}
                    </div>
                    {question.answers.map((answer, answerIndex) => (
                        <label
                            key={answerIndex}
                            className="block indent-4"
                        >
                            <input
                                type="radio"
                                name={`question-${questionIndex}`}
                                value={answerIndex}
                                onChange={() => handleAnswerChange(questionIndex, answerIndex)}
                                checked={selectedAnswers[questionIndex] === answerIndex}
                                className="mr-2"
                            />
                            {answer.text}
                        </label>
                    ))}
                </div>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-red-200 p-8">
                <div>
                    <div className="text-2xl mb-4">
                        <span className="font-bold">Họ và tên: {' '}</span>
                        {name}
                    </div>
                    <div className="text-2xl">
                        <span className="font-bold">Đơn vị: {' '}</span>
                        {unit}
                    </div>
                </div>
                <div className="flex flex-row justify-evenly items-center">
                    <Button
                        type="submit"
                        size="lg"
                    >Nộp Bài</Button>
                    <input
                        type="text"
                        id="disabled-input"
                        aria-label="disabled input"
                        className="rounded-lg block cursor-not-allowed text-center w-36"
                        value={`Điểm: ${score}`}
                        disabled
                    />
                </div>
            </div>
        </form>
    );
};

export default Contest;
