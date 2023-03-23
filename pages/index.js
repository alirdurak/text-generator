import Title from "@/components/title";
import Form from "../components/form";
import Output from "@/components/output";
import styles from "../styles/index.module.scss";
export default function Home() {
  return (
    <main className={styles.main}>
      <Title />
      <Form />
      <Output />
    </main>
  );
}
