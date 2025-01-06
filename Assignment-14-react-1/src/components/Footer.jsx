import { CiGlobe } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-light text-center text-zinc-100">
      <div className="container mx-auto grid gap-10 px-5 py-20 md:grid-cols-3">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold uppercase tracking-wider">
            LOCATION
          </h2>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold uppercase tracking-wider">
            AROUND THE WEB
          </h2>
          <p>2215 John Daniel Drive</p>
          <ul className="flex items-center justify-center gap-5 pt-1">
            <li className="flex size-9 items-center justify-center rounded-full border-2">
              <FaFacebookF />
            </li>
            <li className="flex size-9 items-center justify-center rounded-full border-2">
              <FaTwitter />
            </li>
            <li className="flex size-9 items-center justify-center rounded-full border-2">
              <FaLinkedinIn />
            </li>
            <li className="flex size-9 items-center justify-center rounded-full border-2">
              <CiGlobe />
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold uppercase tracking-wider">
            ABOUT FREELANCER
          </h2>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <div className="bg-blue-dark px-5 py-5 font-semibold">
        Copyright &copy; Your Website {new Date().getFullYear()}
      </div>
    </footer>
  );
}
