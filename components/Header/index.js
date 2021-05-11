import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className='bg-gray-200 p-4 shadow-lg'>
        <div className='container mx-auto'>
          <img className='mx-auto' src="/logo-palpitebox.png" alt='Palpitebox' />
        </div>
      </div>
      <div className="bg-gray-300 p-4 shadow-lg text-center">
        <Link href='/sobre'>
          <a className='px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='px-2 hover:underline'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='px-2 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </>
  )
}

export default Header;