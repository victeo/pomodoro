//import circularProgressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "../pauseButton/pauseButton";
import PlayButton from "../playButton/playButton";
import SettingsButton from "../settingsButton/settingsButton";

// import styles
import styles from "./timer.module.css";

const verde = "#219653";
const amarelo = " #F2C94C";

export default function Timer() {
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
                    <PlayButton />
                    <PauseButton />
                </div>
            </div>
            <div>
                <SettingsButton />
            </div>
        </>
    );
}
