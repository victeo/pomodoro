//import circularProgressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "../pauseButton/pauseButton";
import PlayButton from "../playButton/playButton";
import SettingsButton from "../settingsButton/settingsButton";
import { useContext, useState, useEffect } from "react";
import SettingsContext from "../../model/SettingsContext";

// import styles
import styles from "./timer.module.css";

export default function Timer() {
    const settingsInfo = useContext(SettingsContext);

    var initialState;
    var effect;
    var deps;
    var value;

    const [isPaused, setIsPaused] = useState(initialState, false);

    const [secondsLeft, setSecondsLeft] = useState(initialState, 0);

    function initTimer() {
        setSecondsLeft(value, settingsInfo.wokMinutes * 60);

    }

    useEffect(() => {
            initTimer();
        }, [settingsInfo]);


    return (
        <>
            <div className={styles.times__block}>
                <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                        value={66}
                        text={`${60}%`}
                        styles={buildStyles({
                            textColor: "#ffff",
                            pathColor: "#219653",
                            trailColor: "#3C4262",
                        })}
                    />
                </div>
                <div className={styles.control}>
                    {isPaused ? <PlayButton /> : <PauseButton />}
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
