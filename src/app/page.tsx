import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
    return (
        //<main className={styles.main}>
        <div>
            <ul>
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