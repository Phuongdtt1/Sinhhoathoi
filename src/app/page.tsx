import Link from "next/link";

export default function Home() {
    return (
        //<main className={styles.main}>
        <div>
            <ul>
                <li>
                    <Link href="/admin">
                        Đăng nhập
                    </Link>

                </li>
                <li>
                    <Link href="/Hinhanh">
                        Hoạt động
                    </Link>

                </li>
                <li>
                    <Link href="/Tracnghiem">
                        Trắc nghiệm
                    </Link>
                </li>
            </ul>
        </div>
    )
}