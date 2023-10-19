export default function CharacterInfo({ item }) {
  const status = item?.status && item?.status.slice(0, 16);
  return (
    <div className="list-item__info info hidden font-thin 2xl:block dark:text-slate-400 cursor-pointer">
      <span className={`status ${item?.id === "Dead" ? "red" : ""}`}></span>
      <span> {status && status.padEnd(18, ".")} </span>
    </div>
  );
}
