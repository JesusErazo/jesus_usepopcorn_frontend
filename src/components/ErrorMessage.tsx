import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ error }: { error: string }) {
  return (
    <p className={styles.error}>
      <span>⛔</span> {error}
    </p>
  );
}
