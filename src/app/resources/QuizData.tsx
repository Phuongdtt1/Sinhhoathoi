interface QuizData {
    quizTitle: string;
    questions: {
        question: string;
        answers: {
            text: string;
            correct: boolean;
        }[];
    }[];
}

export const quizs: QuizData[] = [
    {
        'quizTitle': 'Cuộc thi tim hiểu Điều lệ Hội liên hiệp phụ nữ Việt nam khóa XVIII',
        'questions': [
            {
                'question': 'Theo Điều lệ Hội liên hiệp phụ nữ Việt Nam hiện hành thì Hội Liên hiệp Phụ nữ Việt Nam?',
                'answers': [
                    {
                        'text': 'là tổ chức chính trị – xã hội trong hệ thống chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát triển của phụ nữ và bình đẳng giới',
                        'correct': false,
                    },
                    {
                        'text': 'là tổ chức chính trị trong hệ thống chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát triển của phụ nữ và bình đẳng giới',
                        'correct': false,
                    },
                    {
                        'text': 'là tổ chức xã hội trong hệ thống chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát triển của phụ nữ và bình đẳng giới',
                        'correct': false,
                    },
                    {
                        'text': 'là tổ chức chính trị – xã hội nghề nghiệp trong hệ thống chính trị, đại diện cho quyền và lợi ích hợp pháp, chính đáng của các tầng lớp phụ nữ Việt Nam; phấn đấu vì sự phát triển của phụ nữ và bình đẳng giới',
                        'correct': true,
                    },
                ],
            },
            {
                'question': 'Theo Điều lệ Hội liên hiệp Phụ nữ Việt Nam thì Hội liên hiệp Phụ nữ Việt Nam là tổ chức gì?',
                'answers': [
                    {
                        'text': 'Chính trị',
                        'correct': false,
                    },
                    {
                        'text': 'Chính trị – xã hội',
                        'correct': true,
                    },
                    {
                        'text': 'Xã hội nghề nghiệp',
                        'correct': false,
                    },
                    {
                        'text': 'Xã hội',
                        'correct': false,
                    },
                ],
            },
            {
                'question': 'Đại hội đại biểu Phụ nữ toàn quốc lần thứ XIII dự kiến đến cuối nhiệm kỳ, Trung ương Hội sẽ đề xuất thành công ít nhất bao nhiêu chính sách, đề án và bao nhiêu chương trình?',
                'answers': [
                    {
                        'text': 'Ít nhất 05 chính sách, đề án và 02 chương trình.',
                        'correct': true,
                    },
                    {
                        'text': 'Ít nhất 04 chính sách, đề án và 03 chương trình.',
                        'correct': false,
                    },
                    {
                        'text': 'Ít nhất 03 chính sách, đề án và 02 chương trình.',
                        'correct': false,
                    },
                    {
                        'text': 'Ít nhất 02 chính sách, đề án và 05 chương trình.',
                        'correct': false,
                    },
                ],
            },
        ],
    },
];