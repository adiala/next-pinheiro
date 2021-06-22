import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  {name: 'Atuação', href: '#atuacao'},
  {name: 'Equipe', href: '#equipe'},
  {name: 'Contato', href: '#contato'}
]

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='top-0 absolute z-50 flex items-center justify-between w-full px-2 py-3'>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href='/'>
              <a className='inline-flex items-center p-3 ml-5 '>
                <img src='pinheiro-logo.svg' className='fill-current h-12 w-12 mr-2' />
              </a>
            </Link>
        <button
          className='cursor-pointer inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        </div>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            {navigation.map((item) => (
              <Link href={item.href}>
              <a key={item.name} className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">{item.name}</a>
              </Link>
            ))}            
          </div>
        </div>
      </div>
      </nav>
    </>
  );
};