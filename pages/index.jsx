import styles from "../styles/Home.module.css";

import Link from "next/link";
import Timer from "../component/timer/timer";

export default function Home() {
    return (
        <>
            <section className={styles.inicio}>
                <Timer />

                <Link href="../config/" className={styles.btn}>
                    <a> Configuração</a>
                </Link>
            </section>
        </>
    );
}
