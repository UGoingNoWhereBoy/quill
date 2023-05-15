import Link from "next/link";
import { RxVercelLogo } from "react-icons/rx";
import { TbBrandNextjs } from "react-icons/tb";
import Brandsvg from "./Brandsvg";
import { FiBookOpen } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 ml-8">
            <FiBookOpen className="text-2xl mr-2 mt-2" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center">
          <TbBrandNextjs className="text-3xl mr-4 mb-2" />
          <RxVercelLogo className="text-3xl" />
        </div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            Quill
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
