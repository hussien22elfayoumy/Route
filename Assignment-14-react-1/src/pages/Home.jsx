import { FaStar } from "react-icons/fa";
import heroImage from "../assets/heroImage.svg";
export default function Home() {
  return (
    <section className="bg-green-light text-zinc-100">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-5 py-28">
          <div className="mb-10 w-[250px]">
            <img src={heroImage} className="w-full" alt="hero image" />
          </div>

          <h1 className="text-4xl font-bold uppercase">start Framework</h1>
          <div className="relative h-1 w-[50%] bg-zinc-100">
            <FaStar className="bg-green-light absolute left-[50%] top-[50%] size-8 translate-x-[-50%] translate-y-[-50%] rounded-full p-1" />
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </section>
  );
}
