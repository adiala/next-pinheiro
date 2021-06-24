import Head from 'next/head';
import { Navbar } from '@components/Navbar';
import { Hero } from '@components/Hero';
import { Cards } from '@components/Cards';
import { Team } from '@components/Team';
import { Contact } from '@components/Contact';
import { Footer } from '@components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pinheiro de Azevedo Advocacia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
      <Cards />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
