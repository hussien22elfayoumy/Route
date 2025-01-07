import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed left-0 right-0 top-0 z-10 bg-blue-light text-zinc-100">
      <nav className="container mx-auto flex items-center justify-between p-5">
        <Link to="/" className="z-10 text-3xl font-bold uppercase">
          start frame work
        </Link>
        <ul
          className={`absolute left-0 right-0 top-full transition-all ${isOpen ? "translate-x-0" : "translate-x-[-100%]"} mb-0 items-center gap-8 space-y-10 bg-blue-light p-5 text-lg font-semibold md:static md:flex md:translate-x-0 md:space-y-0 md:py-3`}
        >
          <li>
            <NavLink to="about" className="p-3">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="portifolio" className="p-3">
              Portifolio
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className="p-3">
              contact
            </NavLink>
          </li>
        </ul>
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <IoMenu className="size-10" />
        </button>
      </nav>
    </div>
  );
}
