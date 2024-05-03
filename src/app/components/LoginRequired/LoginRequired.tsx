import Link from 'next/link';

export function LoginRequired() {
    return (
        <div className="container h-36 flex items-center justify-center">
            <p className="text-4xl text-center text-red-500 ">
                Vui lòng đăng nhập tại {''}
                <Link href="/">
                    <span className="inline-block text-white p-4 rounded-2xl bg-blue-500">Đây</span>
                </Link>
            </p>
        </div>
    );
}