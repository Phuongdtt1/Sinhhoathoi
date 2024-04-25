import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/introduction">
                        Giới thiệu
                    </Link>
                </li>
                <li>
                    <Link href="/activity">
                        Hoạt động
                    </Link>
                </li>
                <li>
                    <Link href="/quiz">
                        Trắc nghiệm
                    </Link>
                </li>
                <li>
                    <Link href="/image">
                        Hình ảnh
                    </Link>
                </li>
            </ul>
        </div>
    );
}