import Link from "next/link";
import Timer from "../component/timer/timer";
import Settings from "../component/settings/settings";

// import styles
import styles from "../styles/Home.module.css";

//importe useStates <- Aqui começa a brincadeira

import { useState } from "react";

export default function Home() {


    var initialState = false;

    const [ShowSettings, setShowSettings] = useState(initialState, true); //no lugar da vírgula o vídeo coloca :

    return (
        <>
            <section className={styles.inicio}>
                {ShowSettings ? <Settings /> : <Timer />}

                <Link href="../config/" className={styles.btn}>
                    <a> Configuração</a>
                </Link>
            </section>
        </>
    );
}
