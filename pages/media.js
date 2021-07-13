import Head from "next/head";
import Link from "next/link";
import { React, useState, useEffect } from "react";
import { Footer } from "@components/Footer";
// import client from "client";
// import groq from "groq";

// export async function getStaticProps() {
//   const query = groq`
//   "posts" : *[_type == 'post'],
//   `;

//   const data = await client.fetch(query);

//   return {
//     props: {
//       posts: data.posts,
//     },
//   };
// }

export default function Media() {
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
    <div>
      <Head>
        <title>Pinheiro de Azevedo Advocacia | Media</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <nav
        className={`${
          navbar
            ? "fixed bg-primary shadow-md animate-fade-in-down"
            : "absolute bg-transparent"
        } top-0 z-50 flex w-screen max-w-full items-center`}
      >
        <Link href="/">
          <a className="inline-flex p-5 md:ml-10 ">
            <img
              src="pinheiro-logo.svg"
              className={`${navbar ? "h-8 w-8" : "h-12 w-12"}`}
            />
          </a>
        </Link>
      </nav>

      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div className="absolute z-10 p-10 font-bold text-white text-lg">
          <p className="text-4xl font-roboto">Pinheiro de Azevedo na Mídia</p>
        </div>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('court.jpg')" }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-80 bg-black"
          ></span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
