import { BsFillPlayBtnFill } from "react-icons/bs";

// import styles
import styles from "./playButton.module.css"

export default function PlayButton(props) {
    return (
        <>
            <button {...props} className={styles.button}>
                <BsFillPlayBtnFill />
            </button>
        </>
    );
}
