import styles from "../styles/output.module.scss";
import { useSelector } from "react-redux";


export default function Output() {
  const text = useSelector(state=> state.text.text)
  return (
    <div className={styles.output}>
      <p>{text}</p>
    </div>
  );
}
