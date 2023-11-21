export default function CharaterName({ item }) {
  return (
    <h3 className="name whitespace-nowrap overflow-hidden font-medium xl:text-sm cursor-pointer min-w-fit text-slate-600 dark:text-slate-300">
      <div>{item?.name}</div>
    </h3>
  );
}
