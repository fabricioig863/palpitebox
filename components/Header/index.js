import React from 'react';
import Link from 'next/link';
import DarkMode from '../DarkMode/index';

const Header = () => {
  return (
    <>
      <div className='bg-gray-200 p-4 shadow-lg dark:bg-gray-500 transition duration-500'>
        <DarkMode />
        <div className='container mx-auto'>
          <Link href="/">
            <a>
              <img className='mx-auto' src="/logo-palpitebox.png" alt='Palpitebox' />
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-gray-300 p-4 shadow-lg text-center dark:bg-gray-400">
        <Link href='/sobre'>
          <a className='px-2 hover:underline dark:text-white font-bold'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='px-2 hover:underline dark:text-white font-bold'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='px-2 hover:underline dark:text-white font-bold'>Pesquisa</a>
        </Link>
      </div>
    </>
  )
}

export default Header;