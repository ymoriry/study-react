import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/src/components/Header/Header.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <header className={styles.header}>
        <Link href="/">
            <p className={styles.link}>Index</p>
        </Link>
        <Link href="/about">
            <p className={styles.link}>About</p>
        </Link>
    </header>
  );
}