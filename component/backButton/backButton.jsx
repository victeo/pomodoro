import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

//import styles
import styles from './backButton.module.css'

export default function BackButton(props) {
    return (
        <button {...props} className={styles.btn}>
           <BsFillArrowLeftCircleFill /> Back
        </button>
    );
}


