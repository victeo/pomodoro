import { IoSettings } from "react-icons/io5";

// import styles
import styles from "./settingsButton.module.css";

export default function SettingsButton(props) {
    return (
        <>
            <button {...props} className={styles.button}>
                <IoSettings /> <h6>Configurações</h6>
            </button>
        </>
    );
}
