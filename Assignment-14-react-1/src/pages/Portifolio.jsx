import Header from "../components/Header";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import { FaPlus } from "react-icons/fa";

export default function Portifolio() {
  return (
    <section className="pg-zinc-50 mb-8 pt-28">
      <div className="container mx-auto">
        <Header
          title="portfolio component"
          color="blue-dark"
          bgColor="zinc-50"
        />
        <div className="mx-auto mt-10 grid max-w-[1200px] gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative cursor-pointer overflow-hidden rounded-xl">
            <img src={port1} className="w-full" alt="port 1" />
            <div className="overlay hover:bg-green-light/75 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 transition-all duration-500 hover:opacity-100">
              <FaPlus className="size-14 text-zinc-100" />
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-xl">
            <img src={port2} className="w-full" alt="port 2" />
            <div className="overlay hover:bg-green-light/75 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 transition-all duration-500 hover:opacity-100">
              <FaPlus className="size-14 text-zinc-100" />
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-xl">
            <img src={port3} className="w-full" alt="port 3" />
            <div className="overlay hover:bg-green-light/75 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 transition-all duration-500 hover:opacity-100">
              <FaPlus className="size-14 text-zinc-100" />
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-xl">
            <img src={port1} className="w-full" alt="port 1" />
            <div className="overlay hover:bg-green-light/75 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 transition-all duration-500 hover:opacity-100">
              <FaPlus className="size-14 text-zinc-100" />
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-xl">
            <img src={port2} className="w-full" alt="port 2" />
            <div className="overlay hover:bg-green-light/75 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 transition-all duration-500 hover:opacity-100">
              <FaPlus className="size-14 text-zinc-100" />
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-xl">
            <img src={port3} className="w-full" alt="port 3" />
            <div className="overlay hover:bg-green-light/75 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 transition-all duration-500 hover:opacity-100">
              <FaPlus className="size-14 text-zinc-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
