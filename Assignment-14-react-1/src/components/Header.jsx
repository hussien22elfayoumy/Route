import { FaStar } from "react-icons/fa";

export default function Header({ title, color, bgColor }) {
  return (
    <header className={`flex flex-col items-center gap-5 text-${color}`}>
      <h1 className="text-4xl font-bold uppercase">{title}</h1>
      <div className={`relative h-1 w-[200px] bg-${color}`}>
        <FaStar
          className={`bg-${bgColor} absolute left-[50%] top-[50%] size-10 translate-x-[-50%] translate-y-[-50%] rounded-full p-2`}
        />
      </div>
    </header>
  );
}
