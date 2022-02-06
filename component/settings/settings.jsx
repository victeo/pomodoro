import ReactSlider from "react-slider";
import SettingsContext from "../../model/SettingsContext";
import { useContext } from "react";

// import styles
import styles from "./settings.module.css";
import BackButton from "../backButton/backButton";

export default function Settings() {
    const settingsInfo = useContext(SettingsContext);
    return (
        <>
            <label className={styles.WorkVer}>
                Work minutes:{settingsInfo.workMinutes}:00
            </label>
            <ReactSlider
                className={styles.sliderVer}
                thumbClassName={styles.thumb}
                trackClassName={"track"}
                value={settingsInfo.workMinutes}
                onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
                min={1}
                max={120}
            />

            <label className={styles.WorkAm}>
                Break minutes:{settingsInfo.breakMinutes}:00
            </label>
            <ReactSlider
                className={styles.sliderAm}
                thumbClassName={styles.thumb2}
                trackClassName={"track"}
                value={settingsInfo.breakMinutes}
                onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
                min={1}
                max={120}
            />
            <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
        </>
    );
}
