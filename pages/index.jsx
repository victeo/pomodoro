import Link from "next/link";
import Timer from "../component/timer/timer";
import Settings from "../component/settings/settings";

// import styles
import styles from "../styles/Home.module.css";

//importe useStates <- Aqui começa a brincadeira

import { useState } from "react";
import SettingsContext from "../model/SettingsContext";

export default function Home() {
    var initialState = false;


    const [ShowSettings, setShowSettings] = useState(initialState, true); //no lugar da vírgula o vídeo coloca :
    const [workMinutes, setWorkMinutes] = useState(initialState, 45);
    const [breakMinutes, setBreakMinutes] = useState(initialState, 15);

    return (
        <>
            <section className={styles.inicio}>
                <SettingsContext.Provider value={{
                    ShowSettings,
                    setShowSettings,
                    workMinutes,
                    breakMinutes,
                    setWorkMinutes,
                    setBreakMinutes,
                }}>
                    {ShowSettings ? <Settings /> : <Timer />}
                </SettingsContext.Provider>
            </section>
        </>
    );
}
