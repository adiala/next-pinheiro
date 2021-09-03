import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Atuação", href: "#atuacao" },
  { name: "Equipe", href: "#equipe" },
  { name: "Contato", href: "#contato" },
];

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="top-0 absolute z-50 flex items-center justify-between w-full px-2 py-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="inline-flex items-center p-3 lg:ml-5 ">
                <img
                  src="pinheiro-logo.svg"
                  className="fill-current h-12 w-12"
                  alt="Logo Pinheiro de Azevedo"
                />
              </a>
            </Link>
            <button
              className="cursor-pointer inline-flex p-3 rounded lg:hidden text-white ml-auto outline-none focus:outline-none"
              type="button"
              onClick={handleClick}
            >
              <svg
                className="w-8 h-8 self-center"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              active ? "" : "hidden"
            }    lg:inline-flex lg:flex-grow lg:w-auto lg:bg-transparent lg:shadow-none bg-white text-gray-700 rounded-sm shadow-lg w-full`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center lg:divide-y-0 items-start justify-items-end flex flex-col lg:h-auto divide-y divide-gray-100">
              {navigation.map((item, index) => (
                <Link key={index} href={item.href} scroll={false} replace>
                  <a className="lg:inline-flex lg:w-auto lg:text-white lg:font-bold lg:text-base text-sm w-full px-3 py-2 items-center justify-center hover:bg-gray-600 hover:text-white">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
