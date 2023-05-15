import Navlinks from "./Navlinks";
import Theme from "./Theme";
import Mobilenav from "./Mobilenav";
import Session from "./Session";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

export default function Navbar() {
  return (
    <>
      <nav className=" dark:border-gray-700 border-gray-200 dark:bg-gray-900 bg-white border-b-2 fixed w-screen top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <FiBookOpen className="text-2xl mr-2" />

            <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white sm:block hidden font-mono">
              Quill
            </h1>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-4">
              Beta
            </span>
          </Link>

          <div className="flex items-center md:order-2">
            <Theme />
            <Session />
            <Mobilenav />
          </div>
          <Navlinks />
        </div>
      </nav>
    </>
  );
}
