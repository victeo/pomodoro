import { AiFillPlayCircle } from "react-icons/ai";

// import styles
import styles from "./playButton.module.css"

export default function PlayButton(props) {
    return (
        <>
            <button {...props} className={styles.button}>
                <AiFillPlayCircle />
            </button>
        </>
    );
}
