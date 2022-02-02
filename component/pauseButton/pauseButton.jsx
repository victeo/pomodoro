import { BsPauseBtnFill } from "react-icons/bs";

//import styles
import styles from "./pauseButton.module.css"


export default function PauseButton(props) {
    return (
        <>
            <button {...props} className={styles.button}>
                <BsPauseBtnFill />
            </button>
        </>
    );
}
