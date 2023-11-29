export default function HeaderTitle({ title }) {
  return (
    <div className="  w-full relative self-center items-center h-20 hidden lg:flex ">
      <h2 className="font-bold pl-2 pt-2 self-center flex items-center text-gray-400  ">
        {title}
      </h2>
    </div>
  );
}
