export default function HeaderTitle({ title }) {
  return (
    <div className="  w-full relative items-center h-20 hidden lg:flex ">
      <h2 className="font-bold pl-2 flex items-center text-gray-400  ">
        {title}
      </h2>
    </div>
  );
}
