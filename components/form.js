import styles from "../styles/form.module.scss";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getText } from "@/slices/textSlice";

export default function Form() {
  const dispatch = useDispatch();
  const [textOptions, setTextOptions] = useState({
    count:2,
    format:"text"
  });
  const handleChangeCount = (e) => {
    setTextOptions({ ...textOptions, count: e.target.value });
  };
  const handleChangeFormat = (e) => {
    setTextOptions({ ...textOptions, format: e.target.value });
  };
  useEffect(() => {
    dispatch(getText(textOptions.count, textOptions.format));
  }, [dispatch, textOptions]);
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="count">Paragraphs</label>
        <input
          onChange={handleChangeCount}
          name="count"
          id="count"
          type="number"
        />
      </div>
      <div>
        <label htmlFor="format">Format</label>
        <select onChange={handleChangeFormat} name="format" id="format">
          <option value="yes">Text</option>
          <option value="no">HTML</option>
        </select>
      </div>
    </form>
  );
}
