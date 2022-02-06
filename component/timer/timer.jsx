//import circularProgressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "../pauseButton/pauseButton";
import PlayButton from "../playButton/playButton";
import SettingsButton from "../settingsButton/settingsButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "../../model/SettingsContext";

// import styles
import styles from "./timer.module.css";

const verde = '#f54e4e';
const amarelo = '#4aec8c';


export default function Timer() {
    const settingsInfo = useContext(SettingsContext);

    const [isPaused, setIsPaused] = useState(true);

    const [mode, setMode] = useState("work"); //work/break/null

    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    useEffect(() => {
        function switchMode() {
            const nextMode = modeRef.current === "work" ? "break" : "work";
            const nextSeconds =
                (nextMode === "work"
                    ? settingsInfo.workMinutes
                    : settingsInfo.breakMinutes) * 60;

            setMode(nextMode);
            modeRef.current = nextMode;

            setSecondsLeft(nextSeconds);
            secondsLeftRef.current = nextSeconds;
        }

        secondsLeftRef.current = settingsInfo.workMinutes * 60;
        setSecondsLeft(secondsLeftRef.current);

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode();
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [settingsInfo]);

    const totalSeconds =
        mode === "work"
            ? settingsInfo.workMinutes * 60
            : settingsInfo.breakMinutes * 60;
    const percentage = Math.round((secondsLeft / totalSeconds) * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = "0" + seconds;

    return (
        <>
            <div className={styles.times__block}>
                <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                        value={percentage}
                        text={minutes + ":" + seconds}
                        styles={buildStyles({
                            textColor: "#ffff",
                            pathColor:mode === 'work' ? verde : amarelo,
                            trailColor: "#3C4262",
                        })}
                    />
                </div>
                <div className={styles.control}>
                    {isPaused ? (
                        <PlayButton
                            onClick={() => {
                                setIsPaused(false);
                                isPausedRef.current = false;
                            }}
                        />
                    ) : (
                        <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }}/>
                    )}
                </div>
            </div>
            <div>
                <SettingsButton
                    onClick={() => settingsInfo.setShowSettings(true)}
                />
            </div>
        </>
    );
}
