import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className={styles.ctas}>
          <Link className={styles.secondary} href="/usingUtil">
            Use util function
          </Link>
          <Link className={styles.secondary} href="/usingClient">
            Use client
          </Link>
          <Link className={styles.secondary} href="/usingHook">
            Use custom hook
          </Link>
        </div>
      </main>
    </div>
  );
}
