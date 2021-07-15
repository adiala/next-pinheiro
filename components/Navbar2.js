import { useState } from "react";
import Link from "next/link";

export default function Navbar2() {
  const [navbar, setNavbar] = useState(false);

  if (typeof window !== "undefined") {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }
  return (
    <>
      <nav
        className={`${
          navbar ? "fixed animate-fade-in-down" : ""
        } flex justify-center bg-primary shadow-medium top-0 w-screen max-w-full`}
      >
        <Link href="/">
          <a className="inline-flex self-center p-4">
            <img
              src="/pinheiro-logo.svg"
              className={`${navbar ? "h-12 w-12" : "h-12 w-12"}`}
            />
          </a>
        </Link>
      </nav>
    </>
  );
}
