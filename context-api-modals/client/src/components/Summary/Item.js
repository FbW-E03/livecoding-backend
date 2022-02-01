import styles from "./Item.module.css";

// Presentational component or low level component
export default function Item({ title, plot, year }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {title}, <span>{year}</span>
      </p>
      <p className={styles.plot}>{plot}</p>
    </div>
  );
}
