import Link from "next/link";

export default function Home() {
    return (
        //<main className={styles.main}>
        <div>
            <ul>
                <li>
                    <Link href="/home">
                        Giới thiệu
                    </Link>

                </li>
                <li>
                    <Link href="/image">
                        Hoạt động
                    </Link>

                </li>
                <li>
                    <Link href="/quiz">
                        Trắc nghiệm
                    </Link>
                </li>
            </ul>
        </div>
    )
}