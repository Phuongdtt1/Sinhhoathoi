import Link from 'next/link';

export default function Home() {
    return (
        <div className="container flex flex-col items-center justify-evenly h-96">
            <Link
                className="rounded-2xl bg-red-500 text-white p-5 w-52 text-center"
                href="/introduction"
            >
                Giới thiệu
            </Link>
            <Link
                className="rounded-2xl bg-purple-500 text-white p-5 w-52 text-center"
                href="/guide"
            >
                Hướng dẫn thi trắc nghiệm
            </Link>
        </div>
    );

}