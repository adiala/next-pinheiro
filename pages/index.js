import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Cards } from '../components/Cards';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
}
