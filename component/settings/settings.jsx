import ReactSlider from "react-slider";
import SettingsContext from "../../model/SettingsContext";
import { useContext } from "react";

// import styles
import styles from './settings.module.css'


export default function Settings() {
    const settingsInfo = useContext(SettingsContext);
    return (
        <>
            <label className={styles.WorkAm}>Work minutes:</label>
            <ReactSlider
            className={styles.sliderAm}
            thumbClassName={styles.thumb}
            trackClassName={'track'}
            value={settingsInfo.worMinutes}
            min={1}
            max={120}
            />

            <label className={styles.WorkVer}>Break minutes:{settingsInfo.breakMinutes}</label>
            <ReactSlider
            className={styles.sliderVer}
            thumbClassName={styles.thumb2}
            trackClassName={'track'}
            value={settingsInfo.breakMinutes}
            min={1}
            max={120}
            />
        </>
    );
}
