import styles from "../styles/form.module.scss"

export default function Form() {
  return <form className={styles.form}>
    <div>
        <label htmlFor="number">Paragraphs</label>
        <input id="number" type="number" />
    </div>
    <div >
        <label htmlFor="type">Include HTML</label>
        <select  id="type">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
    </div>
  </form>;
}
