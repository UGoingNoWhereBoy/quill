import Link from "next/link";
import { BsDiscord, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contacts = [
  {
    title: "Github",
    icon: <BsGithub />,
    href: "https://github.com/UGoingNoWhereBoy",
  },
  {
    title: "LinkedIn",
    icon: <BsLinkedin />,
    href: "https://www.linkedin.com/in/eyad-zoubi-93327b244/",
  },
  {
    title: "Discord",
    icon: <BsDiscord />,
    href: "https://discordapp.com/users/UGoingNoWhereBoy#1736",
  },
  {
    title: "Facebook",
    icon: <BsFacebook />,
    href: "https://web.facebook.com/UGoingNoWhereBoy/",
  },
];

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold  sm:text-xl">Eyad Zoubi</h3>
          </div>

          <div className="  sm:shrink-0">
            <img
              alt="Eyad Z"
              src="https://media.licdn.com/dms/image/D4E03AQFkfKXRVwMEiA/profile-displayphoto-shrink_800_800/0/1682644952935?e=1689206400&v=beta&t=OnS_Ico2iilR-aMLiZFnOGeJk-1OFv00doHP269Auyg"
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          {Contacts.map((i, k) => (
            <Link
              href={i.href}
              key={k}
              target="_blank"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {i.icon}
              </span>
            </Link>
          ))}
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">
              {" "}
              Nextjs, TailwindCSS, Python sometimes
            </dt>
            <dd className="text-xs text-gray-500">Current stack</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default page;
