// Presentational component or low level component
export default function Item({ title, plot, year }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{plot}</p>
      <p>{year}</p>
    </>
  );
}
