'use client';

import { Button } from 'flowbite-react';
import { FormEvent, ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useAtom } from 'jotai';
import { nameAtom, unitAtom } from '@/app/atoms';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import { QuizData, quizzes } from '@/app/resources/quizzes';
import Loading from '@/app/loading';

interface ContestProps {
    params: { index: number };
}

const getResultMessage = (percentageCorrect: number) => {
    if (percentageCorrect < 20) {
        return 'Kém!';
    } else if (percentageCorrect < 40) {
        return 'Yếu!';
    } else if (percentageCorrect < 60) {
        return 'Trung bình!';
    } else if (percentageCorrect < 80) {
        return 'Khá!';
    } else if (percentageCorrect < 100) {
        return 'Giỏi!';
    } else {
        return 'Xuất sắc!';
    }
};


function shuffleAnswer(array: { text: string, correct: boolean }[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Contest = ({ params }: ContestProps) => {
    const [quiz, setQuiz] = useState<QuizData | null>(null);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
    const [score, setScore] = useState(0);
    const [name] = useAtom(nameAtom);
    const [unit] = useAtom(unitAtom);
    const [fireworks, setFireworks] = useState<ReactElement[]>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);

    useEffect(() => {
        const shuffledQuiz = {
            ...quizzes[params.index],
            questions: quizzes[params.index].questions.map(question => ({
                ...question,
                answers: shuffleAnswer([...question.answers]),
            })),
        };
        setQuiz(shuffledQuiz);
    }, [params.index]);

    if (!quiz) return <Loading />;

    const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: answerIndex,
        });
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const unansweredQuestions: number[] = [];
        quiz.questions.forEach((_, index) => {
            if (selectedAnswers[index] === undefined) {
                unansweredQuestions.push(index + 1);
            }
        });

        if (unansweredQuestions.length > 0) {
            const questionList = unansweredQuestions.join(', ');
            toast.error(`Bạn chưa trả lời câu hỏi số: ${questionList}`);
            return;
        }

        setSubmitted(true);
        let newScore = 0;
        quiz.questions.forEach((question, index) => {
            if (selectedAnswers[index] !== undefined && question.answers[selectedAnswers[index]].correct) {
                newScore += 1;
            }
        });
        setScore(newScore);
        const totalQuestions = quiz.questions.length;
        const percentageCorrect = (newScore / totalQuestions) * 100;
        const resultMessage = getResultMessage(percentageCorrect);

        toast.success(`${resultMessage} Điểm số: ${newScore}/${totalQuestions}`);
        if (percentageCorrect == 100) {
            setFireworks(fireworks.concat(<Fireworks autorun={{ speed: 5, duration: 5000 }} />));
        }
    };

    const answerClassName = (questionIndex: number, answerIndex: number, answer: {
        text: string,
        correct: boolean
    }) => {
        if (!submitted) {
            return '';
        }
        if (answer.correct) {
            return 'text-green-500';
        } else if (selectedAnswers[questionIndex] === answerIndex) {
            return 'text-red-500';
        }
        return '';
    };

    return (
        <form
            name="quiz"
            className="container my-4 text-justify"
            onSubmit={handleSubmit}
        >
            <h1 className={`text-center ${quiz.metaData.color} font-bold text-2xl p-4 text-white`}>
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
                            className={`block indent-4 ${answerClassName(questionIndex, answerIndex, answer)}`}
                        >
                            <input
                                type="radio"
                                name={`question-${questionIndex}`}
                                value={answerIndex}
                                onChange={() => handleAnswerChange(questionIndex, answerIndex)}
                                checked={selectedAnswers[questionIndex] === answerIndex}
                                className={`mr-2 ${answerClassName(questionIndex, answerIndex, answer)}`}
                            />
                            {answer.text}
                        </label>
                    ))}
                </div>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-red-200 p-4 mt-4 gap-4">
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
                <div className="flex flex-col justify-center">
                    <div className="flex flex-row justify-evenly items-stretch">
                        <Button
                            type="submit"
                            size="lg"
                        >Nộp Bài</Button>
                        {fireworks}
                        <input
                            type="text"
                            id="disabled-input"
                            aria-label="disabled input"
                            className="rounded-lg block cursor-not-allowed text-center w-28"
                            value={`Điểm: ${score}/${quiz.questions.length}`}
                            disabled
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Contest;
