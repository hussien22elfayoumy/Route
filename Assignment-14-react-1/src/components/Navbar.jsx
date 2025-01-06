import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-blue-light fixed left-0 right-0 top-0 z-10 text-zinc-100">
      <nav className="container mx-auto flex items-center justify-between p-5">
        <Link to="/" className="text-3xl font-bold uppercase">
          start frame work
        </Link>
        <ul className="mb-0 flex items-center gap-8 text-lg font-semibold">
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
      </nav>
    </div>
  );
}
