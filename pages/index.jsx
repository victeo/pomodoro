import Link from "next/link";
import Timer from "../component/timer/timer";
import Settings from "../component/settings/settings";

// import styles
import styles from "../styles/Home.module.css";

//importe useStates <- Aqui começa a brincadeira

import { useState } from "react";
import SettingsContext from "../model/SettingsContext";

export default function Home() {
    var initialState = true;


    const [ShowSettings, setShowSettings] = useState(initialState, true); //no lugar da vírgula o vídeo coloca :

    return (
        <>
            <section className={styles.inicio}>
                <SettingsContext.Provider value={{
                    workMinutes: 45,
                    breakMinutes: 15,
                }}>
                    {ShowSettings ? <Settings /> : <Timer />}
                </SettingsContext.Provider>
            </section>
        </>
    );
}
